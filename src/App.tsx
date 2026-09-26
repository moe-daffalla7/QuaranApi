//Mohamed Daffalla
//Quaran API
//9/26/2026


import { ThemeContext } from './Context/ThemeContext';
import { Link, Route, Routes} from "react-router-dom"
import { useContext } from 'react';
import { Surah, Surah2 } from './ComponentsPages/FatihaHome';
import { Surahs } from './ComponentsPages/AllSurahs';
import './App.css'
import { PrayerTimes } from './ComponentsPages/Prayers';
import { RandomHadith } from './ComponentsPages/RandomHadith';
import { Qibla } from './ComponentsPages/Qibla';

function App() {
  const {theme, toggleTheme} = useContext(ThemeContext)

  return (
    <>
    <div className={`app ${theme}`}>
      <div className="container"> 
      <h1>Quaran Companion</h1>
      <h2>Stay close to Allah, wherever you are</h2>
      <h4>Your daily space for Prayer and Quaran</h4>
      <nav>
      <Link to="/" className="home_pic">Home</Link>
      <Link to="/quaran" className="quaran_pic">Quaran</Link>
      <Link to="/prayers" className="prayer_pic">Prayers</Link>
      <Link to="/hadiths" className="hadith_pic">Random Hadith Generator</Link>
      <Link to="/qibla" className="qibla_pic">Qibla</Link>
    </nav>

    <Routes>
      <Route path="/" element={<Surah/>}/>
      <Route path="/quaran" element={<Surahs/>}/>
      <Route path="/surah/:number" element={<Surah2/>}/>
      <Route path="/prayers" element={<PrayerTimes/>}/>
      <Route path="/hadiths" element={<RandomHadith/>}/>
      <Route path="/qibla" element={<Qibla/>}/>
    </Routes>
      <button className="theme-button" onClick={toggleTheme}>Switch Theme</button>

      </div>
    </div>
    </>
  )
}

export default App
