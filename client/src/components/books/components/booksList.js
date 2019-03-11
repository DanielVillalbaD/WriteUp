import React from 'react';
import BookListItem from './bookListItem';
import '../books.scss';

const BookList = (props) => {
    const bookItems = props.books.map((book) => {
        return (
            <BookListItem
                onBookSelect={props.onBookSelect}
                key={book.ID}
                book={book}
            />
        );
    });

    return (
        <div className="filaFlex">
            {bookItems}
        </div>
    );
};

export default BookList;