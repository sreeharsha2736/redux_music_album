import React, { Component } from "react";
import { connect } from "react-redux";
import { selectSong } from "../actions";

class SongList extends Component {
  renderList() {
    return this.props.songs.map((song) => {
      return (
        <div className="container ">
          <div className="" key={song.title}>
            <div className="">
              <span className="content pr-5">{song.title}</span>
            </div>
            <button
              className="btn btn-primary float-center"
              onClick={() => this.props.selectSong(song)}
            >
              play
            </button>
          </div>
        </div>
      );
    });
  }

  render() {
    return <div className="">{this.renderList()}</div>;
  }
}

const mapStateToProps = (state) => {
  return { songs: state.songs };
};

export default connect(mapStateToProps, { selectSong })(SongList);
