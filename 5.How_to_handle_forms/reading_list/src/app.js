import CreateBook from "./components/CreateBook";
import { useState } from "react";
import ListBooks from "./components/ListBooks";

function App() {
  const [books, setBooks] = useState([]);

  const handleFormSubmit = (newTitle) => {
    const updatedBooks = [...books, {id: Math.floor(Math.random() * 999), title: newTitle}];

    setBooks(updatedBooks);
  };

  const deleteBook = (id) => {
    const updatedBooks = books.filter((book) => {
      return book.id !== id
    });

    setBooks(updatedBooks);
  };

  const editBook = (newTitle, id) => {
    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        return {...book, title: newTitle}
      }

      return book;
    });

    setBooks(updatedBooks);
  }

  return(
    <div>
      <CreateBook onSubmit={handleFormSubmit}/>
      <ListBooks books={books} deleteBook={deleteBook} editBook={editBook}/>
    </div>
  );
};


export default App;

// App that receives an input (book title) from user and adds it to reading list,
// user can also delete or edit title of a book he has already entered
// 1. Create CreateBook component where user can type and submit a new book title
//    -Create function that keeps track of onChange of input element using useState
//    -Create function that keeps track of onSubmit of form and prevents it from refreshing page
//    -Create an books array using useState that will be modified when user presses submit on CB form
//    -Create function in the App component and pass it down to CB component, this function
//     will receive the new title received from CB component and add it to books array while also creating
//     a random id with Math.floor(Math.random() * 999)
// 2. Create a ListBook component where we will iterate through the books array add return for each BookShow
//    -Create a renderedBooks which returns one BookShow component for each object in books array
// 3. Create a button that deletes a book from reading list
//    -Create button in BookShow and create an handleClick func that will run when button is clicked
//    -In App create a deleteBook func that will filter and return only the books that dont match an given id
//    -Use setBooks to rerender the new updatedBooks array
// 4. Create a button that allows user to modify title of a selection
//    -Create a state of showEdit where if true the bookShow will show the BookEdit component
//    -Let content = book.title
