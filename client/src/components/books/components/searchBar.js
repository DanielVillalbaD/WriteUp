import React from 'react';
import '../books.scss';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {term: ''};
    }

    onInputChange(term) {
        this.setState({term});
        this.props.onSearchTermChange(term);
    }

    render() {
        return (
            <div className="searchBar">
                <input
                    value={this.state.term}
                    placeholder="Busca tu libro"
                    onChange={event => this.onInputChange(event.target.value)}
                />
            </div>
        );
    }
}

export default SearchBar;