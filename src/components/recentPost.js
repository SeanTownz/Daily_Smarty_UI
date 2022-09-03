import React, { Component } from "react";

import { connect } from "react-redux"

import * as actions from '../actions';
class RecentPost extends Component {
    componentDidMount() {
    this.props.fetchRecentPosts();
}
    render () {
        return (
           <div className="recent-post">
            <div className="recent-post-wrapper">
                <div className="recent-post__heading">
                    <ul className="recent-post__post">
                    <li>recent post 1</li>
                    <li>recent post 2</li>
                    <li>recent post 3</li>
                    </ul>
                </div>
            </div>
           </div>
        )
    }
}

export default connect(null, actions)(RecentPost); 