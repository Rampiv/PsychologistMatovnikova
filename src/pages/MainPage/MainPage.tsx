import "./MainPage.scss"
import heroImg from "@assets/hero.webp"
import psyImg from "@assets/psy.webp"
import { FamilyImg } from "@assets/FamilyImg"
import { Link } from "react-router"
import { useHeroAnimations } from "../../hooks/useHeroAnimations"
import { useWorkAnimations } from "../../hooks/useWorkAnimation"
import { IndividualImg } from "@assets/IndividualImg"
import { GroupImg } from "@assets/GroupImg"
import { TraningImg } from "@assets/TraningImg"

const heroList = [
  {
    num: "Ψ",
    text: "Высшее психологическое образование",
  },
  {
    num: "🎓",
    text: "Повышение квалификации",
  },
  {
    num: "6+",
    text: (
      <>
        Больше 6 лет практического <br />
        опыта
      </>
    ),
  },
  {
    num: "💡",
    text: <>Регулярная супервизия и&nbsp;личная терапия</>,
  },
]

const workList = [
  {
    img: IndividualImg,
    name: "Индивидуальное консультирование",
    descr:
      "Форма психотерапевтической помощи, направленная на разрешение проблем, влияющих на атмосферу в семье и устойчивость отношений",
    link: "",
  },
  {
    img: FamilyImg,
    name: "Семейная терапия",
    descr:
      "Форма психотерапевтической помощи, направленная на разрешение проблем, влияющих на атмосферу в семье и устойчивость отношений",
    link: "",
  },
  {
    img: GroupImg,
    name: "Групповая терапия",
    descr:
      "Форма психотерапевтической помощи, направленная на разрешение проблем, влияющих на атмосферу в семье и устойчивость отношений",
    link: "",
  },
  {
    img: TraningImg,
    name: "Мастерские и тренинги",
    descr:
      "Форма психотерапевтической помощи, направленная на разрешение проблем, влияющих на атмосферу в семье и устойчивость отношений",
    link: "",
  },
]

export const MainPage = () => {
  useHeroAnimations()
  useWorkAnimations()
  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="section__container">
            <div className="hero__first-container">
              <h1 className="hero__h1">С&nbsp;любовью и&nbsp;пониманием</h1>
              <div className="hero__content">
                <img
                  src={psyImg}
                  alt="Картинка заглушка"
                  className="hero__img"
                />
                <div className="hero__content-inner">
                  <p className="hero__text">
                    Меня зовут Маргарита, я клинический психолог и
                    гештальт-терапевт
                  </p>
                  <div className="hero__content-numbers">
                    <ul className="hero__list">
                      {heroList.map((item, index) => {
                        return (
                          <li className="hero__item" key={index}>
                            <p className="hero__item-numbers">{item.num}</p>
                            <p className="hero__item-text">{item.text}</p>
                          </li>
                        )
                      })}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <img
              src={psyImg}
              alt="Фотография психолога"
              className="hero__psychologist"
            />
          </div>
        </div>
      </section>
      <section className="work">
        <div className="container">
          <div className="section__container">
            <ul className="work__list">
              {workList.map((item, index) => {
                return (
                  <li className="work__item" key={index}>
                    <ul className="work__inner-list">
                      <li className="work__inner-img work__inner-item">
                        {item.img()}
                      </li>
                      <li className="work__inner-name work__inner-item">
                        {item.name}
                      </li>
                      <li className="work__inner-descr work__inner-item">
                        {item.descr}
                      </li>
                      <li className="work__inner-item work__inner-item">
                        <Link to={item.link} className="work__link">
                          Узнать&nbsp;подробнее
                        </Link>
                      </li>
                    </ul>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}
