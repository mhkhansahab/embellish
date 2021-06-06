import "./card.css";

const card = (props)=>{
    return(
        <div className="landing-card">
            <div className="image-container flex center-1 center-2">
                <img src={props.image} alt="" className="image"></img>
            </div>
            <div className="card-detail flex center-1 center-2">
                <div className="text">{props.title}</div>
            </div>
        </div>
    );
}

export default card;