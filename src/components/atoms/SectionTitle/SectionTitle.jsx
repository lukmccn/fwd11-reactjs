function SectionTitle({ children, className = '', ...props }) {
  return (
    <h2 className={`text-[22px] leading-7 font-bold mb-3 ${className}`} {...props}>
      {children}
    </h2>
  );
}

export default SectionTitle;
