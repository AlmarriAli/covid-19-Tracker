import { ReactElement } from "react";
import { useParams } from 'react-router-dom';

const CountryDetails = (): ReactElement => {
    const { id } = useParams();

    return (<> <h3> Country Details Page - {id}</h3> </>)


}

export default CountryDetails