import React from 'react'
import {Link} from 'react-router-dom'
import {Card} from 'react-bootstrap'

const Book = ({book}) => {
  return (
    <Card className='my-3 p-3 rounded'>
      <Link to={`/book/${book.id}`}>
        <Card.Img src={book.thumbnailUrl} variant='top' />
      </Link>
      <Card.Body>
      <Link to={`/book/${book.id}`}>
        <Card.Title as='div'><strong>{book.title}</strong></Card.Title>
      </Link>
      <Card.Text as='h3'>${book.price}</Card.Text>
      </Card.Body>
    </Card>
  )
}

export default Book
