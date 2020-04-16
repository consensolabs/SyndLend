import React from 'react';
import { graphql, StaticQuery, Link } from 'gatsby';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
// import 'bootstrap/dist/js/bootstrap.bundle.min'; // This throws a build error in the bootstrap package
import './MenuCss.css';


const Menu = (props) => {
  const { menuLinks } = props.data.site.siteMetadata;
  return (
    <div id="main-menu" className="main-menu">
      <ul>
        {menuLinks.map(link => (
          <li key={link.name}>
            <Link to={link.link}>{link.name}</Link>
          </li>
        ))}


        <div class="dropdown">
          <a style={{ backgroundColor: "white", color: "blue" }} class="btn btn-primary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Resources
  </a>

          <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
            <a class="dropdown-item" target="_blank" href="https://syndlend.com/syndlend-whitepaper-v1.pdf">White Paper</a>
            <a class="dropdown-item" target="_blank" href="https://drive.google.com/file/d/15TI89giDX7DIGlmRkvRY62hMwELxpT8a/view?usp=sharing">Brochure</a>

          </div>
        </div>


      </ul>
    </div>
  );
};

export default props => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            menuLinks {
              name
              link
            }
          }
        }
      }
    `}
    render={data => <Menu data={data} />}
  />
);
