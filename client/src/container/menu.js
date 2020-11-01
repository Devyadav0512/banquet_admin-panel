import React , {useEffect} from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { Row,Col } from "react-bootstrap";
import m1 from "../assets/m1.PNG";
import m2 from "../assets/m2.PNG";
import m3 from "../assets/m3.PNG";
import m4 from "../assets/m4.PNG";
//import classes from "../CSS/getStarted.module.css";


const Menu = ()=>{
    useEffect(()=>{
        Aos.init({duration:2000});
    },[]);
    return(
             <>
             <div className="Menu">
            <div className="container-fluid" id="about" style={{
                    display:"flex",
                    alignItems:"center",
                    fontFamily:"Lexend Giga",
                    flexDirection:"column",
                    backgroundColor:"whitesmoke",
                    height:"100%",
                    marginTop:"55px",
                    padding:"5%"}}>
                    
                <h1 data-aos="fade-up" style={{textAlign:"center"}}>OUR MENU</h1>
                <div  className="container-fluid " style={{margin:"2% 0"}}>
                <Row style={{alignContent:"center"}}>
                        <Col md={6} xs={12} >
                            <div  ></div>  
                            <img src={m3} data-aos="fade-right" alt="Menu image" height={400} width={265}/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   
                            <img src={m4} data-aos="fade-right" alt="Menu image" height={400} width={265}/>&nbsp;&nbsp; 
                            </Col>
                        <Col md={6} xs={12}>
                        <img src={m2} data-aos="fade-left"  alt="Menu image" height={400} width={265}/>&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;  
                            <img src={m1} data-aos="fade-left" alt="Menu image" height={400} width={265}/>
                            
                        </Col>
                    </Row>
                 </div>
                 </div>
                 </div>
        </>
    )
}
export default Menu


