import { PropTypes } from "prop-types";
function Inputfield(props) {
  return (
    <>
      <input
        type={props.type}
        placeholder={props.placeholder}
        className={props.className}
      />
    </>
  );
}

Inputfield.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  className: PropTypes.string,
};

export default Inputfield;
