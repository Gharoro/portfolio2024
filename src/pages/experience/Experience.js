import React, { Component } from "react";
import { Fade } from "react-reveal";
// import ExperienceAccordion from "../../containers/experienceAccordion/ExperienceAccordion.js";
import "./Experience.css";
import { experience } from "../../portfolio.js";
import ExperienceImg from "./ExperienceImg";
import ExperienceCard from "../../components/experienceCard/ExperienceCard.js";
class Experience extends Component {
  render() {
    const theme = this.props.theme;
    const sections = experience["sections"];
    const volunteers = experience["volunteers"];
    return (
      <div className="experience-main" id="experience">
        <div className="basic-experience">
          <Fade bottom duration={2000} distance="40px">
            <div className="experience-heading-div">
              <div className="experience-heading-text-div">
                <h1
                  className="experience-heading-text"
                  style={{ color: theme.text }}
                >
                  {experience.title}
                </h1>
                <h3
                  className="experience-heading-sub-text"
                  style={{ color: theme.text }}
                >
                  {experience["subtitle"]}
                </h3>
                <p
                  className="experience-header-detail-text subTitle"
                  style={{ color: theme.secondaryText }}
                >
                  {experience["description"]}
                </p>
              </div>
              <div className="experience-heading-img-div">
                <ExperienceImg theme={theme} />
              </div>
            </div>
          </Fade>
        </div>
        <div className="certs-header-div">
          <Fade bottom duration={2000} distance="20px">
            <h1 className="certs-header" style={{ color: theme.text }}>
              Work
            </h1>
          </Fade>
        </div>
        {sections.map((section) => {
          return section["experiences"].map((experience, index) => {
            return (
              <div className="experience-wrapper">
                <ExperienceCard
                  index={index}
                  totalCards={section["experiences"].length}
                  experience={experience}
                  theme={theme}
                />
              </div>
            );
          });
        })}
        <div className="certs-header-div" style={{ marginTop: "30px" }}>
          <Fade bottom duration={2000} distance="20px">
            <h1 className="certs-header" style={{ color: theme.text }}>
              Volunteership
            </h1>
          </Fade>
        </div>
        {volunteers.map((section) => {
          return section["experiences"].map((experience, index) => {
            return (
              <div className="experience-wrapper">
                <ExperienceCard
                  index={index}
                  totalCards={section["experiences"].length}
                  experience={experience}
                  theme={theme}
                />
              </div>
            );
          });
        })}
      </div>
    );
  }
}

export default Experience;
