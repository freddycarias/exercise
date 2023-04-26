import { CgHome } from "react-icons/cg";
import { useNavigate } from "react-router-dom";
import InsideNavbar from "./InsideNavbar";

export default function Header() {
  const navigate = useNavigate();
  return (
    <header>
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
          <InsideNavbar />
        </div>
      </nav>
    </header>
  );
}
