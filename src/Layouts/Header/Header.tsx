import { useNavigate } from "react-router-dom";
import { CgHome } from "react-icons/cg";
import PartsOfHeaderUl from "./PartsOfHeaderUl";


interface HeaderProps {
  ActualValue?: string;
  setActualValue?: React.Dispatch<React.SetStateAction<string>>;
}

export default function Header({
  ActualValue,
  setActualValue,
}: HeaderProps) {

  const navigate = useNavigate();

  const handleValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (setActualValue) {
      setActualValue(e.target.value);
    }
  };

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
      <a
            className="navbar-brand"
            onClick={() => navigate("/store")}
            style={{ cursor: "pointer" }}
          >
            <CgHome />
          </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>


        <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul
          className="navbar-nav me-auto mb-2 mb-lg-0"
          style={{ cursor: "pointer" }}
        >
          <li className="nav-item">
            <a
              className="nav-link active"
              aria-current="page"
              onClick={() => navigate("/phones")}
            >
              Phones
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" onClick={() => navigate("/headphones")}>
              Headphones
            </a>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Watches
            </a>
            <PartsOfHeaderUl />
          </li>
          <li className="nav-item">
            <a className="nav-link disabled">Tablets</a>
          </li>
        </ul>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="text"
              placeholder="Search"
              aria-label="Search"
              value={ActualValue}
              onChange={handleValueChange}
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}
