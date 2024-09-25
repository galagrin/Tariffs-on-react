import "./tarif.css";

function Tarif(props) {
    const {
        tarifname,
        tarifprice,
        tarifspeed,
        tarifinfo,
        nameColor,
        priceColor,
        isAccented,
    } = props;

    return (
        <div className={`cardwrapper ${isAccented ? "isAccented" : ""}`}>
            <div className="card_name" style={{ backgroundColor: nameColor }}>
                <div className="card_text">{tarifname}</div>
            </div>
            <div className="card_price" style={{ backgroundColor: priceColor }}>
                <div className="card_text">
                    {" "}
                    <sup>руб</sup> {tarifprice} <sub>/мес.</sub>
                </div>
            </div>
            <div className="card_speed">
                <div className="card_text">до {tarifspeed} Мбит/c.</div>
            </div>
            <div className="card_info">
                <div className="card_text">{tarifinfo}</div>
            </div>
        </div>
    );
}

export default Tarif;
