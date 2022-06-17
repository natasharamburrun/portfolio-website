import React from 'react';
import ContactMeLink from './Contact-me-link';
import mobilePortfolioManage from '../assets/images/portfolio/mobile/image-portfolio-manage.jpg'
import mobilePortfolioManage2 from '../assets/images/portfolio/mobile/image-portfolio-manage@2x.jpg'
import tabletPortfolioManage from '../assets/images/portfolio/tablet/image-portfolio-manage.jpg'
import tabletPortfolioManage2 from '../assets/images/portfolio/tablet/image-portfolio-manage@2x.jpg'
import desktopPortfolioManage from '../assets/images/portfolio/desktop/image-portfolio-manage.jpg'
import desktopPortfolioManage2 from '../assets/images/portfolio/desktop/image-portfolio-manage@2x.jpg'

import mobilePortfolioBookmark from '../assets/images/portfolio/mobile/image-portfolio-bookmark.jpg'
import mobilePortfolioBookmark2 from '../assets/images/portfolio/mobile/image-portfolio-bookmark@2x.jpg'
import tabletPortfolioBookmark from '../assets/images/portfolio/tablet/image-portfolio-bookmark.jpg'
import tabletPortfolioBookmark2 from '../assets/images/portfolio/tablet/image-portfolio-bookmark@2x.jpg'
import desktopPortfolioBookmark from '../assets/images/portfolio/desktop/image-portfolio-bookmark.jpg'
import desktopPortfolioBookmark2 from '../assets/images/portfolio/desktop/image-portfolio-bookmark@2x.jpg'

import mobilePortfolioInsure from '../assets/images/portfolio/mobile/image-portfolio-insure.jpg'
import mobilePortfolioInsure2 from '../assets/images/portfolio/mobile/image-portfolio-insure@2x.jpg'
import tabletPortfolioInsure from '../assets/images/portfolio/tablet/image-portfolio-insure.jpg'
import tabletPortfolioInsure2 from '../assets/images/portfolio/tablet/image-portfolio-insure@2x.jpg'
import desktopPortfolioInsure from '../assets/images/portfolio/desktop/image-portfolio-insure.jpg'
import desktopPortfolioInsure2 from '../assets/images/portfolio/desktop/image-portfolio-insure@2x.jpg'

import mobilePortfolioFylo from '../assets/images/portfolio/mobile/image-portfolio-fylo.jpg'
import mobilePortfolioFylo2 from '../assets/images/portfolio/mobile/image-portfolio-fylo@2x.jpg'
import tabletPortfolioFylo from '../assets/images/portfolio/tablet/image-portfolio-fylo.jpg'
import tabletPortfolioFylo2 from '../assets/images/portfolio/tablet/image-portfolio-fylo@2x.jpg'
import desktopPortfolioFylo from '../assets/images/portfolio/desktop/image-portfolio-fylo.jpg'
import desktopPortfolioFylo2 from '../assets/images/portfolio/desktop/image-portfolio-fylo@2x.jpg'

const Index = () => {
  return (
    <section className='index'>
      <article className='index-portfolio'>
        <div className='index-image'>
          <picture>
            <source media='(min-width: 1024px)' srcSet={`${desktopPortfolioManage}, ${desktopPortfolioManage2} 2x`} />
            <source media='(min-width: 768px)' srcSet={`${tabletPortfolioManage}, ${tabletPortfolioManage2} 2x`} />
            <img className='index-img' src={`${mobilePortfolioManage}`} alt='' srcSet={`${mobilePortfolioManage2} 2x`} />
          </picture>
        </div>
        <div className='index-content'>
          <hr className='index-hr'/>
          <h1 className='index-header'>Manage</h1>
          <p className='index-description'>This project required me to build a fully responsive landing page to the designs provided. I used HTML5, along with CSS Grid and JavaScript for the areas that required interactivity, such as the testimonial slider.
          </p>
          <a href='/manage' className='index-button button secondary-button'>View Project</a>
          <hr className='index-hr'/>
        </div>
      </article>
      <article className='index-portfolio'>
      <div className='index-image'>
        <picture>
          <source media='(min-width: 1024px)' srcSet={`${desktopPortfolioBookmark}, ${desktopPortfolioBookmark2} 2x`} />
          <source media='(min-width: 768px)' srcSet={`${tabletPortfolioBookmark}, ${tabletPortfolioBookmark2} 2x`} />
          <img className='index-img' src={`${mobilePortfolioBookmark}`} alt='' srcSet={`${mobilePortfolioBookmark2} 2x`} />
        </picture>
       </div>
       <div className='index-content'>
          <h1 className='index-header'>Bookmark</h1>
          <p className='index-description'>This project required me to build a fully responsive landing page to the designs provided. I used HTML5, along with CSS Grid and JavaScript for the areas that required interactivity, such as the features section.
          </p>
          <a href='/bookmark' className='index-button button secondary-button'>View Project</a>
          <hr className='index-hr'/>
       </div>
      </article>
      <article className='index-portfolio'>
      <div className='index-image'>
        <picture>
          <source media='(min-width: 1024px)' srcSet={`${desktopPortfolioInsure}, ${desktopPortfolioInsure2} 2x`} />
          <source media='(min-width: 768px)' srcSet={`${tabletPortfolioInsure}, ${tabletPortfolioInsure2} 2x`} />
          <img className='index-img' src={`${mobilePortfolioInsure}`} alt='' srcSet={`${mobilePortfolioInsure2} 2x`} />
        </picture>
      </div>
      <div className='index-content'>
        <h1 className='index-header'>Insure</h1>
        <p className='index-description'>This was a small project which mostly consisted of HTML and CSS. I built a fully-responsive landing page. The only JavaScript this project required was to enable the toggling of the mobile navigation.
        </p>
        <a href='/insure' className='index-button button secondary-button'>View Project</a>
        <hr className='index-hr'/>
      </div>
      </article>
      <article className='index-portfolio'>
        <div className='index-image'>
          <picture>
            <source media='(min-width: 1024px)' srcSet={`${desktopPortfolioFylo}, ${desktopPortfolioFylo2} 2x`} />
            <source media='(min-width: 768px)' srcSet={`${tabletPortfolioFylo}, ${tabletPortfolioFylo2} 2x`} />
            <img className='index-img' src={`${mobilePortfolioFylo}`} alt='' srcSet={`${mobilePortfolioFylo2} 2x`} />
          </picture>
        </div>
        <div className='index-content'>
          <h1 className='index-header'>Fylo</h1>
          <p className='index-description'>This project was built in pure HTML and CSS. I had mobile and desktop designs to work to and built it so that it was fully-responsive. I took a mobile-first approach and used modern CSS like Flexbox and Grid for layout purposes.
          </p>
          <a href='/fylo' className='index-button button secondary-button'>View Project</a>
          <hr className='index-hr'/>
        </div>
      </article>
      <ContactMeLink />
    </section>
  )
}

export default Index