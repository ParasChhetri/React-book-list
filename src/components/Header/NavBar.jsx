import './NavBar.css';
import { useState } from "react";
import { FaBookOpenReader } from "react-icons/fa6";
import { IoIosArrowDropdownCircle } from "react-icons/io";
export const NavBar = () => {
    const [close, setclose] = useState(true);
    return (
        <>
        <header>
            { close &&
                <nav>
                    <FaBookOpenReader size={46} fill='white'/>Books
                </nav>
            }
            <div>
                <button type="button" onClick={() => setclose((closeButton) => !closeButton)}><IoIosArrowDropdownCircle /></button>
            </div>
        </header>
        </>
    );
}