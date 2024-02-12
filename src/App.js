import React, { useState } from 'react';
import './App.css'; // Создайте файл App.css для стилей

function App() {
  const [redFirst, setRedFirst] = useState(true);

  const handleClick = () => {
    setRedFirst(!redFirst);
  };

  return (
    <div className="container">
      {redFirst ? (
        <>
          <div className="red-block" onClick={handleClick}></div>
          <div className="blue-block" onClick={handleClick}></div>
        </>
      ) : (
        <>
          <div className="blue-block" onClick={handleClick}></div>
          <div className="red-block" onClick={handleClick}></div>
        </>
      )}
    </div>
  );
}

export default App;
