import { Col } from "react-bootstrap";
import git from "../assets/img/nav-icon3.svg";
import web from "../assets/img/nav-icon4.svg";


const ProjectCard = ({ title, description, imgUrl, link1, link2 }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <div className="links">
            <a href={link1}><img src={git} alt="" /></a>
            <a href={link2}><img src={web} alt="" /></a>
          </div>

        </div>
      </div>
    </Col>
  )
}
export default ProjectCard