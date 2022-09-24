import React from "react";
import "../../../Loans/Vehicle/Vehicle.css";
import { Row, Col, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import ServiceGrids from "../../../../Components/UI/Grids/ServiceGrid/ServiceGrids";

import FourWheelerData from './data'


const BlogFourwheeler = () => {
  return (
    <>
    <section className="section-padding"/>
      <section className="vehicle-section mobile-section-padding">
        <div className="heading1">
          <h2>Four Wheeler Blogs</h2>
        </div>
        <Container>
          <Row>
            <Col>
              <div className="feature-grids clearfix">
              {FourWheelerData.data.map((item,id)=>{
                return (
                  <Link to={`/blogs/four-wheeler-loan/${item.url}`}>
                  <ServiceGrids 
                  key={id}
                   imageclass={item.imageclass}
                  image_imgclass={item.image_imgclass}
                  contentclass={item.contentclass}
                  nameclass={item.nameclass}
                  descriptionclass={item.descriptionclass}
                  img={item.img}
                  alt={item.alt}
                  name={item.name}
                  description={item.description}
                  />
                  </Link>
                )
                })}
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default BlogFourwheeler;
