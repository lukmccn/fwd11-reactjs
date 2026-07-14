function NavLink({ href, children, isActive = false }) {
  return (
    <li>
      <a
        href={href}
        className={`text-sm font-medium leading-[21px] no-underline transition-colors hover:text-primary-light ${
          isActive ? 'text-primary-light' : 'text-white'
        }`}
      >
        {children}
      </a>
    </li>
  );
}

export default NavLink;
