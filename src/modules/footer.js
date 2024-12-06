import { Helmet } from "react-helmet";


function Footer() {
  return (
    <div>
      <Helmet>
        <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/classie/1.0.1/classie.min.js"></script>
        <script type="text/javascript" src="https://cdn.jsdelivr.net/gh/EricBARBEAU/errric.me@master/js/transition.min.js"></script>
        <script type="text/javascript" src="https://cdn.jsdelivr.net/gh/EricBARBEAU/errric.me@5e57d3a/js/main.min.js"></script>
      </Helmet>
      <div className="noise-bg inset-0" aria-hidden="true">
        <svg>
          <filter id='noise-bg-fx'>
            <feTurbulence baseFrequency="0.8" numOctaves="1" type="fractalNoise"></feTurbulence>
          </filter>
        </svg>
      </div>
    </div>
  );
}

export default Footer;
