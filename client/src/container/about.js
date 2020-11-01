import React , {useEffect} from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { Row,Col } from "react-bootstrap";
import about from "../assets/about.jpg";


const AboutUs = ()=>{
    useEffect(()=>{
        Aos.init({duration:2000});
    },[]);
    return(
        <>
            <div className="container-fluid" id="about" style={{
                    display:"flex",
                    alignItems:"center",
                    fontFamily:"Lexend Giga",
                    flexDirection:"column",
                    
                    height:"100%",
                    padding:"4%"}}>
                <h1 data-aos="fade-up" style={{textAlign:"center"}}>WHO WE ARE</h1>
                <div data-aos="fade-right" className="container-fluid " style={{margin:"2% 0"}}>
                    <Row>
                        <Col md={6} xs={12} style={{}} >
                            <div style={{backgroundImage:`url(${about})`,backgroundSize:"100% 100%",height:"100%"}} ></div>
                        </Col>
                        <Col md={6} xs={12}>
                            <p style={{fontSize:"20px"}}> We are a grandiose destination for all your celebration & event planning needs. If your looking for a great location with heart-of-the city route, exemplary ambiance and with 100 % pure Vegetarian In -house catering food, then we are the right choice. Your celebration needs special attention ,dedicated planning & royal ambience to make your friends & relatives enjoy an elite & honored care & hospitality . Get in touch with us today and lets plan the event in no time !</p><br/>
                            
                        </Col>
                    </Row>
                </div>

            </div>
        </>
    )
}
export default AboutUs