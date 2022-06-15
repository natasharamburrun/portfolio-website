import React from 'react';
import mobileManageHero from '../assets/images/detail/mobile/image-manage-hero.jpg';
import mobileManageHero2 from '../assets/images/detail/mobile/image-manage-hero@2x.jpg';
import tabletManageHero from '../assets/images/detail/tablet/image-manage-hero.jpg';
import tabletManageHero2 from '../assets/images/detail/tablet/image-manage-hero@2x.jpg';
import desktopManageHero from '../assets/images/detail/desktop/image-manage-hero.jpg';
import desktopManageHero2 from '../assets/images/detail/desktop/image-manage-hero@2x.jpg';

import mobileManagePreview1 from '../assets/images/detail/mobile/image-manage-preview-1.jpg';
import mobileManagePreview12 from '../assets/images/detail/mobile/image-manage-preview-1@2x.jpg';
import tabletManagePreview1 from '../assets/images/detail/tablet/image-manage-preview-1.jpg';
import tabletManagePreview12 from '../assets/images/detail/tablet/image-manage-preview-1@2x.jpg';
import desktopManagePreview1 from '../assets/images/detail/desktop/image-manage-preview-1.jpg';
import desktopManagePreview12 from '../assets/images/detail/desktop/image-manage-preview-1@2x.jpg';

import mobileManagePreview2 from '../assets/images/detail/mobile/image-manage-preview-2.jpg';
import mobileManagePreview22 from '../assets/images/detail/mobile/image-manage-preview-2@2x.jpg';
import tabletManagePreview2 from '../assets/images/detail/tablet/image-manage-preview-2.jpg';
import tabletManagePreview22 from '../assets/images/detail/tablet/image-manage-preview-2@2x.jpg';
import desktopManagePreview2 from '../assets/images/detail/desktop/image-manage-preview-2.jpg';
import desktopManagePreview22 from '../assets/images/detail/desktop/image-manage-preview-2@2x.jpg';


const Manage = () => {
  return (
    <section>
      <article className='hero-section'>
        <picture>
          <source media='(min-width: 1024px)' srcSet={`${desktopManageHero}, ${desktopManageHero2} 2x`} />
          <source media='(min-width: 768px)' srcSet={`${tabletManageHero}, ${tabletManageHero2} 2x`} />
          <img className='hero-img' src={`${mobileManageHero}`} alt='' srcSet={`${mobileManageHero2} 2x`} />
        </picture>
      </article>
      <article>
        <hr className='homepage-hr'/>
        <h2 className='header'>Manage</h2>
        <p className='description'>This project required me to build a fully responsive landing page to the designs provided. I used HTML5, along with CSS Grid and JavaScript for the areas that required interactivity, such as the testimonial slider.
        </p>
        <p className='project-info'>Interaction Design / Front End Development</p>
        <p className='project-tech-stack'>HTML / CSS / JS</p>
        <button className='portfolio-button button secondary-button'>View Website</button>
      </article>
      <article>
        <hr className='homepage-hr'/>
        <h2 className='header'>Project Background</h2>
        <p className='description'>This project was a front-end  challenge from Frontend Mentor. It’s a platform that enables you to practice building websites to a design and project brief. Each challenge includes mobile and desktop designs to show how the website should look at different screen sizes. Creating these projects has helped me refine my workflow and solve real-world coding problems. I’ve learned something new with each project, helping me to improve and adapt my style.
        </p>
      </article>
      <article>
        <h2 className='header'>Static Previews</h2>
        <picture>
          <source media='(min-width: 1024px)' srcSet={`${desktopManagePreview1}, ${desktopManagePreview12} 2x`} />
          <source media='(min-width: 768px)' srcSet={`${tabletManagePreview1}, ${tabletManagePreview12} 2x`} />
          <img className='hero-img' src={`${mobileManagePreview1}`} alt='' srcSet={`${mobileManagePreview12} 2x`} />
        </picture>
        <picture>
          <source media='(min-width: 1024px)' srcSet={`${desktopManagePreview2}, ${desktopManagePreview22} 2x`} />
          <source media='(min-width: 768px)' srcSet={`${tabletManagePreview2}, ${tabletManagePreview22} 2x`} />
          <img className='hero-img' src={`${mobileManagePreview2}`} alt='' srcSet={`${mobileManagePreview22} 2x`} />
        </picture>
      </article>
    </section>
  )
}

export default Manage 