gsap.registerPlugin(ScrollTrigger);

const fadeOpen2 = gsap.timeline({ defaults: { duration: 1 } });
fadeOpen2.from(".gsap__title", { opacity: 0, x: -100 })