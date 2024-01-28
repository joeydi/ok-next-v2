"use client";

import { usePathname } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { ScrollSmoother } from "gsap/dist/ScrollSmoother";
import { useGSAP } from "@gsap/react";

export default function SmoothScroll({ children }) {
    const pathname = usePathname();

    gsap.registerPlugin(ScrollTrigger, ScrollSmoother, useGSAP);

    useGSAP(
        () => {
            ScrollSmoother.create({
                smooth: 1,
            });
        },
        {
            dependencies: [pathname],
            revertOnUpdate: true,
        }
    );

    return (
        <div id="smooth-wrapper">
            <div id="smooth-content">{children}</div>
        </div>
    );
}
