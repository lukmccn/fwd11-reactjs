import { footerLinks } from '../../../data/navigation';

function FooterNav() {
  return (
    <nav aria-label="Footer navigation">
      <ul className="flex flex-wrap gap-6 list-none justify-center sm:justify-start">
        {footerLinks.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              className="text-sm text-gray-muted no-underline hover:text-white transition-colors"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default FooterNav;
