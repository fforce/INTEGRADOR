import React, { Component } from 'react';
import MyListAddButton from '../MyListAddButton'
import MyListRemoveButton from '../MyListRemoveButton'
import MyListViewButton from '../MyListViewButton'

class ListItem extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        const { title, description, imgUrl, showAddButtons, clickAddItem } = this.props;

        return (
            <article className="col-md-6">
                <div className="list-item">
                    <div className="list-item-img">
                        <img src={imgUrl} alt="Movie Image" className="img-fluid" />
                    </div>
                    <div className="list-item-body">
                        <h3 className="list-item-title">{title}</h3>
                        <div className="list-item-description">
                            <p>{description}</p>
                        </div>
                        <div className="list-item-actions">
                            {
                                showAddButtons ? (
                                    <MyListAddButton onClickAddButton={clickAddItem} />
                                ) : (
                                        <div>
                                            <MyListRemoveButton />
                                            <MyListViewButton />
                                        </div>
                                    )
                            }


                        </div>
                    </div>
                </div>
            </article>
        )
    }
}


export default ListItem;    