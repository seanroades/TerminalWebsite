import { Container, Row, Col } from 'react-bootstrap';
import Navbar from '../../Components/Navbar/Navbar'
import '../../App.scss'
import './ContactMe.scss'
import Terminal from '../../Components/Terminal/Terminal'

function ContactMe() {
  return (
    <div className="HomeBG">
      <div className="PageContainer">
        <div className="Center">
          <p className="Header MidMod Blinker">seanroades@gmail.com</p>
        </div>
      </div>
      <i className="... . .- -. .-. --- .- -.. . ... .--.-. --. -- .- .. .-.. .-.-.- -.-. --- --"></i>
    </div>
  )
}

export default ContactMe;