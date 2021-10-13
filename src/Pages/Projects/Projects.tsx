import { Row, Col } from 'react-bootstrap';
import ProjectDes from '../../Components/ProjectDes/ProjectDes'
import '../../App.scss'
import './Projects.scss'

function Projects() {
  return (
    <div className="HomeBG">
      <div className="ProjectsContainer">
        <Row>
          <Col>
            <ProjectDes 
              title={"Text Roulette"} 
              description={"Text roulette challenges you to either sent a random text from our database of 5000 texts  to a random contact in your phone or take a shot (of water)."} 
              link={"textRoulette"}
            />
          </Col>
          <Col>
            <ProjectDes 
              title={"Zombiegeist"} 
              description={"Zombiegeist is a decentralized 3D zombie survival game based on Call of Duty Zombies that I created and deployed through Republic in Decentraland."} 
              link={"zombiegeist"}
            />
          </Col>
          <Col>
            <ProjectDes 
              title={"MP"} 
              description={"MP is a daytrading backtester that allows you to pick times/dates to systematically trade and see the results over time."} 
              link={"mp"}
            />
          </Col>
          <Col>
            <ProjectDes 
              title={"Studibuddi"} 
              description={"It was hard to find studi partners online, so my friends and I made a pairing service to help people find studi partners through a fun quiz and matching system."} 
              link={"studibuddi"}
            />
          </Col>
          <Col>
            <ProjectDes 
              title={"Pyramid Network"} 
              description={"I got tired of scam coins (**cough cough SafeMoon **), so I made a literal scam, pyramid-scheme coin, and deployed it on the mainnet and uniswap."} 
              link={"pyramidNetwork"}
            />
          </Col>
          <Col>
            <ProjectDes 
              title={"UN Data Analysis"} 
              description={"I worked with my Harvard Data Analytics Group team to help UNIDO see where they were suceeding in their sustainability development goals."} 
              link={"unitedNationsData"}
            />
          </Col>
          {/* <Col>
            <ProjectDes 
              title={"Secret Santa"} 
              description={"Secret Santa pairs those in need with those who want to give for the holiday season. It also allows organizations to manage those under their care."} 
              link={"secretSanta"}
            />
          </Col> */}
          <Col>
            <ProjectDes 
              title={"My (other) website"} 
              description={"Hope you're enjoying this website, I have another one -- https://seanroades.netlify.app/ -- too to check out if you have time (desktop optimized)"} 
              link={"otherWebsite"}
            />
          </Col>
          {/* <Col>
            <ProjectDes 
              title={"Metaverse Scraper"} 
              description={"I built a metaverse scraper that finds valuable pieces of NFT virtual land in metaverses like Decentraland."} 
              link={"secretSanta"}
            />
          </Col> */}
        </Row>
      </div>
    </div>
  )
}

export default Projects;