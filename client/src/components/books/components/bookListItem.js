import React from 'react';
import '../books.scss';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { Button } from '../../home/components/button';
import Typography from '@material-ui/core/Typography';


const BookListItem = (props) => {

    const book = props.book;
    const onBookSelect = props.onBookSelect;
    const imageUrl = book.cover;
    // const urlLectura = `/lector?url=${book.url_download}`;
    const urlLectura = `/lector/${book.ID}`;

    return (
        <Card className="cardBook">
        {/* <Card className="cardBook"> */}
            <CardActionArea>
                <CardMedia className="imagenBook"
                    image={imageUrl}
                        //    image={book.thumbnail}
                    title={book.title}
                />
                <CardContent>
                    <Typography variant="h6" component="h2">
                        {book.title}
                    </Typography>
                    {/* <Typography variant="h6" component="p">
                        {book.content_short}
                    </Typography> */}
                    {/* <h6>Autor:{book.author}</h6>
                    <p>idioma:{book.language}</p>
                    <p>paginas:{book.pages}</p> */}
                </CardContent>
            </CardActionArea>
            <CardActions>
                {/* <Button href={urlLectura} size="small" color="primary">
                    Leer Online
                </Button> */}
                <Button href={book.url_download} className="list-button">
                    Descargar
                </Button>
            </CardActions>
        </Card>
    );
};

export default BookListItem;