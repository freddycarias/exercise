import { useNavigate } from "react-router-dom";
import PartsOfHeader from "./PartsOfHeaderUl";
import FormHeader from "./FormHeader";

export default function InsideNavbar() {
  const navigate = useNavigate();
  return (
    <>
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
            <PartsOfHeader />
          </li>
          <li className="nav-item">
            <a className="nav-link disabled">Tablets</a>
          </li>
        </ul>
        <FormHeader />
      </div>
    </>
  );
}
