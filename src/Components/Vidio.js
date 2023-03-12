import React, { Component } from 'react'
export default class Vidio extends Component {
  constructor(props) {
      super(props);
    //   let {params}=this.props.match.params
    //   console.log(this.match.params);
    const params="0";
      this.state = {
          videoId: params,
          videoData: {}
      };
  }
  async componentDidMount() {
      try {
          const res = await fetch(`http://localhost:5000/video/${this.state.videoId}/data`);
          const data = await res.json();
          this.setState({ videoData: data });
      } catch (error) {
          console.log(error);
      }
  }
  render() {
      return (
          <div className="App">
              <header className="App-header">
                  <video controls muted autoPlay>
                      <source src={`http://localhost:5000/video/${this.state.videoId}`} type="video/mp4"></source>
                  </video>
                  
                  <h1>{ this.state.videoData.name }</h1>
              </header>
          </div>
      )
  }
}
