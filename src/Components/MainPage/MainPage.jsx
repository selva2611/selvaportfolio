import React from 'react'
import './MainPage.css'
import HomeImage from '../../Assets/HomeImage.JPG'
import { IoIosCall } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import eduimg from '../../Assets/eduimg.webp';
// import image from '../../Assets/image.png';
import image from '../../Assets/image.jpeg';
// import HomeImage from '../../Assets/HomeImage.png';
import callimg from '../../Assets/callimg.png';
import mail from '../../Assets/mail.png';
import wpimg from '../../Assets/wpimg.jpeg';
const MainPage = () => {
  return (
    <div>
      {/* <div className="navdiv"> */}
      <nav class="navbar background">
        
		<div class="navcontent">
            <ul class="list">
            <li className='navlist'> <a href="#Home"><h3>Home</h3></a></li>
            <li className='navlist'><a href="#About"><h3>About</h3></a></li>
            <li className='navlist'><a href="#Education"><h3>Education</h3></a></li>
            <li className='navlist'><a href="#Skills"><h3>Skills</h3></a></li>
            <li className='navlist'><a href="#Contact Us"><h3>Contact Us</h3></a></li>
           <div className="navicon">
           <li><IoIosCall /></li>
            <li><FaLinkedin /></li>
            <li><IoLogoWhatsapp /></li>
           </div>
            </ul>
        </div>
	</nav>
        {/* <ul className='list'>
            <li> <a href="#Home"><h3>Home</h3></a></li>
            <li><a href="#About"><h3>About</h3></a></li>
            <li><a href="#Education"><h3>Education</h3></a></li>
            <li><a href="#Projects"><h3>Projects</h3></a></li>
            <li><a href="#Contact Us"><h3>Contact Us</h3></a></li>
           <div className="navicon">
           <li><IoIosCall /></li>
            <li><FaLinkedin /></li>
            <li><IoLogoWhatsapp /></li>
           </div>
        </ul> */}
      {/* </div> */}

      <section className='' id='Home'>
        <div className="divhome">
            <div className="divhomeimg">
                <img src={HomeImage} alt="" />
            </div>
            <div className="divhomecont">
                <h1>I'm a Student</h1>
                <p>Hi, I'm Selva Balaji. Currently pursuing my Bachelor of Engineering in Computer Science.
                    Now, I'm looking for a internship.</p>
                <button>View my Resume</button>
            </div>
        </div>

      </section>

      <section className='aboutsection' id='About'>
      <div className="divaboutmain">
      <h2 className='abouthead'>About Me</h2>

<div className="divabout">

    <div className="divaboutleft">
        <p className='aboutleftp1'>Hello, I'm Selva Balaji from Sivakasi. I'm currently in my third year of pursuing a 
            Bachelor of Engineering in Computer Science and Engineering at AAA College of Engineering 
            and Technology, Sivakasi.</p>
        <p>I am passionate about technology and software development, and I am actively seeking 
            internship opportunities to apply and enhance my skills in real-world projects. 
           </p>

        <p>I am eager to gain hands-on experience and contribute to innovative projects in a 
            dynamic and collaborative environment. Please feel free to reach out to me for any 
            internship opportunities or professional connections.</p>
    </div>

    <div className="divaboutright">
        <div class="divaboutrighthead">
            <p>Name:</p>
            <p>Email:</p>
            <p>Phone:</p>
            <p>Date of birth:</p>
            <p>Nationality:</p>
            <p>Address:</p>
        </div>
        <div class="divaboutrightdet">
            <p>Selva Balaji P R</p>
            <p><a href="mailto: selvabalajisb26@gmail.com">selvabalajisb26@gmail.com</a></p>
            <p>7010145637</p>
            <p>26 November 2003</p>
            <p>Indian</p>
            <p>4/1102 A, Samypuram colony,</p>
            <p>Sivakasi, </p>
            <p>Virudhunagar, </p>
            <p>Tamilnadu</p>
        </div>
    </div>
</div>
      </div>
     

      </section>
      <section id='Education'>
      <div className='educationhead'>
            <h1>Education</h1>
            
           <div className="diveduleftright">
           <div className="diveduleft">
           <div className='edu1'>
           <h3>UG Degree</h3>
            <p className='p1'>
            Bachelor of Engineering in Computer Science and Engineering
            AAA College of Engineering and Technology
            Current CGPA: 6.95
            Expected Graduation: [2025]
            Currently in 3rd year
            </p>
           </div>
            <div className="edu1">
            <h3>HSC</h3> 
            <p className='p1'>
            Higher Secondary Certificate (HSC)
            S.H.N.V. Matric Higher Secondary School, Sivakasi
            Percentage: 85.5%
            Year of Completion: [2020-2021]
             </p>
            </div>
            <div className="edu1">
            <h3>SSLC</h3>
             <p className='p1'>
             Secondary School Leaving Certificate (SSLC)
             S.H.N.V. Matric Higher Secondary School, Sivakasi
             Percentage: 82.4%
             Year of Completion: [2018-2019]
             </p>
            </div>
           </div>

           <div className="diveduright">
            <img src={eduimg} alt="" />
           </div>
           </div>
             

      </div>
      </section>
      <section className='skillsec' id='Skills'>
        <div className="skillshead">
            <h1>Skills</h1>
        </div>

        <div className="divskill">
        <div className="divskillcontent">
        
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>Javascript</li>
          <li>My SQL</li>
          <li>Java</li>
          <li>Python</li>
        </ul>       
  </div>
  <div className="divinterncont">
      <h2>Internships</h2>
      <p className='skillp'>
      Internship Experience
      Web Development Intern | Phoenix Softech
      
      </p>
      <h4 className='skillyr'>August 4, 2022 - August 20, 2022</h4>
    
         <p className='skillp1'>
         Full Stack Python Development Intern | Pofi Technologies Private Limited
         
         </p>
         <h4 className='skillyr'>June 26, 2023 - July 26, 2023</h4>
         <p className='skillp2'>
         Workshops and Training Programs
           Centre of IIoT Workshop | Department of CSE, in association with Riyasaa Labs
            
         </p>
         <h4 className='skillyr'>July 16, 2023 - July 20, 2023</h4>
         <p className='skillp3'>
         e-Yantra Centre of Excellence in Robotics | Department of Electronics and Communication Engineering
         </p>
         <h4 className='skillyr'>July 21, 2023 - July 25, 2023</h4>
            
         <p className='skillyr'></p>
        
  </div>
        </div>
        

      </section>

      <section id='Contact Us'>
      <div className="divcontactus">
      <div className="conhead">
            <h1>Contact Us</h1>
        </div>
        <div className="divname">
            <h1 className='nameh1'>Hi, I'm Selva</h1>
            <p className='contactuscont'><i>I'm looking for new opportunities. 
                I work well in teams and always meet deadlines. 
                Let's connect!</i></p>
        </div>

        <div className="divcontact">
            <div className="divcondetails">
            <section class="card">
            <img src={image} className='hiremelogo' alt="" />
    
                        <div class="text-section">
                            <h1 class="conh">Name</h1>
                            <p class="conp">Selva Balaji P R </p>
                            <h1 class="conh">Phone Number</h1>
                            <p class="conp">7010145637</p>
                            <h1 class="conh">Mail Id</h1>
                            <p class="conp">selvabalajisb26@gmail.com</p>
                            <h1 class="conh">Address</h1>
                            <p class="conp">4/1102A, Samypuram colony,Sivakasi,Virudhunagar,Tamilnadu</p>
                        </div>
                        <img src={HomeImage} className='conme' alt="" />
                    </section>
            </div>
            <div class="icondiv">
                        <div class="hireimg">
                            <a href="tel:+917904349735">
                                {/* <img src="./Assets/Img/callimg.jpeg" class="climg1" alt="Call" onclick="makePhoneCall()" />     */}
                                <img src={callimg} className='climg1' alt="" />
                            </a>
                            <a href="mailto:kalaiarasir0907@gmail.com">
                                {/* <img src="./Assets/Img/mailimg.jpeg" class="climg2" alt="Email"> */}
                                <img src={mail} alt="" className='climg2' />
                            </a>
                            <a href="https://wa.me/+917904349735">
                                {/* <img src="./Assets/Img/wpimg.jpeg" class="climg" alt="WhatsApp"> */}
                                <img src={wpimg} alt="" className='climg'/>
                            </a>
                        </div>
                    </div>
        </div>
      </div>
      </section>
    </div>
  )
}

export default MainPage
