"use client";

import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { Draggable } from "gsap/dist/Draggable";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import styles from "./Header.module.scss";

export default function Header() {
  const router = useRouter();
  const pathname = usePathname();
  const headerRef = useRef();
  const containerRef = useRef();
  const backdropRef = useRef();
  const navRef = useRef();
  const navToggleRef = useRef();
  const navLinksRef = useRef();
  const linkHeight = 30;
  const links = [
    {
      title: "Okay Plus",
      href: "/",
    },
    {
      title: "Portfolio",
      href: "/portfolio",
    },
    {
      title: "Services",
      href: "/services",
    },
    {
      title: "Contact",
      href: "/contact",
    },
  ];

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

    // timeline.fromTo(navToggleRef.current, {});

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

  useEffect(() => {
    gsap.registerPlugin(Draggable);

    let activeIndex = 0;

    Draggable.create(navLinksRef.current, {
      type: "y",
      bounds: navRef.current,
      cursor: "grab",
      activeCursor: "grabbing",
      liveSnap: function (value) {
        return Math.round(value / linkHeight) * linkHeight;
      },
      onDrag: function () {
        const linkIndex = Math.abs(this.endY / linkHeight);

        if (linkIndex !== activeIndex) {
          activeIndex = linkIndex;
          const link = links[activeIndex];
          router.replace(link.href);
        }
      },
    });
  }, []);

  const clickHandler = (i) => {
    gsap.set(navLinksRef.current, {
      y: -linkHeight * i,
    });
  };

  // Update navLinks position on pathname change
  useEffect(() => {
    const activeLinkIndex = links.findIndex(({ href }) => href === pathname);
    if (activeLinkIndex !== -1) {
      gsap.set(navLinksRef.current, {
        y: -linkHeight * activeLinkIndex,
      });
    }
  }, [pathname]);

  return (
    <header ref={headerRef} className={styles.header}>
      <div ref={backdropRef} className={styles.backdrop}></div>
      <div ref={containerRef} className="container relative">
        <div className="grid grid-cols-2 gap-4">
          <nav ref={navRef} className={styles.nav}>
            {/* <button ref={navToggleRef} className={`${styles.navtoggle} uppercase font-black`}>Menu</button> */}
            <div ref={navLinksRef} className={`${styles.navlinks} flex flex-col items-start`}>
              {links.map((link, i) => (
                <Link
                  key={`link-${i}`}
                  className={`${styles.link} ${pathname == link.href ? styles.active : ""} uppercase font-black`}
                  href={link.href}
                  onClick={() => clickHandler(i)}>
                  {link.title}
                </Link>
              ))}
            </div>
          </nav>
          <p className="leading-5	m-0 uppercase text-mint font-black text-balance">Design &amp; Development For the Web</p>
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
