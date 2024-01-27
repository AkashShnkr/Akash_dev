import React from 'react';import wd from "./image/wd.png";import Footer from './Footer';
import cw from "./image/cw.png";import i from "./image/i.webp";import mern from "./image/mern.png";import { Link } from 'react-router-dom';
export default function Service() {
  return (
    <div>
      <> <div><div class="row row-cols-3 m-3 g-4">
            <div class="col">
              <div class="card">
                <img id="s" src= {i}class="card-img-top" alt="Hollywood Sign on The Hill"/>
                <div class="card-body">
                  <h5 class="card-title">Web design</h5>
                  <p class="card-text">
                  Unleash the potential of your digital storefront with our innovative web design solutions. Our designs are not just visually appealing but also optimized for seamless  experiences, ensuring your website stands out in  digital landscape.</p>   <Link to="/Contact"><button  id ="ctn" type="button"  className="btn btn-outline-primary">Contact Me</button></Link>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card">
                <img src={wd} class="card-img-top" alt='cw'/>
                <div class="card-body">
                  <h5 class="card-title">Content Writings</h5>
                  <p class="card-text">
                  Unlock the power of words with our professional content writing service. From captivating blog posts to persuasive web copy, we craft tailor-made content that not only informs but also captivates your target audience </p> <Link to="/Contact"><button  id ="ctn" type="button"  className="btn btn-outline-primary">Contact Me</button></Link>
                 
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card">
                <img src={mern} class="card-img-top" alt="Los Angeles Skyscrapers"/>
                <div class="card-body">
                  <h5 class="card-title">Mern Stack</h5>
                  <p class="card-text"> Experience the next level of web development with our MERN stack expertise. We build feature-rich applications using MongoDB, Express.js, React, and Node.js, providing a solid foundation for your digital ambitions.</p> <Link to="/Contact"><button  id ="ctn" type="button"  className="btn btn-outline-primary">Contact Me</button></Link>
                </div>
              </div>
            </div>
           
            </div>
           </div><Footer/></>
    </div>
  )
}
