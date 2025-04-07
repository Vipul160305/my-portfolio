import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import project1 from '/assets/project1.png';

const Projects = () => {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  const projects = [
    {
      title: "Online Food Delivery Website",
      description: `An online food delivery website was developed using ReactJS, HTML, and CSS. The website fetches live data from Swiggy’s API to display a wide range of restaurant options to users. It features an intuitive interface designed with CSS and shimmer (skeleton) UI, prioritizing user experience. Secure data transmission is ensured through a strong understanding of cross-origin access, with the implementation of Cross-Origin Resource Sharing (CORS) to securely fetch data from external sources. The website incorporates dynamic content rendered through React.js and a responsive design crafted with HTML and CSS, ensuring seamless usability across various devices.`,
      image: project1,
      githubLink: "https://github.com/nilesh-gagiya/food-delivery-website",
      imgAOS: "fade-down-right",
      textAOS: "fade-down-left"
    }
  ];

  return (
    <section id="projects">
      <div data-aos="zoom-in-down">
        <p className="section__text__p1">Browse My Recent</p>
        <h1 className="title">Projects</h1>
      </div>

      {projects.map((project, index) => (
        <div className="project" key={index}>
          <p id="pro" className="section__text__p1" data-aos="zoom-in-down"><b>{project.title}</b></p>
          <div className="content">
            <img id="imge" className="image" data-aos={project.imgAOS} data-aos-delay="300" src={project.image} alt={project.title} />
            <div id="tex" className="experience-details-container" data-aos={project.textAOS} data-aos-delay="400">
              <div className="about-containers">
                <div className="details-container">
                  <div className="article-container">
                    <p className="section__text__p1_text-container">
                      {project.description}
                      <br />
                      <button className="btn btn-color-2 project-btn" onClick={() => window.location.href = project.githubLink}>
                        Github
                      </button>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Projects;