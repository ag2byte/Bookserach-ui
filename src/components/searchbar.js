import React, { useContext } from 'react'
import { Container, Form, Input } from 'reactstrap';
import { useState } from 'react';
import axios from 'axios'
import LogoutButton from "./logoutbutton";
import BookList from './booklist';
import { UserContext } from '../context/UserContext';

function Searchbar(){
  const [result,setResult] = useState([])
  const {user,setUser}= useContext(UserContext)
  const handleSearchEvent = (event)=>{
    event.preventDefault()
    const queryTerm = event.target[0].value
  axios.get(`/getbooklist/?queryTerm=${queryTerm}`)
    .then(response => {
    setResult(response.data)
    }) 

    
  }

    return(
        <Container>
          {user==null?(<h2>User logged out. Log in on the <a href='/'>homepage</a></h2>):
          (<>
          <div className="singoutbutton">
            <LogoutButton />
            
          </div>
            
            <Form onSubmit={(event) => handleSearchEvent(event)}> 
            <Input />
            </Form>

            {result.length > 0 ? <BookList books={result}/> : <span> Search a book by title</span>}
            </> )}
            
          </Container>
    )
}

export default Searchbar