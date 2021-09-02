import React from 'react';

// Components
import SearchBar from './SearchBar';
import youtube from '../api/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

class App extends React.Component {

  state = { videos: [], selectedVideo: null }

  componentDidMount() {
    this.onQuerySubmit('crypto')
  }

  onQuerySubmit = async query => {
    const res = await youtube.get('/search', {
      params: {
        q: query
      }
    })

    this.setState({ videos: res.data.items, selectedVideo: res.data.items[0] })
  };

  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video })
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: '30px' }}>
        <SearchBar onQuerySubmit={this.onQuerySubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className=" five wide column">
              <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;