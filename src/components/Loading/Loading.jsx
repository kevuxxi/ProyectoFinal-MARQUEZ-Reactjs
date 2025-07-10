import { ScaleLoader } from "react-spinners";
import "./loading.css";

const Loading = () => {
    return (
        <div className="loading">
            <ScaleLoader color="#bb86fc" />
        </div>
    )
}

export default Loading