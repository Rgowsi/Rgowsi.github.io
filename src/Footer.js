import React from 'react';

class Footer extends React.Component {
 render() {
    return(
        <footer className="footer-sec" style={{"z-index": "999"}}>
		<div className="container  fix_mobile">
			<div className="row add_bottom_25">
				<div className="col-lg-12 text-center">
					<ul className="additional_links">
						<li><a href="#0">Terms and conditions</a></li>
						<li><a href="#0">Privacy</a></li>
						<li><span>© 2022 JUMIA FOOD</span></li>
					</ul>
				</div>
			</div>
		</div>
	</footer>
    )
 }
}
export default Footer;