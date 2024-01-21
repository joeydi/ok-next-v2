"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import styles from "./Footer.module.scss";

export default function Footer() {
    const cornerRef = useRef();

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const timeline = gsap.timeline({
            scrollTrigger: {
                trigger: "main",
                start: "top top",
                end: "+=50%",
                scrub: true,
            },
        });

        timeline.to(
            cornerRef.current,
            {
                y: 50,
                ease: "expo.out",
            },
            0
        );

        return () => timeline.kill();
    }, []);

    return (
        <footer className={styles.footer}>
            <div className="container mx-auto relative">
                <p className="m-0 uppercase text-mint font-bold">&copy; 2024</p>
                <svg ref={cornerRef} className={styles.corner} width="100px" height="100px" viewBox="0 0 100 100">
                    <polyline
                        fill="none"
                        stroke="#1CFFD6"
                        strokeWidth="30"
                        strokeLinejoin="round"
                        points="-2.85362012e-14 15 50 15 85 50 85 100"></polyline>
                </svg>
            </div>
        </footer>
    );
}
