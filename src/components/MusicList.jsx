import React, { Component } from 'react';
import { connect } from 'react-redux';
import './MusicList.css';

// MusicList is concerned about the music object and not necessarily about the selectedMusic
class MusicList extends Component {
  renderList() {
    return this.props.music.map((musik) => {
      return (
        <>
        <section className="music_item" key={musik.title}>
          <div className="right_float">
            <button className="select">Select</button>
          </div>

          <div className="leftFloat_content">
            <p>{musik.title}</p>
            <p>{musik.duration}</p>
            <p>{musik.artist}</p>
            
          </div>
        </section>
        </>
      )
    })
  }
  render() {
    // this.props === { music: state.music }
    return <div className='renderlist'>
      {this.renderList()}</div>
  }
}

const mapStateToProps = state => {
  return { music: state.music };
}

export default connect(mapStateToProps) (MusicList);