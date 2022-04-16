import React from 'react'
import { Table } from 'reactstrap'
import {useNavigate} from 'react-router-dom'
import '../css/Table.css'
function BookList({books}){
    const navigate = useNavigate()

    return (
    <Table borderless dark hover responsive striped className='BookList'>
    <thead><tr>
      <th></th>
      <th>Title</th>
      <th>Author</th>
      <th>Languages</th>
      <th>Publisher</th>
    </tr>
    </thead>
    <tbody>
        {books.map(book =>{
            return (
                 
                <tr key={book.id} onClick={()=> navigate('/search/'+book.id)}>
                    
                    <td>
                        <img src ={(book.volumeInfo.imageLinks)?book.volumeInfo.imageLinks.smallThumbnail : ""} alt={book.volumeInfo.title+"_img"}/>
                    </td>
                    <td>{book.volumeInfo.title}</td>
                    <td>{(book.volumeInfo.authors)?(book.volumeInfo.authors).join(" ") : ""}</td>
                    <td>{(book.volumeInfo.language?book.volumeInfo.language:"")}</td>
                    <td>{book.volumeInfo.publisher?book.volumeInfo.publisher:""}</td>
                   
                </tr>
                
            )
        })}
    </tbody>
    </Table>
    )
}

export default BookList