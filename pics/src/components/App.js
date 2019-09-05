import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';

class App extends React.Component {
    state = { images: [] };

    async componentDidMount(){
        const response =  await unsplash.get('/search/photos', {
            params: { 
                query: "random",
                per_page: 50
            }
        });
        
        this.setState({ images: response.data.results });
    }

    onSearchSubmit = async (term) => {
        const response = await unsplash.get('/search/photos', {
            params: { 
                query: term,
                per_page: 50
            }
        });
        
        this.setState({ images: response.data.results });
    }

    render() {
        return (
            <div className="ui container" style={{ marginTop: '10px' }}>
                <SearchBar onSubmit={this.onSearchSubmit} />
                <ImageList images={this.state.images} />
            </div>
        );
    }
}

export default App;
