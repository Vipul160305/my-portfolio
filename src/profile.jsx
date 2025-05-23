import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import profilePic from "/assets/profile.png"
import linkedinIcon from '/assets/linkedin.png';
import githubIcon from '/assets/github.png';

const Profile = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const openResume = () => {
    window.open('/assets/resume (2) (2).pdf');
  };

  const goToContact = () => {
    window.location.href = './#contact';
  };

  const goToLinkedIn = () => {
    window.location.href = 'https://www.linkedin.com/in/vipul-dhoraliya-13151b345/';
  };

  const goToGitHub = () => {
    window.location.href = 'https://github.com/Vipul160305';
  };

  return (
    <section id="profile">
      <div className="xyz" data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine">
        <div className="blob">
          <img src={profilePic} alt="profile picture" className="profile-pic" />
        </div>
      </div>
      <div className="section__text" data-aos="fade-left" data-aos-offset="300" data-aos-easing="ease-in-sine">
        <p className="section__text__p1">Hello, I'm</p>
        <div className="containersel">
          <p className="typed">Vipul Dhoraliya</p>
        </div>
        <p className="section__text__p2">Web Developer</p>
        <div className="btn-container">
          <button className="btn btn-color-2" onClick={openResume}>
            Download CV
          </button>
          <button className="btn btn-color-1" onClick={goToContact}>
            Contact Info
          </button>
        </div>
        <div id="socials-container">
          <img src={linkedinIcon} alt="My LinkedIn profile" className="icon" onClick={goToLinkedIn} />
          <img src={githubIcon} alt="My Github profile" className="icon" onClick={goToGitHub} />
        </div>
      </div>
    </section>
  );
};

export default Profile;
