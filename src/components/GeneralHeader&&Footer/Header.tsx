import { useNavigate } from "react-router-dom";

type HeaderProps = {
    title?: string;
}

export default function Header({ title }: HeaderProps) {
    const navigate = useNavigate();
    return (
        <header>
            <div className="title">
                <div className="row justify-content-start">
                    <div className="col-4" style={{ "textAlign": "left" }}>
                        <h4>Home</h4>
                        <button type="button" className="btn btn-danger" onClick={() => navigate("/main")}>return</button>
                    </div>
                    <div className="col-4">
                        <h1>{title}</h1>
                    </div>
                </div>
            </div>
        </header>
    );
}