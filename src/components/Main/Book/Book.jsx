import './Book.css';
import { GiCancel } from "react-icons/gi";

export const Book = ({ allBooks }) => {
    return (
        <>
        <li>
            <span style={allBooks.read ? {textDecoration: 'line-through'} : {}}>
                {allBooks.quantity} {allBooks.name} 
                <GiCancel />
            </span>
        </li>
        </>
    );
}