
import Check from "../../components/CheckBox/CheckL&C";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import { forwardRef } from "react";

const usuariosValidos = [
  { email: "usuario1@example.com", password: "password1" },
  { email: "usuario2@example.com", password: "password2" },

];


type LabelsInputsProps = {
  num: string;
  title: string;
  type: string;
};

const LabelsInputs = forwardRef<HTMLInputElement, LabelsInputsProps>(
  ({ num, title, type }, ref) => {
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
            ref={ref}
          />
        </div>
      </div>
    );
  }
);

export default function LogInParts() {
  const navigate = useNavigate();
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const email = emailRef.current?.value;
    const password = passwordRef.current?.value;

    const usuarioValido = usuariosValidos.find(
      (usuario) => usuario.email === email && usuario.password === password
    );

    if (usuarioValido) {
      navigate("/store", { replace: true });
    } else {
      alert("Usuario inválido");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{ width: "500px" }}
      className="mx-auto"
    >
      <LabelsInputs num={"1"} title={"Email"} type={"text"} ref={emailRef} />
      <LabelsInputs num={"2"} title={"Password"} type={"password"} ref={passwordRef} />
      <Check />
    </form>
  );
}
