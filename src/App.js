import react, {useState} from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Project from './components/Project';

function App() {
  // const [selectedSection, setSelectedSection] = useState(porftolio)
  // const sections = [about, porftolio, contact, resume]
  return (
    <div>
      <Header
      // selectedSection = {selectedSection}
      // setSelectedSection = {setSelectedSection}
      // sections = {sections}
      ></Header>
      <Project></Project>
      <Footer></Footer>
    </div>
  );
}

export default App;
