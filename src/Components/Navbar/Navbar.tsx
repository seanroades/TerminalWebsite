import './Navbar.scss'
import { useState, useEffect } from 'react';
import useWindowDimensions from '../UseWindowDimensions'
import { Link } from 'react-router-dom';
import '../../App.scss'

interface NavbarProps {
  pages: string[];
  links: string[];
} 

export default function NavbarProps(props: NavbarProps) {
  const { height, width } = useWindowDimensions();

  const pages = []
  const smallPages = []
  var i;
  for (i = 0; i < props.pages.length; i++) {
    pages.push(<Link to={props.links[i]} className="Header HeaderMod SubItems cursorPointer">{props.pages[i]}</Link>)
    smallPages.push(<Link className="cursorPointer" to={props.links[i]}>{props.pages[i]}</Link>)
  }
  return(
    <div className="NavbarBG">
      <Link to="/" className="Header HeaderMod cursorPointer SubItems">Sean Roades</Link>
      { (width > 771) ? <div className="SubItemsGroup">
        {pages}
      </div>
      :
      <div className="floater cursorPointer">
        <div className="dropdown cursorPointer">
          <button className="dropbtn cursorPointer">More</button>
          <div className="dropdown-content">
            {smallPages}
          </div>
        </div>
      </div>
      }
    </div>
  )
}
