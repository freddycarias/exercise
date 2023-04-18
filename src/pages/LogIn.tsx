import { useNavigate } from "react-router-dom";


export default function LogIn() {
    const navigate = useNavigate();
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
                <form
                  onSubmit={() => navigate("/main", { replace: true })}
                  style={{ width: "500px" }}
                  className="mx-auto"
                >
                  <div className="row mb-3">
                    <label
                      htmlFor="inputPassword3-3"
                      className="col-sm-2 col-form-label"
                    >
                      Email
                    </label>
                    <div className="col-sm-10">
                      <input
                        type="text"
                        className="form-control"
                        id="inputPassword3-3"
                        required
                      />
                    </div>
                  </div>
                  <div className="row mb-3">
                    <label
                      htmlFor="inputPassword3-2"
                      className="col-sm-2 col-form-label"
                    >
                      Password
                    </label>
                    <div className="col-sm-10">
                      <input
                        type="password"
                        className="form-control"
                        id="inputPassword3-2"
                        required
                      />
                    </div>
                  </div>
                  <div className="check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckCheckedDisabled"
                      checked
                      disabled
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexCheckCheckedDisabled"
                    >
                      Accept term and conditions
                    </label>
                  </div>
                  <div>
                    <button type="submit" className="btn btn-primary">
                      Sign In
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </>
    );
}