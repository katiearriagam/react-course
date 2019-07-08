import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    render() {
        let latitude = 0; 
        window.navigator.geolocation.getCurrentPosition(
            (position) => latitude = position.coords.latitude, // success callback
            (error) => console.log(error) // error callback
        );
        return <div>Latitude: { latitude }</div>
    }
}

ReactDOM.render(
    <App/>,
    document.querySelector("#root")
);