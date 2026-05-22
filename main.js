/* global gsap */

const stage = document.getElementById("stage");
const heart = document.querySelector(".heart-seal");
const envelope = document.querySelector(".envelope-wrapper");
const letter = document.querySelector(".letter");
const duduGif = document.querySelector(".dudu-gif");

// GSAP hover effect for the heart seal
heart.addEventListener("mouseenter", () => gsap.to(heart, { scale: 1.1, duration: 0.2 }));
heart.addEventListener("mouseleave", () => gsap.to(heart, { scale: 1, duration: 0.2 }));

let isMagneticActive = false;

// Main animation timeline
const tl = gsap.timeline({ paused: true });

const intro = gsap.timeline({ 
  paused: true,
  onComplete: () => {
    isMagneticActive = true;
  }
});
intro.fromTo(".envelope-wrapper", { y: "-100vh", opacity: 0 }, { opacity: 1, y: "0vh", duration: 1.2, ease: "back.out(1.2)" }, 0);

tl.to(".heart-seal", { scale: 0, duration: 0.3, ease: "back.in(1.5)" })
  .to(".envelope-flap", { rotationX: 180, duration: 0.6, ease: "power1.inOut" })
  .set(".envelope-flap", { zIndex: 1 }) 
  .to(".letter", { yPercent: -65, duration: 0.8, ease: "power2.out" })
  .set(".letter", { zIndex: 10 }) 
  .to(".letter", { yPercent: -12, scale: 1.22, duration: 0.6, ease: "power2.out" })
  .to(".letter-backdrop", { opacity: 1, duration: 0.5 }, "-=0.2")
  .to(".dudu-gif", { opacity: 1, pointerEvents: "auto", duration: 0.5 }, "+=0.2");

heart.addEventListener("click", () => {
  heart.style.pointerEvents = "none";
  tl.play();
});

// Use DOMContentLoaded to ensure it runs immediately when ready
document.addEventListener("DOMContentLoaded", () => {
  intro.play();
});

if (duduGif) {
  duduGif.addEventListener("click", (e) => {
    const next = duduGif.dataset.next;
    if (next) {
      const wipe = document.createElement("div");
      wipe.className = "heart-wipe";
      // Position at the mouse click coordinates
      wipe.style.left = `${e.clientX}px`;
      wipe.style.top = `${e.clientY}px`;
      document.body.appendChild(wipe);

      // Ensures it remains centered correctly while scaling
      gsap.set(wipe, { xPercent: -50, yPercent: -50, scale: 0 });
      gsap.to(wipe, {
        scale: 50, // Scale enough to overfill the view
        duration: 1.2,
        ease: "power2.in",
        onComplete: () => {
          window.location.assign(next);
        }
      });
    }
  });
}

const magneticTargets = [
  { element: envelope, maxOffset: 12 },
  { element: letter, maxOffset: 8 },
];

const magneticSetters = magneticTargets.map(({ element }) => {
  if (!element) return null;
  return {
    element,
    xTo: gsap.quickTo(element, "x", { duration: 0.25, ease: "power2.out" }),
    yTo: gsap.quickTo(element, "y", { duration: 0.25, ease: "power2.out" }),
  };
});

stage.addEventListener("mousemove", (event) => {
  if (!isMagneticActive) return;
  const { clientX, clientY } = event;

  magneticSetters.forEach((setter, index) => {
    if (!setter) return;
    const { element, xTo, yTo } = setter;
    const { maxOffset } = magneticTargets[index];
    const rect = element.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const deltaX = (clientX - centerX) / rect.width;
    const deltaY = (clientY - centerY) / rect.height;

    xTo(deltaX * maxOffset);
    yTo(deltaY * maxOffset);
  });
});

stage.addEventListener("mouseleave", () => {
  if (!isMagneticActive) return;
  magneticSetters.forEach((setter) => {
    if (!setter) return;
    setter.xTo(0);
    setter.yTo(0);
  });
});

stage.dataset.ready = "true";
