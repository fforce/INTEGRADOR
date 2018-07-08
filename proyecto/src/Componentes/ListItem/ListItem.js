import React, {Component} from 'react';

class ListItem extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        const { title, description } = this.props;
  
        return (
            <article className="col-md-6">
                <div className="list-item">
                    <div className="list-item-img">
                        <img src="https://image.tmdb.org/t/p/w370_and_h556_bestv2/oSLd5GYGsiGgzDPKTwQh7wamO8t.jpg" alt="Movie Image" className="img-fluid" />
                    </div>
                    <div className="list-item-body">
                        <h3 className="list-item-title">{title}</h3>
                        <div className="list-item-description">
                            <p>{description}</p>
                        </div>
                        <div className="list-item-actions">
                            {this.props.children}
                        </div>
                    </div>
                </div>
            </article>
        )
    }
}


export default ListItem;    