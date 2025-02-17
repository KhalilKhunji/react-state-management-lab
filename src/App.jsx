import {useState} from 'react';
import './App.css';
import ZombieFighter from './components/zombieFighters/ZombieFighter.jsx'



const App = () => {
  const [team, setTeam] = useState([]);
  const [money, setMoney] = useState(100);
  const [totalStrength, setTotalStrength] = useState(0);
  const [totalAgility, setTotalAgility] = useState(0);
  const [zombieFighters, setZombieFighters] = useState([
    {
      name: 'Survivor',
      price: 12,
      strength: 6,
      agility: 4,
      img: 'https://via.placeholder.com/150/92c952',
    },
    {
      name: 'Scavenger',
      price: 10,
      strength: 5,
      agility: 5,
      img: 'https://via.placeholder.com/150/771796',
    },
    {
      name: 'Shadow',
      price: 18,
      strength: 7,
      agility: 8,
      img: 'https://via.placeholder.com/150/24f355',
    },
    {
      name: 'Tracker',
      price: 14,
      strength: 7,
      agility: 6,
      img: 'https://via.placeholder.com/150/d32776',
    },
    {
      name: 'Sharpshooter',
      price: 20,
      strength: 6,
      agility: 8,
      img: 'https://via.placeholder.com/150/1ee8a4',
    },
    {
      name: 'Medic',
      price: 15,
      strength: 5,
      agility: 7,
      img: 'https://via.placeholder.com/150/66b7d2',
    },
    {
      name: 'Engineer',
      price: 16,
      strength: 6,
      agility: 5,
      img: 'https://via.placeholder.com/150/56acb2',
    },
    {
      name: 'Brawler',
      price: 11,
      strength: 8,
      agility: 3,
      img: 'https://via.placeholder.com/150/8985dc',
    },
    {
      name: 'Infiltrator',
      price: 17,
      strength: 5,
      agility: 9,
      img: 'https://via.placeholder.com/150/392537',
    },
    {
      name: 'Leader',
      price: 22,
      strength: 7,
      agility: 6,
      img: 'https://via.placeholder.com/150/602b9e',
    },
  ]);

  const handleAddFighter = (fighter) => {
    const moneyDiff = money - fighter.price;
    if(moneyDiff > 0) {
    setTeam([...team, fighter]);
    setMoney(moneyDiff);
    addTotals(fighter.strength, fighter.agility);
    } else {
      console.log('Not enough money to buy character');
    };
  };

  const handleRemoveFighter = (fighter, index) => {
    const newTeam = [...team];
    newTeam.splice(index, 1);
    setTeam(newTeam);
    const refund = money + fighter.price;
    setMoney(refund);
    addTotals(-fighter.strength, -fighter.agility);
  };

  const addTotals = (strength, agility) => {
    const newStrength = totalStrength + strength;
    setTotalStrength(newStrength);
    const newAgility = totalAgility + agility;
    setTotalAgility(newAgility);
  };

  return (
    <>
      <h1 className="center">Zombie Fighters</h1>
      <h4 className="center">Money: ${money}</h4>
      <h4 className="center">Total Strength: {totalStrength}</h4>
      <h4 className="center">Total Agility: {totalAgility}</h4>
      <h1 className="center">{team.length === 0 ? 'Pick some team members!' : ''}</h1>
      <h3 className="center">Team</h3>
      <ul>
        {team.map((fighter, index) => (
          <li key={index}>
            <ZombieFighter fighter={fighter} />
            <button onClick={() => {handleRemoveFighter(fighter, index)}}>Remove from Team</button>
          </li>
        ))}
      </ul>
      <h3 className="center">Fighters</h3>
      <ul>
        {zombieFighters.map((fighter, index) => (
          <li key={index}>
            <ZombieFighter fighter={fighter} />
            <button onClick={() => {handleAddFighter(fighter)}}>Add to Team</button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default App;