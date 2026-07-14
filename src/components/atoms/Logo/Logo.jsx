function Logo({ onClick }) {
  return (
    <div className="flex items-center gap-4 flex-shrink-0 mr-8" aria-label="Logo DebiTech">
      <a href="#" onClick={onClick} className="flex items-center gap-4 no-underline text-white">
        <div className="bg-white h-4 w-4 rounded-sm overflow-hidden">
          <img src="/assets/img/logo.png" alt="Logo DebiTech" className="h-full w-full object-contain" />
        </div>
        <h1 className="text-lg font-bold leading-[23px]">DebiTech</h1>
      </a>
    </div>
  );
}

export default Logo;
