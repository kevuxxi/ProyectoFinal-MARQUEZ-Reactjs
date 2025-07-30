import { ScaleLoader } from "react-spinners";
import "./Loading.css";

const Loading = () => {
    return (
        <div className="loading">
            <ScaleLoader color="#bb86fc" />
        </div>
    )
}

export default Loading