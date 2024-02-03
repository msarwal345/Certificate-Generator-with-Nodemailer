import React from 'react';
import './About.css';
import NavScrollExample from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

const AboutSection = () => {
  return (
<>  
  <NavScrollExample/>
    <div className="about-section">
      <h2>About us</h2>
      <p>
        Welcome to our textbook platform, where learning meets innovation. Our mission is to provide
        an accessible and interactive learning experience for students and educators alike.
      </p>
      <div className="content-container">
        <div className="image-container">
          <img src="img1.jpg" alt="Description for Image 1" />
        </div>

        <div className="text-container">
          <h2>Our Goals</h2>
          <p>
            We started small but we have big dreams. While Pressbooks is a versatile tool with myriad applications,
            it has grown into the preferred platform for open educational publishing programs. There was a need for
            an easy-to-use platform on which to create professional educational content in an open and ethical way,
            and we responded.
          </p>
          <p>
            Today, we want to drive the open publishing movement by partnering with institutions of higher education
            around the world. We help our partners compete with large commercial publishers, while supporting their
            immediate need to get accessible educational content into the hands of students. As we lead the open
            movement, we will remain good listeners and good actors. We will keep developing products and services
            that do good in the world. We will be your partner in open publishing.
          </p>
        </div>
        <div className="image-container">
          <img src="img2.jpg" alt="Description for Image 2" />
        </div>
      </div>
    </div>
    <Footer/>
    </>

  );
};

export default AboutSection;
