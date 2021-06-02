import React from "react";
import profilePic from "../../assets/images/profile picture.jpg";

const About = () => (
  <div className="about-me">
    <img src={profilePic} alt="profile" />
    <div>
      <h1>About Me</h1>
      <p>
        I’m a civil engineer and web developer with an interest in designing
        modern and robust web pages. For 5 years as an engineer I’ve kept a keen
        eye for detail in every project that I oversaw. I feel qualified to
        bring my talents as a web developer to your respected organization. When
        I’m not on the job, I love photography, cooking up new recipes for loved
        ones and friends, and expanding my worldview by visiting new places.
      </p>
    </div>
  </div>
);

export default About;
