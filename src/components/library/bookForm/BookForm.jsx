import { Button, Card, Col, Form, Row } from "react-bootstrap";
import { useState } from "react";
import { useNavigate } from "react-router";
import { successToast } from "../../ui/notifications/notifications";

const BookForm = ({ book, onBookAdded, isEditing = false, onBookSaved }) => {
  const [title, setTitle] = useState(book?.title);
  const [author, setAuthor] = useState(book?.author);
  const [rating, setRating] = useState(book?.rating);
  const [pageCount, setPageCount] = useState(book?.pageCount);
  const [imageUrl, setImageUrl] = useState(book?.imageUrl);
  const [available, setAvailable] = useState(book?.available);
  const handleChangeTitle = (event) => {
    setTitle(event.target.value);
  };
  const handleChangeAuthor = (event) => {
    setAuthor(event.target.value);
  };
  const handleChangeRating = (event) => {
    setRating(event.target.value);
  };
  const handleChangePageCount = (event) => {
    setPageCount(event.target.value);
  };
  const handleChangeImageUrl = (event) => {
    setImageUrl(event.target.value);
  };
  const handleChangeAvailable = (event) => {
    setAvailable(event.target.checked);
  };
  const handleAddBook = (event) => {
    event.preventDefault();
    const bookData = {
      title,
      author,
      rating: parseInt(rating, 10),
      pageCount: parseInt(pageCount, 10),
      imageUrl,
      available,
    };
    console.log(bookData);
    onBookAdded(bookData);
    setTitle("");
    setAuthor("");
    setRating("");
    setPageCount("");
    setImageUrl("");
    setAvailable(false);
  };
  const navigate = useNavigate();
  const handleGoToLibrary = () => {
    navigate("/library");
  };

  const handleSavedBook = (event) => {
    //metodo para editar
    event.preventDefault();

    const bookData = {
      title,
      author,
      rating: parseInt(rating, 10),
      pageCount: parseInt(pageCount, 10),
      imageUrl,
      available,
    };

    fetch(`http://localhost:3000/books/${book.id}`, {
      headers: {
        "Content-type": "application/json",
      },
      method: "PUT",
      body: JSON.stringify(bookData),
    })
      .then((res) => res.json())
      .then(() => {
        onBookSaved(bookData);
        successToast(`Libro ${bookData.title} editado correctamente`);
      })
      .catch((err) => console.log(err));
  };

  return (
    <Card className="m-4 w-50" bg="success">
      <Card.Body>
        <Form
          className="text-white"
          onSubmit={isEditing ? handleSavedBook : handleAddBook}
        >
          <Row>
            <Col md={6}>
              <Form.Group className="mb-3" controlId="title">
                <Form.Label>Título</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Ingresar título"
                  value={title}
                  onChange={handleChangeTitle}
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className="mb-3" controlId="author">
                <Form.Label>Autor</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Ingresar autor"
                  value={author}
                  onChange={handleChangeAuthor}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <Form.Group className="mb-3" controlId="rating">
                <Form.Label>Puntuación</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Ingresar cantidad de estrellas"
                  max={5}
                  min={0}
                  value={rating}
                  onChange={handleChangeRating}
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className="mb-3" controlId="pageCount">
                <Form.Label>Cantidad de páginas</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Ingresar cantidad de páginas"
                  min={1}
                  value={pageCount}
                  onChange={handleChangePageCount}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row className="justify-content-between">
            <Form.Group className="mb-3" controlId="imageUrl">
              <Form.Label>URL de imagen</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingresar url de imagen"
                value={imageUrl}
                onChange={handleChangeImageUrl}
              />
            </Form.Group>
          </Row>
          <Row className="justify-content-end">
            <Col
              md={3}
              className="d-flex flex-column justify-content-end align-items-end"
            >
              <Form.Check
                type="switch"
                id="available"
                className="mb-3"
                label="¿Disponible?"
                onChange={handleChangeAvailable}
                checked={available}
              />
              <div className="d-flex gap-2">
                <Button variant="secondary" onClick={handleGoToLibrary}>
                  Volver
                </Button>
                <Button variant="primary" type="submit">
                  {isEditing ? "Editar lectura" : "Agregar lectura"}
                </Button>
              </div>
            </Col>
          </Row>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default BookForm;
