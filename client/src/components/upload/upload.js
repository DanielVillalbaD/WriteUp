import React from 'react';
import { FilePond } from 'react-filepond';
import 'filepond/dist/filepond.min.css';
import './upload.scss';
import { BackgroundB } from '../home/components/backgroundb/background';
import { Button } from '../home/components/button';

export class Upload extends React.Component {

    handleFiles(err, fileItem) {
        // console.log(fileItem.filename);
        setTimeout(()=> {this.props.history.push(`/lector?file=${fileItem.filename}`)}, 1200);
    }

    render() {
        const { isAuthenticated } = this.props.auth;
        return (
            <div>
                <BackgroundB/>
                <div className="upload-container">
                    <div className="wrapper-center">
                        { isAuthenticated() && (
                            <FilePond
                                name={"file"}
                                labelIdle="Arrastra un archivo pdf o <span class='filepond--label-action'> abre el explorador </span>"
                                acceptedFileTypes="application/pdf"
                                onprocessfile={(err, fileItem) => this.handleFiles(err, fileItem) }
                                server="http://localhost:5000/upload" />
                        )}
                        { !isAuthenticated() && (
                            <div>
                                <p className="noAutenticado">Para leer/subir un archivo es necesario ser usuario autenticado</p>
                                <div className="login-button-container">
                                    <Button primary={true} onClick={this.props.auth.login()}>
                                        Registrarse
                                    </Button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
                
            </div>
        );
    }
}