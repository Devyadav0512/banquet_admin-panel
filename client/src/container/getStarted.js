import React ,{useEffect, useState} from "react";
import axios from 'axios';
import classes from "../CSS/getStarted.module.css";
import { Button } from "react-bootstrap";
import Aos from "aos";
import { Link } from "react-scroll";
import { Icon } from '@iconify/react';
import partyPopper from '@iconify/icons-twemoji/party-popper';




const GetStarted = () =>{
    const [ data, setData ] = useState([]);

    const getData = async () => {
        await axios.get('/admin/home/getdata')
        .then(doc => {
            setData(doc.data);
        });
    }   
    
    useEffect(()=>{
        getData();
        Aos.init({duration:3000});
    },[]);
    return(
        <>
            <div className={classes.GetStarted} id="getStarted" style={{backgroundImage: `url(${'http://localhost:5000/' + data.homepic})`,
            backgroundSize:"100% 100%",
            display:"flex",
            alignItems:"center",
            justifyContent:"center",
            flexDirection:"column",
            color:"white",
            fontFamily: 'Lexend Giga'}}>
                <h1 data-aos="fade-down" style={{textAlign:"center"}}><Icon icon={partyPopper} /> {data.hometext} <Icon icon={partyPopper} /> </h1>
                <br/>
                
                <p  data-aos="fade-down"><Button variant="danger" style={{marginRight:"10px",borderRadius:"20px"}}><Link activeClass="active"
                    to="Gallery"
                    className={classes.Link}
                    spy={true}
                    smooth={true}
                    duration={1000}
                    offset={-50}
                    >{data.homebutton}</Link></Button>
                
                </p>
            </div>
        </>
    )
}
export default GetStarted;