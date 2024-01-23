"use client";

import { useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import styles from "./Card.module.scss";

export default function Card({ href, target = "_self", children, ...rest }) {
    const cardRef = useRef();
    const glowRef = useRef();
    const maxRotation = 10;

    const mouseMoveHandler = (e) => {
        const rect = cardRef.current.getBoundingClientRect();
        const x = e.clientX - rect.x;
        const y = e.clientY - rect.y;
        const rotationX = gsap.utils.mapRange(0, rect.height, -maxRotation, maxRotation, y);
        const rotationY = gsap.utils.mapRange(0, rect.width, maxRotation, -maxRotation, x);
        const glowX = gsap.utils.mapRange(0, rect.width, -100, 0, x);
        const glowY = gsap.utils.mapRange(0, rect.height, -100, 0, y);
        console.log(glowX, glowY);

        gsap.to(cardRef.current, {
            rotationX,
            rotationY,
            scale: 1.05,
            duration: 0.25,
            ease: "power2.out",
        });

        gsap.to(glowRef.current, {
            xPercent: glowX,
            yPercent: glowY,
            opacity: 0.35,
            duration: 0.25,
            ease: "power2.out",
        });
    };

    const mouseLeaveHandler = () => {
        gsap.to(cardRef.current, {
            rotationX: 0,
            rotationY: 0,
            scale: 1,
            duration: 1,
            ease: "expo.out",
        });

        gsap.to(glowRef.current, {
            xPercent: -50,
            yPercent: -50,
            opacity: 0,
            duration: 1,
            ease: "expo.out",
        });
    };

    const mouseDownHandler = () => {
        gsap.to(cardRef.current, {
            scale: 1,
            duration: 0.125,
            ease: "expo.out",
        });
    };

    return href ? (
        <div className={`${styles.perspective} relative`}>
            <Link
                onMouseMove={mouseMoveHandler}
                onMouseLeave={mouseLeaveHandler}
                onMouseDown={mouseDownHandler}
                ref={cardRef}
                style={{ backgroundColor: "#111", border: "1px solid #222" }}
                className="relative block rounded-md overflow-hidden"
                href={href}
                target={target}
                {...rest}>
                <div ref={glowRef} className={styles.glow}></div>
                {children}
            </Link>
        </div>
    ) : (
        <div
            style={{ backgroundColor: "#111", border: "1px solid #222" }}
            className="block rounded-md overflow-hidden"
            href={href}
            target={target}
            {...rest}>
            {children}
        </div>
    );
}
