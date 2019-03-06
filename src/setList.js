import React, { Component } from 'react';
import './setList.css';

class SetList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: {
        "sets": []
      }
    };
  }

  componentDidMount() {
   fetch(`/top`)
     .then(response => response.json())
     .then(responseJson => {
       this.setState({
         data: responseJson
       })
     })
     .catch(error => console.error(error));
  }

  render() {
    return (
      <div>
        <ul className="set-list">
          {this.state.data.sets.map((set, index) => {
            return <li className="set"><a className="link-title" href={set.video_link}>{set.title}</a><div className="time">+ {set.set_time}</div></li>
          })}
        </ul>
      </div>
    )
  }
}

export default SetList;
