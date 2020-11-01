import React, { useState } from "react";
import axios from 'axios';

const Adminpanel = ()=>{
    const [homeDetails, setHomeDetails] = useState({
        hometext: '',
        homebutton: '',
        homepic: '',
        message:''
    });

    const homeValues = (event) => {
        setHomeDetails({
            ...homeDetails,
            [event.target.name]: event.target.value
        })
    };

    const upload = (event) => {
        setHomeDetails({
            homepic: event.target.files[0]
        })
    };

    const submitHome = async (event) => {
        event.preventDefault();
        const body = JSON.stringify({
            hometext: homeDetails.hometext,
            homebutton: homeDetails.homebutton,
            homepic: homeDetails.homepic
        });
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        };
        const res = await axios.patch("http://localhost:8000/admin/home/updatedata", body, config);
        setHomeDetails({
            message: res.message
        })
    }
    
    return(
        <div className='adminpanel container'>
            <h1>Hello Admin</h1><br/>
            <section className='Home'>
            <h3>Home</h3>
            <form onSubmit={submitHome}>
            <label for="hometext">Text</label>
            <input type="text" id="hometext" name="hometext" onChange={homeValues}/><br/>
            <label for="homebutton">Button</label>
            <input type="text" id="homebutton" name="homebutton" onChange={homeValues}/><br/>
            <label for="homepic">Image</label>
            <input type="file" id="homepic" name="homepic" onChange={upload}/><br/>
            <input type="submit" value="Submit"/>
            <p>{homeDetails.message}</p>
            </form>
            </section><br/>

            <section className='About Us'>
            <h3>About Us</h3>
            <form action="/submit/aboutus">
            <label for="aboutusheader">Heading</label>
            <input type="text" id="aboutusheader" name="aboutusheader"/><br/>
            <label for="aboutustext">Text</label>
            <input type="text" id="aboutustext" name="aboutustext"/><br/>
            <label for="aboutuspic">Image</label>
            <input type="file" id="aboutuspic" name="aboutuspic"/><br/>
            <input type="submit" value="Submit"/>
            </form>
            </section><br/>

            <section className='Menu'>
            <h3>Menu</h3>
            <form action="/submit/menu">
            <label for="menuheader">Heading</label>
            <input type="text" id="menuheader" name="menuheader"/><br/>
            <label for="menupic1">Image1</label>
            <input type="file" id="menupic1" name="menupic1"/><br/>
            <label for="menupic2">Image2</label>
            <input type="file" id="menupic2" name="menupic2"/><br/>
            <label for="menupic3">Image3</label>
            <input type="file" id="menupic3" name="menupic3"/><br/>
            <label for="menupic4">Image4</label>
            <input type="file" id="menupic4" name="menupic4"/><br/>
            <input type="submit" value="Submit"/>
            </form>
            </section>
        </div>
    )
}
export default Adminpanel;