import React, { Component } from "react";
import { Document, Page, setOptions } from 'react-pdf/dist/entry.webpack';
import { BackgroundB } from '../home/components/backgroundb/background';
import './lector.scss';

var Query = require('url-query-parser');
if (window.location.href.indexOf('lector') > 0) {
    var newFile = require('../assets/files/' + Query.search(window.location.href).get('file'));
}


export default class Lector extends Component {

    state = { numPages: null, pageNumber: 1 };

    onDocumentLoadSuccess = ({ numPages }) => {
        this.setState({ numPages });
    }

    goToPrevPage = () =>
        this.setState(state => ({ pageNumber: state.pageNumber - 1 }));
    goToNextPage = () =>
        this.setState(state => ({ pageNumber: state.pageNumber + 1 }));  

    
    render() {

        setOptions({
            cMapUrl: 'cmaps/',
            cMapPacked: true,
        });

        const { pageNumber, numPages } = this.state;
        let file = '';
        function getFile() {
            file = newFile;
            console.log(file);
            if (file === undefined) { window.location.reload(); }
            return file;
        }

        return (
            
        <div>
            <nav className="pdf-nav">
                <span className="lector-arrow left-arrow" onClick={this.goToPrevPage}></span>
                <p className="p-paginate">{pageNumber} / {numPages}</p>    
                <span className="lector-arrow right-arrow" onClick={this.goToNextPage}></span>
            </nav>

            <div>
                <BackgroundB/>
                <Document file={getFile()} onLoadSuccess={this.onDocumentLoadSuccess} >
                    <Page pageNumber={pageNumber} className="left-page" scale={3} renderMode={'svg'} width={2920} />
                </Document>
                <span className="rs-container">
                    <div className="player__controls">
                        <button className="player__btn player__btn--play js-play paused">
                            <svg xmlns="http://www.w3.org/2000/svg" className="outer-circle" width="50" height="50" viewBox="0 0 50 50"><g fill="none" fillRule="evenodd" stroke="#404048" strokeWidth="2" transform="translate(1 1)"><path d="M0,24a24,24 0 1,0 48,0a24,24 0 1,0 -48,0" strokeOpacity=".25"/><path className="progress-circle" d="M0,24a24,24 0 1,0 48,0a24,24 0 1,0 -48,0" /></g></svg>
                            <div className="licon--group">
                                <svg xmlns="http://www.w3.org/2000/svg" className="licon licon--play" width="18" height="18" viewBox="0 0 18 18"><path fill="#404048" fillRule="evenodd" stroke="#404048" strokeWidth="2" d="M1 17V1l16 8z" strokeLinejoin="round"/></svg>
                                <svg xmlns="http://www.w3.org/2000/svg" className="licon licon--pause" width="16" height="16" viewBox="0 0 16 16"><rect width="16" height="16" fill="#404048" fillRule="evenodd" stroke="#404048" strokeWidth="2" strokeLinejoin="round"/></svg>
                            </div>
                        </button>
                    </div>
                </span>
            </div>
        </div>
        );
    }
    
}