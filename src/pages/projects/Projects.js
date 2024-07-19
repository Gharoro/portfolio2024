import React, { Component } from "react";
import { Fade } from "react-reveal";
import CalendarHeatmap from "react-calendar-heatmap";
import "./Experience.css";
import { githubData, projects, projectsHeader } from "../../portfolio.js";
import ProjectsImg from "./ProjectsImg.js";
import openUrlInNewTab from "../../utils.js";
import "react-calendar-heatmap/dist/styles.css";

class Projects extends Component {
  render() {
    const theme = this.props.theme;
    const formattedData = githubData.contributions.map((contribution) => ({
      date: contribution.date,
      count: contribution.count,
    }));
    return (
      <div className="experience-main" id="projects">
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
        <Fade right duration={2000} distance="40px">
          {projects.data.map((project, i) => {
            return (
              <div
                key={i}
                onClick={() => openUrlInNewTab(project.link)}
                className="experience-wrapper"
              >
                <div
                  className="project-box"
                  style={{
                    backgroundColor: `${theme.body}`,
                  }}
                >
                  <img alt="website" src={project.image} />
                  <div>
                    <h2>{project.title}</h2>
                    <p>{project.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </Fade>

        <div className="github-data">
          <div className="certs-header-div">
            <Fade bottom duration={2000} distance="20px">
              <h1 className="certs-header" style={{ color: theme.text }}>
                Github Contributions
              </h1>
            </Fade>
          </div>
          <p>{githubData.total.lastYear} contributions in the last year</p>
          <CalendarHeatmap
            startDate={new Date("2023-07-16")}
            endDate={new Date("2024-07-15")}
            values={formattedData}
            classForValue={(value) => {
              if (!value) {
                return "color-empty";
              }
              return `color-github-${value.count}`;
            }}
          />
        </div>
      </div>
    );
  }
}

export default Projects;
