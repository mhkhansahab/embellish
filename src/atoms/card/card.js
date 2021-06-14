import "./card.css";

const card = (props)=>{
    return(
        <div className="landing-card" style={{backgroundImage: 'url('+ props.image +')'}}>
            <h1 className="landing-card-text">{props.title}</h1>
        </div>
    );
}

export default card;