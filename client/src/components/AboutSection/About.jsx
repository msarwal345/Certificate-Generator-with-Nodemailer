import React from 'react';
import './About.css';
import NavScrollExample from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

const AboutSection = () => {
  return (
    <>
      <NavScrollExample />
      <div className="about-section">
        <h2>About Us</h2>
        <p>
          Welcome to our platform dedicated to simplifying the process of sending certificates via email. Our goal is to provide
          a seamless and efficient solution for organizations, institutions, and businesses to manage and distribute certificates
          to recipients in a hassle-free manner.
        </p>
        <div className="content-container">
          <div className="image-container">
            <img src="img1.jpg" alt="Description for Image 1" width="600" height="400" />
          </div>

          <div className="text-container">
            <h2>Our Mission</h2>
            <p>
              At our core, we aim to revolutionize the certificate distribution process. With our intuitive platform, powered by the
              latest technologies, we enable users to upload Excel files containing recipient information and effortlessly send
              personalized certificates via email.
            </p>
            <p>
              We understand the significance of recognizing achievements and milestones. Whether it's a course completion, workshop
              acknowledgment, or any noteworthy accomplishment, our platform ensures that the certificate delivery is swift,
              secure, and tailored to the unique identity of each recipient.
            </p>
          </div>

          <div className="image-container">
            <img src="img2.jpg" alt="Description for Image 2" width="600" height="400" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutSection;
