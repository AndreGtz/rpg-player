import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Chip from '@material-ui/core/Chip';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import './App.css';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
  },
  section: {
    display: 'flex',
  },
  healingSurges: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  chips: {
    display: 'flex',
    flex: '1 0 21%',
    justifyContent: 'center',
    alignItems: 'center',
  }
};

class App extends Component {
  state = {
    level: 1,
    dice: 0,
    con: 0,
    damage: 0,
    healing: 0,
    tempHealth: 0,
    healingSurges: [0],
    spells: [
      [0,0,0,0],
      [0,0,0],
      [0,0,0],
      [0],
    ],
  };

  handleChange = name => event => {
    if (event.target.value !== '') {
      this.setState({
        [name]: parseInt(event.target.value, 10),
      });
      if (name === 'level') {
        const healingSurges = [0];
        const lvl = parseInt(event.target.value, 10) - 1;
        for (let i = 0; i < lvl; i += 1) {
          healingSurges.push(0);
        }
        this.setState({ healingSurges });
      }
    }
    else {
      this.setState({
        [name]: 0,
      })
    }
  };

  toggleSurge = (index) => {
    const { healingSurges } = this.state;
    healingSurges[index] = healingSurges[index] === 1 ? 0 : 1;
    this.setState({ healingSurges });
  };

  toggleSpellSlot = (levelIndex, spellIndex) => {
    const { spells } = this.state;
    spells[levelIndex][spellIndex] = spells[levelIndex][spellIndex] === 1 ? 0 : 1;
    this.setState({ spells });
  };

  render() {
    const { classes } = this.props;
    const { level, dice, con, damage, healing, tempHealth, healingSurges, spells } = this.state;
    return (
      <div className={classes.container}>
        <div className={classes.section}>
          <TextField
            id="level"
            label="Level"
            margin="normal"
            variant="outlined"
            onChange={this.handleChange('level')}
            value={level}
          />
          <TextField
            id="dice"
            label="HitDice"
            margin="normal"
            variant="outlined"
            onChange={this.handleChange('dice')}
            value={dice}
          />
          <TextField
            id="con"
            label="Constitution"
            margin="normal"
            variant="outlined"
            onChange={this.handleChange('con')}
            value={con}
          />
        </div>
        <div className={classes.section}>
          <TextField
            id="damage"
            label="Damage"
            margin="normal"
            variant="outlined"
            onChange={this.handleChange('damage')}
            value={damage}
          />
          <TextField
            id="health"
            label="Health"
            margin="normal"
            variant="outlined"
            value={(dice + (level - 1)  * (dice / 2 + 1) + con * level) + healing - damage}
          />
          <TextField
            id="healing"
            label="Healing"
            margin="normal"
            variant="outlined"
            onChange={this.handleChange('healing')}
            value={healing}
          />
        </div>
        <TextField
          id="temporal"
          label="Temp.HP"
          margin="normal"
          variant="outlined"
          onChange={this.handleChange('tempHealth')}
          value={tempHealth}
        />
        <Typography variant="subtitle1">
          Healing Surges
        </Typography>
        <div className={classes.healingSurges}>
          {healingSurges.map((surge, index) => {
            const jsx = [];
            jsx.push(
              <div className={classes.chips}>
                <Chip
                  key={index}
                  label={surge}
                  variant="outlined"
                  onClick={() => this.toggleSurge(index)}
                />
              </div>
            );
            if ((index + 1) % 4 === 0) {
              jsx.push(<br />);
            }
            return jsx;
          }
        )}
        </div>
        <Typography variant="subtitle1">
          Spell slots
        </Typography>
        <div>
          {spells.map((level, levelIndex) => {
            const jsx = level.map((spell, spellIndex) => (
              <Chip
                key={`${levelIndex}-${spellIndex}`}
                label={spell}
                variant="outlined"
                onClick={() => this.toggleSpellSlot(levelIndex, spellIndex)}
              />
            ));
            jsx.push(<br />);
            return jsx;
          })}
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(App);
