import React from 'react';
import RestaurantDetails from '../components/RestaurantDetails';
import GoogleMapReact from 'google-map-react';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import MapCard from '../components/MapCard';
import '../css/style.css';

class Locate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      facilities: require('../data.json'),
      facilityHighlight : {},
      data: require('../data.json'),
			rating: ["Super 4+", "Very good 3+", "Good 2+", "Ordinary 1+"],
			sortInput: "",
			filterInput: [],
			rateInput: "",
    }
    this.handleSort = this.handleSort.bind(this);
		this.onSortOptionChanged = this.onSortOptionChanged.bind(this);
		this.onFilterOptionChanged = this.onFilterOptionChanged.bind(this);
		this.onRateOptionChanged = this.onRateOptionChanged.bind(this);
  }
  handleSort() {
		const sortedData = [...this.state.data].sort((a, b) => {
			if (this.state.sortInput === "name") return a.name > b.name ? 1 : -1;
			if (this.state.sortInput === "rate") return a.rate < b.rate ? 1 : -1;
			if (this.state.sortInput === "view_count") return a.view_count < b.view_count ? 1 : -1;
		})
		this.setState({ data: sortedData });
		var resList = require('../data.json');
		if (this.state.filterInput.length !== 0) {
			var filterContent = this.state.filterInput;
			var newData = resList.filter(function (element) {
				return filterContent.some(function (item) {
					return element.type_point === item;
				})
			})
			this.setState({
				data: newData
			})
		}
		if (this.state.rateInput !== "") {
			var rate = this.state.rateInput;
			var rates = this.state.rating;
			var newRate = resList.filter(function (element) {
				if (rate === rates[0]) {
					return element.rate > 4;
				}
				else if (rate === rates[1]) {
					return element.rate > 3 && element.rate <= 4;
				}
				else if (rate === rates[2]) {
					return element.rate > 2 && element.rate <= 3;
				}
				else if (rate === rates[4]) {
					return element.rate > 1 && element.rate <= 2;
				}
			})
			console.log(newRate);
			this.setState({
				data: newRate
			})
		}
	}
	//sorting
	onSortOptionChanged(event) {
		this.setState({ sortInput: event.currentTarget.value });
	}
	//type filter
	onFilterOptionChanged(event) {
		let isChecked = event.currentTarget.checked;
		let currentOption = this.state.filterInput;
		let newOption = [...currentOption, event.currentTarget.value];
		if (isChecked) {
			this.setState({
				filterInput: newOption
			});
		}
		else {
			this.setState({
				filterInput: this.state.filterInput.filter(function (input) {
					return input !== event.currentTarget.value
				})
			});
		}
	}
	//rate filter
	onRateOptionChanged(event) {
		let isChecked = event.currentTarget.checked;
		if (isChecked) {
			this.setState({
				rateInput: event.currentTarget.value
			});
		}
		console.log(this.state.rateInput);
	}
  render() {
    var restaurants = require('../data.json');
		const sortOptions = [{ name: "A to Z", value: "name" },
		{ name: "Top ratings", value: "rate" },
		{ name: "Most viewed", value: "view_count" }];
		let restaurantType = [];
		restaurants.map((entry) => restaurantType.push(entry.type_point));
		const cuisines = [...new Set(restaurantType)];
    var data = require('../data.json');
    const defaultProps = {
      center: { lat: 13.018903678940507, lng: 80.22095490077069 },
      zoom: 13
    };
    var markerStyle = {
      color: "#fff",
      fontSize: "40px",
    }
    const handleClick = detail => {
      this.setState({facilityHighlight: detail})
    }
    console.log(this.state.facilityHighlight);
    const Marker = ({ text }) => <div><FontAwesomeIcon icon={faLocationDot} style={markerStyle} /></div>;
    return (
      <section classNameName="container show-direction" style={{"padding-top": "100px"}}>
        <div className="row">
          <div className="col-lg-4 p-4">
            <aside className="row-lg-12" id="sidebar_fixed">
							
							<div className="filter_col">
								<div className="inner_bt clearfix">Filters<a href="#0" className="open_filters"><i className="icon_close"></i></a></div>
								<div className="filter_type">
									<h4><a href="#filter_1" data-bs-toggle="collapse" className="closed">Sort</a></h4>
									<div className="collapse show" id="filter_1">
										<ul>
											{sortOptions.map((option) => {
												return (
													<li>
														<label className="container_radio">{option.name}
															<input type="radio" name="sortType" value={option.value} onChange={this.onSortOptionChanged} />
															<span className="checkmark"></span>
														</label>
													</li>
												);
											})
											}
										</ul>
									</div>
								</div>
								<div className="filter_type">
									<h4><a href="#filter_2" data-bs-toggle="collapse" className="closed">Cuisines</a></h4>
									<div className="collapse" id="filter_2">
										<ul>
											{cuisines.map((record, i) =>
												<li key={i}>
													<label className="container_check">{record}
														<input type="checkbox" value={record} onChange={this.onFilterOptionChanged} />
														<span className="checkmark"></span>
													</label>
												</li>
											)}
										</ul>
									</div>
								</div>
								<div className="filter_type last">
									<h4><a href="#filter_4" data-bs-toggle="collapse" className="closed">Rating</a></h4>
									<div className="collapse" id="filter_4">
										<ul>
											{this.state.rating.map((feed) => {
												return (
													<li>
														<label className="container_radio">{feed}
															<input type="radio" name="filter_sort" value={feed} onChange={this.onRateOptionChanged}/>
															<span className="checkmark"></span>
														</label>
													</li>
												);
											})
											}
										</ul>
									</div>
								</div>
								<p><button href="#0" className="btn_1 outline full-width" onClick={this.handleSort}>Sort & Filter</button></p>
							</div>
						</aside>
            {this.state.data.map((item, i) => {
              return (
                <div className="row-lg-12">
                  <RestaurantDetails data={item} key={i} handleClick={handleClick} locate={true} />
                </div>
              )
            }
            )}
          </div>
          <div className="col-lg-8 map-right" style={{ height: "600px" }}>
            <GoogleMapReact
              defaultCenter={defaultProps.center}
              defaultZoom={defaultProps.zoom}
            >
              {this.state.facilities.map((facility, index) => {
                return (
                  <Marker
                    lat={facility.latitude}
                    lng={facility.longitude}
                    text={'Google Map'}
                    key={index}
                  />);
              })}
              <MapCard
                  lat={this.state.facilityHighlight.latitude}
                  lng={this.state.facilityHighlight.longitude}
                  restaurant={this.state.facilityHighlight}  />
            </GoogleMapReact>

          </div>
        </div>
      </section>
    );
  }
}
export default Locate;