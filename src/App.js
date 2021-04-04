
import React, {useState} from 'react';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Header from './components/Header';
import Nav from './components/Nav';
import Modal from './components/Modal';
import ContactForm from './components/Contact';

function App() {
  const [showModal, setShowModal] = useState(false);
  const toggleModal = () =>{
    setShowModal(!showModal);
  }
  
  return (
    <div>
      <Nav
      showModal = {showModal}
      setShowModal = {setShowModal}
      toggleModal = {toggleModal}
      />
      <Header />
      <main>
        <div>
          {showModal ?
          <Modal onClose = {toggleModal}/> : null}
          <Portfolio />
          <About />
          < ContactForm />
        </div>
      </main> 
    </div>
  );
}

export default App;



