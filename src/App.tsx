import React from 'react';
import { useSelector } from 'react-redux'
import { RootState } from './store';
import { Routes, Route } from "react-router-dom";
import './App.scss';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Gallery from './components/Gallery/Gallery';
import SearchCat from './components/SearchCat/SearchCat';
import About from './components/About/About';
import NotFound from './components/NotFound';
import Favorites from './components/Favorites/Favorites';

function App() {
  const emotion = useSelector((state: RootState) => state.app.emotion);
  let leftEyeClass = '';
  let rightEyeClass = '';

  if (emotion === 'sad') {
    leftEyeClass = 'eye eye--left sad-eyes-left';
    rightEyeClass = 'eye eye--right sad-eyes-right';
  } else {
    leftEyeClass = 'eye eye--left';
    rightEyeClass = 'eye eye--right';
  }

  return (
    <div className="App">
      <div className="title">
        <div className="cat">
          <div className="ear ear--left">
            <div className="ear-inside ear-inside--left"></div>
          </div>
          <div className="ear ear--right">
            <div className="ear-inside ear-inside--right"></div>
          </div>
          <div className="face">
            <div className={leftEyeClass}>
              <div className="eye-pupil"></div>
            </div>
            <div className={rightEyeClass}>
              <div className="eye-pupil"></div>
            </div>
            <div className="muzzle">
              <div className="nose"></div>
            </div>
          </div>
        </div>
        <div>Cat Website.</div>
      </div>
      <Navbar />
      <Routes>
        <Route path="/" element={ <Home /> }/>
        <Route path="/gallery" element={ <Gallery /> }/>
        <Route path="/searchcat" element={ <SearchCat />} />
        <Route path="/about" element={ <About />} />
        <Route path="/favorites" element={ <Favorites />} />
        <Route path='*' element={<NotFound />}/>
      </Routes>
    </div>
  );
}

export default App;
