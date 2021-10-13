import '../../App.scss'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import UD1 from '../../Images/UNData/UD1.png'
import UD2 from '../../Images/UNData/UD2.png'

export default function UNData() {
  return (
    <div>
      <p className="Header">UNIDO Data Visualization: Insight into SDG success</p>
      <p className='Subtitle'>
          In my HDAG team, we were tasked with finding where the United Nations where lacking in reaching their sustainable development goals by looking at the descriptions, impact, targeted groups and more of their over 4000 projects in 2020.
      </p>
      <p className='Subtitle'>
          I helped analyze the data to find overall SDG success in each country along with creating the data visualization.
      </p>
      <Row>
        <Col sm={12} md={6} lg={4}>
          <img alt="un1" className="TermImage" src={UD1}></img>
          <p className="Subtitle">UNData1.png</p>
        </Col>
        <Col sm={12} md={6} lg={4}>
          <img alt="zb2" className="TermImage" style={{objectPosition: "50% 55%"}} src={UD2}></img>
          <p className="Subtitle">UNData2.png</p>
        </Col>
      </Row>
      <p className='Subtitle'>
        BUILDING NOTES: I used NLA to scrape and analyze project descriptions and categorize these into SDGs. I made the data visualization with React.js and Kepler.gl.
      </p>
    </div>
  )
}