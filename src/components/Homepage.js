import React from "react";
import mobileHero from "../assets/images/homepage/mobile/image-homepage-hero.jpg";
import mobileHero2 from "../assets/images/homepage/mobile/image-homepage-hero@2x.jpg";
import tabletHero from "../assets/images/homepage/tablet/image-homepage-hero.jpg";
import tabletHero2 from "../assets/images/homepage/tablet/image-homepage-hero@2x.jpg";
import desktopHero from "../assets/images/homepage/desktop/image-homepage-hero.jpg";
import desktopHero2 from "../assets/images/homepage/desktop/image-homepage-hero@2x.jpg";
import mobileProfile from "../assets/images/homepage/mobile/image-homepage-profile.jpg";
import mobileProfile2 from "../assets/images/homepage/mobile/image-homepage-profile@2x.jpg";
import tabletProfile from "../assets/images/homepage/tablet/image-homepage-profile.jpg";
import tabletProfile2 from "../assets/images/homepage/tablet/image-homepage-profile@2x.jpg";
import desktopProfile from "../assets/images/homepage/desktop/image-homepage-profile.jpg";
import desktopProfile2 from "../assets/images/homepage/desktop/image-homepage-profile@2x.jpg";

function Homepage() {

  return (
    <section className="homepage">
      <article className="hero-section">
        <picture>
          <source media="(min-width: 1024px)" srcSet={`${desktopHero}, ${desktopHero2} 2x`} />
          <source media="(min-width: 768px)" srcSet={`${tabletHero}, ${tabletHero2} 2x`} />
          <img className="hero-img" src={`${mobileHero}`} alt="" srcSet={`${mobileHero2} 2x`} />
        </picture>
        <div className="bio-wrapper">
          <h1 className="bio">Hey, I’m Alex Spencer and I love building beautiful websites</h1>
          <a href="about-me" className="button primary-button">
            <div className="arrow-down">
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className="arrow-title">About Me</div>
          </a>
        </div>
      </article>
      <article className="about-me-section">
        <picture>
          <source media="(min-width: 1024px)" srcSet={`${desktopProfile}, ${desktopProfile2} 2x`} />
          <source media="(min-width: 768px)" srcSet={`${tabletProfile}, ${tabletProfile2} 2x`} />
          <img className="portfolio-img" src={`${mobileProfile}`} alt="" srcSet={`${mobileProfile2} 2x`} />
        </picture>
        <div className="about-me-wrapper">
        <hr />
          <h2 className="header">About Me</h2>
          <p className="description">I’m a front-end developer looking for a new role in an exciting company.
            I focus on writing accessible HTML, using modern CSS practices and writing clean
            JavaScript. When writing JavaScript code, I mostly use React, but I can adapt to
            whatever tools are required. I’m based in London, UK, but I’m happy working remotely
            and have experience in remote teams. When I’m not coding, you’ll find me outdoors.
            I love being out in nature whether that’s going for a walk, run or cycling. I’d love
            you to check out my work.
          </p>
          <button className="portfolio-button button secondary-button">Go to portfolio</button>
        <hr />
        </div>
      </article>
      <article className="contact-me-section">
        <h2 className="text">Interested in doing a project together?</h2>
        <hr />
        <button className="button secondary-button">Contact me</button>
      </article>
    </section>
  );
}

export default Homepage