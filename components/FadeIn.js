"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function FadeIn({ delay = 0, children }) {
    const ref = useRef();

    useEffect(() => {
        const tween = gsap.fromTo(
            ref.current,
            {
                y: 100,
                opacity: 0,
            },
            {
                y: 0,
                opacity: 1,
                duration: 0.5,
                delay: delay,
                ease: "expo.out",
            }
        );

        return () => tween.revert();
    }, []);

    return (
        <div ref={ref} style={{ opacity: 0 }}>
            {children}
        </div>
    );
}
