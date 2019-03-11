import axios from 'axios';

const urlBook = 'http://localhost:3001/api/Libros?access_token=K6VDdOpGVXJZdt9Cmcev3N8fvIwtWBy88q4TlHSsjmxFxYi6NNBo7VnExtChTYoL&';


export const api = {
        getBook: (id) => {
            return axios.get(urlBook+'id='+id);
        },
        getBooks: (keyword) => {
            return axios.get(urlBook+'title='+keyword)
        }
}

export function getBooks(keyword) {
    return axios.get(urlBook+'title='+keyword)
}