import { useRouteError } from "react-router-dom";

const Error = ()=>{
    const err = useRouteError();
    const {status, statusText} = err;
    return(
        <div className="error">
            <h1>{status}</h1>
            <p>{statusText}</p>
        </div>
    )
}
export default Error;