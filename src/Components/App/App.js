import React, { Component } from 'react';
import './App.css';
import SearchBar from './../SearchBar/SearchBar.js';
import SearchResults from './../SearchResults/SearchResults.js';
import Playlist from './../Playlist/Playlist.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
    this.updateSearchTerm = this.updateSearchTerm.bind(this);
    this.search = this.search.bind(this);
    this.state = {
      searchTerm: 'mySearchTerm',
      searchResults:
        [
        {name: 'name1', artist: 'artist1', album: 'album1', id: '001'},
        {name: 'name2', artist: 'artist2', album: 'album2', id: '002'},
        {name: 'name3', artist: 'artist3', album: 'album3', id: '003'}
        ],
      playlistName: 'myPlaylist',
      playlistTracks:
        [
          {name: 'myName1', artist: 'myArtist1', album: 'myAlbum1', id: '101', uri: 'uri1'},
          {name: 'myName2', artist: 'myArtist2', album: 'myAlbum2', id: '102', uri: 'uri2'},
          {name: 'myName2', artist: 'myArtist2', album: 'myAlbum2', id: '103', uri: 'uri3'}
        ]
      }
    }

    addTrack(track) {
      var isInTracks = false;
      for (var i=0; i < this.state.playlistTracks.length; i++) {
        if (track.id === this.state.playlistTracks[i].id) {
          isInTracks = true;
        }
      }
      if (isInTracks === false) {
        this.setState({playlistTracks: [...this.state.playlistTracks, track]});
      }
    }

    removeTrack(targetTrack) {
      this.setState({playlistTracks: this.state.playlistTracks.filter(track => track.id !== targetTrack.id)});
    }

    updatePlaylistName(name) {
      this.setState({playlistName: name});
    }

    savePlaylist() {
      var trackURIs = this.state.playlistTracks.map(track => track.uri);
    }

    updateSearchTerm(term) {
      this.setState({searchTerm: term});
    }

    search(searchTerm) {
      console.log(searchTerm);
    }

  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar searchTerm={this.state.searchTerm} onTermChange={this.updateSearchTerm} />
          <div className="App-playlist">
            <SearchResults searchResults={this.state.searchResults} onAdd={this.addTrack} onSearch={this.search} />
            <Playlist playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks} onRemove={this.removeTrack} onNameChange={this.updatePlaylistName} onSave={this.savePlaylist} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
