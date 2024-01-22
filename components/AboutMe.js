"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import styles from "./AboutMe.module.scss";

export default function AboutMe() {
    const sectionRef = useRef();
    const imageRef = useRef();
    const contentRef = useRef();

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const timeline = gsap.timeline({
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top bottom",
                end: "bottom top",
                scrub: true,
            },
        });

        timeline.fromTo(
            imageRef.current,
            {
                scale: 1,
                y: -window.innerHeight / 8,
            },
            {
                scale: 1.25,
                y: window.innerHeight / 4,
                ease: "none",
            },
            0
        );

        timeline.fromTo(
            contentRef.current,
            {
                y: -window.innerHeight / 8,
            },
            {
                y: window.innerHeight / 4,
                ease: "none",
            },
            0
        );

        return () => timeline.kill();
    }, []);

    return (
        <section ref={sectionRef} className="section-margin overflow-hidden flex flex-col justify-center relative">
            <Image ref={imageRef} className="w-full" src="/me-and-marc.jpg" width="1875" height="1250" alt="" />
            <div className={styles.overlay}></div>
            <div className="absolute w-full h-full section-padding">
                <div className="container h-full">
                    <div className="md:flex h-full">
                        <div ref={contentRef} className="self-center w-1/2">
                            <h2 className="h3">
                                Hey, I’m Joe di Stefano
                                <br />
                                (the one on the left)
                            </h2>
                        </div>
                        <div className="self-end w-1/2 max-w-[480px]">
                            <p>
                                I&rsquo;m a digital design and development freelancer based in Burlington, VT. Throughout my
                                career, I&rsquo;ve worked with a wide variety of organizations, including startups, publicly
                                traded companies, and government agencies.
                            </p>
                            <Link className="font-bold uppercase text-mint" href="/contact">
                                Get In Touch
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
