import { Book } from '../Book/Book';
import './BuyingList.css';

const bookList = [
    {
        id: 1,
        name: "GK today",
        quantity: 1,
        read: true,
    },
    {
        id: 2,
        name: "English grammer",
        quantity: 1,
        read: false,
    },
    {
        id: 3,
        name: "The invisible man",
        quantity: 1,
        read: true,
    },
]

export const BuyingList = () => {
    return (
        <>
        <div className='buying-list'>
        <ul>
            {
                bookList.map((allBooks) => <Book allBooks = {allBooks}></Book>)
            }
        </ul>

        </div>
        </>
    );
}