import { useState } from "react";
import "./App.css";
import data from "./data.json";
import Tarif from "./Components/Tarif/Tarif";

function App() {

    const[selectedTarif, setSelectedTarif] = useState("");
    const handleTarifClick = (id) =>{
        setSelectedTarif(selectedTarif === id ? "" : id);
    }

    return (
        <div className="App">
            {data.map((item) => (
                <Tarif
                    key={item.id}
                    tarifname={item.tarifname}
                    tarifprice={item.tarifprice}
                    tarifspeed={item.tarifspeed}
                    tarifinfo={item.tarifinfo}
                    priceColor={item.priceColor}
                    nameColor={item.nameColor}
                    tarifSize={item.tarifSize}
                    id = {item.id}
                    selectedTarif={selectedTarif} 
                    setSelectedTarif={handleTarifClick}

                />
            ))}

        
        </div>
    );
}
export default App;


