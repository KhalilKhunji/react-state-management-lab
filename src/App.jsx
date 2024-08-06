import {useState} from 'react';
import './App.css';
import ZombieFighter from './components/zombieFighters/ZombieFighter.jsx'



const App = () => {
  const [team, setTeam] = useState([]);
  const [money, setMoney] = useState(100);
  const [totalStrength, setTotalStrength] = useState(0);
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
    addStrength(fighter.strength);
    } else {
      console.log('Not enough money to buy character');
    };
  };

  const addStrength = (strength) => {
    const newStrength = totalStrength + strength;
    setTotalStrength(newStrength);
  };

  return (
    <>
      <h4 className="money">Money: ${money}</h4>
      <h1 className="teamMsg">{team.length === 0 ? 'Pick some team members!' : ''}</h1>
      <ul>
        {zombieFighters.map((fighter, index) => (
          <li key={index}>
            <ZombieFighter fighter={fighter} />
            <button onClick={() => {handleAddFighter(fighter)}}>Add to Team</button>
          </li>
        ))}
      </ul>
      <h3 className="team">Team</h3>
      <h5 className="totalStrength">Total Strength: {totalStrength}</h5>
      <ul>
        {team.map((fighter, index) => (
          <li key={index}>
            <ZombieFighter fighter={fighter} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default App;