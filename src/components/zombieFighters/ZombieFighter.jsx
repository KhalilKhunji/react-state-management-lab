import './ZombieFighter.css';

const ZombieFighter = ({fighter : {name, img, price, strength, agility}}) => {
    return(
        <>
            <img src={img} alt={name} />
            <div>Name: {name}</div>
            <div>Price: {price}</div>
            <div>Strength: {strength}</div>
            <div>Agility: {agility}</div>
        </>
    );
};

export default ZombieFighter;