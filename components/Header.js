"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import styles from "./Header.module.scss";

export default function Header() {
    const pathname = usePathname();
    const headerRef = useRef();
    const containerRef = useRef();
    const backdropRef = useRef();

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
            headerRef.current,
            {
                y: -100,
                ease: "expo.out",
            },
            0
        );

        timeline.to(
            containerRef.current,
            {
                y: 50,
                ease: "expo.out",
            },
            0
        );

        timeline.to(
            backdropRef.current,
            {
                opacity: 1,
                yPercent: 50,
                ease: "expo.out",
            },
            0
        );

        return () => timeline.kill();
    }, []);

    return (
        <header ref={headerRef} className={styles.header}>
            <div ref={backdropRef} className={styles.backdrop}></div>
            <div ref={containerRef} className="container mx-auto relative">
                <div className="grid grid-cols-2 gap-4">
                    <nav className={styles.nav}>
                        <Link
                            className={`${pathname == "/" ? styles.active : ""} transition-all block uppercase font-bold`}
                            href="/">
                            Okay Plus
                        </Link>
                        <Link
                            className={`${
                                pathname == "/portfolio" ? styles.active : ""
                            } transition-all block uppercase font-bold`}
                            href="/portfolio">
                            Portfolio
                        </Link>
                        <Link
                            className={`${pathname == "/services" ? styles.active : ""} transition-all block uppercase font-bold`}
                            href="/services">
                            Services
                        </Link>
                        <Link
                            className={`${pathname == "/contact" ? styles.active : ""} transition-all block uppercase font-bold`}
                            href="/contact">
                            Contact
                        </Link>
                    </nav>
                    <p className="m-0 uppercase text-mint font-bold">Design &amp; Development For the Web</p>
                </div>
                <svg className={styles.corner} width="100px" height="100px" viewBox="0 0 100 100">
                    <polyline
                        fill="none"
                        stroke="#1CFFD6"
                        strokeWidth="30"
                        strokeLinejoin="round"
                        points="-2.85362012e-14 15 50 15 85 50 85 100"></polyline>
                </svg>
            </div>
        </header>
    );
}
