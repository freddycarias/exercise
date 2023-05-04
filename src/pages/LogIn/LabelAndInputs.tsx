import Check from "../../components/CheckBox/CheckL&C";
import { useNavigate } from "react-router-dom";
import { useRef, useEffect, forwardRef } from "react";
import { USERSLIST } from "./CheckTheUser/UsersList";

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

    const emailValue = emailRef.current?.value;
    const passwordValue = passwordRef.current?.value;

    const usuarioValido = USERSLIST.find(
      (usuario) =>
        usuario.userName === emailValue &&
        usuario.userPassword === passwordValue
    );

    if (usuarioValido) {
      // Redireccionar al usuario después de un breve retraso
      setTimeout(() => {
        navigate("/store", { replace: true });
      }, 500);
    } else {
      // Mostrar mensaje de error utilizando alguna librería de notificaciones
      alert("Usuario inválido");
    }
  };

  useEffect(() => {
    // Hacer foco en el campo de correo electrónico al cargar la página
    emailRef.current?.focus();
  }, []);

  return (
    <form
      onSubmit={handleSubmit}
      style={{ width: "500px" }}
      className="mx-auto"
    >
      <LabelsInputs
        num={"1"}
        title={"User or Email"}
        type={"text"}
        ref={emailRef}
      />
      <LabelsInputs
        num={"2"}
        title={"Password"}
        type={"password"}
        ref={passwordRef}
      />
      <Check />
    </form>
  );
}
