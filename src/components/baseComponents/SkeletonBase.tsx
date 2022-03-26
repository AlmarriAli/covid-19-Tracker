import { ReactElement } from "react"
import { Skeleton } from "@mui/material"
const SkeletonBase = (): ReactElement => {
    return (<>
        <div className="col-md-8 offset-md-2 text-center" data-testid="skeleton">
            <Skeleton variant="text" height={40} />
            <div className="spinner-grow text-dark" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
            <h5 className="test-center"> ....Loading </h5>
            <Skeleton variant="rectangular" height={118} />

        </div>

    </>)


}

export default SkeletonBase