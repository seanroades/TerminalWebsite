import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './Terminal.scss'

interface TerminalProps {
  onSubmit(event: any): void;
  setTextInput: React.Dispatch<React.SetStateAction<string>> 
}

export default function Terminal(props: TerminalProps) {
  var href = window.location.href.replace(/(.*\/)*/,"")
  if (href === "?" || href === "") {
    href = "~"
  }
  else if (href[href.length - 1] === "?") {
    href = href.substring(0, href.length - 1)
  }
  return (
    <div className="TerminalContainer">
      <p className="Subtitle TerminalPrompt">seanr@web2 {href} % </p>
      <div className="CursorContainer">
        <form className="InLineForm" onSubmit={props.onSubmit}>
          <input type="text" onChange={event => props.setTextInput(event.target.value)} className="customInput" placeholder="cd projects/textRoulette"/>
        </form>
      </div>
    </div>
  )
}