import '../../App.scss'
import './TextRoulette.scss'
import React, { useState } from 'react'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import TR1 from '../../Images/TextRoulette/TR1.png'
import TR2 from '../../Images/TextRoulette/TR2.png'
import TR3 from '../../Images/TextRoulette/TR3.png'

export default function TextRoulette() {
  return (
    <div>
      <p className="Header">Text Roulette: Drunken Texts Made Better</p>
      <p className='Subtitle'>
        In early august 2021, I made the decision to not gap and to come back to Harvard for my Junior year. As such, I decided it was time to start getting myself ready for the work hard, play hard szn. So one night, I came up with Text Roulette.
      </p>
      <p className='Subtitle'>
        I coded a rough MVP of it and it was a lot of fun to play with my girlfriend. At the time you just clicked a button and it selected a random contact and message from 5000 random messages from kaggle to choose. You had to send the text or drink, and let's just say it's a game that gets better the longer the play it. 
      </p>
      <p className='Subtitle'>
        My girlfriend and I got the chance to talk to a lot of people in our contacts we hadn't talked to forever, which was a pretty cool experience. So we ended up coding a cool version of it.
      </p>
      <p className='Subtitle'>
        So basically it takes you through this funny intro and then onto the texts. It'll tell you what you sent and to who as well as congratulate you or not if you don't send the text. Check out some pictures here:
      </p>
      <Row>
        <Col sm={12} md={6} lg={4}>
          <img alt="tr1" className="TermImage" src={TR1}></img>
          <p className="Subtitle">TextRoulette1.png</p>
        </Col>
        <Col sm={12} md={6} lg={4}>
          <img alt="tr2" className="TermImage" style={{objectPosition: "50% 55%"}} src={TR2}></img>
          <p className="Subtitle">TextRoulette2.png</p>
        </Col>
        <Col sm={12} md={6} lg={4}>
          <img alt="tr3" className="TermImage" style={{objectPosition: "50% 55%"}} src={TR3}></img>
          <p className="Subtitle">TextRoulette3.png</p>
        </Col>
      </Row>
      <p className='Subtitle'>
        We're currently betatesting it with some friends through flighttest and should be cool to see how it turns out!
      </p>
      <p className='Subtitle'>
        BUILDING NOTES: We coded the app in React Native. It was my first time doing a full on React Native project but it was pretty similiar to normal React and overall I enjoyed how it turned out.
      </p>
    </div>
  )
}