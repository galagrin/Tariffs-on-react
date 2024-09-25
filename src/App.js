import "./App.css";
import data from "./data.json";
import Tarif from "./Components/Tarif/Tarif";

function App() {
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
                    isAccented={item.isAccented}
                />
            ))}
        </div>
    );
}
export default App;
