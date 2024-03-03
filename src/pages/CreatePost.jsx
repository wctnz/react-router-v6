import { Navigate, useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const CreatePost = () => {

    const { signOut } = useAuth()
    const navigate = useNavigate()
    return (
        <div>
            Create post
            <button onClick={ () => signOut(()=> navigate("/", { replace: true })) }>Log out</button>
        </div>
    );
};

export default CreatePost;