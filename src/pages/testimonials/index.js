import React from 'react';
import { graphql } from 'gatsby';
import SEO from '../../components/SEO';
import Layout from '../../layouts/index';

const Testimonials = (props) => {
  const testimonials = props.data.allMarkdownRemark.edges;
  return (
    <Layout bodyClass="page-testimonials">
      <SEO title="Testimonials" />
      <div className="intro">
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
          <a href="google.com"><button className="btn btn-primary">Email</button></a>
          <a href="google.com"><button className="btn btn-primary">GitHub</button></a>
          <a href="google.com"><button className="btn btn-primary">LinkedIn</button></a>

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
