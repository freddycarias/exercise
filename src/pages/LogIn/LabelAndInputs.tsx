import { useNavigate } from "react-router-dom";
import Check from "../../components/CheckBox/CheckL&C";

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

export default function LogInParts() {
  const navigate = useNavigate();
  return (
    <form
      onSubmit={() => navigate("/store", { replace: true })}
      style={{ width: "500px" }}
      className="mx-auto"
    >
      <LabelsInputs num={"1"} title={"Email"} type={"text"} />
      <LabelsInputs num={"2"} title={"Password"} type={"password"} />
      <Check />
    </form>
  );
}
