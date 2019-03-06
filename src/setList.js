import React, { Component } from 'react';

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
        <h1>Boiler room stuff</h1>
        {this.state.data.sets.map((set, index) => {
          return <h1>{set.title}</h1>
        })}
      </div>
    )
  }
}

export default SetList;
