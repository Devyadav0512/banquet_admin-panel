import React , { useEffect} from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import CustomNavbar from "../component/navbar";
import GetStarted from "./getStarted";
import AboutUs from "./about";
import Contact from "./contact";
import Facilities from "./Facilities";
import Gallery from "./gallery";
import Menu from "./menu";
import Review from "./review";

const Home = () => {
    useEffect(()=>{
        Aos.init({duration:1000});
    },[]);
    return(
        <>
            <div className="home">
                <CustomNavbar/>
                <div><GetStarted/></div>
                <div><AboutUs/></div>
                <div><Menu/></div>
                <div><Facilities/></div>
                <div><Gallery/></div>
                <div><Review/></div>
                <div><Contact/></div>
            </div>
        </>
    )
}


export default Home;