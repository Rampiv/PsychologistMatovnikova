import "./Header.scss"
import { Logo } from "@assets/Logo"
import { Link } from "react-router"

export const Header = () => {
  const navigation = [
    {
      name: "Главная",
      link: "/",
    },
    {
      name: "О нас",
      link: "/about",
    },
    {
      name: "Услуги",
      link: "/services",
    },
    {
      name: "Контакты",
      link: "/contacts",
    },
    {
      name: "Вопросы и ответы",
      link: "/FAQ",
    },
    {
      name: "Ещё",
      link: "/another",
    },
  ]
  return (
    <header className="header">
      <div className="container">
        <div className="header__content">
          <div className="header__naming">
            <Link to="/" className="header__img-link">
              <Logo classNaming="header__img" />
            </Link>
            <div className="header__name">
              <h2 className="header__h2">
                <Link to="/" className="header__h2-link">
                  Название сайта
                </Link>
              </h2>
              <span className="header__span">Услуги психолога</span>
            </div>
          </div>
          <nav className="header__nav nav">
            <ul className="nav__list">
              {navigation.map((item, index) => {
                return (
                  <li key={index} className="nav__item">
                    <Link to={item.link} className="nav__link">{item.name}</Link>
                  </li>
                )
              })}
            </ul>
          </nav>
          <Link to={"/contacts"} className="contacts">
            Наши контакты
          </Link>
        </div>
      </div>
    </header>
  )
}
