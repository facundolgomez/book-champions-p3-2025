import BookItem from "../library/bookItem/BookItem";
import Books from "../../components/library/books/Books";
import NewBook from "../../components/library/newBook/NewBook";
import { useState } from "react";
import Login from "../../components/auth/login/Login";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router";

const Dashboard = ({ onLogout }) => {
  const books = [
    {
      id: 1,
      title: "Harry Potter 1",
      author: "J.K. Rowling",
      rating: 4,
      pageCount: 800,
      imageUrl:
        "https://acdn-us.mitiendanube.com/stores/001/542/126/products/9789878000107-b82c22cfb174dca93016944484618644-1024-1024.jpg",
      available: true,
    },
    {
      id: 2,
      title: "El Señor de los Anillos",
      author: "J.R.R. Tolkien",
      rating: 5,
      pageCount: 1200,
      imageUrl:
        "https://images.cdn1.buscalibre.com/fit-in/360x360/66/1a/661a3760157941a94cb8db3f5a9d5060.jpg",
      available: true,
    },
    {
      id: 3,
      title: "Dune",
      author: "Frank Herbert",
      rating: 3,
      pageCount: 900,
      imageUrl:
        "https://images.cdn2.buscalibre.com/fit-in/360x360/0d/73/0d739e6e0e837d7637f97f9aad3639b4.jpg",
      available: true,
    },
    {
      id: 4,
      title: "1984",
      author: "George Orwell",
      rating: 4,
      pageCount: 230,
      imageUrl:
        "https://images.cdn1.buscalibre.com/fit-in/360x360/b0/39/b039af065268818b7bd3b0e016f8db65.jpg",
      available: true,
    },
  ];
  const handleBookAdded = (book) => {
    const bookData = {
      ...book,
      id: Math.random(),
    };
    console.log(bookData);

    setBookList((prevBookList) => [bookData, ...prevBookList]); //callback, es una funcion que se pasa como parametro a otra funcion
  };

  const [bookList, setBookList] = useState(books);

  const handleBookDeleted = (bookId) => {
    setBookList((prevBookList) =>
      prevBookList.filter((book) => book.id !== bookId)
    );
  };
  const navigate = useNavigate();

  const handleLogout = () => {
    onLogout();
    navigate("/login");
  };
  return (
    <>
      <Button
        style={{
          position: "absolute",
          top: 10,
          right: 30,
          padding: "6px 12px",
          cursor: "pointer",
        }}
        variant="primary"
        onClick={handleLogout}
      >
        Cerrar sesion
      </Button>
      <h2>Book champions app</h2>
      <p>¡Quiero leer libros!</p>
      <NewBook onBookAdded={handleBookAdded} />
      <Books books={bookList} onBookDeleted={handleBookDeleted} />
      {/* <Login /> */}
    </>
  );
};

export default Dashboard;
