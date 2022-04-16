import './css/App.css';
import Book from './components/book';
import {BrowserRouter as Router, Route,Routes} from 'react-router-dom'
import Searchbar from './components/searchbar';
import Home from './components/home';
import { gapi } from "gapi-script";
import React, { useEffect,useState } from "react";
import { UserContext } from './context/UserContext';
import History from './components/history'


function App() {
  const [user,setUser] = useState(null)
    useEffect(()=>{
        function start()
        {
            gapi.client.init({
                clientId:process.env.REACT_APP_GOOGLE_CLIENT_ID,
                scope:""
            })
        }
        gapi.load('client:auth2',start)
    })

  return (
    <Router>
    <div className="App">
      <UserContext.Provider value={{user,setUser}}>
        <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/search" element={<Searchbar />} />
        <Route path="/search/:id" element ={<Book />} /> 
        <Route path='/api/history' element={<History />} />
          

        </Routes>
        </UserContext.Provider>
        
    </div>
    </Router>
  );
}

export default App;
