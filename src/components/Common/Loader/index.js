import React from "react";
import {ProgressSpinner} from 'primereact/progressspinner';

export default function Loader({show}) {
    return show === true ? <ProgressSpinner/> : null;
}
