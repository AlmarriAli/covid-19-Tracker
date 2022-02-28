import { ReactElement } from 'react'

function Spinner(): ReactElement {
    return (
        <div className="spinner-grow text-info" role="status">
            <span className="visually-hidden">Loading...</span>
        </div>
    )
}

export default Spinner