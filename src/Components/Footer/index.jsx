import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './Footer.css'


/**
* @author
* @function Footer
**/

const Footer = (props) => {
    const FooterIconListItems = [
        ["https://instagram.com/the_miracle_solutions", "fa-facebook-f"], ["https://instagram.com/the_miracle_solutions", "fa-twitter"],
        ["https://instagram.com/the_miracle_solutions", "fa-instagram"], ["https://instagram.com/the_miracle_solutions", "fa-linkedin-in"]
    ]

    // 2-D Array for Footer Company List having links and Respective Name
    const FooterCompanyList = [
        ["/about", "About us"], ["/team", "Directors"], ["/conference", " Conferences"], ["/contact", "Contact us"]
    ]

    const FooterCompanyList2 = [
        ["/insurance", "Insurance"], ["/emicalculator", "EMI Calculator"], ["/policy", "Privacy Policy"], ["/testimonial", "Testimonials"], ["/faq", "FAQ"]
    ]

    const FooterServiceList = [
        ["/vehicle", "Vehicle Loan"], ["/mortage", "Mortage Loan"], ["/gold", "Gold Loan"], ["/personal", "Personal Loan"] 
    ]

    const renderIconListItems = () => {
        return (  FooterIconListItems.map((val, index) => { return <li key={index}> <a href={val[0]} target="_blank" rel="noopener noreferrer"> <i className={`fab ${val[1]}`} aria-hidden="true"></i> </a> </li> }) )
    }

    const renderCompanyList = () => {
        return ( FooterCompanyList.map((val, index) => { return ( <li key={index}> <Link to={val[0]}> {val[1]} </Link> </li> ) }) )
    }

    const renderCompanyList2 = () => {
        return ( FooterCompanyList2.map((val, index) => { return ( <li key={index}> <Link to={val[0]}> {val[1]} </Link> </li> ) }) )
    }

    const renderServiceList = () => {
        return ( FooterServiceList.map((val, index) => { return ( <li key={index}> <a href={val[0]} target="_blank" rel="noopener noreferrer"> {val[1]} </a> </li> ) }) )
    }

  

    return (
        <>
            <footer fixed="bottom" className="site-footer">
                <div className="upper-footer">
                    <Container>
                        <Row>
                          
                            <Col lg={3} sm={6} xs={12}>
                                <div className="widget footer-company-section">
                                    <h3 className="widget-title">Company</h3>
                                    <ul>
                                        {renderCompanyList()}
                                    </ul>
                                </div>
                            </Col>
                            
                            <Col lg={3} sm={6} xs={12}>
                                <div className="widget footer-service-section">
                                    <h3 className="widget-title">Loans</h3>
                                    <ul>
                                      {renderServiceList()}
                                    </ul>
                                </div>
                            </Col>
                            <Col lg={3} sm={6} xs={12}>
                            <div className="widget footer-company-section">
                            <h3 className="widget-title">Extras</h3>
                            <ul>
                                {renderCompanyList2()}
                            </ul>
                        </div>
                            </Col>
                            <Col lg={3} sm={6} xs={12}>
                                <div className="widget footer-newsletter-section">
                                    <h3 className="widget-title">Newsletter</h3>
                                    <p>
                                        You will be notified about the current News and Events in the company.
                                    </p>
                                    <form>
                                        <div className="newsletter-input-div">
                                            <input type="email" className="form-control newsletter-input" placeholder="Email Address *"  /> {/*value={email} onChange={e => setEmail(e.target.value)} required*/}
                                            <button type="submit">
                                                <i className="far fa-envelope"></i>
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div className="lower-footer">
                    <Container>
                        <Row>
                            <div className="seperator"></div>
                            <Col xs={12}>
                                <p className="copyright">
                                    Copyright © 2021 <span style={{color:"#FC6E36"}}>Yuwan Financiers Private Limited </span> All rights reserved.
                               </p>
                                <div className="extra-links">
                                    <ul>
                                        <li>{renderIconListItems()}</li>
                                        {/* <li><Link to="/faq">FAQ</Link></li> */}
                                    </ul>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </footer>
        </>
    )
}


export default Footer