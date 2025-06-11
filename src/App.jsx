import { useState } from 'react';
import './App.css';

import Home from './layouts/Home.jsx';
import Main from './layouts/Main.jsx';

function App() {

  const [zoomHome, setZoomHome] = useState(true);

  const [animateHome, setAnimateHome] = useState(false);

  const [animateMain, setAnimateMain] = useState(false);

  const handleClick = (func1, var1, func2) => {
    func1(!var1);

    if (func2) {
      setTimeout(() => {
        func2(true);

      }, 1500);
    }

  };

  return (
    <div className="App">
      <Home
        zoomHome={zoomHome}
        setZoomHome={setZoomHome}
        animateHome={animateHome}
        setAnimateHome={setAnimateHome}
        animateMain={animateMain}
        setAnimateMain={setAnimateMain}
        handleClick={handleClick}
      />
      <Main
        animateMain={animateMain}
      />
    </div>
  );
}

export default App;
