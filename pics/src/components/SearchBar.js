import React from 'react';

class SearchBar extends React.Component {
    state = { term: '' };

    onFormSubmit = (event) => {
        event.preventDefault(); // prevent form from submitting on enter
        this.props.onSubmit(this.state.term); // ARROW SYNTAX causes that this is always defined
    }

    render() {
        return (
            <div className="ui segment">
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <div className="field">
                        <label>Image search</label>
                        <input 
                            type="text" 
                            value={this.state.term} 
                            onChange={ (e) => this.setState({ term: e.target.value.toUpperCase() }) }
                        />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;
