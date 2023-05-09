import LabelAndInputs from "./LabelAndInputs";
import "../../Styles/LogIn.css";

export default function LogIn() {
  return (
    <div>
      <div className="container text-center border login">
        <div className="row">
          <div className="col">
            <img
              src="https://www.tooltyp.com/wp-content/uploads/2014/10/1900x920-8-beneficios-de-usar-imagenes-en-nuestros-sitios-web.jpg"
              alt="logo"
              width={100}
              height={100}
              className="col-login"
            />
            <div>
              <LabelAndInputs />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
