var text = document.querySelector("#container-text");
var goToTop = document.querySelector("#container-gallery-info-action");
var endText = document.querySelector("#container-gallery-info")
var lenis;

function lenisScroll(){
    lenis = new Lenis({
        lerp: 0.08,
        smoothWheel1: true,
    });

    lenis.on('scroll', ({scroll}) => {
        text.style.transform = `translate3D(${-scroll}px, 0, 0)`;
    });

    function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);
};

lenisScroll();

goToTop.addEventListener("click", () => lenis.scrollTo("#main", { lerp: 0.02 }));



