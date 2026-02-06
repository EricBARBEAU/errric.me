// Assets
const logo_white = '/img/errric-logo_white.svg';

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
    		<a className="footer_link footer_link-linkedin" href="" >
    			
    		</a>
    		<a className="footer_link footer_link-github" href="" >
    			
    		</a>
    		<a className="footer_link footer_link-dribbble" href="" >
    			
    		</a>
    		<a className="footer_link footer_link-producthunt" href="" >
    			
    		</a>
    	</div>
    </div>
  );
}

export default Footer;