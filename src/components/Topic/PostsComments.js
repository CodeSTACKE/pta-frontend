import React from "react";
import Wrapper from '../components/Wrapper';
import '../stylesheets/style.css';
import pta from '../images/pta.jpg';

const Topic = () => {
    return (
      <div className="container-fluid col-md-4 mt-5">
        <h3>Topic</h3>
        <Wrapper>
        <h5>List of Topic</h5>
        <p><a>Parenting and Family Resources</a></p>
        <p><a>Upcoming Events</a></p>
        <p><a>Carpool</a></p>
        </Wrapper>        
        </div>
    );
  }


export default About;
