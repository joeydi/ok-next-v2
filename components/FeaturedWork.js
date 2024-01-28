"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Image from "next/image";

import styles from "./FeaturedWork.module.scss";

export default function FeaturedWork() {
    const sectionRef = useRef();

    useGSAP(
        () => {
            ScrollTrigger.create({
                trigger: ".panel-1",
                pin: true,
                pinSpacing: true,
                start: "center center",
                end: "+=100%",
                markers: true,
            });
        },
        {
            scope: sectionRef,
        }
    );

    return (
        <section ref={sectionRef} className="min-h-screen">
            {/* <div className={styles.heading}>
                </div> */}
            <div className="panel-1 w-full min-h-screen section-padding flex flex-col justify-center">
                <div className="container">
                    <h2 className="h4">Columbia Capital</h2>
                    <Image className="w-full" src="/columbia-capital.jpg" width="1755" height="1170" alt="" />
                </div>
            </div>
            <div className="panel-2 w-full min-h-screen section-padding flex flex-col justify-center">
                <div className="container">
                    <h2 className="h4">Education Progress Meter</h2>
                    <Image className="w-full" src="/efa-education-progress-meter.jpg" width="1755" height="1169" alt="" />
                </div>
            </div>
            <div className="panel-3 w-full min-h-screen section-padding flex flex-col justify-center">
                <div className="container">
                    <h2 className="h4">Steadkey Mortgage</h2>
                    <Image className="w-full" src="/steadkey.jpg" width="1360" height="1020" alt="" />
                </div>
            </div>
        </section>
    );
}
