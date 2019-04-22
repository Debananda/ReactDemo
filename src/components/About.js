import React, {Component} from "react";
import {Button} from "primereact/button";

class About extends Component {
    goBack = () => {
        this.props.history.goBack();
    };

    render() {
        return (
            <div>
                <h1>About Component</h1>
                <Button color="primary" onClick={this.goBack} label={"Back"}/>
            </div>
        );
    }
}

export default About;
