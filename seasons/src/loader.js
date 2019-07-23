import React from 'react';

const Loader = props => {
    return (
        <div class="ui active dimmer">
            <p class="ui big text loader">{props.message}</p>
        </div>
    );
};

Loader.defaultProps = {
    message: 'Loading...'
};

export default Loader;