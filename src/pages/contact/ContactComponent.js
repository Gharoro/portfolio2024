import React, { Component } from "react";
import Button from "../../components/button/Button";
import { Fade } from "react-reveal";
import "./ContactComponent.css";
import { contactPageData } from "../../portfolio.js";

const ContactData = contactPageData.contactSection;
class Contact extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="contact-main" id="contact">
        <div className="basic-contact">
          <Fade bottom duration={1000} distance="40px">
            <div className="contact-heading-div">
              <div className="contact-heading-img-div">
                <img
                  src={require(`../../assests/images/${ContactData["profile_image_path"]}`)}
                  alt=""
                />
              </div>
              <div className="contact-heading-text-div">
                <h1
                  className="contact-heading-text"
                  style={{ color: theme.text }}
                >
                  {ContactData["title"]}
                </h1>
                <p
                  className="contact-header-detail-text subTitle"
                  style={{ color: theme.secondaryText }}
                >
                  {ContactData["description"]}
                </p>
                <div className="resume-btn-div">
                  <Button
                    text="Send a Mail"
                    newTab={true}
                    href="mailto:gharoropureheart@gmail.com"
                    theme={theme}
                  />
                </div>
              </div>
            </div>
          </Fade>
        </div>
      </div>
    );
  }
}

export default Contact;
