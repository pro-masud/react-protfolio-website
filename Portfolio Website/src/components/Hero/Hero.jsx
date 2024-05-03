import React from 'react';
import style from "./Hero.module.css"
import { getImageUrl } from '../../utils/utils';

const Hero = () => {
  return (
    <section className={style.containerHero}>
      <div className={style.heroContent}>
        <h1 className={style.heroTitle}>Hi, I’m Masud</h1>
        <p className={style.heroDescription}>I’m a full-stack developer with 5 years of experience using React and NodeJS. Reach out if you’d like to learn more!</p>
        <a className={style.heroBtn} href="#contact">Contact Us</a>
      </div>
      <img className={style.heroImage} src={getImageUrl('hero/heroImage.png')} alt="hero image here" />
      <div className={style.heroTopBlur}></div>
      <div className={style.heroButtomBlur}></div>
    </section>
  )
}

export default Hero
