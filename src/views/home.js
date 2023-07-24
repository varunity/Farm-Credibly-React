import React from 'react'

import { Helmet } from 'react-helmet'

import Card from '../components/card'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Farm Credibly</title>
        <meta property="og:title" content="Farm Credibly" />
      </Helmet>
      <div className="navbar-container">
        <div className="max-width">
          <div className="home-logo">
            <div className="home-container01">
              <img
                alt="image"
                src="/fc-forrest-icon-200w.png"
                className="home-image"
              />
            </div>
            <span className="home-text">
              <span className="home-text001">FARM</span>
              <span> CREDIBLY</span>
            </span>
          </div>
          <div className="home-links">
            <span className="home-text003 navbarLink">How it works</span>
            <span className="home-text004 navbarLink">Features</span>
            <span className="home-text005 navbarLink">Blog</span>
            <span className="home-text006 navbarLink">Pricing</span>
            <button className="button-secondary button">Log in</button>
            <button className="button button-primary">Get started</button>
          </div>
          <div className="home-burger-menu navbar-burger-menu">
            <svg viewBox="0 0 1024 1024" className="home-icon">
              <path d="M128 256h768v86h-768v-86zM128 554v-84h768v84h-768zM128 768v-86h768v86h-768z"></path>
            </svg>
          </div>
        </div>
      </div>
      <div className="hero-container section-container">
        <div className="home-max-width1 max-width">
          <div className="home-content">
            <span className="home-subtitle beforeHeading">
              up-start finance SERVICES
            </span>
            <h1 className="home-title">
              <span>Unlock the technology your </span>
              <span className="home-text008">business needs</span>
            </h1>
            <span className="home-description">
              Farm Credibly helps farms and other entrepreneurs to scale their
              business and puts them in a better place to access financial
              services.   
            </span>
            <div className="home-container02">
              <button className="button button-gradient">Get started</button>
              <button className="button button-transparent">Log in</button>
            </div>
          </div>
          <div className="home-image1">
            <img alt="image" src="/hero-600w.png" className="home-hero-image" />
            <img
              alt="image"
              src="/union-400w.png"
              className="home-graphic-top"
            />
            <img
              alt="image"
              src="/group%2018-1200w.png"
              className="home-image2"
            />
          </div>
        </div>
      </div>
      <div className="section-container">
        <div className="home-max-width2 max-width">
          <div className="home-image3">
            <img
              alt="image"
              src="/group%2020-1200w.png"
              className="home-hero-image1"
            />
          </div>
          <div className="home-content1">
            <span className="home-text009 beforeHeading">how it works</span>
            <h1 className="home-text010">
              <span>
                Sell and get paid
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="home-text012">
                faster
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span>than ever.</span>
              <span></span>
            </h1>
            <span className="home-text015">
              Digital payments represent the future of commerce. Don&apos;t miss
              out on the opportunity. Let us help you on your digital
              transformation journey.
            </span>
            <div className="home-container03">
              <button className="button-secondary button bg-transparent">
                Learn more
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="home-section1 section-container">
        <div className="home-max-width3 max-width">
          <div className="home-content2">
            <span className="home-text016 beforeHeading">Get support</span>
            <h1 className="home-text017">
              <span className="home-text018">We guide you</span>
              <br></br>
              <span className="home-text020">
                through the process of growing your business
              </span>
            </h1>
            <span className="home-text021">
              It&apos;s difficult to know the next step. Benefit from our
              experience in improving access to financial services.
            </span>
            <div className="home-container04">
              <button className="button-secondary button bg-transparent">
                See how
              </button>
            </div>
          </div>
          <div className="home-image4">
            <img
              alt="image"
              src="/group%2021-1200w.png"
              className="home-hero-image2"
            />
          </div>
        </div>
      </div>
      <div className="home-section2 section-container">
        <div className="home-max-width4 max-width">
          <div className="home-image5">
            <img
              alt="image"
              src="/jc-gellidon-fnc3yctccoi-unsplash%2014%20%5B1%5D-1200w.png"
              className="home-hero-image3"
            />
          </div>
          <div className="home-content3">
            <span className="home-text022 beforeHeading">get started</span>
            <h1 className="home-text023">
              Open your business bank account today
            </h1>
            <div className="home-step">
              <div className="home-number">
                <span className="home-text024">1</span>
              </div>
              <div className="home-container05">
                <span className="home-title1">Register your business</span>
                <span className="home-text025">
                  <span>
                    If your business is registered with the companies office you
                    can move to step 2. Otherwise g
                  </span>
                  <span className="home-text027">et support</span>
                  <span>.</span>
                </span>
              </div>
            </div>
            <div className="home-step1">
              <div className="home-number1">
                <span className="home-text029">2</span>
              </div>
              <div className="home-container06">
                <span className="home-title2">Get your TCC</span>
                <span className="home-text030">
                  <span>
                    Your Tax Compliance Certificate will be necessary to open
                    your bank account. This is a simple step with our
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="home-text032">help</span>
                  <span>.</span>
                </span>
              </div>
            </div>
            <div className="home-step2">
              <div className="home-number2">
                <span className="home-text034">3</span>
              </div>
              <div className="home-container07">
                <span className="home-title3">Apply Online</span>
                <span className="home-text035">
                  <span>
                    Let us help you find the right banking partner for your
                    needs. Besides the company seal and signatures, the entire
                    process can be handled online.
                  </span>
                  <br></br>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section-container">
        <div className="home-max-width5 max-width">
          <span className="home-text038 beforeHeading">get started</span>
          <h1 className="home-text039">
            <span>No matter what you do, </span>
            <span>Farm Credibly will save you money</span>
          </h1>
          <div className="home-cards-container">
            <Card rootClassName="card-root-class-name"></Card>
            <Card text="Personal" rootClassName="card-root-class-name2"></Card>
            <Card text="Family" rootClassName="card-root-class-name1"></Card>
          </div>
        </div>
      </div>
      <div className="home-section4 section-container">
        <div className="home-max-width6 max-width">
          <div className="home-faq">
            <div className="home-questions">
              <span className="home-text042 beforeHeading">faq</span>
              <h1 className="home-text043">
                <span className="home-text044">
                  Frequently Asked
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
                <span className="home-text046">Questions</span>
              </h1>
              <div data-role="Accordion" className="question">
                <div data-type="accordion-header" className="home-trigger">
                  <span className="home-text047">
                    Is this a Free or Paid service?
                  </span>
                  <svg viewBox="0 0 1024 1024" className="home-icon02">
                    <path d="M810 554h-256v256h-84v-256h-256v-84h256v-256h84v256h256v84z"></path>
                  </svg>
                </div>
                <div data-type="accordion-content" className="question-content">
                  <span className="home-text048">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit
                    mollit.
                  </span>
                </div>
              </div>
              <div data-role="Accordion" className="question">
                <div data-type="accordion-header" className="home-trigger1">
                  <span className="home-text049">
                    Do you operate in United States?
                  </span>
                  <svg viewBox="0 0 1024 1024" className="home-icon04">
                    <path d="M810 554h-256v256h-84v-256h-256v-84h256v-256h84v256h256v84z"></path>
                  </svg>
                </div>
                <div data-type="accordion-content" className="question-content">
                  <span className="home-text050">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit
                    mollit.
                  </span>
                </div>
              </div>
              <div data-role="Accordion" className="question">
                <div data-type="accordion-header" className="home-trigger2">
                  <span className="home-text051">
                    Is this a globally available service?
                  </span>
                  <svg viewBox="0 0 1024 1024" className="home-icon06">
                    <path d="M810 554h-256v256h-84v-256h-256v-84h256v-256h84v256h256v84z"></path>
                  </svg>
                </div>
                <div data-type="accordion-content" className="question-content">
                  <span className="home-text052">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit
                    mollit.
                  </span>
                </div>
              </div>
              <div data-role="Accordion" className="question">
                <div data-type="accordion-header" className="home-trigger3">
                  <span className="home-text053">
                    Do you have an iOS or Android app?
                  </span>
                  <svg viewBox="0 0 1024 1024" className="home-icon08">
                    <path d="M810 554h-256v256h-84v-256h-256v-84h256v-256h84v256h256v84z"></path>
                  </svg>
                </div>
                <div data-type="accordion-content" className="question-content">
                  <span className="home-text054">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit
                    mollit.
                  </span>
                </div>
              </div>
            </div>
            <img
              alt="image"
              src="/group%202-1200w.png"
              className="home-image6"
            />
          </div>
          <div className="home-banner">
            <span className="home-text055 beforeHeading">get started</span>
            <h1 className="home-text056">
              <span>Push your finances to</span>
              <br></br>
              <span></span>
              <span></span>
              <span> the next level.</span>
            </h1>
            <span className="home-text062">
              Digital payments are the future. Get there with help you can
              trust.
            </span>
            <div className="home-btns">
              <button className="home-button6 button button-transparent">
                See all plans
              </button>
              <button className="home-button7 button button-gradient">
                Get started
              </button>
            </div>
          </div>
        </div>
      </div>
      <footer className="home-footer">
        <div className="home-links-container">
          <div className="home-container08">
            <div className="footer-column">
              <span className="home-text063">Product</span>
              <span className="home-text064">How it works</span>
              <span className="home-text065">Features</span>
              <span className="home-text066">Pricing</span>
              <span className="home-text067">Blog</span>
              <span>FAQ</span>
            </div>
            <div className="footer-column">
              <span className="home-text069">App</span>
              <span className="home-text070">Download iOS app</span>
              <span className="home-text071">Download Android app</span>
              <span className="home-text072">Log in to Portal</span>
              <span className="home-text073">Administrative</span>
              <span>Legal</span>
            </div>
            <div className="footer-column">
              <span className="home-text075">Company</span>
              <span className="home-text076">About us</span>
              <span className="home-text077">Culture</span>
              <span className="home-text078">Code of conduct</span>
              <span className="home-text079">Careers</span>
              <span className="home-text080">News</span>
              <span>Contact</span>
            </div>
            <div className="footer-column">
              <span className="home-text082">Invest</span>
              <span className="home-text083">Commodity</span>
              <span className="home-text084">Savings</span>
              <span className="home-text085">
                <span>Taxes and fees</span>
                <br></br>
                <span></span>
              </span>
              <span className="home-text088">
                <span>Currency exchange</span>
              </span>
              <span>Community</span>
            </div>
            <div className="footer-column">
              <span className="home-text091">Security</span>
              <span className="home-text092">Security status</span>
              <span className="home-text093">ISO</span>
              <span className="home-text094">System status</span>
              <span>Customer Help</span>
            </div>
            <div className="footer-column">
              <span className="home-text096">Follow</span>
              <span className="home-text097">Instagram</span>
              <span className="home-text098">Twitter</span>
              <span className="home-text099">Facebook</span>
              <span className="home-text100">Tik Tok</span>
              <span className="home-text101">Linkedln</span>
              <span>Youtube</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Home
