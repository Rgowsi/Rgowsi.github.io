import React, { Component } from 'react';
import close_infobox from '../images/close_infobox.png';
import thumb_map from '../images/thumb_map_single_restaurant.jpg';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Images = {
    image1: require("../images/location_1.jpg"),
    image2: require('../images/location_2.jpg'),
    image3: require('../images/location_3.jpg'),
    image4: require('../images/location_4.jpg'),
    image5: require('../images/location_5.jpg'),
    image6: require('../images/location_6.jpg'),
    image7: require('../images/location_7.jpg'),
    image8: require('../images/location_8.jpg'),
    image9: require('../images/location_9.jpg'),
    image10: require('../images/location_10.jpg'),
    image11: require('../images/location_11.jpg'),
    image12: require('../images/location_12.jpg'),
}

class MapCard extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        var image = "";
        switch (this.props.restaurant.name_point) {
            case "restaurant1":
                image = Images.image1;
                break;
            case "restaurant2":
                image = Images.image2;
                break;
            case "restaurant3":
                image = Images.image3;
                break;
            case "restaurant4":
                image = Images.image4;
                break;
            case "restaurant5":
                image = Images.image5;
                break;
            case "restaurant6":
                image = Images.image6;
                break;
            case "restaurant7":
                image = Images.image7;
                break;
            case "restaurant8":
                image = Images.image8;
                break;
            case "restaurant9":
                image = Images.image9;
                break;
            case "restaurant10":
                image = Images.image10;
                break;
            case "restaurant11":
                image = Images.image11;
                break;
            case "restaurant12":
                image = Images.image12;
                break;
            default:
                image = thumb_map;
                break;
        }
        return (
            <div className="infoBox" style={{ position: "absolute", visibility: "visible", width: "290px", left: "-129.836px", bottom: "-127.388px" }}>
                <img src={close_infobox} align="right" style={{ position: "relative", cursor: "pointer", margin: "2px" }}></img>
                <div className="marker_info" id="marker_info">
                    <img src={image} alt="" />
                    <span>
                        <span className="infobox_rate"><FontAwesomeIcon icon={faStar} /> {this.props.restaurant.rate}</span>
                        <h3>{this.props.restaurant.name}</h3>
                        <em>{this.props.restaurant.type_point}</em>
                        <strong>undefined</strong>
                        <form action="http://maps.google.com/maps" method="get" target="_blank">
                            <input name="saddr" value="" type="hidden" />
                            <input type="hidden" name="daddr" value="13.018903678940507,80.22095490077069" />
                            
                        </form>
                        <a href="tel://+91 9999999999" className="btn_infobox_phone">{this.props.restaurant.phone}</a>
                    </span>
                </div>
            </div>
        );
    }
}
export default MapCard;