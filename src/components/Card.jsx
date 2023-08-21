export default function Card({character,onClose}) {
  const {name,status,species,gender,origin,image} = character;
  const {name:originName} = origin;
  return (
    <div>
      <button onClick={onClose}>X</button>
      <h2>Name: {name}</h2>
      <h2>Status: {status}</h2>
      <h2>Species: {species}</h2>
      <h2>Gender: {gender}</h2>
      <h2>Origin: {originName}</h2>
      <img src={image} alt={name} />
    </div>
  );
}
