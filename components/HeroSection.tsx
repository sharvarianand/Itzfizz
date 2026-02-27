"use client";

import { useEffect, useRef, useCallback } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import StatCard from "./StatCard";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

const STATS = [
    { value: 98, suffix: "%", label: "Client Satisfaction", icon: "⚡" },
    { value: 150, suffix: "+", label: "Projects Delivered", icon: "🚀" },
    { value: 50, suffix: "+", label: "Team Members", icon: "👥" },
    { value: 12, suffix: "+", label: "Years Excellence", icon: "🏆" },
];

const HEADLINE_1 = "WELCOME";
const HEADLINE_2 = "ITZFIZZ";

export default function HeroSection() {
    const heroRef = useRef<HTMLDivElement>(null);
    const headline1Ref = useRef<HTMLDivElement>(null);
    const headline2Ref = useRef<HTMLDivElement>(null);
    const visualRef = useRef<HTMLDivElement>(null);
    const statsRef = useRef<HTMLDivElement>(null);
    const marqueeRef = useRef<HTMLDivElement>(null);
    const scrollIndicatorRef = useRef<HTMLDivElement>(null);
    const progressBarRef = useRef<HTMLDivElement>(null);
    const shape1 = useRef<HTMLDivElement>(null);
    const shape2 = useRef<HTMLDivElement>(null);
    const shape3 = useRef<HTMLDivElement>(null);
    const shape4 = useRef<HTMLDivElement>(null);
    const shape5 = useRef<HTMLDivElement>(null);
    const shape6 = useRef<HTMLDivElement>(null);
    const shape7 = useRef<HTMLDivElement>(null);

    // Removed touch guard to allow GSAP ScrollTrigger on mobile

    useEffect(() => {
        const hero = heroRef.current;
        const visual = visualRef.current;
        const stats = statsRef.current;
        const h1 = headline1Ref.current;
        const h2 = headline2Ref.current;
        const marquee = marqueeRef.current;
        const scrollIndicator = scrollIndicatorRef.current;
        const progressBar = progressBarRef.current;

        if (!hero || !visual || !stats || !h1 || !h2 || !marquee) return;

        const initTimeout = setTimeout(() => {
            const ctx = gsap.context(() => {
                // ═══════════════════════════════════
                //  1. LOAD ANIMATION — sets elements to visible
                // ═══════════════════════════════════
                const loadTl = gsap.timeline({
                    defaults: { ease: "power2.out" },
                    onComplete: () => {
                        // After load animation completes, SET the final state
                        // and clear GSAP inline styles so ScrollTrigger
                        // records the correct "from" values
                        gsap.set(hero, { opacity: 1, clearProps: "none" });

                        const allLetters1 = h1.querySelectorAll(".headline-letter");
                        const allLetters2 = h2.querySelectorAll(".headline-letter");
                        gsap.set(allLetters1, { opacity: 1, y: 0, rotateX: 0, scale: 1, x: 0 });
                        gsap.set(allLetters2, { opacity: 1, y: 0, rotateX: 0, scale: 1, x: 0 });
                        gsap.set(visual, { opacity: 1, y: 0, scale: 1, rotation: 0 });
                        gsap.set(marquee, { opacity: 0.12, scale: 1, y: 0 });

                        const shapes = [shape1, shape2, shape3, shape4, shape5, shape6, shape7]
                            .map((s) => s.current).filter(Boolean);
                        gsap.set(shapes, { scale: 1, opacity: 1, rotation: 0, x: 0, y: 0 });

                        if (scrollIndicator) gsap.set(scrollIndicator, { opacity: 1, y: 0 });

                        // ═══════════════════════════════════
                        //  2. NOW create scroll animations
                        //     (after load is fully done)
                        // ═══════════════════════════════════
                        setupScrollAnimations();
                    },
                });

                // Hero fade in
                loadTl.fromTo(hero, { opacity: 0 }, { opacity: 1, duration: 0.5 });

                // WELCOME letters
                const letters1 = h1.querySelectorAll(".headline-letter");
                loadTl.fromTo(
                    letters1,
                    { y: 100, opacity: 0, rotateX: -90, scale: 0.5 },
                    { y: 0, opacity: 1, rotateX: 0, scale: 1, duration: 0.9, stagger: 0.06, ease: "back.out(1.7)" },
                    "-=0.2"
                );

                // ITZFIZZ letters
                const letters2 = h2.querySelectorAll(".headline-letter");
                loadTl.fromTo(
                    letters2,
                    { y: 100, opacity: 0, rotateX: -90, scale: 0.5 },
                    { y: 0, opacity: 1, rotateX: 0, scale: 1, duration: 0.9, stagger: 0.06, ease: "back.out(1.7)" },
                    "-=0.6"
                );

                // Visual card
                loadTl.fromTo(
                    visual,
                    { y: 150, opacity: 0, scale: 0.6, rotation: -8 },
                    { y: 0, opacity: 1, scale: 1, rotation: 0, duration: 1.2, ease: "back.out(2)" },
                    "-=0.6"
                );

                // Shapes
                const shapes = [shape1, shape2, shape3, shape4, shape5, shape6, shape7]
                    .map((s) => s.current).filter(Boolean);
                if (shapes.length > 0) {
                    loadTl.fromTo(
                        shapes,
                        { scale: 0, opacity: 0, rotation: -180 },
                        { scale: 1, opacity: 1, rotation: 0, duration: 0.7, stagger: 0.08, ease: "back.out(3)" },
                        "-=0.8"
                    );
                }

                // Marquee
                loadTl.fromTo(
                    marquee, { opacity: 0 }, { opacity: 0.12, duration: 0.8 }, "-=0.5"
                );

                // ═══════════════════════════════════
                //  SCROLL SETUP (called after load completes)
                // ═══════════════════════════════════
                function setupScrollAnimations() {
                    // MatchMedia to scale down shape movement on mobile
                    const mm = gsap.matchMedia();

                    mm.add("(max-width: 768px)", () => {
                        createScrollTimeline(true);
                    });

                    mm.add("(min-width: 769px)", () => {
                        createScrollTimeline(false);
                    });

                    function createScrollTimeline(isMobile: boolean) {
                        // Master scroll timeline with scrub
                        const scrollTl = gsap.timeline({
                            scrollTrigger: {
                                trigger: hero,
                                start: "top top",
                                end: "+=200%",
                                pin: true,
                                pinSpacing: true,
                                scrub: 0.8,
                                id: "hero-master",
                            },
                        });

                        // Progress bar
                        if (progressBar) {
                            gsap.fromTo(progressBar, { scaleX: 0 }, {
                                scaleX: 1, ease: "none",
                                scrollTrigger: {
                                    trigger: hero, start: "top top", end: "+=200%", scrub: 0.3,
                                },
                            });
                        }

                        // ── Scroll indicator fades (0%→5%) ──
                        if (scrollIndicator) {
                            scrollTl.fromTo(scrollIndicator,
                                { opacity: 1, y: 0 },
                                { opacity: 0, y: 20, duration: 0.15 },
                                0
                            );
                        }

                        // ── Stats stagger fade (2%→25%) ──
                        if (stats) {
                            const statCards = stats.querySelectorAll(".stat-card");
                            scrollTl.fromTo(statCards,
                                { opacity: 1, y: 0, scale: 1 },
                                { opacity: 0, y: -60, scale: 0.85, stagger: 0.08, duration: 0.7 },
                                0.05
                            );
                        }

                        // ── WELCOME letters spread (10%→55%) ──
                        if (h1) {
                            const wLetters = h1.querySelectorAll(".headline-letter");
                            wLetters.forEach((letter, i) => {
                                const center = (wLetters.length - 1) / 2;
                                const offset = (i - center) * 50;
                                scrollTl.fromTo(letter,
                                    { x: 0, scale: 1, opacity: 1 },
                                    { x: offset, scale: 1.15, opacity: 0.35, duration: 1.2, ease: "power1.inOut" },
                                    0.3
                                );
                            });

                            // WELCOME rises
                            scrollTl.fromTo(h1,
                                { y: 0 },
                                { y: -150, duration: 1.5, ease: "power1.inOut" },
                                0.4
                            );
                        }

                        // ── ITZFIZZ letters explode (25%→70%) ──
                        if (h2) {
                            const izLetters = h2.querySelectorAll(".headline-letter");
                            izLetters.forEach((letter, i) => {
                                const center = (izLetters.length - 1) / 2;
                                const offset = (i - center) * 80;
                                scrollTl.fromTo(letter,
                                    { x: 0, y: 0, scale: 1, opacity: 1, rotation: 0 },
                                    {
                                        x: offset,
                                        y: -80 + Math.abs(i - center) * -20,
                                        scale: 1.5, opacity: 0,
                                        rotation: (i - center) * 15,
                                        duration: 1.3, ease: "power2.inOut",
                                    },
                                    0.7
                                );
                            });
                        }

                        // ── Visual card rises (15%→75%) ──
                        if (visual) {
                            scrollTl.fromTo(visual,
                                { y: 0, rotation: 0, scale: 1, opacity: 1 },
                                { y: -400, rotation: 20, scale: 0.4, opacity: 0, duration: 1.8, ease: "power1.inOut" },
                                0.3
                            );
                        }

                        if (marquee) {
                            // ── Marquee slides continuously (0%→100%) ──
                            const marqueeTrack = marquee.querySelector(".marquee-track");
                            if (marqueeTrack) {
                                scrollTl.fromTo(marqueeTrack,
                                    { x: "0%" },
                                    { x: "-35%", duration: 3, ease: "none" },
                                    0
                                );
                            }

                            // ── Marquee scales up (40%→100%) ──
                            scrollTl.fromTo(marquee,
                                { scale: 1, opacity: 0.12 },
                                { scale: 2.5, opacity: 0.35, duration: 1.8, ease: "power1.in" },
                                1.2
                            );
                        }

                        // ── Shapes fly away across full duration ──
                        const mobileFactor = isMobile ? 0.4 : 1;
                        const shapeData = [
                            { el: shape1.current, x: 200 * mobileFactor, y: -300 * mobileFactor, rot: 360 },
                            { el: shape2.current, x: -250 * mobileFactor, y: -250 * mobileFactor, rot: -450 },
                            { el: shape3.current, x: 150 * mobileFactor, y: -400 * mobileFactor, rot: 540 },
                            { el: shape4.current, x: -180 * mobileFactor, y: -280 * mobileFactor, rot: -360 },
                            { el: shape5.current, x: 220 * mobileFactor, y: -200 * mobileFactor, rot: 480 },
                            { el: shape6.current, x: -140 * mobileFactor, y: -350 * mobileFactor, rot: -240 },
                            { el: shape7.current, x: 100 * mobileFactor, y: -260 * mobileFactor, rot: 180 },
                        ];
                        shapeData.forEach(({ el, x, y, rot }, i) => {
                            if (el) {
                                scrollTl.fromTo(el,
                                    { x: 0, y: 0, rotation: 0, scale: 1, opacity: 1 },
                                    { x, y, rotation: rot, scale: 0, opacity: 0, duration: 2.0 + i * 0.15, ease: "power1.inOut" },
                                    0.1 + i * 0.12
                                );
                            }
                        });

                        ScrollTrigger.refresh();
                    }
                }
            }, hero);

            (hero as HTMLElement & { _gsapCtx?: gsap.Context })._gsapCtx = ctx;
        }, 100);

        return () => {
            clearTimeout(initTimeout);
            const ctx = (heroRef.current as HTMLElement & { _gsapCtx?: gsap.Context })?._gsapCtx;
            if (ctx) ctx.revert();
        };
    }, []);

    return (
        <section
            ref={heroRef}
            className="hero-section dot-grid"
            style={{ opacity: 0 }}
            id="hero-section"
            aria-label="Hero section"
        >
            {/* ── Scroll Progress Bar ── */}
            <div className="fixed left-0 top-0 z-50 h-[3px] w-full" style={{ pointerEvents: "none" }}>
                <div
                    ref={progressBarRef}
                    className="h-full w-full origin-left"
                    style={{ background: "var(--accent)", transform: "scaleX(0)" }}
                />
            </div>

            {/* ── Floating Shapes ── */}
            <div ref={shape1} className="floating-shape" style={{ top: "8%", left: "6%", width: 56, height: 56, background: "var(--accent)", borderRadius: "50%", opacity: 0 }} aria-hidden="true" />
            <div ref={shape2} className="floating-shape" style={{ top: "12%", right: "8%", width: 44, height: 44, background: "var(--foreground)", borderRadius: "12px", opacity: 0 }} aria-hidden="true" />
            <div ref={shape3} className="floating-shape" style={{ bottom: "28%", left: "4%", width: 36, height: 36, border: "3px solid var(--accent)", borderRadius: "50%", opacity: 0 }} aria-hidden="true" />
            <div ref={shape4} className="floating-shape" style={{ top: "55%", right: "5%", width: 32, height: 32, background: "var(--accent)", borderRadius: "8px", transform: "rotate(45deg)", opacity: 0 }} aria-hidden="true" />
            <div ref={shape5} className="floating-shape" style={{ bottom: "38%", right: "22%", width: 18, height: 18, background: "var(--foreground)", borderRadius: "50%", opacity: 0 }} aria-hidden="true" />
            <div ref={shape6} className="floating-shape" style={{ top: "35%", left: "12%", width: 24, height: 24, border: "2.5px solid var(--foreground)", borderRadius: "6px", transform: "rotate(30deg)", opacity: 0 }} aria-hidden="true" />
            <div ref={shape7} className="floating-shape" style={{ top: "75%", left: "30%", width: 28, height: 28, background: "var(--accent)", borderRadius: "50%", opacity: 0 }} aria-hidden="true" />

            {/* ── Background Marquee ── */}
            <div
                ref={marqueeRef}
                className="pointer-events-none absolute inset-0 flex items-center overflow-hidden"
                style={{ opacity: 0 }}
                aria-hidden="true"
            >
                <div className="marquee-track">
                    {[...Array(3)].map((_, rep) => (
                        <div key={rep} className="flex items-center">
                            <span className="marquee-text">CREATIVE</span>
                            <span className="marquee-separator">✦</span>
                            <span className="marquee-text marquee-text-filled">DIGITAL</span>
                            <span className="marquee-separator">◆</span>
                            <span className="marquee-text">INNOVATION</span>
                            <span className="marquee-separator">✦</span>
                            <span className="marquee-text marquee-text-filled">DESIGN</span>
                            <span className="marquee-separator">◆</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* ── Main Content ── */}
            <div className="relative z-10 flex w-full max-w-7xl flex-col items-center px-6 text-center">
                <div ref={headline1Ref} className="mb-4 md:mb-2" aria-label="Welcome" style={{ perspective: "800px" }}>
                    <h1
                        className="font-display font-extrabold tracking-[0.05em] md:tracking-[0.15em]"
                        style={{ fontSize: "clamp(2rem, 9vw, 7rem)", lineHeight: 1, color: "var(--foreground)" }}
                    >
                        {HEADLINE_1.split("").map((ch, i) => (
                            <span key={`w-${i}`} className="headline-letter" style={{ opacity: 0, display: "inline-block" }}>
                                {ch}
                            </span>
                        ))}
                    </h1>
                </div>

                <div ref={headline2Ref} className="mb-12 md:mb-16" aria-label="Itzfizz" style={{ perspective: "800px" }}>
                    <h2
                        className="font-display font-extrabold tracking-[0.05em] md:tracking-[0.15em]"
                        style={{
                            fontSize: "clamp(2.5rem, 11vw, 9rem)", lineHeight: 1,
                            color: "var(--accent)", WebkitTextStroke: "max(1px, 0.25vw) var(--foreground)", paintOrder: "stroke fill",
                        }}
                    >
                        {HEADLINE_2.split("").map((ch, i) => (
                            <span key={`i-${i}`} className="headline-letter" style={{ opacity: 0, display: "inline-block" }}>
                                {ch}
                            </span>
                        ))}
                    </h2>
                </div>

                <div ref={visualRef} className="visual-card mb-12 w-[90%] w-full max-w-md p-4 md:mb-20 md:max-w-lg md:p-7" style={{ opacity: 0 }} id="visual-element">
                    <div className="mb-4 flex items-center gap-2.5">
                        <div className="h-3.5 w-3.5 rounded-full border-2 border-[var(--foreground)] bg-[var(--accent)]" />
                        <div className="h-3.5 w-3.5 rounded-full border-2 border-[var(--foreground)] bg-[#FFD700]" />
                        <div className="h-3.5 w-3.5 rounded-full border-2 border-[var(--foreground)] bg-[#4ADE80]" />
                        <div className="ml-3 h-5 flex-1 rounded-full border-2 border-[var(--foreground)] bg-[var(--cream)]" />
                    </div>
                    <div className="rounded-xl border-2 border-[var(--foreground)] bg-[#1a1a2e] p-4 md:p-5" style={{ fontFamily: "'Space Grotesk', monospace" }}>
                        <div className="space-y-1.5 text-left text-[13px] leading-relaxed md:text-sm">
                            <div>
                                <span className="text-[#c792ea]">const</span>{" "}
                                <span className="text-[#82aaff]">hero</span>{" "}
                                <span className="text-white/50">=</span>{" "}
                                <span className="text-[#c3e88d]">gsap</span>
                                <span className="text-white/40">.</span>
                                <span className="text-[#ffcb6b]">timeline</span>
                                <span className="text-white/40">()</span>
                            </div>
                            <div className="pl-4">
                                <span className="text-white/40">.</span>
                                <span className="text-[#ffcb6b]">to</span>
                                <span className="text-white/40">(</span>
                                <span className="text-[#c3e88d]">&quot;.headline&quot;</span>
                                <span className="text-white/40">,</span>{" "}
                                <span className="text-white/40">{"{"}</span>
                            </div>
                            <div className="pl-8">
                                <span className="text-[#82aaff]">y</span>
                                <span className="text-white/40">:</span>{" "}
                                <span className="text-[#f78c6c]">0</span>
                                <span className="text-white/40">,</span>
                            </div>
                            <div className="pl-8">
                                <span className="text-[#82aaff]">opacity</span>
                                <span className="text-white/40">:</span>{" "}
                                <span className="text-[#f78c6c]">1</span>
                                <span className="text-white/40">,</span>
                            </div>
                            <div className="pl-8">
                                <span className="text-[#82aaff]">stagger</span>
                                <span className="text-white/40">:</span>{" "}
                                <span className="text-[#f78c6c]">0.05</span>
                                <span className="text-white/40">,</span>
                            </div>
                            <div className="pl-8">
                                <span className="text-[#82aaff]">ease</span>
                                <span className="text-white/40">:</span>{" "}
                                <span className="text-[#c3e88d]">&quot;back.out&quot;</span>
                            </div>
                            <div className="pl-4">
                                <span className="text-white/40">{"}"}</span>
                                <span className="text-white/40">)</span>
                            </div>
                        </div>
                        <div className="mt-3 h-4 w-[2px] bg-[var(--accent)]" style={{ animation: "blink 1s step-end infinite" }} />
                        <style jsx>{`@keyframes blink { 50% { opacity: 0; } }`}</style>
                    </div>
                </div>

                <div ref={statsRef} className="grid w-full max-w-4xl grid-cols-1 sm:grid-cols-2 gap-3 md:grid-cols-4 md:gap-5" id="stats-container">
                    {STATS.map((stat, i) => (
                        <StatCard key={stat.label} value={stat.value} suffix={stat.suffix} label={stat.label} delay={i * 0.15} index={i} icon={stat.icon} />
                    ))}
                </div>
            </div>

            {/* ── Scroll Indicator ── */}
            <div ref={scrollIndicatorRef} className="scroll-indicator" aria-hidden="true">
                <span className="font-body text-[10px] font-semibold uppercase tracking-[0.35em]" style={{ color: "var(--medium-gray)" }}>
                    Scroll
                </span>
                <div className="scroll-line" />
            </div>
        </section>
    );
}
