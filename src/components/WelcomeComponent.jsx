import { Component } from 'react';
import { Link } from 'react-router-dom';

class WelcomeComponent extends Component {
    render () {
        return (
            <>
                Welcome {this.props.params.name}. You can manage your todos <Link to="/todos">here</Link>.
            </>
        )
    }
}

export default WelcomeComponent;