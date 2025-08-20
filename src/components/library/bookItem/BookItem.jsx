import { Badge, Card, Button } from "react-bootstrap";
import { useState } from "react";
import { Star, StarFill } from "react-bootstrap-icons";
import MyModal from "../../ui/modal/MyModal";
import { useNavigate } from "react-router";
const BookItem = ({
  id,
  title,
  author,
  rating,
  pageCount,
  imageUrl,
  summary,
  available,
  onSelectedBook,
  onBookDeleted,
}) => {
  const [newTitle, setNewTitle] = useState(title);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  const clickHandler = () => {
    // setNewTitle("Actualizado");
    // console.log("clicked");
    // onSelectedBook(title);
    navigate(`${id}`, {
      state: {
        book: {
          title,
          author,
          rating,
          pageCount,
          imageUrl,
          summary,
          available,
        },
      },
    });
  };
  console.log("BookItem evaluado por React");

  const handleConfirmDelete = () => {
    setShowModal(false);
    onBookDeleted(id);
  };
  return (
    <>
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
            {Array.from({ length: 5 }, (_, index) =>
              index < rating ? (
                <StarFill key={index} className="text-warning" />
              ) : (
                <Star key={index} className="text-warning" />
              )
            )}
          </div>
          <p>{pageCount} paginas</p>
          <Button onClick={clickHandler}>Seleccionar libro</Button>
          <Button
            style={{ marginLeft: "10px" }}
            variant="danger"
            onClick={() => setShowModal(true)}
          >
            Eliminar libro
          </Button>
        </Card.Body>
      </Card>
      <MyModal
        show={showModal}
        onClose={() => setShowModal(false)}
        onConfirm={handleConfirmDelete}
      />
    </>
  );
};

export default BookItem;
