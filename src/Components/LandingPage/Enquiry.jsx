import React from 'react'
import "../../Styles/Enquiry.css";
import customer from "../../Assets/cust.jpg"

const Enquiry = () => {
  // Component for form inputs
  const CardInput = ({ name, id, type = "text", placeholder }) => {
    return (
      <fieldset>
        <input
        className='input'
          name={name}
          id={id}
          type={type}
          placeholder={placeholder}
          required
        />
      </fieldset>
    );
  };

  // Component for textarea
  const CardTextarea = ({ name, id, placeholder }) => {
    return (
      <fieldset>
        <textarea
        className='textarea'
          name={name}
          id={id}
          placeholder={placeholder}
          required
        ></textarea>
      </fieldset>
    );
  };

  // Component for form button
  const CardBtn = ({ className, type, value }) => {
    return (
      <fieldset>
        <button className={className} type={type}>
          {value}
        </button>
      </fieldset>
    );
  };

  // Component for social profile links
  const CardProfileLinks = () => {
    const profileLinks = ["twitter", "linkedin", "dribbble", "facebook"];
    return (
      <div className="card-social-links">
        <ul className="social-links">
          {profileLinks && profileLinks.map((link, index) => (
            <li key={index}>
              <a href="#" >
                <i className={`i bi bi-${link}`}></i>
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  // Component for the front side of the card
  const CardFront = () => {
    return (
      <div className="card-side side-front">
        <div className="container-fluid">
          <div className="row ">
            <div className="col-6 px-0">
              <img
              className='img1'
                src={customer}
                alt="Profile"
              />
            </div>
            <div className="col-6 side-front-content ">
              <h1 className='heading text-start mx-4 px-4'>Get in <span className='head-span'>Touch</span>With Us</h1>
              <p>
                Andrey is driven by turning ideas into scalable and empowering
                experiences that solve real-life problems.
              </p>
              <p>
                He is currently the founder of Dvorak Media. Previously, Andrey
                was a product designer at Dropbox.
              </p>
              <p>
                Over the years, Michael has been privileged to work with Adobe,
                Evernote, Square, and more.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Component for the back side of the card
  const CardBack = () => {
    return (
      <div className="card-side side-back">
        <div className="container-fluid">
          <h1>Let's get in touch!</h1>
          <form formAction="" className="card-form">
            <div className="row">
              <div className="col-6">
                <CardInput
                  name="contactFirstName"
                  id="contactFirstName"
                  type="text"
                  placeholder="Your first name"
                />
              </div>
              <div className="col-6">
                <CardInput
                  name="contactLastName"
                  id="contactLastName"
                  type="text"
                  placeholder="Your last name"
                />
              </div>
            </div>
            <div className="row">
              <div className="col-6">
                <CardInput
                  name="contactEmail"
                  id="contactEmail"
                  type="email"
                  placeholder="Your email address"
                />
              </div>
              <div className="col-6">
                <CardInput
                  name="contactSubject"
                  id="contactSubject"
                  type="text"
                  placeholder="Subject"
                />
              </div>
            </div>
            <CardTextarea
              name="contactMessage"
              id="contactMessage"
              placeholder="Your message"
            />
            <CardBtn
              className="btn btn-primary"
              type="submit"
              value="Send message"
            />
          </form>
          <CardProfileLinks />
        </div>
      </div>
    );
  };

  // Main render component
  return (
    <div className="card-container">
      <div className="card-body">
        <CardBack />
        <CardFront />
      </div>
    </div>
  );
};

export default Enquiry;
