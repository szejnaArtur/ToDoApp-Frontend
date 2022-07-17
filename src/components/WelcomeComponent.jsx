import { Component } from 'react';
import { Link } from 'react-router-dom';

import HelloWorldService from '../api/HelloWorldService.js';

class WelcomeComponent extends Component {

    state = {
        welcomeMessage: ""
    }

    retrieveWelcomeMessage = () => {
        HelloWorldService.executeHelloWorldPathVariableService(this.props.params.name)
        .then(response => {
            this.handleSuccessfulResponse(response);
        })
        .catch(error => this.handleError(error))
    }

    handleSuccessfulResponse(response) {
        this.setState({
            welcomeMessage: response.data.message
        })
    }

    handleError(error) {
        this.setState({
            welcomeMessage: error.response.data.message
        })
    }

    render () {
        return (
            <>
                <div className='text-center'>
                    <h1>Welcome!</h1>
                    <div className='container'>
                        Welcome {this.props.params.name}. You can manage your todos <Link to="/todos">here</Link>.
                    </div>
                    <div className='container'>
                        Click here to get a customized welcome message.<br/>
                        <button onClick={this.retrieveWelcomeMessage} className="btn btn-success">Get Welcome message</button>
                    </div>
                    <div className='container'>
                        {this.state.welcomeMessage}
                    </div>
                </div>
            </>
        )
    }
}

export default WelcomeComponent;