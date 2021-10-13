import buttonFrame from '../../Images/CorrectFrame.png'
import Navbar from '../../Components/Navbar/Navbar'
import '../../App.scss'
import './ProjectDes.scss'
import { Link } from 'react-router-dom'

interface ProjectDesProps {
  title: string
  description: string
  link: string
}
export default function ProjectDes(props: ProjectDesProps) {
  return(
    <div className="ProjectContainerSingle">
      <img alt="component" className="FileImage" src={buttonFrame}/>
      <div className="ImageContainer">
        <div className="FileTextContainer">
          <p className="Header FileTextDescription">{props.title}</p>
          <p className="Subtitle FileTextDescription LineHeight">{props.description}</p>
          <div className="CenterButton">
            <button className="MainButton">
              <Link className="LinkText" to={props.link}>Enter</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}