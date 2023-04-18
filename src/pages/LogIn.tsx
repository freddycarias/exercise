import LogInParts from "../components/Login&Checking/LogIn/LILabels&&Inputs";


export default function LogIn() {
    return (
      <>
        <div
          className="container text-center border"
          style={{ height: "300px", width: "600px", marginTop: "100px" }}
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
              <LogInParts/>
              </div>
            </div>
          </div>
        </div>
      </>
    );
}