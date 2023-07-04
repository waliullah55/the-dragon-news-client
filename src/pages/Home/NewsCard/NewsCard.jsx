import React from 'react';
import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card';
import { Image } from 'react-bootstrap';
import moment from 'moment/moment';
import { FaRegBookmark, FaShareAlt, FaEye, FaRegStar, FaStar } from "react-icons/fa";
import Rating from 'react-rating';

const NewsCard = ({news}) => {
    const {_id, title, details, image_url, author, total_view, rating} = news;
    return (
        <Card>
        <Card.Header className='d-flex align-items-center'>
          <Image style={{height: '40px'}} src={author?.img} roundedCircle />
          <div className='ms-2 flex-grow-1'>
            <p className='mb-0'>{author?.name}</p>
            <small> {moment(author?.published_date).format("yyy-MM-D")} </small>
          </div>
          <div>
            <FaRegBookmark></FaRegBookmark>
            <FaShareAlt className='mx-2'></FaShareAlt>
          </div>
        </Card.Header>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Img variant="top" src={image_url} />
          <Card.Text>
            {details.length < 250 ? <> {details} </> : 
                <>{details.slice(0, 250)}...<Link className='text-danger text-4' to={`/news/${_id}`}>Read More</Link></>
            }
          </Card.Text>
        </Card.Body>
        <Card.Footer className="text-muted d-flex">
          <div className='flex-grow-1'>
            <Rating
                  placeholderRating={rating.number}
                  readonly
                  emptySymbol={<FaRegStar></FaRegStar>}
                  placeholderSymbol={<FaStar className='text-warning'></FaStar>}
                  fullSymbol={<FaStar></FaStar>}
            >

            </Rating>
            <span>{rating?.number}</span>
          </div>
          <div>
            <FaEye className='me-2'></FaEye> {total_view}
          </div>
        </Card.Footer>
      </Card>
    );
};

export default NewsCard;