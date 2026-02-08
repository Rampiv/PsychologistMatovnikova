import { useEffect } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export const useHeroAnimations = () => {
  useEffect(() => {
    // анимации левого контейнера
    const firstContainerTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".hero__first-container",
      },
    })
    firstContainerTl.fromTo(
      ".hero__first-container",
      {
        opacity: 0,
        x: -500,
        ease: "power3.out",
      },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power3.out",
      },
    )
    // анимация появления психолога
    const psychologistTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".hero__psychologist",
      },
    })
    psychologistTl.fromTo(
      ".hero__psychologist",
      {
        opacity: 0,
        x: 500,
        ease: "power3.out",
      },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power3.out",
      },
    )
    // анимация появления блоков с плюсами
    const plusTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".hero__list",
      },
    })
    plusTl.fromTo(
      ".hero__item",
      {
        opacity: 0,
        y: 500,
        ease: "power3.out",
      },
      {
        opacity: 1,
        y: 0,
        stagger: 0.4,
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
