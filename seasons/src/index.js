import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';

class App extends React.Component {
    state = { latitude: null, errorMessage: "" };

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            (position) => this.setState({ latitude: position.coords.latitude }), // success callback
            (err) => this.setState({ errorMessage: err.message })
        );
    }

    componentDidUpdate() {
        console.log("My component was just updated. It re-rendered!");
    }

    // render() is required by React
    render() {
        // conditional rendering
        if(this.state.errorMessage && !this.state.latitude) {
            return (
                <div>
                    Error: { this.state.errorMessage }
                </div>
            );
        }
        
        if(!this.state.errorMessage && this.state.latitude) {
            return <SeasonDisplay latitude={this.state.latitude} />
        } 

        return (
            <div>
                Loading...
            </div>
        );
    }
}

ReactDOM.render(
    <App/>,
    document.querySelector("#root")
);