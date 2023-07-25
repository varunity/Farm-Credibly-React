import React from 'react'

import { Helmet } from 'react-helmet'

import './page.css'

const Page = (props) => {
  return (
    <div className="page-container">
      <Helmet>
        <title>Page - Farm Credibly</title>
        <meta property="og:title" content="Page - Farm Credibly" />
      </Helmet>
      <div className="navbar-container">
        <div className="max-width">
          <div className="page-logo">
            <div className="page-container01">
              <img
                alt="image"
                src="/fc-forrest-icon-200w.png"
                className="page-image"
              />
            </div>
            <span className="page-text">
              <span className="page-text01">FARM</span>
              <span> CREDIBLY</span>
            </span>
          </div>
          <div className="page-links">
            <span className="page-text03 navbarLink">Blog</span>
            <button className="button button-primary">Sign up</button>
          </div>
          <div className="page-burger-menu navbar-burger-menu">
            <svg viewBox="0 0 1024 1024" className="page-icon">
              <path d="M128 256h768v86h-768v-86zM128 554v-84h768v84h-768zM128 768v-86h768v86h-768z"></path>
            </svg>
          </div>
        </div>
      </div>
      <div className="hero-container section-container">
        <div className="page-max-width1 max-width">
          <div className="page-content">
            <span className="page-subtitle beforeHeading">
              financial SERVICES for the best of us
            </span>
            <h1 className="page-title">
              <span>Unlock the technology your </span>
              <span className="page-text05">farm needs</span>
            </h1>
            <span className="page-description">
              Farm Credibly is focused on improving access to financial
              services.
            </span>
            <div className="page-container02">
              <button className="button button-gradient">Get started</button>
              <button className="button button-transparent">Sign up</button>
            </div>
          </div>
          <div className="page-image1">
            <img
              alt="image"
              src="/fc_farmer_woman-600w.png"
              className="page-hero-image"
            />
            <img
              alt="image"
              src="/union-400w.png"
              className="page-graphic-top"
            />
            <img
              alt="image"
              src="/group%2018-1200w.png"
              className="page-image2"
            />
          </div>
        </div>
      </div>
      <footer className="page-footer">
        <div className="page-links-container">
          <div className="page-container03">
            <div className="footer-column">
              <span className="page-text06">Product</span>
              <span className="page-text07">How it works</span>
              <span className="page-text08">Features</span>
              <span className="page-text09">Pricing</span>
              <span className="page-text10">Blog</span>
              <span>FAQ</span>
            </div>
            <div className="footer-column">
              <span className="page-text12">App</span>
              <span className="page-text13">Download iOS app</span>
              <span className="page-text14">Download Android app</span>
              <span className="page-text15">Log in to Portal</span>
              <span className="page-text16">Administrative</span>
              <span>Legal</span>
            </div>
            <div className="footer-column">
              <span className="page-text18">Company</span>
              <span className="page-text19">About us</span>
              <span className="page-text20">Culture</span>
              <span className="page-text21">Code of conduct</span>
              <span className="page-text22">Careers</span>
              <span className="page-text23">News</span>
              <span>Contact</span>
            </div>
            <div className="footer-column">
              <span className="page-text25">Invest</span>
              <span className="page-text26">Commodity</span>
              <span className="page-text27">Savings</span>
              <span className="page-text28">
                <span>Taxes and fees</span>
                <br></br>
                <span></span>
              </span>
              <span className="page-text31">
                <span>Currency exchange</span>
              </span>
              <span>Community</span>
            </div>
            <div className="footer-column">
              <span className="page-text34">Security</span>
              <span className="page-text35">Security status</span>
              <span className="page-text36">ISO</span>
              <span className="page-text37">System status</span>
              <span>Customer Help</span>
            </div>
            <div className="footer-column">
              <span className="page-text39">Follow</span>
              <span className="page-text40">Instagram</span>
              <span className="page-text41">Twitter</span>
              <span className="page-text42">Facebook</span>
              <span className="page-text43">Tik Tok</span>
              <span className="page-text44">Linkedln</span>
              <span>Youtube</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Page
