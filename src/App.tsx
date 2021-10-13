import React, { useState } from 'react';
import './App.scss';
import Navbar from './Components/Navbar/Navbar';
import {
  Switch,
  Route,
  useHistory
} from "react-router-dom";
import Home from './Pages/Home/Home'
import AboutMe from './Pages/AboutMe/AboutMe'
import ContactMe from './Pages/ContactMe/ContactMe'
import Projects from './Pages/Projects/Projects'
import Terminal from './Components/Terminal/Terminal';
import TextRoulette from './Pages/TextRoulette/TextRoulette';
import Zombiegeist from './Pages/Zombiegeist/Zombiegeist';
import StudiBuddi from './Pages/Studibuddi/Studibuddi';
import Error from './Pages/Error/Error';
import UNData from './Pages/UNData/UNData';
import MP from './Pages/MP/MP';
import PyramidNetwork from './Pages/PyramidNetwork/PyramidNetwork';
import OtherWebsite from './Pages/OtherWebsite/OtherWebsite';


function App() {
  const [textInput, setTextInput] = useState("")
  const history = useHistory();
  const handleSubmit = () => { 
    console.log(textInput)
    if (textInput.substring(0,3) === "cd " && textInput.length > 3) {
      history.push(textInput.substring(3)) 
    } 
    else {
      console.log("Error, command not found")
    }
  };

  const pages = ["About", "Projects", "Contact"]
  const links = ["about", "projects", "contact"]


  return (
    <Switch>
      <Route exact path="/">
        <Navbar pages={pages} links={links}/>
        <div className="PageContainer">
          <Terminal onSubmit={handleSubmit} setTextInput={setTextInput}/>
          <Home />
        </div>
      </Route>
      <Route exact path="/about">
        <Navbar pages={pages} links={links}/>
        <div className="PageContainer">
          <Terminal onSubmit={handleSubmit} setTextInput={setTextInput}/>
          <AboutMe />
        </div>
      </Route>
      <Route exact path="/projects">
        <Navbar pages={pages} links={links}/>
        <div className="PageContainer">
          <Terminal onSubmit={handleSubmit} setTextInput={setTextInput}/>
          <Projects />
        </div>
      </Route>
      <Route exact path="/contact">
        <Navbar pages={pages} links={links}/>
        <div className="PageContainer">
          <Terminal onSubmit={handleSubmit} setTextInput={setTextInput}/>
          <ContactMe />
        </div>
      </Route>
      <Route exact path="/textRoulette">
        <Navbar pages={pages} links={links}/>
        <div className="PageContainer">
          <Terminal onSubmit={handleSubmit} setTextInput={setTextInput}/>
          <TextRoulette />
        </div>
      </Route>
      <Route exact path="/textRoulette">
        <Navbar pages={pages} links={links}/>
        <div className="PageContainer">
          <Terminal onSubmit={handleSubmit} setTextInput={setTextInput}/>
          <TextRoulette />
        </div>
      </Route>
      <Route exact path="/zombiegeist">
        <Navbar pages={pages} links={links}/>
        <div className="PageContainer">
          <Terminal onSubmit={handleSubmit} setTextInput={setTextInput}/>
          <Zombiegeist />
        </div>
      </Route>
      <Route exact path="/studiBuddi">
        <Navbar pages={pages} links={links}/>
        <div className="PageContainer">
          <Terminal onSubmit={handleSubmit} setTextInput={setTextInput}/>
          <StudiBuddi />
        </div>
      </Route>
      <Route exact path="/unitedNationsData">
        <Navbar pages={pages} links={links}/>
        <div className="PageContainer">
          <Terminal onSubmit={handleSubmit} setTextInput={setTextInput}/>
          <UNData />
        </div>
      </Route>
      <Route exact path="/mp">
        <Navbar pages={pages} links={links}/>
        <div className="PageContainer">
          <Terminal onSubmit={handleSubmit} setTextInput={setTextInput}/>
          <MP />
        </div>
      </Route>
      <Route exact path="/otherWebsite">
        <Navbar pages={pages} links={links}/>
        <div className="PageContainer">
          <Terminal onSubmit={handleSubmit} setTextInput={setTextInput}/>
          <OtherWebsite />
        </div>
      </Route>
      <Route exact path="/pyramidNetwork">
        <Navbar pages={pages} links={links}/>
        <div className="PageContainer">
          <Terminal onSubmit={handleSubmit} setTextInput={setTextInput}/>
          <PyramidNetwork />
        </div>
      </Route>
      <Route path="/">
        <Navbar pages={pages} links={links}/>
        <div className="PageContainer">
          <Terminal onSubmit={handleSubmit} setTextInput={setTextInput}/>
          <Error />
        </div>
      </Route>
    </Switch>
  );
}

export default App;
