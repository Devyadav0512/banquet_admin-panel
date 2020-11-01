import React from 'react';
import classes from "../CSS/footer.module.css";
import { Icon } from '@iconify/react';
import whatsappIcon from '@iconify/icons-fa/whatsapp';
import emailLine from '@iconify/icons-clarity/email-line';
import locationIcon from '@iconify/icons-carbon/location';


const Footer = ()=>{
    return(
        <div>
            <div className={classes.Footer} style={{backgroundColor:"#ff6699",backgroundSize:"100% 100%",
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        flexDirection:"column",
        fontFamily:"Lexend Giga",
        color:"white",
        padding:"2%"}} >
                <center>
                   <h2>LETS MAKE IT SPECIAL</h2>
                </center>
                <br/>
                <h3>
                    Contact Us:
                </h3>
                <p>
                <Icon icon={locationIcon} style={{height: "60px", width:"40px"}}/>&nbsp;&nbsp;&nbsp;
                <Icon icon={whatsappIcon} style={{height: "40px", width:"40px"}} />&nbsp;&nbsp;&nbsp;
                <Icon icon={emailLine}  style={{height: "40px", width:"40px"}} />
            
                </p>
                
            </div>
            
        </div>
    )
}

export default Footer;