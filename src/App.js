import React, {useState} from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Project from './components/Project';
import About from './components/About';
import Contact from './components/Contact';
import Resume from './components/Resume';

function App() {
  const [selectedSection, setSelectedSection] = useState('portfolio')
  // const sections = ['about', 'porftolio', 'contact', 'resume']
  return (
    <div className='outer-wrapper'>
    <div className='section-container'>
      <Header
      selectedSection = {selectedSection}
      setSelectedSection = {setSelectedSection}
      ></Header>
      {selectedSection === 'portfolio' && <Project></Project>}
      {selectedSection === 'about' && <About></About>}
      {selectedSection === 'contact' && <Contact></Contact>}
      {selectedSection === 'resume' && <Resume></Resume>}
      
    </div>
    <Footer></Footer>
    </div>
  );
}

export default App;
