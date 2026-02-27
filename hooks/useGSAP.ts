"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/**
 * useGSAP — Custom hook to initialize GSAP + ScrollTrigger
 * Registers the plugin once, provides a scope ref for cleanup.
 */
export function useGSAP() {
    const scopeRef = useRef<HTMLDivElement>(null);
    const isRegistered = useRef(false);

    useEffect(() => {
        // Register ScrollTrigger plugin only once
        if (!isRegistered.current) {
            gsap.registerPlugin(ScrollTrigger);
            isRegistered.current = true;
        }

        return () => {
            // Clean up all ScrollTrigger instances on unmount
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        };
    }, []);

    return { scopeRef, gsap, ScrollTrigger };
}
