import './loader.scss';

const Loader = (props) => {

  if(!props.loading){
    return null;
  }

  return (
    <div className="loader initial">
      <div className="spinner">
        <div className="spinner-circle"></div>
        <div className="spinner-circle"></div>
      </div>
    </div>
  );
}

export default Loader;