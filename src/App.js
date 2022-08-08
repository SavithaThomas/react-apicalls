import React, {useState} from 'react';
import Axios from 'axios';
import './App.css';

function App() {
const [ftname,setftName] = useState('');
const [ftusername,setftUsername] = useState('');
const [ftmail,setftMail] = useState('');

const [empname,setName] = useState('');
const [empusername,setUsername] = useState('');
const [empmail,setMail] = useState('');

const fetchData = () => {
  fetch("https://jsonplaceholder.typicode.com/users/1").then(
    (response) => response.json()).then((data) => {
      console.log(data);
      setftName(data.name); 
      setftUsername(data.username); 
      setftMail(data.email);  
      console.log(data.name);
    }
  );
};

const getData = () => {
  Axios.get("https://jsonplaceholder.typicode.com/users/2").then(
    (response) => {
      setName(response.data.name); 
      setUsername(response.data.username); 
      setMail(response.data.email);  
      console.log(response.data.name);
    }
  );
};

  return (
    <div className="App">

      <h1>Fetching Data using fetch..</h1>
      <button onClick={fetchData}>Get Data</button>
      <p>Name:{ftname}</p>
      <p>User Name:{ftusername}</p>
      <p>Email:{ftmail}</p>
       
      <h1>Fetching Data using axios..</h1>
      <button onClick={getData}>Get Data</button>
      <p>Name:{empname}</p>
      <p>User Name:{empusername}</p>
      <p>Email:{empmail}</p>
         
    </div>
  );
}

export default App;