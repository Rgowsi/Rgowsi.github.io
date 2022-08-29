import React from 'react';
import { Link } from "react-router-dom";


class RestaurantDetails extends React.Component {
  constructor(handleClick) {
    super(handleClick);
    this.onTrigger = this.onTrigger.bind(this);
  }
  onTrigger = event => {
    this.props.handleClick(this.props.data);
  }
  render() {
    const image = require('../' + this.props.data.map_image_url);
    return (
      <div className="strip" >
        <Link  to={`/restaurants/${this.props.data.name_point}`}>
          <figure>
            <span className="ribbon off">{this.props.data.offer}</span>
            <img src={image} className="img-fluid lazy" alt="" />
            <a  className="strip_info">
              <small>{this.props.data.type_point}</small>
              <div className="item_title">
                <h3>{this.props.data.name}</h3>
                <small>{this.props.data.address}</small>
              </div>
            </a>
          </figure>
        </Link>
        <ul>
          <li>
            {
              (this.props.locate) ?
                (<a href="#0" onClick={this.onTrigger} className="address">View on Map</a>) :
                (< span className="deliv yes">{this.props.data.delivery ? "Delivery" : "Takeout"}</span>)
            }
          </li>
          <li>
            <div className="score"><strong>{this.props.data.rate}</strong></div>
          </li>
        </ul>
      </div >
    );
  }
}
export default RestaurantDetails;