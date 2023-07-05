import React from 'react'
import books from '../books.js'
import {Row, Col } from 'react-bootstrap'
import Book from '../components/Book.js'


const Homescreen = () => {
  return (

  <>
      <h1>Latest Books</h1>
       <Row>
            {books.map(book=>(
                <Col key={book.id} sm={12} md={6} lg={4} xl={3}>
                    <Book book={book} />
                </Col>
            ))}
       </Row> 
      
    </>
  )
}

export default Homescreen
