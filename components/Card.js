"use client";

import { useRef } from "react";
import Link from "next/link";
import gsap from "gsap";

export default function Card({ href, target = "_self", children, ...rest }) {
    const cardRef = useRef();
    const maxRotation = 10;

    const mouseMoveHandler = (e) => {
        const rect = cardRef.current.getBoundingClientRect();
        const x = e.clientX - rect.x;
        const y = e.clientY - rect.y;
        const rotationX = gsap.utils.mapRange(0, rect.height, -maxRotation, maxRotation, y);
        const rotationY = gsap.utils.mapRange(0, rect.width, maxRotation, -maxRotation, x);
        console.log(rotationX, rotationY);

        gsap.to(cardRef.current, {
            rotationX,
            rotationY,
            scale: 1.05,
            duration: 0.25,
            ease: "power2.out",
        });
    };

    const mouseLeaveHandler = () => {
        console.log("mouseLeaveHandler");
        gsap.to(cardRef.current, {
            rotationX: 0,
            rotationY: 0,
            scale: 1,
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
        <div style={{ perspective: "100vw" }}>
            <Link
                onMouseMove={mouseMoveHandler}
                onMouseLeave={mouseLeaveHandler}
                onMouseDown={mouseDownHandler}
                ref={cardRef}
                style={{ backgroundColor: "#111", border: "1px solid #222" }}
                className="block rounded-md overflow-hidden"
                href={href}
                target={target}
                {...rest}>
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
