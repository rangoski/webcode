import React, { Component } from "react";
import TypeWriter from 'react-typewriter';

export default class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
        
        };
    }

    componentDidMount() {
        
    }

    render() {
        return (
            <div id="skrollr-body">



     
             





              <nav class="navbar navbar-default navbar-transparent navbar-fixed-top" role="navigation">
                  <div class="container">
                  <div class="navbar-header">
                      <button id="menu-toggle" type="button" class="navbar-toggle" data-toggle="collapse" data-target="#example">
                          <span class="sr-only">Toggle navigation</span>
                          <span class="icon-bar bar1"></span>
                          <span class="icon-bar bar2"></span>
                          <span class="icon-bar bar3"></span>
                      </button>
                  </div>

                  <div class="navbar-scroll-to collapse navbar-collapse">
                    <ul class="nav navbar-nav navbar-right navbar-uppercase">
                          <li>
                              <a href="" data-scroll="true" data-id="#whoWeAre" class="active"> 
                                <div class="header_list">
                                  About
                                </div>
                              </a>
                          </li>
                          <li>
                              <a href="" data-scroll="true" data-id="#team"> 
                                <div class="header_list">
                                  Team
                                </div>
                              </a>
                          </li>
                          <li>
                              <a href="" data-scroll="true" data-id="#contact"> 
                                <div class="header_list">
                                  Contact
                                </div>
                              </a>
                          </li>
                          <li>
                              <a href="" data-scroll="true" data-id="#contact"> 
                                <div class="header_list">
                                  Log In
                                </div>
                              </a>
                          </li>
                          <li>
                              <a href="" data-scroll="true" data-id="#contact"> 
                                <div class="sign_up">
                                  Sign Up
                                </div>
                              </a>
                          </li>
                          <li class="social-links">
                              <a href="#"> 
                                  <i class="fa fa-facebook"></i>
                              </a>
                              <a href="#"> 
                                  <i class="fa fa-twitter"></i>
                              </a>
                              <a href="#"> 
                                  <i class="fa fa-instagram"></i>
                              </a>
                          </li>
                     </ul>
                  </div>
                </div>
              </nav>

                  
              <div class="wrapper">
                  <div class="section section-header">
                      <div class="full-image pattern-image"> 
                          <video id="video_background" preload="auto" autoplay="true" loop="loop" muted="muted" volume="0"> 
                              <source src="assets/video/time.webm" type="video/webm"/> 
                          </video>
                          <div class="container"> 
                              <div class="content content-with-opacity">
                                  <h1>Eudaimonia</h1>
                                  <div class="separator-container">
                                    <div class="separator line-separator">∎</div>            
                                  </div>
                                  <TypeWriter
                                  delayMap={[
                                     {
                                      at: 22,
                                      delay: 500
                                    }]} typing={1}>
                                    <h5>Let's make the world a eutopia.</h5>
                                  </TypeWriter>
                              </div>               
                          </div>
                      </div>
                      <a href="" data-scroll="true" data-id="#whoWeAre" class="scroll-arrow hidden-xs hidden-sm">
                          <i class="fa fa-angle-down"></i>
                      </a>
                  </div>

                  <div class="section section-we-are-2 radu" id="whoWeAre">
                     <div class="text-area">
                          <div class="container">
                              <div class="row">
                                  <div class="col-md-4">
                                    <div class="title add-animation">
                                        <h5 class="text-gray">the world</h5>
                                        <h2>As One</h2>
                                        <div class="separator-container">
                                        <div class="separator line-separator">∎</div>
                                      </div>
                                    </div>  
                                  </div>
                                  
                                  <div class="col-md-7 col-md-offset-1"> 
                                      <p class="add-animation animation-1">Every need matters.</p>
                                      <p class="add-animation animation-2">We are setting out to solve all needs by</p>
                                      <p class="add-animation animation-2">building a hyper-localized and customizable super app.</p>
                                  </div>
                              </div>          
                          </div>
                      </div>
                  </div>

                  <div class="section section-we-made-1 section-with-hover">
                      <div class="row">
                              <div class="col-lg-4 col-md-6 col-sm-6">
                                  <div class="project add-animation animation-1">
                                        <img src="assets/img/rubik_background2.jpg"/>
                                        <a class="over-area color-1" href="javascript:void(0)" onClick="rubik.showModal(this)" data-target="project_1">
                                             <div class="content">
                                                <h4>Find someone to eat dinner with.</h4>
                                                <p>Click for more... </p>
                                            </div>
                                        </a>
                                  </div>
                              </div>
                              <div class="col-lg-4 col-md-6 col-sm-6">
                                  <div class="project add-animation animation-2">
                                        <img src="assets/img/rubik_background2.jpg"/>
                                         <a class="over-area color-1" href="javascript:void(0)" onClick="rubik.showModal(this)" data-target="project_2">
                                             <div class="content">
                                                <h4>Order food for pickup.</h4>
                                                <p>Click for more... </p>
                                            </div>
                                        </a>
                                  </div>
                              </div>
                              <div class="col-lg-4 col-md-6 col-sm-6">
                                  <div class="project add-animation animation-3">
                                        <img src="assets/img/rubik_background2.jpg"/>
                                         <a class="over-area color-1" href="javascript:void(0)" onClick="rubik.showModal(this)" data-target="project_3">
                                             <div class="content">
                                                <h4>Find a tennis partner on demand.</h4>
                                                <p>Click for more... </p>
                                            </div>
                                        </a>
                                  </div>
                              </div>
                           <div class="col-lg-4 col-md-6 col-sm-6">
                              <div class="project add-animation animation-1">
                                  <img src="assets/img/rubik_background2.jpg"/>
                                  <a class="over-area color-1" href="javascript:void(0)" onClick="rubik.showModal(this)" data-target="project_4">
                                       <div class="content">
                                          <h4>Be notified of food in your dorm.</h4>
                                          <p>Click for more... </p>
                                      </div>
                                  </a>
                               </div>
                          </div>
                          <div class="col-lg-4 col-md-6 col-sm-6">
                              <div class="project add-animation animation-2">
                                  <img src="assets/img/rubik_background2.jpg"/>
                                  <a class="over-area color-1" href="javascript:void(0)" onClick="rubik.showModal(this)" data-target="project_5">
                                       <div class="content">
                                          <h4>Video chat with a peer counselor.</h4>
                                          <p>Click for more... </p>
                                      </div>
                                  </a>
                              </div>
                          </div>
                            <div class="col-lg-4 col-md-6 col-sm-6">
                              <div class="project add-animation animation-3">
                                  <img src="assets/img/rubik_background2.jpg"/>
                                  <a class="over-area color-1" href="javascript:void(0)" onClick="{() => rubik.showModal(this)}" data-target="project_6">
                                       <div class="content">
                                          <h4>Create apps with friends.</h4>
                                          <p>Click for more... </p>
                                      </div>
                                  </a>
                              </div>
                          </div>
                        </div>
                  </div>

                   <div class="section section-we-do-1" id="values">
                    <div class="text-area">
                      <div class="container">
                          <div class="row">
                            <div class="title add-animation">  
                                 <h5 class="text-gray">the app of</h5>       
                                 <h2>Apps</h2>
                                 <div class="separator-container">
                                      <div class="separator line-separator">∎</div>
                                  </div>
                             </div>
                          </div>
                          <div class="row">
                             <div class="col-md-3 col-sm-6">
                                 <div class="card add-animation animation-1">
                                     <h5 class="text-gray">01.</h5>
                                     <h3>Pods 101</h3>
                                     <p>A pod is a mini-system that we nurture. They can be services, people, restaurants, businesses, categories, or products. They reflect a solution to a core need bundled for easy access.</p>
                                 </div>
                             </div>
                             <div class="col-md-3 col-sm-6">
                                   <div class="card add-animation animation-3">
                                     <h5 class="text-gray">02.</h5>
                                     <h3>Hyper-Local</h3>
                                     <p>We believe every location deserves its suite of Pods to tackle the needs within it. We are currently supporting the Stanford campus and Jodhpur.</p>
                                 </div>
                             </div>
                             <div class="col-md-3 col-sm-6">
                                   <div class="card add-animation animation-4">
                                     <h5 class="text-gray">03.</h5>
                                     <h3>Extensive</h3>
                                     <p>Whether it's speaking with a counselor, picking up food from your favorite restaurant, or hailing a ride, our mission is to unify all existing and new solutions to tackle each need of the world.</p>
                                 </div>
                             </div>
                             <div class="col-md-3 col-sm-6">
                                 <div class="card add-animation animation-2">
                                   <h5 class="text-gray">04.</h5>
                                   <h3>Customizable</h3>
                                   <p>Create your own Pod, with friends, or as a business to sell your shoes, share that funny meme, or deliver your famous biryani rice.<br/><br/><b>Restaurants - join the movement!</b> Create your own Pod and reach more customers. Sign up or learn more here.</p>
                               </div>
                             </div>
                          </div>
                      </div>
                    </div>
                  </div>

               <div class="section section-clients-2" id="friends">
                  <div class="container">
                    <div class="text-area">
                         <div class="title add-animation">  
                             <h5 class="text-gray">define</h5> 
                             <h2>Eudaimonia</h2>
                             <div class="separator-container">
                                <div class="separator line-separator">∎</div>
                             </div>
                         </div> 
                       <div class="tab-content quotes add-animation animation-2">  
                          <div class="tab-pane active" id="canon">
                             <p class="large">
                             Eudaimonia is the highest human good, the only human good that is desirable for its own sake (as an end in itself) rather than for the sake of something else (as a means toward some other end).
                             </p>
                          </div>
                        </div>    
                      </div>
                    </div>
                  </div>

                  <div class="section section-team-4" id="team">
                    <div class="container">
                      <div class="row">
                        <div class="col-md-4">
                          <div  class="title add-animation">
                              <h5 class="text-gray">the</h5>
                              <h2>Team</h2>
                              <div class="separator-container">
                                <div class="separator line-separator">∎</div>
                              </div>
                          </div>
                        </div>
                        <div class="col-md-7 col-offset-1">
                          <div class="team">
                            <div class="row">
                              <div class="col-md-4 col-sm-6">
                                <div class="member add-animation animation-1">
                                  <img class="img-circle" src="assets/img//faces/cisco.jpeg"/>
                                  <div class="description">
                                    <h3 class="big-text">Cisco Vlahakis</h3>
                                    <p class="small-text">Founder + CEO</p>
                                    <p class="details"> 
                                      Stanford CS '21<br/>
                                    </p>
                                 </div>
                                 <div class="social-buttons hidden-xs">
                                    <a href="http://comm277t-vlahakis.com/" target="_blank"><button class="btn btn-social btn-simple"><i class="fa fa-code"></i></button></a>
                                    <a href="https://www.linkedin.com/in/cisco-vlahakis/" target="_blank"><button class="btn btn-social btn-simple"><i class="fa fa-linkedin"></i></button></a>
                                 </div>
                                </div>
                              </div>
                              <div class="col-md-4 col-sm-6">
                                <div class="member add-animation animation-2">
                                  <img class="img-circle" src="assets/img//faces/harsha.jpg"/>
                                  <div class="description">
                                    <h3 class="big-text">Harsha Kumar</h3>
                                    <p class="small-text">Engineer</p>
                                    <p class="details"> 
                                      Learning Dollars<br/>
                                    </p>
                                 </div>
                                 <div class="social-buttons hidden-xs">
                                 </div>
                                </div>
                              </div>
                              <div class="col-md-4">
                                <div class="member add-animation animation-3">
                                  <img class="img-circle" src="assets/img//faces/face_1.jpg"/>
                                  <div class="description">
                                    <h3 class="big-text">Vivek Dwivedi</h3>
                                    <p class="small-text">Engineer</p>
                                    <p class="details"> 
                                      Learning Dollars
                                    </p>
                                 </div>
                                 <div class="social-buttons hidden-xs">
                                 </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                  </div>
                </div>

                <div class="section section-numbers-2" id="numbers">
                      <div class="parallax pattern-image">
                          <img src="assets/img//rubik_background.jpg"/>
                      </div>
                      <div class="container">
                          <div class="row">
                             <div class="col-md-8 col-md-offset-2 text-center">
                                  <div class="description">                 
                                     <div class="title">
                                        <h5>Join the</h5>
                                         <h2>Waiting List</h2>
                                         <div class="separator-container">
                                          <div class="separator line-separator">∎</div>
                                        </div>
                                     </div>
                                 </div>
                                 <h5 class="details">
                                    Join the waiting list for the beta. We'll keep you posted. 
                                  </h5>
                                  <form class="form-inline" role="form">
                                    <div class="form-group form-group2">
                                      <label class="sr-only" for="exampleInputEmail2">Email address</label>
                                      <input type="email" class="form-control transparent form-control2" placeholder="Your email here..."/>
                                    </div>
                                    <button type="submit" class="btn2 btn-danger btn2-fill">Notify Me</button>
                                  </form>
                             </div>
                          </div>
                          <div class="clearfix"></div>
                      </div>
                  </div>

               <div class="section section-contact-2" id="contact">
                      <div class="container">   
                        <div class="text-area">
                            <div class="title add-animation">
                                <h2>Contact Us</h2>
                                <div class="separator-container">
                                  <div class="separator line-separator">∎</div>
                                </div>
                            </div>
                        </div>
                        <div class="contact-form">
                            <div class="row">
                                <div class="col-md-4">
                                    <div class="form-group add-animation animation-1">
                                      <label>Your Full Name</label>
                                      <input type="text" value="" placeholder="Nelson Mandela" class="form-control"/>
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <div  class="form-group add-animation animation-2">
                                        <label>Your Email</label>
                                        <input type="text" value="" placeholder="nelson@eudaimonia.com" class="form-control"/>
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <div  class="form-group add-animation animation-3">
                                        <label>Subject</label>
                                        <input type="text" value="" placeholder="Subject" class="form-control"/>
                                    </div>
                                </div>
                                <div class="col-md-12">
                                    <div  class="form-group add-animation animation-3">
                                        <textarea class="form-control" placeholder="Start typing here..." rows="8"></textarea>
                                    </div>
                                <div>
                                <div class="col-md-2 col-md-offset-5">
                                     <button  class="btn btn-lg btn-black btn-contact">
                                        SEND <i class="fa fa-paper-plane"></i>
                                     </button>
                                </div>
                            </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                  
                  <footer class="footer footer-big footer-color-black" id="footerTrigger">
                      <div class="container">
                          <div class="copyright">
                              © 2019 Eudaimonia
                            <hr/>
                          </div>
                      </div>
                  </footer>
              </div>

              <div class="project-content" id="project_1">
                <span class="icon-close"><i class="pe-7s-close-circle"></i></span>
                <div>
                  <div class="project-details">
                    <div class="container">
                      <div class="project-title">
                          <h5>PUE, Mexico<span>.</span></h5>
                          <h2>Sol 52</h2>
                          <div class="separator-container">
                            <div class="separator line-separator">∎</div>
                          </div>
                      </div>
                      <div class="row">
                        <div class="col-md-4">
                          <div class="project-text">
                            <p><span>Type</span>Private house</p>
                            <p><span>Status</span>Built</p>
                            <p><span>Year</span>2013</p>
                            <p><span>Size</span>1000sqft</p>
                            <br/>
                            <p>Sol 25 is a house in San Pedro Cholula Puebla, Mexico. Located in a residential subdivision outside of the city, adjacent to Mount Zapoteca, a protected nature reserve. Sol 25 emerges as a home with the premise of creating spaces that are visually integrated with nature in addition to maximizing the size of the house.</p>
                            <p>A distinct architectural layout is generated; located on the ground floor are two bedrooms, a garden, and a lobby. Going up to the first level is the living room and kitchen, all in an open-plan concept into a double-height space where you can enjoy the view to the green areas. Going up a level is a loft with a studio. The roof space was allocated to a roof garden where you can enjoy an outdoor environment that is visually attractive in 360 degrees.</p>
                          </div>
                        </div>
                        <div class="col-md-8">
                          <div class="row">
                              <div class="col-md-6">
                                  <div class="project-image">
                                     <img src="assets/img/rubik_background.jpg"/>
                                  </div>
                              </div>
                              <div class="col-md-6">
                                  <div class="project-image">
                                     <img src="assets/img/rubik_background.jpg"/>
                                  </div>
                              </div>
                                <div class="col-md-6">
                                  <div class="project-image">
                                     <img src="assets/img/rubik_background.jpg"/>
                                  </div>
                              </div>
                              <div class="col-md-6">
                                  <div class="project-image">
                                     <img src="assets/img/rubik_background.jpg"/>
                                  </div>
                              </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="project-content" id="project_2">
                <span class="icon-close"><i class="pe-7s-close-circle"></i></span>
                <div>
                  <div class="project-details">
                    <div class="container">
                      <div class="project-title">
                          <h5>Positano, Italy<span>.</span></h5>
                          <h2>Villa Positano</h2>
                          <div class="separator-container">
                            <div class="separator line-separator">∎</div>
                          </div>
                      </div>
                      <div class="row">
                        <div class="col-md-4">
                          <div class="project-text">
                            <p><span>Type</span>Private house</p>
                            <p><span>Status</span>Built</p>
                            <p><span>Year</span>2014</p>
                            <p><span>Size</span>1500sqft</p>
                            <br/>
                            <p>The true protagonist of this project is a collection of antique ceramics from Vietri, entrusted with the role of exalting the particular elements that make the famous Villa in Positano a contemporary architectural masterpiece.</p>
                            <p>The harmonious composition of hand-painted ceramic tiles, the great passion of the villa’s owners, wraps a long ribbon of steel like a decorative skin. The ribbon is used to articulate the double height spaces of a former eighteenth-century monastery, linking the villa’s three levels.</p>
                            <p>It begins on the ceiling, dropping down a six-meter high wall to become a shelf in the large living room on the first floor, a platform, intersecting the stairs leading to the kitchen on the ground floor. The ribbon then transforms into the dining room table, finally climbing back up toward the ceiling to house the lighting fixtures. All without any interruption.</p>
                          </div>
                        </div>
                        <div class="col-md-8">
                          <div class="row">
                              <div class="col-md-6">
                                  <div class="project-image">
                                     <img src="assets/img/rubik_background.jpg"/>
                                  </div>
                              </div>
                              <div class="col-md-6">
                                  <div class="project-image">
                                     <img src="assets/img/rubik_background.jpg"/>
                                  </div>
                              </div>
                              <div class="col-md-6">
                                  <div class="project-image">
                                     <img src="assets/img/rubik_background.jpg"/>
                                  </div>
                              </div>
                              <div class="col-md-6">
                                  <div class="project-image">
                                     <img src="assets/img/rubik_background.jpg"/>
                                  </div>
                              </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="project-content" id="project_3">
                <span class="icon-close"><i class="pe-7s-close-circle"></i></span>
                <div>
                  <div class="project-details">
                    <div class="container">
                      <div class="project-title">
                          <h5>Sahibzada Ajit Singh Nagar, India<span>.</span></h5>
                          <h2>House 2413</h2>
                          <div class="separator-container">
                            <div class="separator line-separator">∎</div>
                          </div>
                      </div>
                      <div class="row">
                        <div class="col-md-4">
                          <div class="project-text">
                            <p><span>Type</span>Private house</p>
                            <p><span>Status</span>Built</p>
                            <p><span>Year</span>2014</p>
                            <p><span>Size</span>3000sqft</p>
                            <br/>
                            <p>The project is located in Mohali, a satellite town of Chandigarh that is witnessing fast paced growth like most Indian cities.</p>
                            <p>The brief of the client, a builder was to design a house for selling that would be universal in character so that it is acceptable & appreciated by all kinds of end users ranging from a high earning professional to a wealthy farmer.</p>
                            <p>The overall concept was devised as a free plan with overlapping spaces to allow flexibility. However, the movement was choreographed so as to unfold the layers as one moves along the vertical axis of the house.</p>
                          </div>
                        </div>
                        <div class="col-md-8">
                          <div class="row">
                              <div class="col-md-6">
                                  <div class="project-image">
                                     <img src="assets/img/rubik_background.jpg"/>
                                  </div>
                              </div>
                              <div class="col-md-6">
                                  <div class="project-image">
                                     <img src="assets/img/rubik_background.jpg"/>
                                  </div>
                              </div>
                              <div class="col-md-6">
                                  <div class="project-image">
                                     <img src="assets/img/rubik_background.jpg"/>
                                  </div>
                              </div>
                              <div class="col-md-6">
                                  <div class="project-image">
                                     <img src="assets/img/rubik_background.jpg"/>
                                  </div>
                              </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="project-content" id="project_4">
                <span class="icon-close"><i class="pe-7s-close-circle"></i></span>
                <div>
                  <div class="project-details">
                    <div class="container">
                      <div class="project-title">
                          <h5>Elwood, Australia<span>.</span></h5>
                          <h2>The Elwood House</h2>
                          <div class="separator-container">
                            <div class="separator line-separator">∎</div>
                          </div>
                      </div>
                      <div class="row">
                        <div class="col-md-4">
                          <div class="project-text">
                            <p><span>Type</span>Private house</p>
                            <p><span>Status</span>Built</p>
                            <p><span>Year</span>2012</p>
                            <p><span>Size</span>3000sqft</p>
                            <br/>
                            <p>The Elwood House is a new residential dwelling with a separate garage and studio to the rear. The client’s brief was for a modern family home that was interesting and exciting but not to the detriment of the comfort to the occupants and within a sensible budget.</p>
                            <p>“The client wanted a house that was clean, distinctive and enjoyable to use without feeling like they were an object in their own home because it was of a contemporary design” says the architect, Patrick Jost.</p>
                            <p>Conceptually, the house is separated into two clearly defined elements to the upper and lower levels.</p>
                          </div>
                        </div>
                        <div class="col-md-8">
                          <div class="row">
                             <div class="col-md-6">
                                  <div class="project-image">
                                     <img src="assets/img/rubik_background.jpg"/>
                                  </div>
                              </div>
                              <div class="col-md-6">
                                  <div class="project-image">
                                     <img src="assets/img/rubik_background.jpg"/>
                                  </div>
                              </div>
                              <div class="col-md-6">
                                  <div class="project-image">
                                     <img src="assets/img/rubik_background.jpg"/>
                                  </div>
                              </div>
                              <div class="col-md-6">
                                  <div class="project-image">
                                     <img src="assets/img/rubik_background.jpg"/>
                                  </div>
                              </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="project-content" id="project_5">
                <span class="icon-close"><i class="pe-7s-close-circle"></i></span>
                <div>
                  <div class="project-details">
                    <div class="container">
                      <div class="project-title">
                          <h5>Washington, DC, United States<span>.</span></h5>
                          <h2>Brandywine House</h2>
                          <div class="separator-container">
                            <div class="separator line-separator">∎</div>
                          </div>
                      </div>
                      <div class="row">
                        <div class="col-md-4">
                          <div class="project-text">
                            <p><span>Type</span>Private house</p>
                            <p><span>Status</span>Built</p>
                            <p><span>Year</span>2013</p>
                            <p><span>Size</span>4000sqft</p>
                            <br/>
                            <p>Located within close proximity to Rock Creek Park, and with easy access to the shops and restaurants on Connecticut Avenue, this large lot in Northwest Washington, DC presented a desirable opportunity for a young family to build a new house in this sought-after neighborhood.</p>
                            <p>Designed to respect both the scale of neighboring houses and the rhythm of the streetscape, the project aligns with adjacent houses while retaining the vast majority of mature trees and green space located between the street and the house. Materials composing the exterior, which include stone, wood and stucco, evoke traditional materials found throughout the neighborhood. The house appears relatively solid when viewed from the street with strategically placed windows insuring privacy to the street-facing spaces.</p>
                            <p>The “L” shaped house is organized around the outdoor living spaces and swimming pool, and is oriented towards the large, south facing rear yard. </p>
                          </div>
                        </div>
                        <div class="col-md-8">
                          <div class="row">
                              <div class="col-md-6">
                                  <div class="project-image">
                                     <img src="assets/img/rubik_background.jpg"/>
                                  </div>
                              </div>
                              <div class="col-md-6">
                                  <div class="project-image">
                                     <img src="assets/img/rubik_background.jpg"/>
                                  </div>
                              </div>
                              <div class="col-md-6">
                                  <div class="project-image">
                                     <img src="assets/img/rubik_background.jpg"/>
                                  </div>
                              </div>
                              <div class="col-md-6">
                                  <div class="project-image">
                                     <img src="assets/img/rubik_background.jpg"/>
                                  </div>
                              </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="project-content" id="project_6">
                <span class="icon-close"><i class="pe-7s-close-circle"></i></span>
                <div>
                  <div class="project-details">
                    <div class="container">
                      <div class="project-title">
                          <h5>New York City, NY, United States<span>.</span></h5>
                          <h2>ICRAVE Office</h2>
                          <div class="separator-container">
                            <div class="separator line-separator">∎</div>
                          </div>
                      </div>
                      <div class="row">
                        <div class="col-md-4">
                          <div class="project-text">
                            <p><span>Type</span>Office</p>
                            <p><span>Status</span>Built</p>
                            <p><span>Year</span>2014</p>
                            <p><span>Size</span>8000sqft</p>
                            <br/>
                            <p>After rapid growth, ICRAVE, a New York-based experiential branding and design firm, made the move to an 8,000-square-foot studio with the intention of really making it their own. The space, designed by the ICRAVE team itself, goes beyond the notion of an open plan office — it is designed specifically to foster ICRAVE’s immersive, collaborative culture. </p>
                            <p>The design process was a collective effort of the entire ICRAVE studio. Dream sessions were held to harvest ideas, where team members examined different areas and said, “Now, what if we could have...,” giving everyone a chance to bring their ideas to the table. Among those options, ICRAVE then crowdsourced the best solution for each micro-environment, and created a one-of-a-kind office. The result is a truly collaborative office space that fosters employees' creativity, interaction, and inspiration. </p>
                            <p>The reception desk doubles as a DJ booth, and the entrance plays host to archery matches. The conference room features large monolithic doors that swivel 360 degrees to open and close the space as needed. The kitchen and conference room are separated by a chalkboard that can be raised to create bar seating next to the kitchen or lowered to be used in meetings.</p>
                          </div>
                        </div>
                        <div class="col-md-8">
                          <div class="row">
                              <div class="col-md-6">
                                  <div class="project-image">
                                     <img src="assets/img/rubik_background.jpg"/>
                                  </div>
                              </div>
                              <div class="col-md-6">
                                  <div class="project-image">
                                     <img src="assets/img/rubik_background.jpg"/>
                                  </div>
                              </div>
                              <div class="col-md-6">
                                  <div class="project-image">
                                     <img src="assets/img/rubik_background.jpg"/>
                                  </div>
                              </div>
                              <div class="col-md-6">
                                  <div class="project-image">
                                     <img src="assets/img/rubik_background.jpg"/>
                                  </div>
                              </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        );
        
    }
}
