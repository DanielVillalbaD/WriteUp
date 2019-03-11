import React from 'react';
import '../books.scss';
import {Paper} from '@material-ui/core';
import Loading from '../../share/loading/loading';

const BookDetail = ({book}) => {

    if (!book) {
        return <Loading/>;
    }

    return (

        <div className="margins">
            <Paper className="paperDetailBook">
                <div>
                    <img alt={book.title} className="portada" src={book.cover}></img>
                    {/* <img alt={book.title} className="portada" src={book.thumbnail}></img> */}
                </div>
                <div className="detailsBook">
                    <h2>{book.title}</h2>
                    <h3>Autor: {book.author}</h3>
                    <p>Paginas: {book.pages}</p>
                    <p>Resumen: {book.content_short}</p>
                    <p>Idioma: {book.language}</p>
                </div>
            </Paper>
        </div>
    );
};

export default BookDetail;