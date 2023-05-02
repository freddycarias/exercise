import { useNavigate } from "react-router-dom";
import { MouseEvent, FC } from "react";

type Props = {
  routes: string;
  product: string;
};

const PartsOfHeader: FC<Props> = ({ routes, product }) => {
  const navigate = useNavigate();

  const handleNavigate = (e: MouseEvent<HTMLAnchorElement>): void => {
    e.preventDefault();
    navigate(routes);
  };

  return (
    <>
      <li>
        <a className="dropdown-item" onClick={handleNavigate}>
          {product}
        </a>
      </li>
    </>
  );
};

export default function PartsOfHeaderUl() {
  return (
    <>
      <ul className="dropdown-menu">
        <PartsOfHeader routes={"/masculine"} product="Men" />
        <PartsOfHeader routes={"/femenine"} product="Women" />
        <hr className="dropdown-divider" />
        <PartsOfHeader routes={"/unixes"} product="Unixes" />
      </ul>
    </>
  );
}
