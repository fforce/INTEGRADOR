import React, { Component } from 'react';
import MyListAddButton from '../MyListAddButton'
import MyListRemoveButton from '../MyListRemoveButton'
import MyListViewButton from '../MyListViewButton'
import PropTypes from "prop-types";

class ListItem extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        const { title, description, imgUrl, showAddButtons, clickAddItem, clickRemoveItem } = this.props;

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
                                            <MyListRemoveButton onClickRemoveButton={clickRemoveItem} />
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

ListItem.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    imgUrl : PropTypes.string,
    showAddButtons : PropTypes.bool,
    clickAddItem : PropTypes.func,
    clickRemoveItem : PropTypes.func
}

export default ListItem;    