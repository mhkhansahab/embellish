import "./divider.css";


const divider = (props) => {
  return (
    <div className="divider-container">
      <div className="divider"></div>
      <div className="myTitles">{props.title}</div>
      
    </div>
  );
};
export default divider;