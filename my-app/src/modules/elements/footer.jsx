// Assets
const logo_white = '/img/errric-logo_white.svg';
const linkedin = '/img/logo-linkedin.svg';
const github = '/img/logo-github.svg';
const dribbble = '/img/logo-dribbble.svg';
const producthunt = '/img/logo-producthunt.svg';

function Footer() {

  return (
    <div className="footer">
    	<div className="logo">
    		<img src={logo_white} alt="logo" />
    		<div className="name">
    			<p>Eric Barbeau</p>
    			<span>Designer + Developer</span>
    		</div>
    	</div>
    	<div className="links">
    		<p>Find me on</p>
    		<a className="footer_link footer_link-linkedin" href="https://www.linkedin.com/in/eric-barbeau/" >
    			<img src={linkedin} alt="linkedin" />
          LINKEDIN
    		</a>
    		<a className="footer_link footer_link-github" href="https://github.com/EricBARBEAU" >
    			<img src={github} alt="linkedin" />
          GITHUB
    		</a>
    		<a className="footer_link footer_link-dribbble" href="https://dribbble.com/EB_Graphics" >
    			<img src={dribbble} alt="linkedin" />
          DRIBBBLE
    		</a>
    		<a className="footer_link footer_link-producthunt" href="https://www.producthunt.com/@errric" >
    			<img src={producthunt} alt="linkedin" />
          PRODUCT HUNT
    		</a>
    	</div>
    </div>
  );
}

export default Footer;