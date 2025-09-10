import { useLocation, useNavigate, useParams } from "react-router";

import { Badge, Button, Card, Row } from "react-bootstrap";
import { Star, StarFill } from "react-bootstrap-icons";
import { useEffect, useState } from "react";
import BookForm from "../bookForm/BookForm";

const BookDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [showBookForm, setShowBookForm] = useState(false);
  const [book, setBook] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const bookState = {
      ...location.state.book,
      id: parseInt(id, 10),
    };
    setBook(bookState);
  }, [location.state.book, id]);

  const handleShowBookForm = () => {
    setShowBookForm(!showBookForm);
  };

  const { title, author, pageCount, imageUrl, rating, summary, available } =
    location.state.book;

  const clickHandler = () => {
    navigate("/library");
  };

  console.log(location);

  const ratingStars = Array.from({ length: 5 }, (_, index) =>
    index < rating ? <StarFill key={index} /> : <Star key={index} />
  );
  const handleBookUpdated = (updatedBook) => {
    setBook(updatedBook);
    setShowBookForm(false);
  };
  return (
    <>
      <Card className="my-3 w-25">
        <Card.Img
          height={500}
          variant="top"
          src={imageUrl !== "" ? imageUrl : "https://bit.ly/47NylZk"}
        />
        <Card.Body>
          <div className="mb-2">
            {book?.available ? (
              <Badge bg="success">Disponible</Badge>
            ) : (
              <Badge bg="danger">Reservado</Badge>
            )}
          </div>
          <Card.Title>{book?.title}</Card.Title>
          <Card.Subtitle>{book?.author}</Card.Subtitle>
          {ratingStars}
          <p>{book?.pageCount} páginas</p>
          <p className="my-3">
            <b>Sinopsis</b>: {book?.summary}
          </p>
          <Row>
            <Button
              className="mb-2 me-2"
              variant="secondary"
              onClick={handleShowBookForm}
            >
              {showBookForm ? "Ocultar formulario" : "Editar libro"}
            </Button>
            <Button className="me-2" onClick={clickHandler}>
              Volver a la página principal
            </Button>
          </Row>
        </Card.Body>
      </Card>
      {showBookForm && (
        <BookForm
          isEditing={true}
          book={book}
          onBookSaved={handleBookUpdated}
        />
      )}
    </>
  );
};

export default BookDetails;
