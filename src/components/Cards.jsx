// import characters from '../data';
import Card from './Card';

export default function Cards(props) {
  
  return (
    <div>
      {props.characters && props.characters.map(character => (
        <Card 
          key={character.id} 
          character={character} 
          onClose={props.onClose}
        />
      ))}
    </div>
  );
}
