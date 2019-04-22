import React from "react";
import {
    Menubar
} from "primereact/menubar";
import {withRouter} from 'react-router-dom'

const Header = (props) => {
    const navigateToPage = (path) => {
        props.history.push(path)
    };
    const items = [
        {
            label: 'Home', command: () => {
                navigateToPage('/')
            }
        },
        {
            label: 'Posts', command: () => {
                navigateToPage('/posts')
            }
        },
        {
            label: 'About', command: () => {
                navigateToPage('/about')
            }
        }
    ];
    return (
        <Menubar model={items}/>
    );
};

export default withRouter(Header)
