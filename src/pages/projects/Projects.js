import React, { Component } from "react";
import { Fade } from "react-reveal";
import "./Experience.css";
import { experience, projectsHeader } from "../../portfolio.js";
import ProjectsImg from "./ProjectsImg.js";
class Projects extends Component {
  render() {
    const theme = this.props.theme;
    const sections = experience["sections"];
    return (
      <div className="experience-main" id="experience">
        <div className="basic-experience" style={{ marginBottom: "4rem" }}>
          <Fade bottom duration={2000} distance="40px">
            <div className="experience-heading-div">
              <div className="experience-heading-img-div">
                <ProjectsImg theme={theme} />
              </div>
              <div className="experience-heading-text-div">
                <h1
                  className="experience-heading-text"
                  style={{ color: theme.text }}
                >
                  {projectsHeader.title}
                </h1>
                <h3
                  className="experience-heading-sub-text"
                  style={{ color: theme.text }}
                >
                  Some of my works
                </h3>
                <p
                  className="experience-header-detail-text subTitle"
                  style={{ color: theme.secondaryText }}
                >
                  {projectsHeader.description}
                </p>
              </div>
            </div>
          </Fade>
        </div>

        {sections.map((section) => {
          return section["experiences"].map((experience, index) => {
            return (
              <div className="experience-wrapper">
                <div
                  className="project-box"
                  style={{
                    backgroundColor: `${theme.body}`,
                  }}
                >
                  <div>
                    <h2>{experience.title}</h2>
                    <p>{experience.description}</p>
                  </div>
                  <img
                    alt="website"
                    src="https://plus.unsplash.com/premium_photo-1679079456083-9f288e224e96?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHdlYnNpdGVzfGVufDB8fDB8fHww"
                  />
                </div>
              </div>
            );
          });
        })}
      </div>
    );
  }
}

export default Projects;
