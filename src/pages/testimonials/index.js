import React from 'react';
import { graphql } from 'gatsby';
import SEO from '../../components/SEO';
import Layout from '../../layouts/index';

const Testimonials = (props) => {
  const testimonials = props.data.allMarkdownRemark.edges;
  return (
    <Layout bodyClass="page-testimonials">
      <SEO title="Testimonials" />
      <div style={{ marginTop: "0rem", paddingTop: "3rem" }} className="intro">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1>Contacts</h1>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="container pb-6">
        <div className="row">
          {testimonials.map(edge => (
            <div key={edge.node.frontmatter.path} className="col-12 col-md-6 mb-1">
              <div className="testimonial">
                <div className="testimonials-meta">
                  <h2 className="testimonials-title">{edge.node.frontmatter.title}</h2>
                  <p className="testimonials-name">{edge.node.frontmatter.name}</p>
                  <p className="testimonials-jobtitle">{edge.node.frontmatter.jobtitle}</p>
                </div>
                <div
                  className="testimonials-content"
                  dangerouslySetInnerHTML={{ __html: edge.node.html }}
                />
              </div>
            </div>
          ))}
        </div>
      </div> */}
      <div style={{ textAlign: "center" }} className="contacts_container">
        <div className="logo-image-container">
          <img src={require('../../images/consensologo.jpeg')} />
        </div>
        <div style={{ marginTop: "1rem", fontSize: "1.5rem" }}>91springboard, 512/10, Service Lane, Outer Ring Rd, Mahadevapura,</div>
        <div style={{ marginBottom: "1rem", fontSize: "1.5rem" }}>Bengaluru, Karnataka 560048</div>
        <div style={{ marginBottom: "3rem" }} className="contact_button_container">
          <a href="https://github.com/consensolabs"><img src={require('../../images/github-logo.png')} /></a>
          <a href="mailto:info@consensolabs.com?Subject=Request%20Demo"><img style={{ width: "4%" }} src={require('../../images/email-logo.png')} /></a>
          <a href="https://www.linkedin.com/company/consensolabs/"><img src={require('../../images/linkedin-logo.png')} /></a>


        </div>
      </div>

    </Layout>
  );
};

export const query = graphql`
  query TestimonialsQuery {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/testimonials/" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          html
          frontmatter {
            title
            path
            name
            jobtitle
          }
        }
      }
    }
  }
`;

export default Testimonials;
