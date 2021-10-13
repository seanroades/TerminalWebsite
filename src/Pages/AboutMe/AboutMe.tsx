import { Container, Row, Col } from 'react-bootstrap';
import Navbar from '../../Components/Navbar/Navbar'
import '../../App.scss'
import './AboutMe.scss'
import Terminal from '../../Components/Terminal/Terminal'

function AboutMe() {
  return (
    <div className="HomeBG">
      <p className="Header">
        Hello, there. I'm Sean.
      </p>
      <p className="Subtitle">
        I'm a computer science student at Harvard College. I'm interested in everything from data analytics to game development to consumer design.
      </p>
      <p className="Subtitle">
        This past year, I interned at Republic.co as a Software Engineer on the crypto team in New York City, where I worked on the Republic Realm fund on everything from its algorithm to NFT drops to my in-house game Zombiegeist.
      </p>
      <p className="Subtitle">
        I was a Kleiner Perkins 2021 Finalist, a 2018 Intel ISEF Finalist for my research on hydropower turbine systems, and presented at the 84th Annual International Society for American Archeology Conference for my research on PaleoIndian Soceity.
      </p>
      <p className="Subtitle">
        At Harvard, I'm currently the Co-Director of Hacker Experience at HackHarvard, Director of Technology for Harvard Ventures, and an analyst with the Harvard Data Analytics Group.
      </p>
      <p className="Subtitle">
        In my freetime, I like playing games (Call of Duty, Rocket League, GTA, 2K21), playing topgolf/minigolf, going on thrill rides at amusement parks (shoutout Universal Studios and weirdly American Dream Mall's green coaster thing), and checking out experiences (for me experiences &gt; just food).
      </p>
    </div>
  )
}

export default AboutMe;