import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img04.jpg";
import projImg2 from "../assets/img/project-img03.jpg";
import projImg3 from "../assets/img/project-img05.jpg";

import projImg4 from "../assets/img/project-img05.jpg";
import projImg5 from "../assets/img/project-img2.png";
import projImg6 from "../assets/img/project-img3.png";

import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";
import css from "../assets/img/img21.png";
import java from "../assets/img/img15.png";
import javascript from "../assets/img/img16.png";
import html from "../assets/img/img19.png";
import python from "../assets/img/img20.png";

export const Projects = () => {
  const projects = [
    {
      title: "Salon Management System",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Train Reservation",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Library Management System",
      description: "Design & Development",
      imgUrl: projImg3,
    },
  ];

  const UI = [
    {
      title: "Salon Management System UI",
      description: "Design & Development",
      imgUrl: projImg4,
    },
    {
      title: "Train Reservation UI",
      description: "Design & Development",
      imgUrl: projImg5,
    },
    {
      title: "Library Management System UI",
      description: "Design & Development",
      imgUrl: projImg6,
    },

  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Languages</h2>
                  <div class="container1">
                    <div class="square yellow-square">
                      <div class="shadow-md hover:scale-105 duration-500 py-6 rounded-lg shadow-white-500">
                        <img src={java} alt="java" class="w-20 mx-auto" />
                        <p class="mt-4">Java</p>
                      </div>
                    </div>

                    <div class="square pink-square">
                      <div class="shadow-md hover:scale-105 duration-500 py-6 rounded-lg shadow-yellow-500">
                        <img src={python} alt="python" class="w-20 mx-auto" />
                        <p class="mt-4">Python</p>
                      </div>
                    </div>

                    <div class="square red-square">
                      <div class="shadow-md hover:scale-105 duration-500 py-6 rounded-lg shadow-orange-500">
                        <img
                          src={javascript}
                          alt="java script"
                          class="w-20 mx-auto"
                        />
                        <p class="mt-4">Java Script</p>
                      </div>
                    </div>

                    <div class="square blue-square">
                      <div class="shadow-md hover:scale-105 duration-500 py-6 rounded-lg shadow-orange1-500">
                        <img src={html} alt="html" class="w-20 mx-auto" />
                        <p class="mt-4">HTML</p>
                      </div>
                    </div>

                    <div class="square orange-square">
                      <div class="shadow-md hover:scale-105 duration-500 py-6 rounded-lg shadow-blue-500">
                        <img src={css} alt="css" class="w-20 mx-auto" />
                        <p class="mt-4">CSS</p>
                      </div>
                    </div>
                  </div>

                  <h2>Projects</h2>
                  <p>
                  I worked on a variety of projects, refining my technical skills and obtaining practical experience.
                  I helped with front-end development by using HTML, CSS, and JavaScript, as well as frameworks like React.js for dynamic interfaces.
                  In addition, I used Node.js and Express.js to integrate backend functions for rapid data retrieval. 
                  I used Git for version management and took an active role in code reviews and project planning. 
                  Overall, my internship provided me with great experience in web development and teamwork.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Projects</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">UI</Nav.Link>
                      </Nav.Item>
                      {/* <Nav.Item>
                        <Nav.Link eventKey="third">Tab 3</Nav.Link>
                      </Nav.Item> */}
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>

                      <Tab.Pane eventKey="second">
                        <Row>
                          {UI.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      {/* <Tab.Pane eventKey="section">
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Cumque quam, quod neque provident velit, rem
                          explicabo excepturi id illo molestiae blanditiis,
                          eligendi dicta officiis asperiores delectus quasi
                          inventore debitis quo.
                        </p>
                      </Tab.Pane> */}
                      {/* <Tab.Pane eventKey="third">
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Cumque quam, quod neque provident velit, rem
                          explicabo excepturi id illo molestiae blanditiis,
                          eligendi dicta officiis asperiores delectus quasi
                          inventore debitis quo.
                        </p>
                      </Tab.Pane> */}
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
