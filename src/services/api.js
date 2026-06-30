import { supabase } from '../lib/supabase.js';

export const apiService = {
  async submitContactMessage(name, email, message) {
    if (!supabase) {
      // Fallback — caller should open mailto: link
      return { success: false, fallback: 'mailto' };
    }
    const { data, error } = await supabase
      .from('contact_messages')
      .insert([{ name, email, message, status: 'unread' }])
      .select();
    if (error) return { success: false, error: error.message };
    return { success: true, data };
  },
};

export default apiService;
