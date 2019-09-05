import React from 'react';

class ImageCard extends React.Component {
    constructor(props) {
        super(props);

        this.state = { spans: 0 };
    }

    setSpans = () => {
        console.log(this);
        const height = this.imageRef.current.clientHeight;
        const spans = Math.ceil(height / 20 + 1);

        this.setState({ spans });
    };

    handleImageLoaded = (e) => {
        const height = e.target.clientHeight;
        const spans = Math.ceil(height / 20 + 1);

        this.setState({ spans });
    }

    render() {
        const { description, urls } = this.props.image;

        return (
            <div className="image-card-container" style={{ gridRowEnd: `span ${this.state.spans}` }}>
                <img onLoad={this.handleImageLoaded} alt={description} src={urls.regular} />
            </div>
        );
    }
}

export default ImageCard;