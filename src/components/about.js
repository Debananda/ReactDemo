import React, {Component} from 'react';
import {Container,Button} from 'reactstrap';
class About extends Component {
    componentDidMount() {
        console.log(this.props.match.params['id'])
    }

    goBack = () => {
        this.props.history.goBack();
    }

    render() {
        return (
            <Container>
                <h1>About Component</h1>
                <Button color="primary" onClick={this.goBack}>Back</Button>
            </Container>
        )
    }
}

export default About;