import { useParams } from "react-router-dom";

const EditPage = () => {

    const { id } = useParams()

    return (
        <div>
            Edit post { id } 
        </div>
    );
};

export default EditPage;