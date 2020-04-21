import React from 'react';
import { graphql } from 'gatsby';
import SEO from '../../components/SEO';
import Layout from '../../layouts/index';

const Team = (props) => {
  // const teams = props.data.allMarkdownRemark.edges;
  return (
    <Layout bodyClass="page-teams">
      <SEO title="Team" />
      <div className="intro">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1>Meet The Team</h1>
              <p>Our team of developers and financial consultants</p>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      {/* <div className="container pb-6">
        <div className="row">
          {teams.map(edge => (
            <div key={edge.node.frontmatter.path} className="col-12 col-md-6 mb-1">
              <div className="team card-two">
                <div className="card-header">
                  <div className="card-header-left">
                    {edge.node.frontmatter.image && (
                      <div className="card-image">
                        <img
                          alt={edge.node.frontmatter.title}
                          className="img-fluid mb-2"
                          src={edge.node.frontmatter.image}
                        />
                      </div>
                    )}
                  </div>
                  <div className="card-right">
                    <h2 className="card-title">{edge.node.frontmatter.title}</h2>
                    <ul className="card-meta">
                      <li>
                        <strong>{edge.node.frontmatter.jobtitle}</strong>
                      </li>
                      <li>
                        <a target="_blank" href={edge.node.frontmatter.linkedinurl}>
                          {edge.node.frontmatter.linkedinurl}
                        </a>
                      </li>
                      <li>
                        <a href={edge.node.frontmatter.email}>{edge.node.frontmatter.email}</a>
                      </li>
                    </ul>
                  </div>
                </div>

                <div
                  className="team-content"
                  dangerouslySetInnerHTML={{ __html: edge.node.html }}
                />
              </div>
            </div>
          ))}
        </div>
      </div> */}



      <div style={{ display: "flex", justifyContent: "center", marginBottom: "5rem" }} >

        <div className="card" style={{ width: "15rem", marginLeft: "2rem", marginRight: "2rem", border: "none", boxShadow: "10px 10px 11px -9px rgba(0,0,0,0.75)" }}>
          <img className="card-img-top" src={require('../../../static/team/koshik.jpg')} />
          <div className="card-body">
            <h5 className="card-title"><center>Koshik Raj</center></h5>
            <p className="card-text">Co-Founder</p>
          </div>
        </div>

        <div className="card" style={{ width: "15rem", marginLeft: "2rem", marginRight: "2rem", border: "none", boxShadow: "10px 10px 11px -9px rgba(0,0,0,0.75)" }}>
          <img className="card-img-top" src={require('../../../static/team/placeholder.jpg')} />
          <div className="card-body">
            <h5 className="card-title"><center>Rajiv Singhi</center></h5>
            <p className="card-text">Mentor, Investor</p>
          </div>
        </div>



        <div className="card" style={{ width: "15rem", marginLeft: "2rem", marginRight: "2rem", border: "none", boxShadow: "10px 10px 11px -9px rgba(0,0,0,0.75)" }}>
          <img className="card-img-top" src={require('../../../static/team/abhinav.jpg')} />
          <div className="card-body">
            <h5 className="card-title"><center>Abhinav Anshul</center></h5>
            <p className="card-text">Frontend Engineer</p>
          </div>
        </div>
        <div className="card" style={{ width: "15rem", marginLeft: "2rem", marginRight: "2rem", border: "none", boxShadow: "10px 10px 11px -9px rgba(0,0,0,0.75)" }}>
          <img className="card-img-top" src={require('../../../static/team/aditya.jpg')} />
          <div className="card-body">
            <h6 className="card-title"><center>Aditya Srivastava</center></h6>
            <p className="card-text">Blockchain Intern</p>
          </div>
        </div>




      </div>




    </Layout>
  );
};

// export const query = graphql`
//   query TeamQuery {
//     allMarkdownRemark(
//       filter: { fileAbsolutePath: { regex: "/team/" } }
//       sort: { fields: [frontmatter___date], order: DESC }
//     ) {
//       edges {
//         node {
//           html
//           frontmatter {
//             title
//             path
//             image
//             jobtitle
//             linkedinurl
//             email
//           }
//         }
//       }
//     }
//   }
// `;

export default Team;
