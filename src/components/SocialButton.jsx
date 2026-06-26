import { FaGithub, FaLinkedin, FaGlobe, FaEnvelope } from 'react-icons/fa';

const ICONS = {
  github: FaGithub,
  linkedin: FaLinkedin,
  globe: FaGlobe,
  email: FaEnvelope,
};

export default function SocialButton({ kind, href, size = 48 }) {
  const Icon = ICONS[kind];
  return (
    <a
      href={href}
      target={kind === 'email' ? undefined : '_blank'}
      rel="noopener noreferrer"
      style={{ width: size, height: size }}
      className="flex items-center justify-center border-neo border-border bg-white shadow-neoSm text-text transition-all duration-200 hover:shadow-neo hover:-translate-y-0.5 hover:bg-pink hover:text-white"
      aria-label={kind}
    >
      <Icon size={size * 0.45} />
    </a>
  );
}
