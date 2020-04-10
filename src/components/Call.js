import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

const Call = props => (
  <div>
    <div className="call">
      {/* <div className="call-box-top"> */}
      {/* <div className="call-phone">
        <strong>Phone: </strong>
        <a href={`tel:${props.data.site.siteMetadata.contact.phone}`}>
          {props.data.site.siteMetadata.contact.phone}
        </a>
      </div> */}
      {/* <div className="call-email">
        <strong>Email: </strong>
        <a href={`mailto:${props.data.site.siteMetadata.contact.email}`}>
          {props.data.site.siteMetadata.contact.email}
        </a>
      </div> */}
      {/* </div> */}
      {props.button && (
        <div className="call-box-bottom">
          <a href="/contact" className="button">
            Request Demo
          </a>
        </div>
      )}
    </div>
    <div className="solution_container" style={{ marginTop: '10rem' }}>
      <div
        style={{ fontSize: '2.5rem', textAlign: 'center', marginBottom: '3rem' }}
        className="solution_container-heading"
      >
        Our Solution
      </div>
      <div className="solution_container-content">
        <div
          style={{
            textAlign: 'center',
            fontSize: '1.1rem',
            lineHeight: '1.4',
            color: '#414156',
            fontWeight: 'lighter',
          }}
          className="1"
        >
          SyndLend is a sophisticated solution to the predicaments of the existing syndicated loan
          market by building
        </div>
        <div
          style={{
            textAlign: 'center',
            fontSize: '1.1rem',
            lineHeight: '2',
            color: '#414156',
            fontWeight: 'lighter',
          }}
          className="2"
        >
          an ecosystem of banks and other financial institutions by utilizing the capability of DLT.
        </div>
        <div style={{ textAlign: 'center' }} className="solution_container-image">
          <img
            style={{ width: '50%', marginTop: '5rem', marginBottom: '5rem' }}
            src={require('../images/syndlend-catalog.png')}
          />
          <div style={{ fontSize: '1.1rem' }} className="img_content-1">
            <span style={{ fontSize: '2rem' }}>&ldquo;</span>
            {' '}
A loan syndicated platform supported
            by distributed ledger technology is expected to revolutionize
          </div>
          <div style={{ fontSize: '1.1rem', paddingTop: '0.6rem' }} className="img_content-2">
            lending/ borrowing activity to drive economic change on a global scale as the
            transactions undertaken on
          </div>
          <div style={{ fontSize: '1.1rem', paddingTop: '1rem' }} className="img_content-3">
            the platform are immutable, transparent, trusted in the trustless atmosphere, secure and
            fastand fast with
          </div>
          <div style={{ fontSize: '1.1rem', paddingTop: '0rem' }} className="img_content-4">
            easy, but with authorized accessibility.
            <span style={{ fontSize: '2rem' }}>&ldquo;</span>
          </div>
        </div>
      </div>
    </div>
    <div className="architecture_container">
      <div
        style={{
          fontSize: '2.5rem',
          textAlign: 'center',
          marginBottom: '3rem',
          marginTop: '7rem',
        }}
        className="architecture-heading"
      >
        Application Architecture
      </div>
      <div style={{ textAlign: 'center' }} className="architecture-image">
        <img
          style={{ width: '50%', marginTop: '0.5rem', marginBottom: '1rem' }}
          src={require('../images/architecture.png')}
        />
      </div>
      <div
        style={{
          textAlign: 'center',
          paddingLeft: '8rem',
          paddingRight: '8rem',
          fontSize: '1.1rem',
          lineHeight: '2.5rem',
        }}
        className="architecture-content"
      >
        SyndLend provides a secure decentralized application architecture utilizing resilient
        libraries and protocols without interacting with unnecessary middlewares. The client
        application an intuitive user interface and yet a secure way to access the accounts. The
        client application will communicate with deployed contracts through the secure JSON-RPC
        interface exposed by DLT nodes.
{' '}
      </div>
    </div>

    <div className="technology_container">
      <div
        style={{
          fontSize: '2.5rem',
          textAlign: 'center',
          marginBottom: '3rem',
          marginTop: '7rem',
        }}
        className="technology-heading"
      >
        Roadmap
      </div>
      <div style={{ textAlign: "center" }} className="roadmap_container-1">
        <img
          style={{ width: '70%', marginTop: '0.5rem', marginBottom: '1rem' }}
          src={require('../images/roadmap1.png')}
        />
      </div>
      <div style={{ textAlign: "center" }} className="roadmap_container-1">
        <img
          style={{ width: '70%', marginTop: '0rem', marginBottom: '1rem', marginLeft: "4.2rem" }}
          src={require('../images/roadmap2.png')}
        />
      </div>
    </div>
    <div className="technology_container">
      <div
        style={{
          fontSize: '2.5rem',
          textAlign: 'center',
          marginBottom: '3rem',
          marginTop: '7rem',
        }}
        className="technology-heading"
      >
        Technology Used
      </div>
      <div>technology</div>
    </div>
  </div>
);

export default props => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            title
            description
            contact {
              email
              phone
            }
          }
        }
      }
    `}
    render={data => <Call button={props.button} data={data} />}
  />
);
