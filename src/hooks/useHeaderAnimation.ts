import { useEffect } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export const useHeaderAnimations = () => {
  useEffect(() => {
    const workTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".header",
        start: "top 80%",
      },
    })
    workTl.fromTo(
      ".header",
      {
        y: -100,
        ease: "power3.out",
      },
      {
        y: 0,
        duration: 1,
        ease: "power3.out",
      },
    )

    // Очистка
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  })
}
