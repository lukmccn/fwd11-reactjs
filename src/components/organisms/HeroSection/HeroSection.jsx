import { useMemo } from 'react';

function HeroSection() {
  const bgStyle = useMemo(() => ({
    backgroundImage: `linear-gradient(90deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.4) 100%), url('/assets/img/hero.png')`,
  }), []);

  return (
    <section className="px-4 py-4" aria-labelledby="hero-heading">
      <div
        className="flex flex-col justify-center items-center text-center w-full min-h-[480px] gap-2 px-4 sm:px-10 py-12 sm:py-0 rounded-card bg-cover bg-center relative z-10"
        style={bgStyle}
      >
        <h2
          id="hero-heading"
          className="text-[31px] sm:text-5xl font-bold leading-[38px] sm:leading-[60px] tracking-[-1.29px] sm:tracking-[-2px] text-white z-10"
        >
          Discover the Future of Work with AI
        </h2>
        <p className="text-[10px] sm:text-base leading-4 sm:leading-6 text-white z-10 max-w-2xl">
          Explore a curated marketplace of AI-powered tools designed to transform your workflow and unlock new possibilities.
        </p>
      </div>
    </section>
  );
}

export default HeroSection;
