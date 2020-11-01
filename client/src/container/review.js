import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "../CSS/review.css";

export default class Review extends Component {
  render() {
    return (
      <>
      <div className="Review">
      <div  style={{
            
            justifyContent:"center",
            fontFamily:"Lexend Giga",
            backgroundColor:"whitesmoke",
            padding:"2%"}}>
            
    <h1 data-aos="fade-down" style={{textAlign:"center", fontFamily:"Lexend Giga",}}>CUSTOMER REVIEWS</h1>
    
      <Carousel
        showArrows={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        interval={6100}
      >
        <div>
          <img src="/images/shirley.png" />
          <div className="myCarousel">
            <h3>Shirley Fultz</h3>
            <p>
            The food was great and the space looked amazing. Your staff, especially, stood out. They were so nice and fun to be around. It made the entire experience wonderful.
            </p>
          </div>
        </div>

        <div>
          <img src="/images/daniel.png" />
          <div className="myCarousel">
            <h3>Daniel Keystone</h3>
            <p>
            Amazing place Best space for wedding, Engagement, Reception and others ocassion's party. Design is very nice and detailed. All decoration is very beautiful. Nice space for all type of gathering
            </p>
          </div>
        </div>

        <div>
          <img src="/images/theo.png" />
          <div className="myCarousel">
            <h3>Theo Sorel</h3>
            <p>
            Great location, easy accessibility, delicious food, warm and welcoming interiors. All this at such an affordable deal. Shouldn't miss this one place, speaking from experience..
            </p>
          </div>
        </div>
      </Carousel>
    </div>
    </div>
    
    
  </>
    );
  }
}