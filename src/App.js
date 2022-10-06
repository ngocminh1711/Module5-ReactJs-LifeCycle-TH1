import logo from './logo.svg';
import './App.css';
import {useState} from "react";


const numbers = {
    data: 0
}

    function NumberDecreaseInCrease({myNumber,onClickDecrease, onClickIncrease}){
        return (
            <div>
                <button onClick={onClickDecrease}>Decrease</button>
                {myNumber}
                <button onClick={onClickIncrease}>Increase</button>

            </div>
        )
    }

function App() {
    const handleDecrease = () => {
        setNumber({data: number.data + -1})
    }
    const handleIncrease = () => {
        setNumber({data: number.data + 1})
    }
    const [number, setNumber] = useState(numbers)
        return (
            <div>
                <NumberDecreaseInCrease
                    onClickDecrease={handleDecrease}
                    onClickIncrease={handleIncrease}
                    myNumber={number.data}
                />
            </div>

        )
}

export default App;
