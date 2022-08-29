import React from 'react';
import RestaurantDetails from '../components/RestaurantDetails';

class Restaurant extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			data: require('../data.json'),
			rating: ["Super 4+", "Very good 3+", "Good 2+", "Ordinary 1+"],
			sortInput: "",
			filterInput: [],
			rateInput: "",
		};
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

		return (
			<main>
				<div class="page_header element_to_stick">
					<div class="container">
						<div class="row">
							<div class="col-xl-8 col-lg-7 col-md-7 d-none d-md-block">
								<h1>{this.state.data.length} Results</h1>
							</div>
						
						</div>
					</div>
				</div>
				<div class="container margin_30_20">
					<div class="row">
						<aside class="col-lg-3" id="sidebar_fixed">
					
							<div class="filter_col">
								<div class="inner_bt clearfix">Filters<a href="#0" class="open_filters"><i class="icon_close"></i></a></div>
								<div class="filter_type">
									<h4><a href="#filter_1" data-bs-toggle="collapse" class="closed">Sort</a></h4>
									<div class="collapse show" id="filter_1">
										<ul>
											{sortOptions.map((option) => {
												return (
													<li>
														<label class="container_radio">{option.name}
															<input type="radio" name="sortType" value={option.value} onChange={this.onSortOptionChanged} />
															<span class="checkmark"></span>
														</label>
													</li>
												);
											})
											}
										</ul>
									</div>
								</div>
								<div class="filter_type">
									<h4><a href="#filter_2" data-bs-toggle="collapse" class="closed">Cuisines</a></h4>
									<div class="collapse" id="filter_2">
										<ul>
											{cuisines.map((record, i) =>
												<li key={i}>
													<label class="container_check">{record}
														<input type="checkbox" value={record} onChange={this.onFilterOptionChanged} />
														<span class="checkmark"></span>
													</label>
												</li>
											)}
										</ul>
									</div>
								</div>
								<div class="filter_type last">
									<h4><a href="#filter_4" data-bs-toggle="collapse" class="closed">Rating</a></h4>
									<div class="collapse" id="filter_4">
										<ul>
											{this.state.rating.map((feed) => {
												return (
													<li>
														<label class="container_radio">{feed}
															<input type="radio" name="filter_sort" value={feed} onChange={this.onRateOptionChanged} />
															<span class="checkmark"></span>
														</label>
													</li>
												);
											})
											}
										</ul>
									</div>
								</div>
								<p><button href="#0" class="btn_1 outline full-width" onClick={this.handleSort}>Sort & Filter</button></p>
							</div>
						</aside>
						<div class="col-lg-9">
							<div class="row">
							
								{this.state.data.map((item, i) => {
									return (
										<div class="col-xl-4 col-lg-6 col-md-6 col-sm-6" >
											<RestaurantDetails data={item} key={i} locate={false}/>
										</div>
									)
								}
								)}
							</div>
						</div>
					</div>
				</div>
			</main>
		);
	}
}
export default Restaurant;
