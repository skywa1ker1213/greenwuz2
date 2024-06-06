gsap.registerPlugin(ScrollTrigger);

const fadeOpen2 = gsap.timeline({ defaults: { duration: .35 } });
fadeOpen2.from(".gsap__title", { opacity: 0, x: -100 })
    .from(".gsap__text", { opacity: 0, x: -100 })
    .from(".gsap__txt", { opacity: 0, y: 100 })
    .from(".fresh__img", { opacity: 0, y: 100 })
    .from(".fresh-bg", { opacity: 0, y: 100 })
    .from(".fresh-bg2", { opacity: 0, y: 100 })
    .from(".fresh-bg3", { opacity: 0, y: 100 })