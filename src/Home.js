import React from 'react'
import './Home.css'
import 'boxicons'
import { useState } from 'react';
import { useEffect } from 'react';
import Typed from 'typed.js';
import ScrollReveal from 'scrollreveal';


export default function Home() {


  useEffect(() => 
  {
    const options = {
      strings: ['IoT Enthusiast','Software Developer'],
      typeSpeed: 50, 
      backSpeed: 30, 
      loop: true, 
    };
    const typed = new Typed('.typing', options);
    return () => {
      typed.destroy();
    };
  }, []);

  
    const [activeSection, setActiveSection] = useState("home");
    const handleNavLinkClick = (section) => {
      const targetSection = document.getElementById(section);
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth' });
        setActiveSection(section);
        }
      };
  
    const scrollToHome = () => handleNavLinkClick('home');
    const scrollToAbout = () => handleNavLinkClick('about');
    const scrollToSkill = () => handleNavLinkClick('skill');
    const scrollToproject = () => handleNavLinkClick('project');
    const scrollTocontact = () => handleNavLinkClick('contact');


    useEffect(()=>{
      const handleScroll = () => {
        const scrollPosition = window.scrollY;
        const homeHeight = document.getElementById("home").offsetHeight;
        const aboutHeight = document.getElementById("about").offsetHeight;
        const skillHeight = document.getElementById("skill").offsetHeight;
        const projectHeight = document.getElementById("project").offsetHeight;
    
        if (scrollPosition >= 0 && scrollPosition < homeHeight) {
          setActiveSection("home");
        } else if (scrollPosition >= homeHeight && scrollPosition < homeHeight + aboutHeight) {
          setActiveSection("about");
        } else if (scrollPosition >= homeHeight + aboutHeight && scrollPosition < homeHeight + aboutHeight + skillHeight) {
          setActiveSection("skill");
        } else if (scrollPosition >= homeHeight + aboutHeight + skillHeight && scrollPosition < homeHeight + aboutHeight + skillHeight + projectHeight) {
          setActiveSection("project");
        } else if (scrollPosition >= homeHeight + aboutHeight + skillHeight + projectHeight) {
          setActiveSection("contact");
        }
      };
      window.addEventListener('scroll', handleScroll);

      return () => {
        window.removeEventListener('scroll', handleScroll);
      };

    },[])

    const scrolltoH=()=>{
      const homeSection=document.getElementById('home');
      homeSection.scrollIntoView({behavior:'smooth'});
    }

    const [hoveredl, setHoveredl] = useState(false);
    const [hoveredi, setHoveredi] = useState(false);
    const [hoveredt, setHoveredt] = useState(false);
    const [hoveredg, setHoveredg] = useState(false);
    const [hoveredar, setHoveredar] = useState(false);
    

    useEffect(() => {
      ScrollReveal().reveal('.hcontent,.acontent,skcontent,.phead', {
        reset: true,
        distance: '80px',
        duration: 2000,
        delay: 150,
        origin: 'top'
      });
  
    }, []);
    useEffect(() => {
      ScrollReveal().reveal('.skill,.pjcontainer,.chead,.media', {
        reset: true,
        distance: '80px',
        duration: 4000,
        delay: 200,
        origin: 'left'
      });
  
    }, []);
    useEffect(() => {
      ScrollReveal().reveal('.cform', {
        reset: true,
        distance: '80px',
        duration: 2000,
        delay: 200,
        origin: 'bottom'
      });
  
    }, []);

    
  return (
    <div className="main">
        <header className="head">
        <a  className="icon" onClick={scrolltoH}>.Sha</a>
        <nav className="bar">
          <a  style={{ "--i": 1 }} onClick={scrollToHome} className={activeSection === "home" ? "active" : ""} >Home</a>
          <a  style={{ "--i": 2 }} onClick={scrollToAbout} className={activeSection === "about" ? "active" : ""}>About</a>
          <a  style={{ "--i": 3 }} onClick={scrollToSkill} className={activeSection === "skill" ? "active" : ""}>Skills</a>
          <a  style={{ "--i": 4 }} onClick={scrollToproject} className={activeSection === "project" ? "active" : ""}>Projects</a>
          <a  style={{ "--i": 5 }} onClick={scrollTocontact} className={activeSection === "contact" ? "active" : ""}>Contact</a>
        </nav>
      </header>

        <section className="home" id="home">
            <div className="hcontent">
                <h1 className="hh">Hi, I'm Sharan</h1>
                <h3>
                    <span className="typing"></span>
                </h3>
                <p>
                    Passionate IoT Explorer and Frontend Developer, 
                    merging innovation with every code line. 
                    My digital journey is a relentless pursuit of 
                    excellence, transforming projects into opportunities 
                    for cutting-edge tech and creative solutions. 
                    Welcome to the frontier of innovation!🚀 contact .
                    <a href="mailto:sharanshanmugam7@gmail.com"  style={{ color: '#66FCF1' }}>sharanshanmugam7@gmail.com </a>              
                </p>
                <div className="media" >
                    <a href="https://www.linkedin.com/in/link-sharan-s/" target="_blank" rel="noopener noreferrer" onMouseEnter={() => setHoveredl(true)} onMouseLeave={() => setHoveredl(false)}>
                      <box-icon type='logo' name='linkedin' animation='tada-hover' color={hoveredl ? 'black' : 'rgba(255, 255, 255, 0.799)'}></box-icon></a>
                    <a href="https://www.instagram.com/sha_.z.__?igsh=YzVkODRmOTdmMw==" target="_blank" rel="noopener noreferrer" onMouseEnter={() => setHoveredi(true)} onMouseLeave={() => setHoveredi(false)}>
                      <box-icon name='instagram-alt' type='logo' animation='tada-hover' color={hoveredi ? 'black' : 'rgba(255, 255, 255, 0.799)'}></box-icon></a>
                    <a href="https://twitter.com/Sharans777?t=ozRwxfH6r5DQMowIvJereQ&s=09" target="_blank" rel="noopener noreferrer" onMouseEnter={() => setHoveredt(true)} onMouseLeave={() => setHoveredt(false)}>
                      <box-icon name='twitter' type='logo' animation='tada-hover' color={hoveredt ? 'black' : 'rgba(255, 255, 255, 0.799)'}></box-icon></a>
                    <a href="https://github.com/sharanshanmugam7" target="_blank" rel="noopener noreferrer" onMouseEnter={() => setHoveredg(true)} onMouseLeave={() => setHoveredg(false)}>
                      <box-icon name='github' type='logo' animation='tada-hover' color={hoveredg ? 'black' : 'rgba(255, 255, 255, 0.799)'}></box-icon></a>
                </div>
                    <div className="dn" onMouseEnter={() => setHoveredar(true)} onMouseLeave={() => setHoveredar(false)}>
                        <a href="#" onClick={scrollToAbout}>
                            <box-icon name="down-arrow-alt" animation="fade-down" color={hoveredar ? '#66FCF1' : 'white'}></box-icon>
                        </a>
                    </div>
            </div>
        </section>


        <section className="about" id="about" style={{ paddingTop: '100px' }}>
        <div className="acontent">
          
        <h2 className="ahead">About</h2>
          <p>
            Hey there!👋, I'm Sharan —Passionate IoT Explorer and Frontend Developer, 
            I orchestrate digital symphonies with lines of code, 
            turning mere projects into mind-blowing experiences. 
            Pioneering transformative solutions, my work 
            transcends conventional boundaries, inviting you 
            to witness innovation and precision dance in perfect 
            harmony. Elevate your projects to celestial heights
            —let's connect and co-create a technological masterpiece 
            that leaves an indelible mark on the digital landscape! 🚀
          </p>
          <div className="media" >
                    <a href="https://www.linkedin.com/in/sharan-s-95b18b224?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" onMouseEnter={() => setHoveredl(true)} onMouseLeave={() => setHoveredl(false)}>
                      <box-icon type='logo' name='linkedin' animation='tada-hover' color={hoveredl ? 'black' : 'rgba(255, 255, 255, 0.799)'}></box-icon></a>

                    <a href="https://github.com/sharanshanmugam7" target="_blank" rel="noopener noreferrer" onMouseEnter={() => setHoveredg(true)} onMouseLeave={() => setHoveredg(false)}>
                      <box-icon name='github' type='logo' animation='tada-hover' color={hoveredg ? 'black' : 'rgba(255, 255, 255, 0.799)'}></box-icon></a>
            </div>
            <div class="resume-btn">
              <a href="/path-to-your-resume" download>
                    Download Resume
              </a>
            </div>
        </div>
        
      </section>


        <section className="skill" id="skill" style={{ paddingTop: '100px' }} >
          <h2 className="skhead">Skills</h2>
        <div className="skcontent">
          <div className="skbox" onClick={scrollToproject} >
            <box-icon name='code-alt' color='#66FCF1'></box-icon>
            <h3>Web Development</h3>
            <p>Crafting immersive user experiences through front-end development and shaping robust server-side functionality.</p>
          </div>
          <div className="skbox">
            <box-icon name='c-plus-plus' type='logo' color='#66FCF1'></box-icon>
            <h3>Embedded Systems</h3>
            <p>Architecting intelligent solutions and bringing innovation to life in the realm of IoT.</p>
          </div>
        </div>
      </section>

      <section className="project" id="project" style={{paddingBottom:'100px ',paddingTop:'80px'}}>
        <h2 className="phead">Projects</h2>
        <div className="pjcontainer">
          <div className="pbox">
          <a href="https://github.com/sharanshanmugam7/Advanced-Application-Development" target="_blank">
            <img src={'/project/ezpay.png'} alt="1" /></a>
              <div className="player">
                <h4>ezPay</h4>
                <p>
                ezPay is an online mobile recharge application developed using React Vite 
                and PostgreSQL with Neon console for the backend.
                Through user authentication and authorization mechanisms 
                powered by JWT and role-based authentication, EZPay ensures a secure
                process for recharging your mobile services.
                </p>
              <a href="https://temp-ezpay.netlify.app/" target="_blank"><box-icon name='link-external' color='white'></box-icon></a>
            </div>
          </div>
          <div className="pbox">
          <a href="https://github.com/sharanshanmugam7/XO-multiplayer" target="_blank">
            <img src={'/project/bg1.png'} alt="1" /></a>
              <div className="player">
                <h4>XO-MultiPlayer</h4>
                <p>XO multiplayer game developed using React.
                Challenge friends or foes in this timeless battle of 
                Xs and Os, where every move is a step closer to victory.
                With its intuitive interface and fluid gameplay, 
                this game promises endless excitement at your fingertips. 
                Click below to start playing now! 🚀
                </p>
              <a href="https://playsxo.netlify.app/" target="_blank"><box-icon name='link-external' color='white'></box-icon></a>
            </div>
          </div>
          <div className="pbox">
          <a href="https://github.com/sharanshanmugam7/WebAppDevelopment" target="_blank">
            <img src={'/project/diy.png'} alt="1" /></a>
              <div className="player">
                <h4>Home Improvement Hub</h4>
                <p>
                HIH --is a Home Improvement Hub web application developed using React.
                It is implemented with Redux that ensures seamless access to variables throughout the application.
                From interior design ideas to DIY tutorials, and from finding the perfect contractors 
                to shopping for materials, we've got you covered.
                </p>
              <a href="https://github.com/sharanshanmugam7/WebAppDevelopment"><box-icon name='link-external' color='white'></box-icon></a>
            </div>
          </div>
        </div>
      </section>


      <section className="contact" id="contact">
        <div className="chead">
          <h2>Contact Me</h2>
          <h4>Let's work together —</h4>
          <p>Engage in the extraordinary by reaching out through the contact details below.
             I welcome recruiters to connect and explore the potential of our collaboration.
             Contact me at <a href="mailto:sharanshanmugam7@gmail.com"  style={{ color: '#66FCF1' }}>sharanshanmugam7@gmail.com </a>
             .Elevate your inquiries, initiate discussions, and let's craft success together —.
          </p>
          <div className="media" >
                    <a href="https://www.linkedin.com/in/sharan-s-95b18b224?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" onMouseEnter={() => setHoveredl(true)} onMouseLeave={() => setHoveredl(false)}>
                      <box-icon type='logo' name='linkedin' animation='tada-hover' color={hoveredl ? 'black' : 'rgba(255, 255, 255, 0.799)'}></box-icon></a>
                    <a href="https://www.instagram.com/sha_.z.__?igsh=YzVkODRmOTdmMw==" target="_blank" rel="noopener noreferrer" onMouseEnter={() => setHoveredi(true)} onMouseLeave={() => setHoveredi(false)}>
                      <box-icon name='instagram-alt' type='logo' animation='tada-hover' color={hoveredi ? 'black' : 'rgba(255, 255, 255, 0.799)'}></box-icon></a>
                    <a href="https://twitter.com/Sharans777?t=ozRwxfH6r5DQMowIvJereQ&s=09" target="_blank" rel="noopener noreferrer" onMouseEnter={() => setHoveredt(true)} onMouseLeave={() => setHoveredt(false)}>
                      <box-icon name='twitter' type='logo' animation='tada-hover' color={hoveredt ? 'black' : 'rgba(255, 255, 255, 0.799)'}></box-icon></a>
                    <a href="https://github.com/sharanshanmugam7" target="_blank" rel="noopener noreferrer" onMouseEnter={() => setHoveredg(true)} onMouseLeave={() => setHoveredg(false)}>
                      <box-icon name='github' type='logo' animation='tada-hover' color={hoveredg ? 'black' : 'rgba(255, 255, 255, 0.799)'}></box-icon></a>
            </div>
        </div>
        <div className="cform">
          <form action="">
              <input type="text" placeholder="Enter Your Name" required></input>
              <input type="email" placeholder="Enter Your Email" required></input>
              <input type="text" placeholder="Enter Your Subject" required></input>
              <textarea name="" id="" cols="40" rows="10" placeholder="Enter your Message" required></textarea>
              <input type="submit" value="submit" className="send"></input>
          </form>
        </div>

      </section>

    </div>
  )
}
