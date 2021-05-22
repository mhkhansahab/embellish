import "./../styles/navlink.css";

function navlink (props){
    return(
        <span className="navlink-container">
            <span className="border"></span>
            <span>{props.name}</span>
        </span>
    );
}

export default navlink;