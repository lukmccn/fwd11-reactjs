import { socialLinks } from '../../../data/navigation';

function SocialLinks() {
  return (
    <div className="flex gap-4 items-center">
      {socialLinks.map(({ platform, href, icon }) => (
        <a
          key={platform}
          href={href}
          aria-label={platform}
          className="w-6 h-6 flex items-center justify-center rounded-full bg-gray-muted/20 hover:bg-primary/30 transition-colors"
        >
          <span className="text-xs text-white font-bold">
            {platform.charAt(0)}
          </span>
        </a>
      ))}
    </div>
  );
}

export default SocialLinks;
