import type { JSX } from "react"
import { Link } from "react-router"
import { CaretRightOutlined } from "@ant-design/icons"
import "./Accordion.scss"

interface CollapseHeaderProps {
  img: () => JSX.Element
  name: string
}

export const CollapseHeader = ({ img, name }: CollapseHeaderProps) => {
  return (
    <div className="work__collapse-header">
      <div className="work__header-img">{img()}</div>
      <h3 className="work__header-name">{name}</h3>
    </div>
  )
}

interface CollapseContentProps {
  descr: string
  link: string
}

export const CollapseContent = ({ descr, link }: CollapseContentProps) => {
  return (
    <div className="work__collapse-content">
      <p className="work__content-descr">{descr}</p>
      <Link to={link} className="work__link">
        Узнать&nbsp;подробнее
      </Link>
    </div>
  )
}

export const CustomExpandIcon: React.FC<{ isActive: boolean }> = ({
  isActive,
}) => {
  return (
    <CaretRightOutlined
      style={{
        fontSize: "24px",
        color: "rgb(226, 178, 157)",
        transition: "transform 0.3s",
        transform: isActive ? "rotate(90deg)" : "rotate(0deg)",
      }}
    />
  )
}
