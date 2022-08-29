import React from 'react';

class Dashboard extends React.Component {
    render() {
        const data = require("../data.json");
        return (
            <main className="dashboardsec">
                <div className="container">
                    <div className="row">
                        {data.map((item, i) => {
                            return (
                                <div className="col-xl-3 col-sm-6 mb-3">
                                    <div className="card dashboard text-dark bg-light o-hidden h-100">
                                        <div className="card-body">
                                            <div className="card-body-icon">
                                                <i className="fa fa-fw fa-envelope-open"></i>
                                            </div>
                                            <div className="mr-5">
                                                <h5>{item.view_count} views</h5>
                                            </div>
                                        </div>
                                        <a className="card-footer text-dark clearfix small z-1" href="messages.html">
                                            <span className="float-left">{item.name}</span>
                                            <span className="float-right">
                                                <i className="fa fa-angle-right"></i>
                                            </span>
                                        </a>
                                    </div>
                                </div>
                            )
                        }
                        )}
                    </div>
                </div>
            </main>
        )
    }
}
export default Dashboard;