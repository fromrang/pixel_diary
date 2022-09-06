import './App.css';
import React, {useEffect, useState} from 'react';
import axios from 'axios';

function App() {
  const [hello, setHello] = useState('')

  useEffect(() => {
      axios.get('http://localhost:7777/join')
      .then(response => setHello(response.data))
      .catch(error => console.log(error))
  }, []);


  return (
    <div>
    안녕하세요
    <input type="text" name="id"></input>
    <input type="button" name="submit"></input>
    </div>
  );
}

export default App;
