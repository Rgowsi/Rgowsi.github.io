import React from 'react';
import { useParams } from 'react-router-dom';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function SingleProduct() {
    const data = require("../data.json");
    const {restaurantId} = useParams();
    const thisRestaurant = data.find(item => item.name_point === restaurantId);
    const image = require('../' + thisRestaurant.map_image_url);

    return (
        <main>
            <div class="container margin_detail_2">
                <div class="row">
                    <div class="col-lg-8">
                        <div class="detail_page_head clearfix">
                            <div class="rating">
                                <div class="score"><strong><FontAwesomeIcon icon={faStar} />  {thisRestaurant.rate}</strong></div>
                            </div>
                            <div class="title">
                                <h1>{thisRestaurant.name}</h1>
                                {thisRestaurant.address}
                                <ul class="tags">
                                    <li><a href="#0">{thisRestaurant.type_point}</a></li>
                                </ul>
                            </div>
                        </div>
                        <h6>About {thisRestaurant.name}</h6>
                        <p>Mei at intellegat reprehendunt, te facilisis definiebas dissentiunt usu. Choro delicata voluptatum cu vix.<br />Sea error splendide at. Te sed facilisi persequeris definitiones, ad per scriptorem instructior, vim latine adipiscing no. Cu tacimates salutandi his, mel te dicant quodsi aperiri. Unum timeam his eu.</p>
                    </div>
                    <div class="col-lg-4">
                        <div class="pictures clearfix">
                            <figure>
                                <a href="img/detail_gallery/detail_1.jpg" title="Photo title" >
                                    <img src={image} class="img-fluid lazy loaded" alt="" data-was-processed="true" />
                                </a>
                            </figure>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
export default SingleProduct;