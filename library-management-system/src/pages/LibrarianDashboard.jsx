import Navbar3 from "../components/Navbar3";
import LibrarianListOfBooks from "../components/LibrarianListOfBooks";
import AddBook  from "../components/AddBook";
import IncreaseExistingBook from "../components/increaseExistingBook";

function LibrarianDashboard(){

    return(
        <>
        <Navbar3></Navbar3>
        <LibrarianListOfBooks></LibrarianListOfBooks>
        <AddBook></AddBook>
        <IncreaseExistingBook></IncreaseExistingBook>
        </>
    )
}

export default LibrarianDashboard;