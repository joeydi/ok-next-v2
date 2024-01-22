"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import styles from "./Map.module.scss";

export default function Map() {
    const mapNode = useRef(null);
    const marker = useRef(null);
    const initial = [74.0179, 40.7044];
    const newyork = [-74.0179, 40.7044];
    const vermont = [-72.6798, 43.9215];
    const burlington = [-73.1999, 44.4782];
    const office = [-73.2179, 44.4732];
    const topLeftCornerRef = useRef();
    const bottomRightCornerRef = useRef();

    useEffect(() => {
        if (typeof window === "undefined" || mapNode.current === null) {
            return;
        }

        gsap.registerPlugin(DrawSVGPlugin);

        const mapboxMap = new mapboxgl.Map({
            container: mapNode.current,
            accessToken: "pk.eyJ1Ijoiam9leWRpIiwiYSI6IlM5SE1BT0kifQ.gp3XWWKTK3xpw6dkg-zeUg",
            style: "mapbox://styles/joeydi/clrpe9lmz007401qqcrsngr43",
            center: initial,
            zoom: 4,
        });

        let initialTimestamp;
        const rotateCamera = (timestamp) => {
            // clamp the rotation between 0 -360 degrees
            // Divide timestamp by 100 to slow rotation to ~10 degrees / sec
            if (timestamp) {
                if (!initialTimestamp) {
                    initialTimestamp = timestamp;
                }

                const delta = initialTimestamp - timestamp;
                mapboxMap.rotateTo((delta / 100) % 360, { duration: 0 });
            }

            // Request the next frame of the animation.
            requestAnimationFrame(rotateCamera);
        };

        const initTimeline = () => {
            const timeline = gsap.timeline();

            // timeline.set(topLeftCornerRef.current, {
            //     transformOrigin: "0% 0%",
            // });

            // timeline.set(bottomRightCornerRef.current, {
            //     transformOrigin: "100% 100%",
            // });

            timeline.to(
                mapNode.current,
                {
                    opacity: 1,
                    duration: 0.5,
                },
                0
            );

            timeline.fromTo(
                mapNode.current.querySelector(".mapboxgl-canvas"),
                {
                    opacity: 0,
                    scale: 0.75,
                },
                {
                    opacity: 1,
                    scale: 1,
                    duration: 1,
                    ease: "expo.out",
                },
                0
            );

            timeline.add(() => {
                mapboxMap.flyTo({
                    center: office,
                    zoom: 4,
                    speed: 0.5,
                });
            }, 0);

            timeline.to(
                [topLeftCornerRef.current, bottomRightCornerRef.current],
                {
                    opacity: 1,
                    duration: 0.075,
                },
                3.5
            );

            timeline.to([topLeftCornerRef.current, bottomRightCornerRef.current], {
                opacity: 0,
                duration: 0.075,
            });

            timeline.to([topLeftCornerRef.current, bottomRightCornerRef.current], {
                opacity: 1,
                duration: 0.075,
            });

            timeline.to(topLeftCornerRef.current, {
                xPercent: -100,
                yPercent: -100,
                opacity: 0,
                duration: 0.5,
                ease: "expo.out",
            });

            timeline.to(
                bottomRightCornerRef.current,
                {
                    xPercent: 100,
                    yPercent: 100,
                    opacity: 0,
                    duration: 0.5,
                    ease: "expo.out",
                },
                "-=0.5"
            );

            timeline.set([topLeftCornerRef.current, bottomRightCornerRef.current], {
                xPercent: 0,
                yPercent: 0,
            });

            timeline.add(() => {
                mapboxMap.flyTo({
                    center: office,
                    zoom: 7,
                });
            }, 4);

            timeline.to(
                [topLeftCornerRef.current, bottomRightCornerRef.current],
                {
                    opacity: 1,
                    duration: 0.075,
                },
                5.5
            );

            timeline.to([topLeftCornerRef.current, bottomRightCornerRef.current], {
                opacity: 0,
                duration: 0.075,
            });

            timeline.to([topLeftCornerRef.current, bottomRightCornerRef.current], {
                opacity: 1,
                duration: 0.075,
            });

            timeline.to(topLeftCornerRef.current, {
                xPercent: -100,
                yPercent: -100,
                opacity: 0,
                duration: 0.5,
                ease: "expo.out",
            });

            timeline.to(
                bottomRightCornerRef.current,
                {
                    xPercent: 100,
                    yPercent: 100,
                    opacity: 0,
                    duration: 0.5,
                    ease: "expo.out",
                },
                "-=0.5"
            );

            timeline.set([topLeftCornerRef.current, bottomRightCornerRef.current], {
                xPercent: 0,
                yPercent: 0,
            });

            timeline.add(() => {
                mapboxMap.flyTo({
                    center: office,
                    zoom: 12,
                });
            }, 6);

            timeline.to(
                [topLeftCornerRef.current, bottomRightCornerRef.current],
                {
                    opacity: 1,
                    duration: 0.075,
                },
                8.5
            );

            timeline.to([topLeftCornerRef.current, bottomRightCornerRef.current], {
                opacity: 0,
                duration: 0.075,
            });

            timeline.to([topLeftCornerRef.current, bottomRightCornerRef.current], {
                opacity: 1,
                duration: 0.075,
            });

            timeline.to(topLeftCornerRef.current, {
                xPercent: -100,
                yPercent: -100,
                opacity: 0,
                duration: 0.5,
                ease: "expo.out",
            });

            timeline.to(
                bottomRightCornerRef.current,
                {
                    xPercent: 100,
                    yPercent: 100,
                    opacity: 0,
                    duration: 0.5,
                    ease: "expo.out",
                },
                "-=0.5"
            );

            timeline.set([topLeftCornerRef.current, bottomRightCornerRef.current], {
                xPercent: 0,
                yPercent: 0,
            });

            timeline.add(() => {
                mapboxMap.flyTo({
                    center: office,
                    zoom: 18,
                    pitch: 60,
                });
            }, 9);

            timeline.to(
                [topLeftCornerRef.current, bottomRightCornerRef.current],
                {
                    opacity: 1,
                    duration: 0.075,
                },
                11
            );

            timeline.to([topLeftCornerRef.current, bottomRightCornerRef.current], {
                opacity: 0,
                duration: 0.075,
            });

            timeline.to([topLeftCornerRef.current, bottomRightCornerRef.current], {
                opacity: 1,
                duration: 0.075,
            });

            timeline.fromTo(
                topLeftCornerRef.current.querySelector("polyline"),
                {
                    drawSVG: "0% 100%",
                },
                {
                    drawSVG: "100% 100%",
                    duration: 2,
                    ease: "power4.out",
                }
            );

            timeline.fromTo(
                bottomRightCornerRef.current.querySelector("polyline"),
                {
                    drawSVG: "0% 100%",
                },
                {
                    drawSVG: "100% 100%",
                    duration: 2,
                    ease: "power4.out",
                },
                "-=2"
            );

            timeline.add(() => {
                rotateCamera();
            }, 11.5);
        };

        marker.current = new mapboxgl.Marker({ color: "#4d8396" });

        mapboxMap.on("load", () => {
            initTimeline();
        });

        mapboxMap.on("click", (e) => {
            console.log(e.lngLat);
        });

        return () => {
            mapboxMap.remove();
        };
    }, []);

    return (
        <div className="w-full h-full relative">
            <div ref={mapNode} className="w-full h-full opacity-0" />
            <div className={styles.mapui}>
                <svg ref={topLeftCornerRef} className={styles.topleft} width="100px" height="100px" viewBox="0 0 100 100">
                    <polyline
                        fill="none"
                        stroke="#f0f0f0"
                        strokeWidth="30"
                        strokeLinejoin="round"
                        points="-2.85362012e-14 15 50 15 85 50 85 100"></polyline>
                </svg>
                <svg ref={bottomRightCornerRef} className={styles.bottomright} width="100px" height="100px" viewBox="0 0 100 100">
                    <polyline
                        fill="none"
                        stroke="#f0f0f0"
                        strokeWidth="30"
                        strokeLinejoin="round"
                        points="-2.85362012e-14 15 50 15 85 50 85 100"></polyline>
                </svg>
            </div>
        </div>
    );
}
