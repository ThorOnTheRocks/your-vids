import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../api/youtube';

class App extends React.Component {

  state = { videos: [] }

  onQuerySubmit = async query => {
    const res = await youtube.get('/search', {
      params: {
        q: query
      }
    })

    this.setState({ videos: res.data.items })
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onQuerySubmit={this.onQuerySubmit} />
        I have {this.state.videos.length} videos
      </div>
    );
  }
}

export default App;