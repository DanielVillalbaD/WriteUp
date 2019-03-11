import React from "react";
import _ from 'lodash';
import SearchBar from './components/searchBar';
import BookList from './components/booksList';
import BookDetail from './components/bookDetail';
import { api } from '../utils/openlibra';
//import {api} from '../utils/apiwu';
import {BackgroundB} from '../home/components/backgroundb/background';

export class Books extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            books: [],
            selectedBook: null
        };

        this.bookSearch("javascript");
    }

    bookSearch(term) {
        api
            .getBooks(term)
            .then((res) => {
                this.setState({
                    //books: res.data,
                    books: res,
                    selectedBook: res[0]
                });
            })
            .catch((err) => console.log(err));
    }

    render() {
        // eslint-disable-next-line
        const bookSearch = _.debounce((term) => {
            this.bookSearch(term)
        }, 300)

        return (

            <div className="fondo">
                <BackgroundB/>
                <h1 className="titulo">Listado de libros</h1>
                <div>
                    <SearchBar onSearchTermChange={term => this.bookSearch(term)}/>
                </div>
                <BookDetail book={this.state.selectedBook} />
                <div>
                    <BookList
                        // onBookSelect={selectedBook => this.setState({selectedBook})}
                        books={this.state.books}
                    />
                </div>

            </div>
        );
    }
}
