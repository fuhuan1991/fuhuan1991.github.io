import React, { Component } from 'react';
import './main.scss';
import { Carousel } from 'antd';
import p0 from './img/home_page.png';
import p1 from './img/dashboard.png';
import p2 from './img/data_management.png';
import p3 from './img/graph.png';
import p4 from './img/graph2.png';
import n1 from './img/n1.png';
import n2 from './img/n2.png';
import n3 from './img/n3.png';
import n4 from './img/n4.png';
import g1 from './img/g1.png';
import g2 from './img/g2.png';
import g3 from './img/g3.png';
import e1 from './img/e1.png';
import e2 from './img/e2.png';
import e3 from './img/e3.png';
import m1 from './img/m1.png';
import m2 from './img/m2.png';
import m3 from './img/m3.png';
import m4 from './img/m4.png';
import m5 from './img/m5.png';
import k1 from './img/k1.png';
import k2 from './img/k2.png';
import k3 from './img/k3.png';


class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {

    };
    this.carousel = React.createRef();
  }

  componentDidMount() {
    document.title = 'My Website';
  }

  next = () => {
    this.carousel.next();
  }
  previous = () => {
    this.carousel.prev();
  }

  render () {
    return (
      <div className='main'>
        <h1 className='white_font' 
          style={{textAlign: 'center', marginTop: '40px'}}>
            Hello, I'm Huan Fu
        </h1>
        <h1 className='white_font' 
          style={{textAlign: 'center'}}>
            I am a programmer
        </h1>
        <h1 className='white_font' style={{marginBottom: '0px'}}>ABOUT ME</h1>
        <hr className='line'/>
        <p className='white_font'>
          Enthusiastic Software Engineer with 2 years of developing experience of data platform and E-commerce web applications, 
          specialized in Front-end Development, API design, Microservice and Database.
          Currently, I'm a master’s student in computer science at Tufts and am very passionate in applying
          programing skills to create better experience for users. I have tackled 
          complex technical problems and demonstrated strong programming skills at Lenovo and GrowingIO.
          Last Summer, I worked as a software engineer intern at MilliporeSigma.&nbsp;&nbsp;
          <a className='info_link' href='https://github.com/fuhuan1991'>My GitHub</a>
        </p>

        <br/><br/><br/>

        <h1 className='white_font' style={{marginBottom: '0px'}}>PROJECTS</h1>
        <hr className='line'/>

        <h2 className='white_font sub_title'>1. BrightLab Customer Management Plan 
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <a className='info_link' href='https://www.brightlab.com/'>About BrightLab</a><br/> </h2>
        <div className='slider'>
          <Carousel ref={node => (this.carousel = node)} autoplay>
            <img src={m1} alt='cannot be displayed due to network reasons'></img>
            <img src={m2} alt='cannot be displayed due to network reasons'></img>
            <img src={m3} alt='cannot be displayed due to network reasons'></img>
            <img src={m4} alt='cannot be displayed due to network reasons'></img>
            <img src={m5} alt='cannot be displayed due to network reasons'></img>
          </Carousel>
        </div>
        <h2 className='white_font'>About this project</h2>
        <hr className='line'/>
        <p className='white_font'>
          BrightLab, a cloud-based research platform that brings people, projects and consumables together to optimize workflow and accelerate discovery. 
          My task is to enhance the BrightLab Admin, a platform to manage all the customer information on BrightLab. 
          I added a new lab dashboard module to BrightLab Admin which allows us to view and controll lab specific data like inventory, personnel, equipment and activities.
          This greatly reduced the manual effort from back-end team. The new module also contains several data visualization features. 
          They provide insights, makes it possible to track how users are using their labs and also enable business leaders to make more informed decisions.
        </p>
        <h2 className='white_font'>My role</h2>
        <ul className='list'>
          <li>Built administration platform to manage customer lab information, minimizing manual effort</li>
          <li>Designed a data dashboard with data visualization features to facilitate more informed business decisions</li>
          <li>Developed GraphQL service to provide easy-to-access data for front-end</li>
        </ul>
        <h2 className='white_font' style={{marginBottom: '0px'}}>Tech stack</h2>
        <p className='white_font'>Code technologies involved while developing this project.</p>
        <hr className='line'/>
        <ul className='list'>
          <li>React</li>
          <li>GraphQL</li>
          <li>Node.js</li>
          <li>MongoDB</li>
          <li>Docker</li>
          <li>Kubernetes</li>
        </ul>




        <h2 className='white_font sub_title'>2. GrowingIO.com 
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <a className='info_link' href='https://www.growingio.com/'>Visit this site</a><br/> 
        </h2>
        <div className='slider'>
          <Carousel ref={node => (this.carousel = node)} autoplay>
            <img src={p0} alt='cannot be displayed due to network reasons'></img>
            <img src={p1} alt='cannot be displayed due to network reasons'></img>
            <img src={p2} alt='cannot be displayed due to network reasons'></img>
            <img src={p3} alt='cannot be displayed due to network reasons'></img>
            <img src={p4} alt='cannot be displayed due to network reasons'></img>
          </Carousel>
        </div>
        <h2 className='white_font'>About this project</h2>
        <hr className='line'/>
        <p className='white_font'>
          GrowingIO is a leading analytic platform provider in China. They help customer tracking data, building 
          dashboard and drive quick insights. I was part of the platform team and our goal is to ensure that 
          users (enterprise user) can customize all sorts of analytic plans easily. This enables them to track how 
          the customers are using their websites.&nbsp;&nbsp;
        </p>
        <h2 className='white_font'>My role</h2>
        <ul className='list'>
          <li>Developed new features for online data analytic platform that caters to over 7,000 corporate users</li>
          <li>Designed and developed a data management module which enables customization of user behavior analytic plan</li>
          <li>Developed a front-end component library for developing team</li>
        </ul>
        <h2 className='white_font' style={{marginBottom: '0px'}}>Tech stack</h2>
        <p className='white_font'>Code technologies involved while developing this project.</p>
        <hr className='line'/>
        <ul className='list'>
          <li>React</li>
          <li>Redux</li>
          <li>RxJS</li>
          <li>Node.js</li>
          <li>Javascript ES6 & Typescript</li>
          <li>CSS3 & less</li>
          <li>Webpack & Rollup</li>
          <li>Docker</li>
        </ul>



        <h2 className='white_font sub_title'>
          3. MDNote &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <a className='info_link' href='https://fuhuan1991.github.io/markdown-Note/#/'>Try it!</a>
        </h2>
        <div className='slider'>
          <Carousel ref={node => (this.carousel = node)} autoplay>
            <img src={k1} alt='cannot be displayed due to network reasons'></img>
            <img src={k2} alt='cannot be displayed due to network reasons'></img>
            <img src={k3} alt='cannot be displayed due to network reasons'></img>
            {/* <img src={n4} alt='cannot be displayed due to network reasons'></img> */}
          </Carousel>
        </div>
        <h2 className='white_font'>About this project</h2>
        <hr className='line'/>
        <p className='white_font'>
          This is one of my personal projects. It's a note management application that supports full Markdown syntax. 
          <a className='info_link' href='https://en.wikipedia.org/wiki/Markdown'>(What is Markdown?)</a><br/>
          In this application, you can keep multiple notebooks(folders) and manage their content through a folder view.
          When editing your note, you can type in Markdown script manually or use the predefined templates. 
          All the scripts will be compiled and the result will be displayed in real time. 
        </p>
        <h2 className='white_font' style={{marginBottom: '0px'}}>Tech stack</h2>
        <p className='white_font'>Code technologies involved while developing this project.</p>
        <hr className='line'/>
        <ul className='list'>
          <li>React</li>
          <li>Javascript ES6</li>
          <li>Codemirror</li>
          <li>IndexedDB</li>
        </ul>



        <h2 className='white_font sub_title'>
          4. Reversi Game &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <a className='info_link' href='https://fuhuan1991.github.io/Reversi-Game/index.html'>Try it!</a>
        </h2>
        {/* <img src={gameImg} alt='cannot be displayed due to network reasons'></img> */}
        <div className='slider' style={{paddingLeft: '50px', width: '800px'}}>
          <Carousel ref={node => (this.carousel = node)} autoplay>
            <img src={g1} alt='cannot be displayed due to network reasons'></img>
            <img src={g2} alt='cannot be displayed due to network reasons'></img>
            <img src={g3} alt='cannot be displayed due to network reasons'></img>
          </Carousel>
        </div>
        <h2 className='white_font'>About this project</h2>
        <hr className='line'/>
        <ul className='list'>
          <li>
          This is one of my personal projects, a little fun game based on Reversi.
          <a className='info_link' href='https://en.wikipedia.org/wiki/Reversi'>(What is Reversi?)</a>
          </li>
          <li>Players take turns placing pieces on the board. After a move, any pieces of the opponent's color 
            that are in the middle of newly placed piece and other current player's pieces will be turned to 
            current player's piece.</li>
          <li>If a move cannot reverse opponent's pieces, then it is invalid. The green zone on the board 
            shows all the valid moves current player can perform.</li>
          <li>Players take alternate turns. If one player can not make a valid move, play passes back to 
            the other player. When neither player can move, the game ends. This occurs when the grid has 
            filled up or when neither player can legally place a piece in any of the remaining squares.</li>
          <li>The object of the game is to have the majority of disks turned to display your color when the 
            last playable empty square is filled.</li>
          <li>This game contains both 1 player mode and 2 players mode. If you play alone, you play as tail
            and you move first, computer play as head.</li>
        </ul>
        <h2 className='white_font' style={{marginBottom: '0px'}}>Tech stack</h2>
        <p className='white_font'>Code technologies involved while developing this project.</p>
        <hr className='line'/>
        <ul className='list'>
          <li>React</li>
          <li>Javascript ES6/TypeScript</li>
          <li>CSS3/Sass</li>
        </ul>


        <h2 className='white_font sub_title'>
          5. EasyPoll &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <a className='info_link' href='http://easypoll.us-east-2.elasticbeanstalk.com'>Try it!</a>
        </h2>
        {/* <img src={gameImg} alt='cannot be displayed due to network reasons'></img> */}
        <div className='slider'>
          <Carousel ref={node => (this.carousel = node)} autoplay>
            <img src={e1} alt='cannot be displayed due to network reasons'></img>
            <img src={e2} alt='cannot be displayed due to network reasons'></img>
            <img src={e3} alt='cannot be displayed due to network reasons'></img>
          </Carousel>
        </div>
        <h2 className='white_font'>About this project</h2>
        <hr className='line'/>
        <ul className='list'>
          <li>This is an online polling application, one of my personal projects. You can start a poll among your friends within 1 min.</li>
          <li>No need to create an account.</li>
          <li>All you need to do is: Setup questions(single choice or multiple choice), share links with your friends and 
            watch the result.</li>
          <li>Available for both PC and mobile</li>
        </ul>
        <h2 className='white_font' style={{marginBottom: '0px'}}>Tech stack</h2>
        <p className='white_font'>Code technologies involved while developing this project.</p>
        <hr className='line'/>
        <ul className='list'>
          <li>Spring boot</li>
          <li>Thymeleaf</li>
          <li>PostgreSQL</li>
          <li>Flyway</li>
          <li>BootStrap</li>
          <li>React</li>
        </ul>


        <h2 className='white_font sub_title'>
          6. Chalkboard Note &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </h2>
        <div className='slider'>
          <Carousel ref={node => (this.carousel = node)} autoplay>
            <img src={n1} alt='cannot be displayed due to network reasons'></img>
            <img src={n2} alt='cannot be displayed due to network reasons'></img>
            <img src={n3} alt='cannot be displayed due to network reasons'></img>
            <img src={n4} alt='cannot be displayed due to network reasons'></img>
          </Carousel>
        </div>
        <h2 className='white_font'>About this project</h2>
        <hr className='line'/>
        <p className='white_font'>
          This is one of my personal projects. It's an online note management application, you can create, store and modify your notes.<br />
          There is a default account with some existing notes, name: guest, password: 123.<br />
        </p>
        <h2 className='white_font' style={{marginBottom: '0px'}}>Tech stack</h2>
        <p className='white_font'>Code technologies involved while developing this project.</p>
        <hr className='line'/>
        <ul className='list'>
          <li>React</li>
          <li>Javascript ES6</li>
          <li>CSS3</li>
          <li>Spring Boot</li>
          <li>Spring Scurity</li>
          <li>JWT</li>
          <li>PostgreSQL</li>
          <li>Docker</li>
          <li>AWS</li>
        </ul>
      </div>
    )
  }
}

export default Main;