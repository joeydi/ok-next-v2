"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import FadeIn from "@/components/FadeIn";

export default function Home() {
    const introRef = useRef();
    const logoRef = useRef();

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const o = logoRef.current.querySelector("#o");
        const k = logoRef.current.querySelector("#k");
        const a = logoRef.current.querySelector("#a");
        const y = logoRef.current.querySelector("#y");
        const p = logoRef.current.querySelector("#p");
        const l = logoRef.current.querySelector("#l");
        const u = logoRef.current.querySelector("#u");
        const s = logoRef.current.querySelector("#s");

        const distanceFactor = 40;
        const blurFactor = 10;

        const timeline = gsap.timeline({
            scrollTrigger: {
                trigger: introRef.current,
                start: "top top",
                end: "bottom top",
                scrub: true,
            },
        });

        timeline.to(
            logoRef.current,
            {
                y: window.innerHeight / 4,
                ease: "none",
            },
            0
        );

        timeline.to(
            o,
            {
                x: `-=${distanceFactor * 4}`,
                y: `+=${distanceFactor * 4}`,
                filter: `blur(${blurFactor * 4}px)`,
                ease: "none",
            },
            0
        );

        timeline.to(
            k,
            {
                x: `-=${distanceFactor * 3}`,
                y: `+=${distanceFactor * 3}`,
                filter: `blur(${blurFactor * 3}px)`,
                ease: "none",
            },
            0
        );

        timeline.to(
            a,
            {
                x: `-=${distanceFactor * 2}`,
                y: `+=${distanceFactor * 2}`,
                filter: `blur(${blurFactor * 2}px)`,
                ease: "none",
            },
            0
        );

        timeline.to(
            y,
            {
                x: `-=${distanceFactor * 1}`,
                y: `+=${distanceFactor * 1}`,
                filter: `blur(${blurFactor * 1}px)`,
                ease: "none",
            },
            0
        );

        timeline.to(
            p,
            {
                x: `+=${distanceFactor * 1}`,
                y: `-=${distanceFactor * 1}`,
                filter: `blur(${blurFactor * 1}px)`,
                ease: "none",
            },
            0
        );

        timeline.to(
            l,
            {
                x: `+=${distanceFactor * 2}`,
                y: `-=${distanceFactor * 2}`,
                filter: `blur(${blurFactor * 2}px)`,
                ease: "none",
            },
            0
        );

        timeline.to(
            u,
            {
                x: `+=${distanceFactor * 3}`,
                y: `-=${distanceFactor * 3}`,
                filter: `blur(${blurFactor * 3}px)`,
                ease: "none",
            },
            0
        );

        timeline.to(
            s,
            {
                x: `+=${distanceFactor * 4}`,
                y: `-=${distanceFactor * 4}`,
                filter: `blur(${blurFactor * 4}px)`,
                ease: "none",
            },
            0
        );

        return () => timeline.kill();
    }, []);

    return (
        <main>
            <section ref={introRef} className="section-padding h-screen flex flex-col">
                <div className="my-auto">
                    <FadeIn>
                        <h1 className="relative w-[104%] mx-[-2%]">
                            <span className="sr-only">Okay Plus</span>
                            <svg
                                ref={logoRef}
                                className="w-full h-auto overflow-visible"
                                width="1984px"
                                height="420px"
                                viewBox="0 0 1984 420">
                                <title>Artboard</title>
                                <g id="Okayplus" fill="#1CFFD6" fillRule="nonzero">
                                    <g id="s" transform="translate(1647, 0)">
                                        <path
                                            d="M283.173611,0 L275.762731,0 L251.189815,36.1804813 L227.787037,36.1804813 L174.350694,0 L166.939815,0 L83.0798611,124.102941 L83.0798611,131.494652 L136.90625,168.064171 L144.31713,168.064171 L227.396991,45.1283422 L227.396991,71.5828877 L206.724537,102.316845 L206.724537,109.708556 L260.550926,146.278075 L267.961806,146.278075 L337,43.9612299 L337,36.5695187 L283.173611,0 Z M192.68287,122.935829 L109.603009,245.871658 L109.603009,219.417112 L130.275463,188.683155 L130.275463,181.291444 L76.4490741,144.721925 L69.0381944,144.721925 L0,247.03877 L0,254.430481 L53.8263889,291 L61.2372685,291 L85.8101852,254.430481 L108.822917,254.430481 L162.649306,291 L170.060185,291 L253.920139,166.897059 L253.920139,159.505348 L200.09375,122.935829 L192.68287,122.935829 Z"
                                            id="Shape"></path>
                                    </g>
                                    <g id="u" transform="translate(1413, 19)">
                                        <polygon
                                            id="Path"
                                            points="283.173611 0 275.762731 0 109.603009 245.871658 109.603009 219.417112 228.177083 43.9612299 228.177083 36.5695187 174.350694 0 166.939815 0 0 247.03877 0 254.430481 53.8263889 291 61.2372685 291 85.8101852 254.819519 109.212963 254.819519 162.649306 291 170.060185 291 337 43.9612299 337 36.5695187"></polygon>
                                    </g>
                                    <g id="l" transform="translate(1179, 37)">
                                        <polygon
                                            id="Path"
                                            points="189.601911 136.163102 182.25 136.163102 108.730892 245.871658 108.730892 219.417112 226.361465 43.9612299 226.361465 36.5695187 172.963376 0 165.611465 0 0 247.03877 0 254.430481 53.3980892 291 60.75 291 85.1273885 254.819519 108.343949 254.819519 161.355096 291 168.707006 291 243 180.124332 243 172.73262"></polygon>
                                    </g>
                                    <g id="p" transform="translate(941, 56)">
                                        <path
                                            d="M283.173611,0 L275.762731,0 L251.189815,36.1804813 L227.787037,36.1804813 L174.350694,0 L166.939815,0 L0,247.03877 L0,254.430481 L53.8263889,291 L61.2372685,291 L119.744213,204.244652 L142.756944,204.244652 L196.583333,240.814171 L203.994213,240.814171 L337,43.9612299 L337,36.5695187 L283.173611,0 Z M143.537037,195.685829 L143.537037,169.231283 L227.396991,45.1283422 L227.396991,71.5828877 L143.537037,195.685829 Z"
                                            id="Shape"></path>
                                    </g>
                                    <g id="y" transform="translate(706, 73)">
                                        <polygon
                                            id="Path"
                                            points="283.173611 0 275.762731 0 174.740741 149.390374 174.740741 122.935829 228.177083 43.9612299 228.177083 36.5695187 174.350694 0 166.939815 0 62.0173611 155.225936 62.0173611 162.617647 115.84375 199.187166 123.25463 199.187166 150.947917 158.338235 168.890046 158.338235 109.603009 245.871658 109.603009 212.025401 55.7766204 175.455882 48.3657407 175.455882 0 247.03877 0 254.430481 53.8263889 291 61.2372685 291 85.8101852 254.819519 109.212963 254.819519 162.649306 291 170.060185 291 337 43.9612299 337 36.5695187"></polygon>
                                    </g>
                                    <g id="a" transform="translate(469, 92)">
                                        <path
                                            d="M283.173611,0 L275.762731,0 L251.189815,36.5695187 L228.177083,36.5695187 L174.350694,0 L166.939815,0 L0,247.03877 L0,254.430481 L53.8263889,291 L61.2372685,291 L139.246528,175.455882 L139.246528,201.910428 L108.822917,247.03877 L108.822917,254.430481 L162.649306,291 L170.060185,291 L337,43.9612299 L337,36.5695187 L283.173611,0 Z M144.31713,168.064171 L227.396991,45.1283422 L227.396991,71.5828877 L162.259259,168.064171 L144.31713,168.064171 Z"
                                            id="Shape"></path>
                                    </g>
                                    <g id="k" transform="translate(234, 109)">
                                        <path
                                            d="M186.052083,143.554813 L160.699074,143.554813 L228.177083,43.9612299 L228.177083,36.5695187 L174.350694,0 L166.939815,0 L0,247.03877 L0,254.430481 L53.8263889,291 L61.2372685,291 L155.628472,151.335561 L155.628472,177.790107 L108.822917,247.03877 L108.822917,254.430481 L162.649306,291 L170.060185,291 L239.878472,187.516043 L239.878472,180.124332 L186.052083,143.554813 Z M283.173611,0 L275.762731,0 L192.68287,122.935829 L192.68287,130.32754 L246.509259,166.897059 L253.920139,166.897059 L337,43.9612299 L337,36.5695187 L283.173611,0 Z"
                                            id="Shape"></path>
                                    </g>
                                    <g id="o" transform="translate(0, 130)">
                                        <path
                                            d="M283.173611,0 L275.762731,0 L251.189815,36.1804813 L227.787037,36.1804813 L174.350694,0 L166.939815,0 L0,247.03877 L0,254.430481 L53.8263889,291 L61.2372685,291 L85.8101852,254.819519 L109.212963,254.819519 L162.649306,291 L170.060185,291 L337,43.9612299 L337,36.5695187 L283.173611,0 Z M109.603009,245.871658 L109.603009,219.417112 L227.396991,45.1283422 L227.396991,71.5828877 L109.603009,245.871658 Z"
                                            id="Shape"></path>
                                    </g>
                                </g>
                            </svg>
                        </h1>
                    </FadeIn>
                </div>
                <div className="container mx-auto">
                    <div className="grid grid-cols-12 items-end gap-4">
                        <div className="my-0 col-span-4 md:col-span-6">
                            <FadeIn delay="0.05">
                                <p className="uppercase font-bold text-mint">Welcome</p>
                            </FadeIn>
                        </div>
                        <div className="col-span-8 md:col-span-6 max-w-[480px] relative">
                            <FadeIn delay="0.1">
                                <p>
                                    Elevating non-profits and startups to new heights with 15 years of design and development
                                    expertise.
                                </p>
                                <p>
                                    Delivering good ideas, responsive design, and clean code to meet the needs of creative
                                    directors, marketers, and business owners.
                                </p>
                            </FadeIn>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
