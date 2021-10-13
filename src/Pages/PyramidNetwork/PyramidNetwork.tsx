import '../../App.scss'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import PY1 from '../../Images/Pyramid/PY1.png'
import PY2 from '../../Images/Pyramid/PY2.png'
import PY3 from '../../Images/Pyramid/PY3.png'


export default function MP() {
  return (
    <div>
      <p className="Header">Pyramid Network: a blantantly obvious scam coin</p>
      <p className='Subtitle'>
      I got tired of seeing people scamming others with the creation of "alt coins", and when I saw SafeMoon, that's what made me decide to make fun of the alt coin rush by creating a literal scam coin.
      </p>
      <p className='Subtitle'>
        The pyramid network is essentially a pyramid scheme. While you can buy the coin, you're only going to really get a lot of coins by joining the network. To join the network, you must be invited, which requires a two-way confirmation. Once you join you are given 5 coins and as you invite more people you get rewarded in the form of a tree.
      </p>
      <p className='Subtitle'>
        This is a ethereum smart contract with a web interface (available here: https://thepyramid.network/). I built The Pyramid Network with solidity for the smart contract and react with typescript to interface with the contract. All actions nessesary to be a part of the network are availible on the site. The contract is verified on Etherscan, and the coin is availible to trade on uniswap.
      </p>
      <Row>
        <Col sm={12} md={6} lg={4}>
          <img alt="py1" className="TermImage" src={PY1}></img>
          <p className="Subtitle">PyramidNetwork1.png</p>
        </Col>
        <Col sm={12} md={6} lg={4}>
          <img alt="py2" className="TermImage" style={{objectPosition: "50% 55%"}} src={PY2}></img>
          <p className="Subtitle">PyramidNetwork2.png</p>
        </Col>
        <Col sm={12} md={6} lg={4}>
          <img alt="py3" className="TermImage" style={{objectPosition: "50% 55%"}} src={PY3}></img>
          <p className="Subtitle">PyramidNetwork3.png</p>
        </Col>
      </Row>
      <p className='Subtitle'>
        BUILDING NOTES: I built this coin from scratch using solidity, deployed it to the mainnet, and listed it on uniswap. Currently has a market cap of $10 ;) if you'd like to get in.
      </p>
    </div>
  )
}