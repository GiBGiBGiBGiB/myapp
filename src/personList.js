import React from 'react';
import axios from 'axios';

export default class PersonList extends React.Component {
  state = {
    items: []
  }

  componentDidMount() {
    axios.get(`https://c4m0e7vhf4.execute-api.ap-southeast-1.amazonaws.com/items`)
      .then(res => {
        const items = res.data;
        this.setState({ items });
      })
  }

  render() {
    return (
      <ul>
        {
          this.state.items
            .map(item =>
              <li key={item.ID}>{item.LatestGreetingTime}</li>
            )
        }
      </ul>
    )
  }
}