import './App.css';import Typed from 'react-typed';
import React from 'react';
import css from "./image/css.png"

import de from "./image/de.png"
import express from "./image/express.png"
import html5 from "./image/html5.png"


import img from "./image/img.png"

import js from "./image/js.png"

import mon from "./image/mon.png"
import nodejs from "./image/nodejs.png"
import Raect from "./image/Raect.png"

import { Link } from 'react-router-dom';
import Contact from './Contact';
import Footer from './Footer';

export default function home() {
  return (
    <div id="body">
      <main>
        <section className="firstSection">
            <div className="leftSection">
                Hi,My name is <span className="Entry">Akash Shankar</span>
                <div>and I am a <br/> 
                <span ><Typed
            strings={ ['Web Developer..','Problem solver...','Web Designer...']}
            typeSpeed={150}
            backSpeed={100}
            loop/>
</span>
<div>
                              <a  className="btn btn-outline-primary" href="./resume.pdf" download="resume.pdf">download Resume</a>
                              

                               
                          <Link to="/Contact"><button  id ="ctn" type="button"  className="btn btn-outline-primary">Contact Me</button></Link></div>
            </div></div>
            <div className="rightSection">
                <img class ="imag" src={de} alt="logo" width="80%"/>
            </div>
         
         

        </section> 
       <hr/> <section className="SecondSection">
        <p> What I have done so far</p>
            <h1 className="text-gray">Skills Acquries</h1>
            
            <div className="box1">
                <div className="vertical">
                    <img className="image-work" src={html5} alt="logo"/>
                    <div className="vertical-tittle">HTML 
                        <div className="vertical-desc">
                            "I have a strong command of HTML, the fundamental language of web development. Proficient in creating and structuring web pages, incorporating elements like text, images, links, and forms.
                        </div>
                    </div>
                   
                </div>
                <div className="vertical">
                    <img className="image-work" src={css} alt="logo"/>
                    <div className="vertical-tittle">Css
                        <div className="vertical-desc">
                            "I'm skilled in CSS, proficient in styling web pages to enhance their visual appeal and usability. Proficient in layout design, color schemes, animations, and responsive web design
                        </div>
                    </div>
                    </div>
                    <div className="vertical">
                        <img className="image-work" src={mon} alt="logo"/>
                        <div className="vertical-tittle">MongoBD
                            <div className="vertical-desc">
                                I have expertise in MongoDB, a NoSQL database system. Proficient in designing, querying, and managing databases, ensuring efficient storage and retrieval of data for web applications and beyond."
                            </div>
                        </div>
                        </div>
                        <div className="vertical">
                            <img className="image-work" src={js} alt="logo"/>
                            <div className="vertical-tittle">Java Script
                                <div className="vertical-desc">
                                    I excel in JavaScript, a versatile scripting language for web development. Skilled in creating interactive and dynamic web applications, handling events, manipulating the DOM, and utilizing libraries like jQue
                                </div>
                            </div>
            </div>
            <div className="vertical">
                <img className="image-work" src={express} alt="logo"/>
                <div className="vertical-tittle">Express js
                    <div className="vertical-desc">
                        I'm skilled in Express.js, a popular web application framework for Node.js. Proficient in creating RESTful APIs, routing, middleware implementation, and building robust server-side applications with efficient HTTP handling.
                    </div>
                </div>
</div>
<div className="vertical">
    <img className="image-work" src={nodejs} alt="logo"/>
    <div className="vertical-tittle">Node js
        <div className="vertical-desc">
            I have a strong command of Node.js, a runtime environment for server-side JavaScript. Proficient in building scalable and efficient web applications, handling asynchronous operations, and utilizing Express.js for routing.
        </div>
    </div>
</div> <div className="vertical">
    <img className="image-work" src={Raect} alt="logo"/>
    <div className="vertical-tittle">React js 
        <div className="vertical-desc">
            I excel in React.js, a powerful JavaScript library for building user interfaces. Proficient in component-based development, state management with Redux, and creating dynamic and responsive web applications.
        </div>
    </div>

</div>

            </div>
        </section><script src="https://unpkg.com/typed.js@2.0.16/dist/typed.umd.js"></script>


        <script src="https://unpkg.com/typed.js@2.0.16/dist/typed.umd.js"></script>
        <script src="https://unpkg.com/typed.js@2.0.16/dist/typed.umd.js"></script>
        <script>
          {`
            var typed = new Typed('#element', {
              strings: ['Web Developer....', 'Problem solver...', 'Web Designer...'],
              typeSpeed: 100,
            });
          `}
        </script>
         </main><br/>
         <Footer/>
         
    </div>
  )
}
