import React from 'react';

class SongsContainer extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      songs: [],
    };
  }

  componentDidMount() {
    const url = 'https://itunes.apple.com/gb/rss/topsongs/limit=20/json';
    const request = new XMLHttpRequest();
    request.open('GET', url);

    request.addEventListener("load", () => {
      if (request.status !== 200) return;
      const jsonString = request.responseText;
      const data = JSON.parse(jsonString);
      this.setState({songs: data})
    });

    request.send();
  }

  render() {
    return (
      <div>
      <h1>UK TOP 20 SONGS</h1>
      </div>
    )
  }
}

  export default SongsContainer;
