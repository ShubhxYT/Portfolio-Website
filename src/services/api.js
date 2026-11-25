import { supabase } from '../lib/supabase.js';

export const apiService = {
  // Contact — Commit 6
  async submitContactMessage(name, email, message) {
    if (!supabase) return { success: false, fallback: 'mailto' };
    const { data, error } = await supabase
      .from('contact_messages')
      .insert([{ name, email, message, status: 'unread' }])
      .select();
    if (error) return { success: false, error: error.message };
    return { success: true, data };
  },

  // Gallery
  async getGallery() {
    if (!supabase) return [];
    try {
      const query = supabase
        .from('gallery')
        .select('*')
        .order('date', { ascending: false });
      const timeout = new Promise((_, reject) => setTimeout(() => reject(new Error('gallery-timeout')), 5000));
      const { data, error } = await Promise.race([query, timeout]);
      if (error) { console.error('getGallery:', error); return []; }
      return data || [];
    } catch (err) {
      console.error('getGallery:', err);
      return [];
    }
  },

  async getGalleryComments(galleryId) {
    if (!supabase) return [];
    const { data, error } = await supabase
      .from('gallery_comments')
      .select('*')
      .eq('gallery_id', galleryId)
      .order('created_at', { ascending: false });
    if (error) { console.error('getGalleryComments:', error); return []; }
    return data || [];
  },

  async postGalleryComment(galleryId, name, content) {
    if (!supabase) return { success: false, fallback: true };
    const { data, error } = await supabase
      .from('gallery_comments')
      .insert([{ gallery_id: galleryId, name, content }])
      .select();
    if (error) return { success: false, error: error.message };
    return { success: true, data };
  },

  async likeGalleryItem(galleryId) {
    if (!supabase) return { success: false };
    const { error } = await supabase.rpc('increment_gallery_likes', { row_id: galleryId });
    if (error) { console.error('likeGalleryItem:', error); return { success: false }; }
    return { success: true };
  },
};

export default apiService;
