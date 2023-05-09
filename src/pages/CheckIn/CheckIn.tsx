import LabelsAndInputs from "./LabelsAndInputs";
import "../../Styles/CheckIn.css"

export default function CheckIn() {
  return (
    <div>
      <div className="container text-center border container-check ">
        <div className="row">
          <div className="col">
            <img
              src="https://www.tooltyp.com/wp-content/uploads/2014/10/1900x920-8-beneficios-de-usar-imagenes-en-nuestros-sitios-web.jpg"
              alt="logo"
              width={100}
              height={100}
              className="col-check"
            />
            <div>
              <LabelsAndInputs />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
