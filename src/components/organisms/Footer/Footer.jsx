import FooterNav from '../../molecules/FooterNav/FooterNav';
import SocialLinks from '../../molecules/SocialLinks/SocialLinks';

function Footer() {
  return (
    <footer className="px-5 sm:px-10 py-10 border-t border-gray-600">
      <div className="max-w-[960px] mx-auto flex flex-col sm:flex-row justify-between items-center gap-6">
        <FooterNav />
        <SocialLinks />
      </div>
      <p className="text-center text-sm text-gray-muted mt-6">
        &copy; {new Date().getFullYear()} DebiTech. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
