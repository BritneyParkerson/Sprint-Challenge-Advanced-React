import React from 'react';
import axios from 'axios';

export class Player extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      players: [],
    }
  }

  componentDidMount() {
    axios
      .get(`http://localhost:5000/api/players`)
      .then(res => {
        this.setState({
          players: res.data

        })
      })
  }
  render() {
    return (
      <div className = "athletes">
        {this.state.players.map(player => <li key={player.id}>
          <h3>There have been {player.searches} searches for:</h3>
          <h2>{player.name}</h2>
          <h4>From: {player.country}</h4>
          
        </li>)}
      </div>
    )
  }
} 