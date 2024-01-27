import React from 'react';import wd from "./image/wd.png";import net from "./image/net.png";import todolist from "./image/todolist.webp";import sgpa from "./image/sgpa.webp";import Footer from './Footer';
import cw from "./image/cw.png";import i from "./image/i.webp";import mern from "./image/mern.png";import { Link } from 'react-router-dom';
export default function Project() {
  return (
    <div>
      <> <div><div class="row row-cols-3 m-3 g-4">
            <div class="col">
              <div class="card">
                <img id="s" src= {net}class="card-img-top" alt="Hollywood Sign on The Hill"/>
                <div class="card-body">
                  <h5 class="card-title">Netflix</h5>
                  <p class="card-text">Netflix Clone
                    </p>  <a href="https://github.com/AkashShankarrajput/clone" target="_blank" rel="noopener noreferrer">
      <button id="ctn" type="button" className="btn btn-outline-primary">
       Check it out!
      </button>
    </a>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card">
                <img src={todolist} class="card-img-top" alt='cw'/>
                <div class="card-body">
                  <h5 class="card-title">To-Do-list</h5>
                  <p class="card-text">Yo-do-list
                     </p><a href="https://github.com/AkashShankarrajput/To-do-list" target="_blank" rel="noopener noreferrer">
      <button id="ctn" type="button" className="btn btn-outline-primary">
      Check it out!
      </button>
    </a>
                 
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card">
                <img src={sgpa} class="card-img-top" alt="Los Angeles Skyscrapers"/>
                <div class="card-body">
                  <h5 class="card-title">Sgpa calculator</h5>
                  <p class="card-text">S.G.P.A Calculator</p> <a href="https://github.com/AkashShankarrajput/S.G.P.A" target="_blank" rel="noopener noreferrer">
      <button id="ctn" type="button" className="btn btn-outline-primary">
      Check it out!
      </button>
    </a>
                </div>
              </div>
            </div>
           
            </div>
          </div><Footer/></>
    </div>
  )
}


