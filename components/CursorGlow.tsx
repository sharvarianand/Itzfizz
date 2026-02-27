"use client";

import { useEffect, useRef } from "react";

/**
 * CursorGlow — Custom cursor with dot + ring.
 * Uses rAF + lerp for 60fps smoothness.
 * Auto-hides on touch devices.
 */
export default function CursorGlow() {
    const dotRef = useRef<HTMLDivElement>(null);
    const ringRef = useRef<HTMLDivElement>(null);
    const mouse = useRef({ x: 0, y: 0 });
    const dotPos = useRef({ x: 0, y: 0 });
    const ringPos = useRef({ x: 0, y: 0 });
    const raf = useRef<number>(0);

    useEffect(() => {
        // Skip on touch devices
        if ("ontouchstart" in window || navigator.maxTouchPoints > 0) return;

        const onMove = (e: MouseEvent) => {
            mouse.current = { x: e.clientX, y: e.clientY };
        };

        const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

        const tick = () => {
            // Dot follows tightly
            dotPos.current.x = lerp(dotPos.current.x, mouse.current.x, 0.15);
            dotPos.current.y = lerp(dotPos.current.y, mouse.current.y, 0.15);

            // Ring follows loosely for elastic feel
            ringPos.current.x = lerp(ringPos.current.x, mouse.current.x, 0.08);
            ringPos.current.y = lerp(ringPos.current.y, mouse.current.y, 0.08);

            if (dotRef.current) {
                dotRef.current.style.left = `${dotPos.current.x}px`;
                dotRef.current.style.top = `${dotPos.current.y}px`;
            }
            if (ringRef.current) {
                ringRef.current.style.left = `${ringPos.current.x}px`;
                ringRef.current.style.top = `${ringPos.current.y}px`;
            }

            raf.current = requestAnimationFrame(tick);
        };

        window.addEventListener("mousemove", onMove);
        raf.current = requestAnimationFrame(tick);

        return () => {
            window.removeEventListener("mousemove", onMove);
            cancelAnimationFrame(raf.current);
        };
    }, []);

    return (
        <>
            <div ref={dotRef} className="cursor-dot" aria-hidden="true" />
            <div ref={ringRef} className="cursor-ring" aria-hidden="true" />
        </>
    );
}
