import { useNavigate } from "react-router-dom";
import Check from "../../components/CheckBox/CheckLoginAndCheckin";

type Props = {
  num: string;
  title: string;
  type: string;
};

function LabelsInputs({ num, title, type }: Props) {
  return (
    <div className="row mb-3">
      <label
        htmlFor={`inputPassword3-${num}`}
        className="col-sm-2 col-form-label"
      >
        {title}
      </label>
      <div className="col-sm-10">
        <input
          type={type}
          className="form-control"
          id={`inputPassword3-${num}`}
          required
        />
      </div>
    </div>
  );
}

export default function CheckInParts() {
  const navigate = useNavigate();
  return (
    <div>
      <form onSubmit={() => navigate("/store", { replace: true })}>
        <LabelsInputs num={"1"} title={"First Name"} type={"text"} />
        <LabelsInputs num={"2"} title={"Last Name"} type={"text"} />
        <LabelsInputs num={"3"} title={"Email"} type={"text"} />
        <LabelsInputs num={"4"} title={"Password"} type={"password"} />
        <LabelsInputs num={"5"} title={"Confirm Password"} type={"password"} />
        <Check />
      </form>
    </div>
  );
}
