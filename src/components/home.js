import React, { Component } from 'react';
import Logo from './logo';
import SearchBar from './searchBar';
import RecentPost from './recentPost';

export default class Home extends Component {
  render() {
    return (
      <div className='app'>
        <div>
          <div>
           <Logo/>
           <SearchBar/>
           <RecentPost/>
          </div>
        </div>
      </div>
    );
  }
}