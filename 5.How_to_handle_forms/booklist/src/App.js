import { useState } from "react";
import AddBook from "./components/AddBook";
import BooksList from "./components/BooksList"
import './css/App.css'



function App() {
  const [books, setBooks] = useState([]);

  const createBook = (title) => {
    setBooks([...books, {id: Math.floor(Math.random() * 999), title: title}]);
  };

  const deleteBook = (id) => {
    const updatedBooks = books.filter((book) => {
      return book.id !== id ;
    });

    setBooks(updatedBooks);
  };

  const editBookById = (newTitle, id) => {
    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        return { ...book, title: newTitle};
      };

      return book;
    });

    setBooks(updatedBooks);
  }


  return(
    <div className="app-cont">
      <BooksList books={books} deleteBook={deleteBook} onEdit={editBookById}/>
      <AddBook createBook={createBook} />
    </div>
  );
};


export default App;

// 1. Create an empty books array
// 2. Create an AddBook component
// 3. Create a form in AddBook to receive book title
// 4. Create a function in App that receives title and adds it to object and adds it to books array
// 5. Create an BooksList component
// 6. Pass it down the books array and iterate through it to return one BookShow per book
// 7. Create a delete button in bookShow
// 8. Create a function in the App component which filters through array id that matches book
// 9. Create BookEdit component
// 10. Using state change the showEditState when edit button clicked to show component when true and title when false
