import '../../App.scss'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import MP1 from '../../Images/MP/MP1.png'
import MP2v from '../../Images/MP/MP2.png'
import MP3v from '../../Images/MP/MP3.png'

export default function MP() {
  return (
    <div>
      <p className="Header">MP: Intraday Stock Backtester</p>
      <p className='Subtitle'>
        The goal of MP (https://mpbysean.web.app/) is to allow people no matter their programming experience to create trading algorithms using timing, technicals, and predictive measures.
      </p>
      <p className='Subtitle'>
        MP allows users to create algorithms to trade at a certain time during the day, e.g., buy $TSLA at 9:45:00 and sell at 15:45:00 on Monday. The idea here is that users can test whether certain sayings (e.g., Tesla is mostly up on Monday) are true/can they profit from those. Additionally, this step allows for trading based on technical indicators, e.g., buy $AAPL stock when RSI is sub 30 and sell when it is above 70.
      </p>
      <Row>
        <Col sm={12} md={6} lg={4}>
          <img alt="mp1" className="TermImage" src={MP1}></img>
          <p className="Subtitle">MP1.png</p>
        </Col>
        <Col sm={12} md={6} lg={4}>
          <img alt="mp2" className="TermImage" style={{objectPosition: "50% 55%"}} src={MP2v}></img>
          <p className="Subtitle">MP2.png</p>
        </Col>
        <Col sm={12} md={6} lg={4}>
          <img alt="mp3" className="TermImage" style={{objectPosition: "50% 55%"}} src={MP3v}></img>
          <p className="Subtitle">MP3.png</p>
        </Col>
      </Row>
      <p className='Subtitle'>
        BUILDING NOTES: I built MP using react to handle the frontend, firebase to handle the backend, and data from Alpha Vantage. I call on Alpha advantages API to get CSV files of intraday stock price and volume data over the last 2 years for whatever stock the user puts in. From there, based on what technicals the user wants to trade on (only RSI, SMA, EMA, Time/Date available for now), I calculate the technical values and calculate and display their profit over time as it compares to the stock price of the security they’re trading.
      </p>
    </div>
  )
}