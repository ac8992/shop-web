import { Helmet } from "react-helmet-async";
import {PropTypes} from "prop-types";

function PageTitle({title}) {
    return  <Helmet><title>{title} | Shop</title></Helmet>
}

PageTitle.protoTypes = {
    title:PropTypes.string.isRequired
}

export default PageTitle;