import React, { Component } from 'react';
import PropTypes from 'prop-types';
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
  },
};

const spellSlots = {
  1: [2],
  2: [3],
  3: [4, 2],
  4: [4, 3],
  5: [4, 3, 2],
  6: [4, 3, 3],
  7: [4, 3, 3, 1],
  8: [4, 3, 3, 2],
  9: [4, 3, 3, 3, 1],
  10: [4, 3, 3, 3, 2],
  11: [4, 3, 3, 3, 2, 1],
  12: [4, 3, 3, 3, 2, 1],
  13: [4, 3, 3, 3, 2, 1, 1],
  14: [4, 3, 3, 3, 2, 1, 1],
  15: [4, 3, 3, 3, 2, 1, 1, 1],
  16: [4, 3, 3, 3, 2, 1, 1, 1],
  17: [4, 3, 3, 3, 2, 1, 1, 1, 1],
  18: [4, 3, 3, 3, 3, 1, 1, 1, 1],
  19: [4, 3, 3, 3, 3, 2, 1, 1, 1],
  20: [4, 3, 3, 3, 3, 2, 2, 1, 1],
};

class App extends Component {
  state = {
    level: 1,
    dice: 0,
    casterType: 1, // 1 fullcaster, 2 halfcaster, 3 thirdcaster
    con: 0,
    damage: 0,
    healing: 0,
    tempHealth: 0,
    healingSurges: [0],
    spells: [],
  };

  handleChange = name => (event) => {
    if (event.target.value !== '' || event.target.value === '0') {
      this.setState({
        [name]: parseInt(event.target.value, 10),
      });
      if (name === 'level') {
        const healingSurges = [0];
        const lvl = parseInt(event.target.value, 10) - 1;
        for (let i = 0; i < lvl; i += 1) {
          healingSurges.push(0);
        }
        const { casterType } = this.state;
        const spells = this.getSpellSlots(parseInt(event.target.value, 10), casterType);
        this.setState({ healingSurges, spells });
      } else if (name === 'casterType') {
        const { level } = this.state;
        const spells = this.getSpellSlots(level, parseInt(event.target.value, 10));
        this.setState({ spells });
      }
    } else {
      this.setState({
        [name]: 0,
      });
    }
  };

  getSpellSlots = (level, casterType) => {
    if (casterType > 0) {
      const casterLvl = Math.round(level / casterType);
      const slots = spellSlots[casterLvl];
      const spells = [];
      slots.forEach((slot, index) => {
        spells.push([]);
        for (let i = 0; i < slot; i += 1) {
          spells[index].push(0);
        }
      });
      return spells;
    }
    return [];
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
    const {
      level,
      dice,
      con,
      damage,
      healing,
      tempHealth,
      healingSurges,
      spells,
      casterType,
    } = this.state;
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
          <TextField
            id="casterType"
            label="Caster Type"
            margin="normal"
            variant="outlined"
            onChange={this.handleChange('casterType')}
            value={casterType}
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
            value={(dice + (level - 1) * (dice / 2 + 1) + con * level) + healing - damage}
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
              </div>,
            );
            if ((index + 1) % 4 === 0) {
              jsx.push(<br />);
            }
            return jsx;
          })}
        </div>
        <Typography variant="subtitle1">
          Spell slots
        </Typography>
        <div>
          {spells.map((slevel, levelIndex) => {
            const jsx = [];
            jsx.push(
              <span>
                {levelIndex + 1}
                :
              </span>,
            );
            const chips = slevel.map((spell, spellIndex) => (
              <Chip
                key={`${levelIndex}-${spellIndex}`}
                label={spell}
                variant="outlined"
                onClick={() => this.toggleSpellSlot(levelIndex, spellIndex)}
              />
            ));
            jsx.push(chips);
            jsx.push(<br />);
            return jsx;
          })}
        </div>
      </div>
    );
  }
}

App.propTypes = {
  classes: PropTypes.shape(styles).isRequired,
};

export default withStyles(styles)(App);
