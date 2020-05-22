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
            Hello, my name is Huan.
        </h1>
        <h1 className='white_font' 
          style={{textAlign: 'center'}}>
            I am a programmer.
        </h1>
        <h1 className='white_font' style={{marginBottom: '0px'}}>ABOUT ME</h1>
        <hr className='line'/>
        <p className='white_font'>
          I am a master’s student in computer science at Tufts and am very passionate in applying
          programing skills to create better experience for users. I have 2-year full time 
          working experience as a front-end engineer before joining Tufts last year. I have tackled 
          complex technical problems and demonstrated strong programming skills at Lenovo and GrowingIO.
          Last semester, I built a mobile attendance system for faculties based on android system.
          Now, I am working on several different projects. 
        </p>

        <h1 className='white_font' style={{marginBottom: '0px'}}>PROJECTS</h1>
        <hr className='line'/>

        <h1 className='white_font sub_title'>1. GrowingIO.com</h1>
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
          GrowingIO is a leading analytic platform provider in China. They help customer track data, building 
          dashboard and drive quick insights. I was part of the platform team and our goal is to ensure that 
          users (enterprise user) can manage their data easily.&nbsp;&nbsp;
          <a className='info_link' href='https://www.growingio.com/'>Visit this site</a><br/>
          My role in the team:<br/>
        </p>
          <ul className='list'>
            <li>Designed a new data management module.</li>
            <li>Refactored old react components to improve cohesion</li>
            <li>Developed a react component library for company’s common components.</li>
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
          <li>Webpack</li>
        </ul>



        <h1 className='white_font sub_title'>
          2. Chalkboard Note &nbsp;
          <a href="http://chalkboardnote-env.eba-6j3tsndi.us-east-2.elasticbeanstalk.com">Try it!</a>
        </h1>
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
          This is a online note management app, you can create, store and modify your notes.<br />
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



        <h1 className='white_font sub_title'>
          3. Reversi Game &nbsp;
          <a className='info_link' href='https://fuhuan1991.github.io/Reversi-Game/index.html'>Try it!</a>
        </h1>
        {/* <img src={gameImg} alt='cannot be displayed due to network reasons'></img> */}
        <div className='slider'>
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
          This is a little game based on Reversi.
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


        <h1 className='white_font sub_title'>
          4. EasyPoll &nbsp;
          <a className='info_link' href='http://easypoll.us-east-2.elasticbeanstalk.com'>Try it!</a>
        </h1>
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
          <li>This is an online polling application. You can start a poll among your friends within 1 min.</li>
          <li>No need to create an account.</li>
          <li>All you need to do is: Setup questions(single choice or multiple choice), share links with your friends and 
            watch the result.</li>
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
      </div>
    )
  }
}

export default Main;