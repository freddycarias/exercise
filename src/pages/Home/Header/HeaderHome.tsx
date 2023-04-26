import Button from "../../../components/Button/Button";

export default function Header() {
  return (
    <div className="container text-center">
      <div className="row justify-content-end" style={{ paddingTop: "5px" }}>
        <div className="col-4">My Web</div>
        <div className="col-4" style={{ textAlign: "right" }}>
          <Button
            btn={"btn btn-outline-success"}
            route={"/login"}
            inside={"Log in"}
          />
          <Button
            btn={"btn btn-outline-primary"}
            route={"/checkin"}
            inside={"Check in"}
          />
        </div>
      </div>
    </div>
  );
}
