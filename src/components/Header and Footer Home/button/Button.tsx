import { useNavigate } from "react-router-dom";

type ButtonProps = {
  btn: string;
  route: string;
  inside: string;
}

function  Button({ btn,route,inside }: ButtonProps)  {
    const navigate = useNavigate();
  
    return (
      <button
        type="button"
        className={btn}
        onClick={() => navigate(`${route}`)}
        style={{ marginRight: '10px'}}
      >
        {inside}
      </button>
    );
  };
export default Button