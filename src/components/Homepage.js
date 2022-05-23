import React from "react";
import mobileHero from "../assets/images/homepage/mobile/image-homepage-hero.jpg";
import mobileHero2 from "../assets/images/homepage/mobile/image-homepage-hero@2x.jpg";
import tabletHero from "../assets/images/homepage/tablet/image-homepage-hero.jpg";
import tabletHero2 from "../assets/images/homepage/tablet/image-homepage-hero@2x.jpg";
import desktopHero from "../assets/images/homepage/desktop/image-homepage-hero.jpg";
import desktopHero2 from "../assets/images/homepage/desktop/image-homepage-hero@2x.jpg";

function Homepage() {

  return (
    <section className="homepage">
      <picture>
        <source media="(min-width: 1024px)" srcSet={`${desktopHero}, ${desktopHero2} 2x`} />
        <source media="(min-width: 768px)" srcSet={`${tabletHero}, ${tabletHero2} 2x`} />
        <img className="hero-img" src={`${mobileHero}`} alt="" srcSet={`${mobileHero2} 2x`} />
      </picture>
      <h1 className="my-bio">Hey, I’m Natasha and I love building beautiful websites</h1>
      <a href="about-me" className="button primary-button">
        <div class="arrow-down">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="button-title">About Me</div>
      </a>



      {/* About Me
          
            I’m a junior front-end developer looking for a new role in an exciting company.
            I focus on writing accessible HTML, using modern CSS practices and writing clean
            JavaScript. When writing JavaScript code, I mostly use React, but I can adapt to
            whatever tools are required. I’m based in London, UK, but I’m happy working remotely
            and have experience in remote teams. When I’m not coding, you’ll find me outdoors.
            I love being out in nature whether that’s going for a walk, run or cycling. I’d love
            you to check out my work.
          
            Go to Portfolio
          
            Interested in doing a project together?
          
            Contact Me */}
    </section>
  );
}

export default Homepage