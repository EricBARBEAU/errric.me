// import eric_picture from '../img/Eric.png';
import eric_new from '../img/Eric_new.jpg';
import Nav from './header';

function Contact() {
  return (
    <div>
      <div id="Contact">
        <div className="contact-container">
          <button className="close-btn"></button>
          <div className="contact-block">
            <h1>Involved in the</h1>
            <h1><b>world wide web</b></h1>
            <h1>since 2011.</h1>
            <div className="sep"></div>
            <p className="contact-intro">
              <ul>
                <li><b>2022:</b> Freelance UI Designer & Developer - <i>World</i></li>
                <li><b>2017:</b> Senior UI Designer & Developer - <i>Singapore, Singapore</i></li>
                <li><b>2015:</b> Lead Product Designer - <i>Singapore, Singapore</i></li>
                <li><b>2014:</b> Lead UI Designer - <i>Wellington, New Zealand</i></li>
                <li><b>2012:</b> Junior Art Director -<i>Paris, France</i></li>
                <li><b>2011:</b> Junior Art Director - <i>New York, USA</i></li>
              </ul>
            </p>
            <div className="social-links">
              <a href="https://linkedin.com/in/eric-barbeau/en" className="link link_linkedin">
              </a>
              <a href="https://github.com/EricBARBEAU" className="link link_github">
              </a>
              <a href="https://dribbble.com/EB_Graphics" className="link link_dribbble">
              </a>
              <a href="https://www.instagram.com/errric_photo" className="link link_instagram">
              </a>
            </div>
            <div className="ctas">
              <a href="mailto:hello@errric.me?subject=Hey Eric, let's work together!" className="contact-btn contact-btn-1">write me</a>
              <a href="https://errric.me/EricBARBEAU_Resume2024.pdf" target="_blank" rel="noreferrer" className="contact-btn contact-btn-2">my resume</a>
            </div>
          </div>
          <img src={eric_new} className="about_photo" alt="EricBarbeau" />
        </div>
      </div>
      <div className="contactOverlay"></div>
    </div>
  );
}

export default Contact;
