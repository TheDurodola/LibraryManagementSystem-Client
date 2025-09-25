import Navbar3 from "../components/Navbar3";
import PatronListOfBooks from "../components/PatronListOfAllBooks";
import PatronBorrowBook from "../components/PatronBorrowBook"
import PatronReturnBook from "../components/PatronReturnBook"
import GetBorrowedBooks from "../components/GetBorrowedBooks";


function PatronDashboard() {
  return (
    <>
      <Navbar3></Navbar3>
      <PatronListOfBooks></PatronListOfBooks>
      <PatronBorrowBook></PatronBorrowBook>
      <GetBorrowedBooks></GetBorrowedBooks>
      <PatronReturnBook></PatronReturnBook> 
    </>
  );
}

export default PatronDashboard;
