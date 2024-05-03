import React from 'react';
import style from "./About.module.css";
import { getImageUrl } from '../../utils/utils';

const About = () => {
  return (
    <section id='about' className={style.about}>
      <div className={style.sectionTitle}>
        <h5>About</h5>
        <div className={style.aboutContent}>
          <img className={style.aboutImage} src={getImageUrl("about/aboutImage.png")} alt="about us image here" />
          <div className={style.aboutInfo}>
            <div className={style.infoItems}>
              <div className={style.infoItem}>
                <div className={style.infoImage}>
                  <img src={getImageUrl("about/cursorIcon.png")} alt="info image" />
                </div>
                <div className={style.infoContact}>
                  <h4>Frontend Developer</h4>
                  <p>I’m a front-end developer with experience in building responsive and optimized sites</p>
                </div>
              </div>
              <div className={style.infoItem}>
                <div className={style.infoImage}>
                  <img src={getImageUrl("about/serverIcon.png")} alt="info image" />
                </div>
                <div className={style.infoContact}>
                  <h4>Frontend Developer</h4>
                  <p>I’m a front-end developer with experience in building responsive and optimized sites</p>
                </div>
              </div>
              <div className={style.infoItem}>
                <div className={style.infoImage}>
                  <img src={getImageUrl("about/uiIcon.png")} alt="info image" />
                </div>
                <div className={style.infoContact}>
                  <h4>Frontend Developer</h4>
                  <p>I’m a front-end developer with experience in building responsive and optimized sites</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
