import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import TextForm from './components/textForm';
import Alert from './components/Alert';
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

function App() {
  const restStyle = {
    height: '93vh',
    overflow: 'auto'
  } 
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const toggleMode = ()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor = '#2b2d42';
      document.body.style.color = '#bbd0ff';
      showAlert('Dark Mode Enabled', 'secondary');
      document.title = 'textUtils-Dark Mode';
      setTimeout(()=>{
        document.title = 'textUtils - A text Utility';
      }, 1700)
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      showAlert('Light Mode Enabled', 'dark');
      document.title = 'textUtils-Light Mode';
      setTimeout(()=>{
        document.title = 'textUtils - A text Utility';
      }, 1700)
    }
  }
  const toggleBlackMode = ()=>{
      document.body.style.backgroundColor = 'black';
      document.body.style.color = 'white';
      showAlert('Black Mode Enabled', 'secondary');
      document.title = 'textUtils-Black Mode';
      setTimeout(()=>{
        document.title = 'textUtils - A text Utility';
      }, 1700)
  }
  const toggleBlueMode = ()=>{
      document.body.style.backgroundColor = '#00b4d8';
      document.body.style.color = 'white';
      showAlert('Blue Mode Enabled', 'secondary');
      document.title = 'textUtils-Blue Mode';
      setTimeout(()=>{
        document.title = 'textUtils - A text Utility';
      }, 1700)
  }
  const togglea8dadcMode = ()=>{
      document.body.style.backgroundColor = '#a8dadc';
      document.body.style.color = 'black';
      showAlert('Green Mode Enabled', 'secondary');
      document.title = 'textUtils-Green Mode';
      setTimeout(()=>{
        document.title = 'textUtils - A text Utility';
      }, 1700)
  }
  const toggle264653Mode = ()=>{
      document.body.style.backgroundColor = '#262643';
      document.body.style.color = 'white';
      showAlert('Welcome to textUtils, Dark Mode V2', 'secondary');
      document.title = 'textUtils-Dark Mode V2';
      setTimeout(()=>{
        document.title = 'textUtils - A text Utility';
      }, 1700)
  }
  const showAlert = (message, type)=>{
    setAlert({
      message,
      type
    })
    setTimeout(()=>{
      setAlert(null);
    }, 1700)
  }
  return (
    <>
      <Router>
          <div style={restStyle} >
            <Navbar title="textUtils" aboutText="About TextUtils" mode={mode} toggleMode={toggleMode} toggleBlackMode={toggleBlackMode} toggleBlueMode={toggleBlueMode} toggle264653Mode={toggle264653Mode} togglea8dadcMode={togglea8dadcMode}/>
            <div className="my-3">
              <Alert alert={alert} showAlert={showAlert} mode={mode}/>
            </div>
            <Routes>
              <Route path="/textUtils/about" element={<About mode={mode}/>}/>
              <Route path="/textUtils" element={<div className="container" style={{marginTop: '7vh'}}>
                                        <TextForm heading="Enter the text to analyze below" mode={mode} alert={alert} showAlert={showAlert}/>
                                      </div>}/>
            </Routes>
          </div>
          <Footer mode={mode} year={new Date().getFullYear()}/>
      </Router>
    </>
  );
}

export default App;