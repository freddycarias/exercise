import Button  from "./button/Button";

export default function Header() {
  return (
    <div className="container text-center">
      <div className="row justify-content-end" style={{paddingTop: "5px"}}>
        <div className="col-4">
          My Web
        </div>
        <div className="col-4" style={{ textAlign: "right"}}>
          <Button btn={"btn btn-outline-success"} route={'/undefine1'} inside={"Log in"}/>
          <Button btn={"btn btn-outline-primary"} route={'/undefine2'} inside={"Check in"}/>
        </div>
      </div>
    </div>
  );
}

