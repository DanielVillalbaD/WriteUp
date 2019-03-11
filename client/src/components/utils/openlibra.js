import axios from 'axios-jsonp-pro'; 

const urlBook = 'http://www.etnassoft.com/api/v1/get/?';


export const api = {
    getBook: (id) => {
        return axios.jsonp(urlBook+'id='+id);
    },
    getBooks: (keyword) => {
        return axios.jsonp(urlBook+'keyword='+keyword)
    }
}

export function getBooks(keyword) {
    return axios.jsonp(urlBook+'keyword='+keyword)
}