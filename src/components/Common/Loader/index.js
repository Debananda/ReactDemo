import React from "react";
import './loader.css';

export default function Loader({show}) {
    return show === true ? <div className={'d-flex w-100 justify-content-center align-items-center'}>
        <div className="loader"/>
    </div> : null;
}
