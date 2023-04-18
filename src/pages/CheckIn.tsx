import PartofCheckIn from "../components/Login&Checking/CheckIn/CILabels&&Inputs"

export default function CheckIn() {
    return (
      <div>
        <div
          className="container text-center border"
          style={{ height: "530px", width: "600px", marginTop: "100px" }}
        >
          <div className="row">
            <div className="col">
            <img
                src="https://www.tooltyp.com/wp-content/uploads/2014/10/1900x920-8-beneficios-de-usar-imagenes-en-nuestros-sitios-web.jpg"
                alt="logo"
                width={100}
                height={100}
                style={{padding: "10px"}}
              />
              <div>
                <PartofCheckIn/>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}