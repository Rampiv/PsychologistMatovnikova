import "./MainPage.scss"
import psyImg from "@assets/psy.webp"
import { FamilyImg } from "@assets/FamilyImg"
import { useHeroAnimations } from "../../hooks/useHeroAnimations"
import { useWorkAnimations } from "../../hooks/useWorkAnimation"
import { IndividualImg } from "@assets/IndividualImg"
import { GroupImg } from "@assets/GroupImg"
import { TraningImg } from "@assets/TraningImg"
import { Collapse, type CollapseProps } from "antd"
import {
  CollapseContent,
  CollapseHeader,
  CustomExpandIcon,
} from "../../components/Accordion/Accordion"

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

  const collapseItems: CollapseProps["items"] = workList.map((item, index) => ({
    key: String(index + 1),
    label: <CollapseHeader img={item.img} name={item.name} />,
    children: <CollapseContent descr={item.descr} link={item.link} />,
  }))

  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="section__container">
            <div className="hero__first-container">
              <h2 className="hero__h2">С&nbsp;любовью и&nbsp;пониманием</h2>
              <div className="hero__content">
                <p className="hero__text">
                  Меня зовут Маргарита, я клинический психолог и
                  гештальт-терапевт
                </p>
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
            <picture className="hero__picture">
              <img
                src={psyImg}
                alt="Фотография психолога"
                className="hero__psychologist"
              />
            </picture>
          </div>
        </div>
      </section>
      <section className="work">
        <div className="container">
          <div className="section__container">
            <Collapse
              accordion
              ghost
              items={collapseItems}
              className="work__collapse"
              expandIcon={({ isActive }) => (
                <CustomExpandIcon isActive={isActive ?? false} />
              )}
            />
          </div>
        </div>
      </section>
    </>
  )
}
