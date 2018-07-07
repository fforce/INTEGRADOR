import React from 'react';

const ListItem = ({ title, date }) => (
    <article className="col-md-6">
        <div className="list-item">
            <div className="list-item-img">
                <img src="https://image.tmdb.org/t/p/w370_and_h556_bestv2/oSLd5GYGsiGgzDPKTwQh7wamO8t.jpg" alt="Movie Image" class="img-fluid" />
            </div>
            <div className="list-item-body">
                <h3 className="list-item-title">Thor: Ragnarok</h3>
                <div className="list-item-description">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam blanditiis consequuntur corporis distinctio doloremque, eum expedita id in ipsam minus modi molestias optio perferendis quam quas repudiandae sint. Suscipit, veritatis!</p>
                </div>
                <div className="list-item-actions">
                    <a href="peliculas-list.html" class="btn btn-primary" aria-label="Profile">
                        <i className="mdi mdi-heart-outline" aria-hidden="true"></i> Agregar a Mi Lista
                    </a>
                </div>
            </div>
        </div>
    </article>
);

export default ListItem;    