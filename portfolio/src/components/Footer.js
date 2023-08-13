import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
//import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import Img01 from '../assets/img/img05.png';

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            <img src={Img01} alt="" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/isharapramod-ranaweera/"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://web.facebook.com/?stype=lo&jlou=AfdvTzGfz0SOWTKv-T_TnR4ptJmyufs9LmJLeQXoNO77FUcgdD-B0ONnv3Qapi0bx4HLPdjKqLOtYBTWEamfHzlu9oHas9k0isFWLrBXZnTMdQ&smuh=32498&lh=Ac-b4tJpsJrJUIdCAyk"><img src={navIcon2} alt="Icon" /></a>
              <a href="#"><img src={navIcon3} alt="Icon"/></a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
