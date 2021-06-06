import "./divider.css";


const divider = (props) => {
  return (
    <div className="flex center-2">
      <span className="divider"></span>
      <span className="myTitles">{props.title}</span>
      <span className="divider"></span>
    </div>
  );
};
export default divider;