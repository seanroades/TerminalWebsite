import '../../App.scss'
import './Zombiegeist.scss'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import ZG1 from '../../Images/Zombiegeist/ZG1.png'
import ZG2 from '../../Images/Zombiegeist/ZG2.png'
import ZG3 from '../../Images/Zombiegeist/ZG3.png'

export default function Zombiegeist() {
  return (
    <div>
      <p className="Header">Zombiegeist: can you survive?</p>
      <p className='Subtitle'>
        Ever liked shooting bad guy things??? Same! I wanted to make a cool decentralized game for Decentraland, so I decided to make Zombiegeist, whichc is like Call of Duty Zombies on the blockchain with some twists (like a bus you call in with turrets that shoots zombies) and collectibles.
      </p>
      <p className='Subtitle'>
        This was my first game ever, and it was difficult to get everything perfect--and admittly I didn't, but in the short 2 weeks I had to make it, I thought it turned out to be pretty cool!
      </p>
      <Row>
        <Col sm={12} md={6} lg={4}>
          <img alt="zb1" className="TermImage" src={ZG1}></img>
          <p className="Subtitle">Zombiegeist1.png</p>
        </Col>
        <Col sm={12} md={6} lg={4}>
          <img alt="zb2" className="TermImage" style={{objectPosition: "50% 55%"}} src={ZG2}></img>
          <p className="Subtitle">Zombiegeist2.png</p>
        </Col>
        <Col sm={12} md={6} lg={4}>
          <img alt="zb3" className="TermImage" style={{objectPosition: "50% 55%"}} src={ZG3}></img>
          <p className="Subtitle">Zombiegeist3.png</p>
        </Col>
      </Row>
      <p className='Subtitle'>
        BUILDING NOTES: I coded this in DCL's game engine with blockchain components. Creating blockchain based games seems to be not only a major painpoint for me but others too. If I do something else in this space, it'd likely be something to address this. 
      </p>
    </div>
  )
}