"use client";

import CursorGlow from "@/components/CursorGlow";
import HeroSection from "@/components/HeroSection";

export default function Home() {
  return (
    <>
      {/* Custom cursor */}
      <CursorGlow />

      {/* Hero: pinned for 200% scroll distance */}
      <HeroSection />

      {/* Post-hero — provides scroll room + showcases tech */}
      <section
        className="relative z-20 flex w-full flex-col items-center overflow-hidden bg-[var(--cream)] -mt-12 md:-mt-16 rounded-t-[2.5rem] md:rounded-t-[4rem] shadow-[0px_-15px_30px_rgba(0,0,0,0.05)] transition-all duration-700 hover:shadow-[0px_-20px_40px_rgba(0,0,0,0.08)]"
        id="post-hero"
        style={{ paddingTop: "7rem", paddingBottom: "4rem" }}
      >
        <div className="flex w-full max-w-7xl flex-col items-center gap-12 px-6 text-center md:gap-20">

          {/* Header Block */}
          <div className="flex flex-col items-center gap-6">
            <div className="inline-flex items-center gap-2 rounded-full border-[2.5px] border-[var(--foreground)] bg-[var(--accent)] px-6 py-2.5 text-sm font-bold tracking-widest text-[#FFF] uppercase shadow-[4px_4px_0px_#0D0D0D]">
              <span className="h-2 w-2 rounded-full bg-white" />
              <span>Behind The Scenes</span>
            </div>

            <h2
              className="font-display max-w-4xl text-[clamp(2.5rem,6vw,5.5rem)] font-extrabold leading-[1.05] tracking-tight uppercase"
              style={{ color: "var(--foreground)" }}
            >
              Crafted with <span className="bg-[var(--accent)] text-white px-5 py-2 rounded-sm rotate-[-2deg] inline-block shadow-[6px_6px_0px_#0d0d0d] my-2">Precision</span>
            </h2>

            <p
              className="font-body max-w-2xl text-lg font-medium leading-relaxed md:text-xl md:leading-relaxed"
              style={{ color: "var(--text-secondary)" }}
            >
              A high-performance animation experience built for modern digital campaigns. Engineered with zero layout reflows for silky 60fps on any device.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
            {[
              { title: "Fluid Scroll", desc: "Complex GSAP timeline pinned for 200vh with seamless scrub progression and interpolation." },
              { title: "Layered Depth", desc: "Multi-layered parallax with staggered z-index transforms across floating dynamic shapes." },
              { title: "Lightweight", desc: "Animating only opacity & transforms for maximum GPU acceleration and device battery life." }
            ].map((feature, idx) => (
              <div key={idx} className="flex flex-col items-start gap-4 rounded-2xl border-[3px] border-[var(--foreground)] bg-white p-8 text-left shadow-[6px_6px_0px_#0D0D0D] transition-all duration-300 hover:-translate-y-2 hover:shadow-[10px_10px_0px_var(--accent)]">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl border-[2.5px] border-[var(--foreground)] bg-[var(--cream)] text-2xl font-black">
                  0{idx + 1}
                </div>
                <h3 className="font-display text-2xl font-bold uppercase tracking-tight">{feature.title}</h3>
                <p className="font-body text-[var(--text-secondary)] font-medium leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Modern Premium Footer */}
      <footer className="relative flex w-full flex-col items-center border-t-[3px] border-[var(--foreground)] bg-[#0D0D0D] py-16 text-white md:py-24">
        <div className="w-full max-w-7xl px-6">
          <div className="flex flex-col items-center justify-between gap-12 md:flex-row md:items-end">

            <div className="flex flex-col gap-6 text-center md:text-left">
              <h2 className="font-display text-[clamp(4rem,12vw,9rem)] font-black leading-none tracking-tighter text-white hover:text-[var(--accent)] transition-colors duration-500">
                ITZFIZZ<span className="text-[var(--accent)]">.</span>
              </h2>
              <p className="font-body max-w-sm text-lg text-gray-400 font-medium leading-relaxed md:text-xl">
                Elevating brands through creative digital innovation and dynamic web experiences.
              </p>
            </div>

            <div className="flex flex-col items-center gap-6 md:items-end">
              <button aria-label="Let's Talk" className="group relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-full border-[3px] border-white bg-white px-8 py-4 font-bold text-black transition-transform hover:scale-105 shadow-[6px_6px_0px_var(--accent)]">
                <span className="relative z-10 text-lg uppercase tracking-wider group-hover:text-white transition-colors duration-300">Let&apos;s Talk</span>
                <span className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full bg-black text-white group-hover:bg-white group-hover:text-black transition-colors duration-300" aria-hidden="true">↗</span>
                <div className="absolute inset-0 z-0 h-full w-full translate-y-full bg-[var(--accent)] transition-transform duration-300 ease-out group-hover:translate-y-0" />
              </button>
            </div>

          </div>

          <div className="mt-16 sm:mt-24 border-t-2 border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-6 text-sm font-bold text-gray-500 uppercase tracking-widest">
            <p className="hover:text-white transition-colors">© {new Date().getFullYear()} ITZFIZZ DIGITAL.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-[var(--accent)] transition-colors">Twitter</a>
              <a href="#" className="hover:text-[var(--accent)] transition-colors">LinkedIn</a>
              <a href="#" className="hover:text-[var(--accent)] transition-colors">Instagram</a>
            </div>
            <p className="hover:text-white transition-colors">Frontend UI Assignment</p>
          </div>
        </div>
      </footer>
    </>
  );
}
