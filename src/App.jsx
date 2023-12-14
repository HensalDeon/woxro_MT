import "./App.css";
import Home from "./components/Home";
import cross from "./assets/cross.svg";
import { useState } from "react";

function App() {
    const [isRotated, setIsRotated] = useState(false);

    const handleRotateClick = () => {
        setIsRotated(!isRotated);
    };
    return (
        <div className="p-6">
            <div className=" h-7 py-1 w-full">
                <img
                    className={`h-full float-right cursor-pointer transition-transform transform duration-500 ${isRotated ? "rotate-90" : ""}`}
                    src={cross}
                    alt="cross"
                    onClick={handleRotateClick}
                />
            </div>
            <div className="flex justify-center">
                <Home />
            </div>
        </div>
    );
}

export default App;
