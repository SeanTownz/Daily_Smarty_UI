import React, { Component } from "react";
class  RecentPost extends Component {
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

export default RecentPost ;  