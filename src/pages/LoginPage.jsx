import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth"

const LoginPage = () => {
const navigate = useNavigate();
const location = useLocation();
const { signIn } = useAuth();
const fromPage = location.state?.from?.pathname || "/";

const handleSubmit = (event) => {
event.preventDefault()

const form = event.target
const user = form.userName.value

signIn(user, () => navigate(fromPage, { replace: true }))
}

return (
<div>
<h1>Login page</h1>

<form onSubmit={ handleSubmit }>
<label>
Name: <input name="userName"/>
</label>
<button type="submit">Login</button>
</form>

</div>
);
};

export default LoginPage;