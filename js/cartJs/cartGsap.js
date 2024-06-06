gsap.registerPlugin(ScrollTrigger);

const fadeOpen2 = gsap.timeline({ defaults: { duration: .75 } });
fadeOpen2.from(".gsap__title", { opacity: 0, x: -100 })
        .from(".gsap__text", { opacity: 0, x: -100 })
        .from(".cart-summary", { opacity: 0, y: 100 })