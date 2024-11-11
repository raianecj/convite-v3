// Registro do plugin ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Animação para o título principal na seção de entrada
gsap.from(".hero__title", {
    duration: 1.5,
    y: -50,
    opacity: 0,
    ease: "power3.out",
    scrollTrigger: {
        trigger: ".hero__title",   // Inicia quando o elemento ".hero__title" aparece na tela
        start: "top 80%",          // Inicia quando o topo do título atinge 80% da altura da tela
    }
});

gsap.from(".hero__text", {
    duration: 1.5,
    y: -50,
    opacity: 0,
    ease: "power3.out",
        trigger: ".hero__title",   // Inicia quando o elemento ".hero__title" aparece na tela
        start: "top 80%",          // Inicia quando o topo do título atinge 80% da altura da tela
});

// Animação para o título da seção Local do evento
gsap.from(".location__title", {
    duration: 1.5,
    x: -100,
    opacity: 0,
    ease: "power3.out",
    scrollTrigger: {
        trigger: ".location__title", // Inicia quando o título ".location__title" aparece na tela
        start: "top 90%",            // Inicia quando o topo do título atinge 90% da altura da tela
    }
});

// Exemplo de animação para o texto da seção Local do evento
gsap.from(".location iframe", {
    duration: 1.5,
    scale: 0.9,
    opacity: 0,
    ease: "power3.out",
    scrollTrigger: {
        trigger: ".location iframe",
        start: "top 95%",
    }
});

gsap.from (".btn-confirmar-presenca", {
    duration: 1.5,
    y: -100,           // Move o título horizontalmente
    opacity: 0,
    delay: 0.5,        // Aguarda 0,5 segundos antes de começar
    ease: "power3.out",
    scrollTrigger: {
        trigger: ".location iframe", // Inicia quando o título ".location__title" aparece na tela
        start: "top 90%",            // Inicia quando o topo do título atinge 90% da altura da tela
    }
});