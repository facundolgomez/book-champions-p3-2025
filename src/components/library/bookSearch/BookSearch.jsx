import { Form } from "react-bootstrap";

const BookSearch = ({ onFindBook, value }) => {
  return (
    <Form.Group className="mb-3" controlId="searchBook">
      <Form.Control
        type="text"
        placeholder="Buscar libro..."
        onChange={(e) => onFindBook(e.target.value)}
        value={value}
      />
    </Form.Group>
  );
};

export default BookSearch;
