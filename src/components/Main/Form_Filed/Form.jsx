import './Form.css';
import { useState } from "react";

export const Form = () => {
    const [quantity, setQuantity] = useState(1);
    return (
        <>
        <div>
            <form>
                <span>Buying lsit</span>
                <input type="text" placeholder="Book name"/>
                <select value={quantity} onChange={(e) => setQuantity(Number(e.target.value))}>
                    {
                        Array.from({length: 10}, (_,i) => i + 1).map(num => (
                            <option value={num} key={num}>{num}</option>
                        )) 
                    }
                </select>
                <button>Add</button>
            </form>
        </div>
        </>
    );
}