import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import {useParams} from 'react-router-dom'
import {Col, Container,Row} from 'reactstrap'
import '../css/Book.css'
import { UserContext } from '../context/UserContext'
import LogoutButton from './logoutbutton'
 function Book(){

    const {user,setUser} = useContext(UserContext)
    const params = useParams()

    const id = params.id
 
    const[book,setBook] = useState(null)
    useEffect(()=>{
        // get book details on load
        if(user!=null)
            axios.get(`/getbook/?volumeId=${id}`)
            .then(res =>
                {setBook(res.data)  
                })
            .catch(err => console.log(err))
    },[])
   
    
  
       
    return (
    <Container >
        {user==null?(<h2>User logged out. Log in on the <a href='/'>homepage</a></h2>):
        book && <>
        <div className="singoutbutton">
        <LogoutButton />
        
      </div>
            <Row>
             <Col className='BookImage'>
                <img src={book.volumeInfo.imageLinks.thumbnail} alt ='boi'/>
            </Col>
            <Col className='BookDetails'>
                <Row>
                    <h1>{book.volumeInfo.title}</h1>
                    <h2>{book.volumeInfo.subtitle}</h2>
                    <h6><b>Language:{book.volumeInfo.language}</b></h6>
                </Row>
                <Row>
                    <Col>By - <b>{(book.volumeInfo.authors)?(book.volumeInfo.authors).join(" ") : ""}</b></Col>
                    <Col>Publisher -<b>{book.volumeInfo.publisher}</b></Col>
                </Row>
                <Row className='mt-4'>
                    
                   <p dangerouslySetInnerHTML={{__html: book.volumeInfo.description}}></p>
                </Row>
                <Row>
                    <Col>
                        Pages: <b>{book.volumeInfo.pageCount}</b>
                    </Col>
                    <Col>
                        PrintType: <b>{book.volumeInfo.printType}</b>
                    </Col>
                    <Col>
                        <Row>Average Rating - <b>{(book.volumeInfo.averageRating?book.volumeInfo.averageRating:"NA")}</b></Row>
                        <Row>Ratings Count - <b>{(book.volumeInfo.ratingsCount)?book.volumeInfo.ratingsCount:"NA"}</b></Row>
                    </Col>
                </Row>
                <Row>
                    {(book.accessInfo.webReaderLink)?(<Col>Read more <a href={book.accessInfo.webReaderLink}>here</a> </Col>):""}
                    
                </Row>
            </Col>
        </Row>
        </>}
    </Container>
    )
}

export default Book