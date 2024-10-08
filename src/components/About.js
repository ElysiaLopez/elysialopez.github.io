import React, { Component } from "react";

class About extends Component {
  render() {
    if (this.props.sharedBasicInfo) {
      var profilepic = "images/" + this.props.sharedBasicInfo.image;
    }
    if (this.props.resumeBasicInfo) {
      var sectionName = this.props.resumeBasicInfo.section_name.about;
      var hello = this.props.resumeBasicInfo.description_header;
      var about = this.props.resumeBasicInfo.description;
    }

    return (
      <section id="about">
        <div className="col-md-12">
          <h1 style={{ color: "black" }}>
            <span>{sectionName}</span>
          </h1>
          <br/>
          <br/>
          <br/>
          <div className="row center mx-auto mb-">
            <div className="col-start-7 mb-5 center">
              <div className="polaroid">
                <span style={{ cursor: "auto" }}>
                  <img
                    className="w-96 h-96"
                    src={profilepic}
                    alt="Avatar placeholder"
                  />
                </span>
              </div>
            </div>

            <div className="col-md-8 center">
              <div className="col-md-10">
                <div className="card">
                  <div className="card-header">
                    <span
                      className="iconify"
                      data-icon="emojione:red-circle"
                      data-inline="false"
                    ></span>{" "}
                    &nbsp;{" "}
                    <span
                      className="iconify"
                      data-icon="twemoji:yellow-circle"
                      data-inline="false"
                    ></span>{" "}
                    &nbsp;{" "}
                    <span
                      className="iconify"
                      data-icon="twemoji:green-circle"
                      data-inline="false"
                    ></span>
                  </div>
                  <div
                    className="card-body font-trebuchet text-justify ml-3 mr-3"
                    style={{
                      height: "auto",
                      fontSize: "132%",
                      lineHeight: "200%",
                    }}
                  >
                    <br />
                    <span className="wave">{hello} :) </span>
                    <br />
                    <br />
                    {about}
                    <br/>
                    <br/>
                    Feel free to contact me at my email: elysialopez@u.northwestern.edu
                    <br/>
                    <br/>
                    <div >
                      <a href="https://docs.google.com/document/d/1fvoKTflF5T2TWJK_zgRNNINvPapLvO1ZIDfIjrH9gVQ/edit?usp=sharing" target="_blank">
                        <button className="resume-button">View résumé</button> 
                      </a>
                    </div>
                  </div>
                </div>
                <br/>
                <br/>
                <br/> 
                <br/>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
