
const Button = ({
  type,
  classname,
  label,
  handleClick
}) => {
  return (
    <button
    type={type}
    className={classname}
    onClick={handleClick}>
      {label}
    </button>
  );
}

export default Button