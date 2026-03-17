gsap.registerPlugin(ScrollTrigger);

window.addEventListener("load", () => {
    // Hide Loader
    gsap.to(".loader", { duration: 1, yPercent: -100, ease: "power4.inOut" });

    // Hero Animations
    const heroTl = gsap.timeline({
        scrollTrigger: {
            trigger: ".hero",
            start: "top top",
            end: "bottom top",
            scrub: true,
            pin: ".hero-bg"
        }
    });

    heroTl.to(".hero-img", { scale: 1, opacity: 0.1, filter: "contrast(1)", ease: "none" })
          .to(".split-text", { y: -200, opacity: 0, stagger: 0.1 }, 0)
          .to(".hero-subtext", { opacity: 0, y: 50 }, 0);

    // Statement Section - Massive Parallax Floating Asset
    gsap.fromTo(".float-1 img", 
        { yPercent: -20, scale: 1.4 },
        {
            yPercent: 20,
            scale: 1,
            ease: "none",
            scrollTrigger: {
                trigger: ".statement",
                start: "top bottom",
                end: "bottom top",
                scrub: true
            }
        }
    );

    gsap.fromTo(".float-1", 
        { xPercent: 50, rotationZ: 10 },
        {
            xPercent: -10,
            rotationZ: -5,
            ease: "power2.out",
            scrollTrigger: {
                trigger: ".statement",
                start: "top 80%",
                end: "bottom 20%",
                scrub: true
            }
        }
    );

    // Text filling on scroll
    gsap.fromTo(".huge-text", 
        { xPercent: -50, color: "transparent" },
        { 
            xPercent: 10,
            color: "#fff",
            ease: "power3.inOut",
            scrollTrigger: {
                trigger: ".statement",
                start: "top 70%",
                end: "bottom 40%",
                scrub: true
            }
        }
    );

    // Showcase Section
    gsap.fromTo(".showcase-img", 
        { scale: 1.5, filter: "grayscale(100%)" },
        {
            scale: 1,
            filter: "grayscale(0%)",
            ease: "none",
            scrollTrigger: {
                trigger: ".showcase",
                start: "top bottom",
                end: "bottom top",
                scrub: true
            }
        }
    );

    gsap.from(".showcase-text > *", {
        y: 100,
        opacity: 0,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
            trigger: ".showcase",
            start: "top 50%"
        }
    });

    // Legacy Section background color shift
    gsap.to("body", {
        backgroundColor: "#1a0b12",
        scrollTrigger: {
            trigger: ".legacy",
            start: "top 60%",
            end: "bottom 40%",
            scrub: true
        }
    });
});
