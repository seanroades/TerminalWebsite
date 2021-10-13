import '../../App.scss'
import React, { useState } from 'react'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import SB1 from '../../Images/StudiBuddi/SB1.png'
import SB2 from '../../Images/StudiBuddi/SB2.png'
import SB3 from '../../Images/StudiBuddi/SB3.png'

export default function StudiBuddi() {
  return (
    <div>
      <p className="Header">StudiBuddi: find your studi partner!</p>
      <p className='Subtitle'>
          I felt totally disconnected from the Harvard community when it came to the remote semester. I talked to some of my friends and they felt the same way, so we decided to make StudiBuddi, an app to pair people to studipartners during the remote semester.
      </p>
      <p className='Subtitle'>
          I started us off by working through designs with my friend Andrew. We came up with 3 designs, a database design, a swiping mechanism design, and a pairing design. In team, we thought people would like the swiping mechanism but after talking with people, we found most people preferred the pairing design.
      </p>
      <p className='Subtitle'>
          Throughout the process, I set 3 review cycles for the team, during which we'd talk with our fellow students, get feedback, and redo parts of the design, which I believe led to a more cohesive design. Our design used a fun quiz response, location based, class based algorithm to find pairings for our users.
      </p>
      <p className='Subtitle'>
          In the end, over 600 matches were made on StudiBuddi with ~200 unique users finding partners for their classes. It was awesome seeing people use our app, and I ended up making some new friends through it myself, so overall I'm happy with how it turned out.
      </p>
      <Row>
        <Col sm={12} md={6} lg={4}>
          <img alt="sb1" className="TermImage" src={SB1}></img>
          <p className="Subtitle">StudiBuddi1.png</p>
        </Col>
        <Col sm={12} md={6} lg={4}>
          <img alt="sb2" className="TermImage" style={{objectPosition: "50% 55%"}} src={SB2}></img>
          <p className="Subtitle">StudiBuddi2.png</p>
        </Col>
        <Col sm={12} md={6} lg={4}>
          <img alt="sb3" className="TermImage" style={{objectPosition: "50% 55%"}} src={SB3}></img>
          <p className="Subtitle">StudiBuddi3.png</p>
        </Col>
      </Row>
      <p className='Subtitle'>
        BUILDING NOTES: I served the role of mostly a PM on this application, coding when need be, e.g., with notification architecture, error handling, and some frontend. This application used React.js and Firebase.
      </p>
    </div>
  )
}