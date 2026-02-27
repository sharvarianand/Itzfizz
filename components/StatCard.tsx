"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

interface StatCardProps {
    value: number;
    suffix: string;
    label: string;
    delay?: number;
    index: number;
    icon: string;
}

/**
 * StatCard — Neo-brutalist impact metric card.
 * GSAP count-up from 0 → target with snap rounding.
 * Chunky border, solid shadow, accent stripe on hover.
 */
export default function StatCard({
    value,
    suffix,
    label,
    delay = 0,
    index,
    icon,
}: StatCardProps) {
    const cardRef = useRef<HTMLDivElement>(null);
    const numRef = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        const card = cardRef.current;
        const num = numRef.current;
        if (!card || !num) return;

        // Card entrance animation
        gsap.fromTo(
            card,
            { y: 60, opacity: 0, scale: 0.95 },
            {
                y: 0,
                opacity: 1,
                scale: 1,
                duration: 0.7,
                ease: "back.out(1.4)",
                delay: 1.4 + delay,
            }
        );

        // Number count-up
        const counter = { val: 0 };
        gsap.to(counter, {
            val: value,
            duration: 2.2,
            delay: 1.6 + delay,
            ease: "power2.out",
            snap: { val: 1 },
            onUpdate: () => {
                num.textContent = `${Math.floor(counter.val)}${suffix}`;
            },
        });
    }, [value, suffix, delay]);

    return (
        <div
            ref={cardRef}
            className="stat-card"
            style={{ opacity: 0 }}
            id={`stat-card-${index}`}
            role="article"
            aria-label={`${label}: ${value}${suffix}`}
        >
            <div className="mb-3 text-2xl">{icon}</div>
            <span
                ref={numRef}
                className="font-display block text-4xl font-extrabold tracking-tight md:text-5xl"
                style={{ color: "var(--foreground)" }}
            >
                0{suffix}
            </span>
            <span className="mt-2 block text-xs font-semibold uppercase tracking-[0.15em] text-[var(--text-secondary)]">
                {label}
            </span>
        </div>
    );
}
