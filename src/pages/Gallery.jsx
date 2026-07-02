import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavbar } from '../contexts/NavbarContext.jsx';
import { FaHeart, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { FaVideo, FaImages } from 'react-icons/fa6';
import apiService from '../services/api.js';

export default function Gallery() {
  const { hideNavbar, showNavbar } = useNavbar();
  const [activities, setActivities] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selected, setSelected] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [comments, setComments] = useState([]);
  const [loadingComments, setLoadingComments] = useState(false);
  const [commentForm, setCommentForm] = useState({ name: '', content: '' });
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => { fetchActivities(); }, []);

  useEffect(() => {
    if (selected) {
      hideNavbar();
      fetchComments(selected.id);
      setCurrentSlide(0);
    } else {
      showNavbar();
      setComments([]);
    }
    return () => showNavbar();
  }, [selected]);

  const fetchActivities = async () => {
    setIsLoading(true);
    const data = await apiService.getGallery();
    setActivities(data.map((item) => ({ ...item, src: item.media_urls?.[0] || '' })));
    setIsLoading(false);
  };

  const fetchComments = async (id) => {
    setLoadingComments(true);
    const data = await apiService.getGalleryComments(id);
    setComments(data);
    setLoadingComments(false);
  };

  const handleLike = async (e, activity) => {
    e.stopPropagation();
    setActivities((arr) => arr.map((a) => a.id === activity.id ? { ...a, likes: (a.likes || 0) + 1 } : a));
    if (selected?.id === activity.id) setSelected((p) => ({ ...p, likes: (p.likes || 0) + 1 }));
    await apiService.likeGalleryItem(activity.id);
  };

  const handlePostComment = async (e) => {
    e.preventDefault();
    if (!commentForm.name.trim() || !commentForm.content.trim()) return;
    setSubmitting(true);
    const { success } = await apiService.postGalleryComment(selected.id, commentForm.name, commentForm.content);
    if (success) {
      setComments([{ name: commentForm.name, content: commentForm.content, created_at: new Date().toISOString(), id: Date.now() }, ...comments]);
      setCommentForm({ name: '', content: '' });
    }
    setSubmitting(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.5 }}
      className="relative z-10 max-w-7xl mx-auto pt-32 pb-20 px-4"
    >
      <h1 className="font-grotesk font-bold text-3xl md:text-6xl uppercase mb-8 text-center">
        <span className="text-primary">Activity</span> Gallery
      </h1>

      {isLoading && (
        <div className="flex justify-center py-20">
          <div className="w-12 h-12 border-neo border-border bg-yellow animate-spin" style={{ animationDuration: '0.8s' }} />
        </div>
      )}

      {!isLoading && (
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {activities.map((a) => {
            const isVideo = a.type === 'video';
            const isMulti = a.media_urls?.length > 1;
            return (
              <div
                key={a.id}
                onClick={() => setSelected(a)}
                className="break-inside-avoid cursor-pointer border-neo border-border bg-white shadow-neoSm hover:shadow-neo hover:-translate-y-1 transition-all relative"
              >
                {isVideo ? (
                  <video src={a.src} muted loop playsInline autoPlay className="w-full h-auto object-cover" />
                ) : (
                  <img src={a.src} alt={a.title} loading="lazy" className="w-full h-auto object-cover" />
                )}
                <div className="p-3 flex items-center justify-between border-t-neoSm border-border bg-bg">
                  <div className="flex items-center gap-2 text-sm font-mono">
                    <FaHeart className="text-pink" /> <span>{a.likes || 0}</span>
                  </div>
                  <div className="font-grotesk font-bold text-xs uppercase truncate ml-2 text-text/80">{a.title}</div>
                  {(isMulti || isVideo) && (
                    <div className="ml-2 text-text/60 text-sm">
                      {isVideo ? <FaVideo /> : isMulti ? <FaImages /> : null}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}

      {!isLoading && activities.length === 0 && (
        <div className="text-center py-20 font-mono text-text/60">No activities yet. Check back soon.</div>
      )}

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
            className="fixed inset-0 z-[80] flex items-center justify-center p-4 bg-black/90"
          >
            <motion.div
              initial={{ scale: 0.92 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.92 }}
              transition={{ type: 'spring', stiffness: 260, damping: 22 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-5xl bg-white border-neo border-border shadow-neo flex flex-col md:flex-row h-full md:h-[80vh]"
            >
              {/* Media */}
              <div className="w-full md:w-3/5 bg-black flex items-center justify-center relative h-1/2 md:h-full">
                {(() => {
                  const files = selected.media_urls?.length ? selected.media_urls : [selected.src];
                  const cur = files[currentSlide] || files[0];
                  const isVid = cur.match(/\.(mp4|webm|ogg)$/i) || (selected.type === 'video' && files.length === 1);
                  return (
                    <>
                      {isVid ? <video src={cur} controls autoPlay className="max-h-full max-w-full object-contain" /> : <img src={cur} alt={selected.title} className="max-h-full max-w-full object-contain" />}
                      {files.length > 1 && (
                        <>
                          <button onClick={(e) => { e.stopPropagation(); setCurrentSlide((p) => p === 0 ? files.length - 1 : p - 1); }} className="absolute left-4 top-1/2 -translate-y-1/2 px-3 py-2 bg-yellow border-neoSm border-border shadow-neoSm text-text"><FaChevronLeft /></button>
                          <button onClick={(e) => { e.stopPropagation(); setCurrentSlide((p) => p === files.length - 1 ? 0 : p + 1); }} className="absolute right-4 top-1/2 -translate-y-1/2 px-3 py-2 bg-yellow border-neoSm border-border shadow-neoSm text-text"><FaChevronRight /></button>
                          <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                            {files.map((_, i) => (
                              <div key={i} className={`w-2 h-2 transition-all ${currentSlide === i ? 'bg-yellow w-6 border-neoSm border-border' : 'bg-white/50'}`} />
                            ))}
                          </div>
                        </>
                      )}
                    </>
                  );
                })()}
                <button onClick={() => setSelected(null)} className="absolute top-3 left-3 px-2 py-1 bg-pink text-white border-neoSm border-border shadow-neoSm md:hidden">{'\u2715'}</button>
              </div>

              {/* Info + Comments */}
              <div className="w-full md:w-2/5 flex flex-col border-l-neoSm border-border">
                <div className="p-4 border-b-neoSm border-border bg-bg">
                  <span className="font-mono text-xs uppercase px-2 py-1 border-neoSm border-border bg-yellow shadow-neoSm">{selected.date}</span>
                  <h2 className="font-grotesk font-bold text-lg mt-2">{selected.title}</h2>
                  <p className="text-sm text-text/80 mt-1">{selected.description}</p>
                </div>

                <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-bg">
                  {loadingComments ? (
                    <div className="flex justify-center"><div className="w-6 h-6 border-neoSm border-border bg-pink animate-spin" style={{ animationDuration: '0.8s' }} /></div>
                  ) : comments.length > 0 ? (
                    comments.map((c) => (
                      <div key={c.id} className="flex gap-3">
                        <div className="w-8 h-8 flex items-center justify-center bg-primary text-black font-bold text-xs border-neoSm border-border shadow-neoSm shrink-0">
                          {c.name.charAt(0).toUpperCase()}
                        </div>
                        <div>
                          <div className="p-3 bg-white border-neoSm border-border shadow-neoSm">
                            <div className="font-mono text-xs font-bold">{c.name}</div>
                            <div className="text-sm mt-1">{c.content}</div>
                          </div>
                          <div className="text-[10px] font-mono text-text/50 ml-1">{new Date(c.created_at).toLocaleDateString()}</div>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="text-center py-6 font-mono text-sm text-text/60">No comments yet — be the first.</div>
                  )}
                </div>

                <div className="p-4 border-t-neoSm border-border bg-white">
                  <button onClick={(e) => handleLike(e, selected)} className="flex items-center gap-2 mb-3 text-text hover:text-pink transition-colors">
                    <FaHeart className={selected.likes > 0 ? 'text-pink' : ''} />
                    <span className="font-mono text-sm">{selected.likes || 0} Likes</span>
                  </button>
                  <form onSubmit={handlePostComment} className="flex flex-col gap-2">
                    <div className="flex gap-2">
                      <input type="text" placeholder="Name" value={commentForm.name} onChange={(e) => setCommentForm({ ...commentForm, name: e.target.value })} className="w-1/3 px-3 py-2 border-neoSm border-border bg-bg font-mono text-sm focus:outline-none focus:shadow-neoSm" required />
                      <input type="text" placeholder="Comment..." value={commentForm.content} onChange={(e) => setCommentForm({ ...commentForm, content: e.target.value })} className="flex-1 px-3 py-2 border-neoSm border-border bg-bg font-mono text-sm focus:outline-none focus:shadow-neoSm" required />
                    </div>
                    <button type="submit" disabled={submitting} className="self-end px-3 py-1 border-neoSm border-border bg-yellow shadow-neoSm font-mono text-xs uppercase disabled:opacity-50">
                      {submitting ? 'Posting…' : 'Post'}
                    </button>
                  </form>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
