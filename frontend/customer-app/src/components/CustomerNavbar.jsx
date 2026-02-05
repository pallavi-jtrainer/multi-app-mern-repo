import { Link, useNavigate } from "react-router-dom";

export default function CustomerNavbar() {
    const navigate = useNavigate();
    const isLoggedIn = !!localStorage.getItem("token");

    const logout = () => {
        localStorage.clear();
        navigate("/");
    }

    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container">
                <span className="navbar-brand">Customer Portal</span>

                {isLoggedIn && (
                    <div className="navbar-nav ms-auto">
                        <Link to="/products" className="nav-link">Products</Link>
                        <button onClick={logout} className="btn btn-light btn-sm">Logout</button>
                    </div>
                )}
            </div>
        </nav>
    )
}