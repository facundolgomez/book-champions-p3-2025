import { Badge, Card, Button } from "react-bootstrap";
import { useState } from "react";
const BookItem = ({
  title,
  author,
  rating,
  pageCount,
  imageUrl,
  available,
  onSelectedBook,
}) => {
  const [newTitle, setNewTitle] = useState(title);
  const clickHandler = () => {
    setNewTitle("Actualizado");
    console.log("clicked");
    onSelectedBook(title);
  };
  console.log("BookItem evaluado por React");
  return (
    <Card style={{ width: "22rem" }} className="mx-3">
      <Card.Img
        height={400}
        variant="top"
        src={imageUrl !== "" ? imageUrl : ""}
      />
      <Card.Body>
        <div className="mb-2">
          {available ? (
            <Badge bg="success">Disponible</Badge>
          ) : (
            <Badge bg="danger">Reservado</Badge>
          )}
        </div>
        <Card.Title>{newTitle}</Card.Title>
        <Card.Subtitle>{author}</Card.Subtitle>
        <div>
          {rating} estrella {rating > 1 ? "s" : ""}
        </div>
        <p>{pageCount} paginas</p>
        <Button onClick={clickHandler}>Seleccionar libro</Button>
      </Card.Body>
    </Card>
  );
};

export default BookItem;
