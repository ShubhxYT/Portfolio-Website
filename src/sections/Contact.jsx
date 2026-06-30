import { useState } from 'react';
import { FaGithub, FaLinkedin, FaGlobe, FaEnvelope, FaPhone, FaCoffee } from 'react-icons/fa';
import apiService from '../services/api.js';
import { contactInfo, COFFEE_LINK } from '../lib/data.js';

function Card({ icon: Icon, label, value, href }) {
  return (
    <a
      href={href}
      target={href.startsWith('mailto:') || href.startsWith('tel:') ? undefined : '_blank'}
      rel="noopener noreferrer"
      className="group flex items-center gap-4 p-4 border-neo border-border bg-white shadow-neoSm hover:shadow-neo hover:-translate-y-0.5 transition-all"
    >
      <div className="w-12 h-12 flex items-center justify-center bg-yellow border-neoSm border-border shadow-neoSm">
        <Icon className="text-xl text-text" />
      </div>
      <div>
        <div className="font-mono text-xs uppercase text-text/60">{label}</div>
        <div className="font-grotesk font-bold text-sm text-text break-all">{value}</div>
      </div>
    </a>
  );
}

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) return;
    setStatus('loading');
    const result = await apiService.submitContactMessage(form.name, form.email, form.message);
    if (result.success) {
      setStatus('success');
      setForm({ name: '', email: '', message: '' });
      setTimeout(() => setStatus(null), 4000);
    } else if (result.fallback === 'mailto') {
      const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
      window.location.href = `mailto:${contactInfo.email}?subject=Portfolio%20Message&body=${body}`;
      setStatus(null);
    } else {
      setStatus('error');
      setTimeout(() => setStatus(null), 4000);
    }
  };

  return (
    <section id="contact" className="relative z-10 max-w-7xl mx-auto px-4 py-16">
      <h2 className="font-grotesk font-bold text-3xl md:text-4xl uppercase mb-8 inline-block border-b-neo border-border pb-2">
        Contact
      </h2>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 border-neo border-border bg-white shadow-neo flex flex-col gap-4">
          <div>
            <label className="font-mono text-xs uppercase text-text/60 block mb-1">Name</label>
            <input
              type="text"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
              className="w-full px-3 py-2 border-neoSm border-border bg-bg text-text font-mono text-sm focus:outline-none focus:shadow-neoSm"
            />
          </div>
          <div>
            <label className="font-mono text-xs uppercase text-text/60 block mb-1">Email</label>
            <input
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
              className="w-full px-3 py-2 border-neoSm border-border bg-bg text-text font-mono text-sm focus:outline-none focus:shadow-neoSm"
            />
          </div>
          <div>
            <label className="font-mono text-xs uppercase text-text/60 block mb-1">Message</label>
            <textarea
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              required
              rows={5}
              className="w-full px-3 py-2 border-neoSm border-border bg-bg text-text font-mono text-sm focus:outline-none focus:shadow-neoSm resize-y"
            />
          </div>
          <button
            type="submit"
            disabled={status === 'loading'}
            className="mt-2 px-4 py-3 border-neo border-border bg-yellow shadow-neoSm hover:shadow-neo hover:-translate-y-0.5 disabled:opacity-60 font-grotesk font-bold uppercase text-sm tracking-wider transition-all"
          >
            {status === 'loading' ? 'Sending…' : 'Send Message'}
          </button>
          {status === 'success' && (
            <p className="font-mono text-sm text-primary" role="status">{'\u2713'} Message sent! I&apos;ll reply soon.</p>
          )}
          {status === 'error' && (
            <p className="font-mono text-sm text-pink" role="status">{'\u2717'} Failed. Email me directly at {contactInfo.email}.</p>
          )}
        </form>

        {/* Contact cards */}
        <div className="flex flex-col gap-3">
          <Card icon={FaGithub} label="GitHub" value="ShubhxYT" href={contactInfo.github} />
          <Card icon={FaLinkedin} label="LinkedIn" value="shubh-somani" href={contactInfo.linkedin} />
          <Card icon={FaGlobe} label="Website" value="shubhsomani.tech" href={contactInfo.website} />
          <Card icon={FaEnvelope} label="Email" value={contactInfo.email} href={`mailto:${contactInfo.email}`} />
          <Card icon={FaPhone} label="Phone" value={contactInfo.phone} href={`tel:${contactInfo.phone}`} />

          {/* Coffee CTA — placeholder link, user replaces later */}
          <a
            href={COFFEE_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 mt-2 p-4 border-neo border-border bg-pink text-white shadow-neo hover:shadow-neoLg hover:-translate-y-1 transition-all"
          >
            <FaCoffee className="text-2xl" />
            <div>
              <div className="font-grotesk font-bold text-base">Buy me a coffee</div>
              <div className="font-mono text-xs uppercase opacity-80">Support more $0/month infra experiments</div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
