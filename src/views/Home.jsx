import pikachu from "../assets/imgs/pikachu.png";
const Home = () => {
  return (
    <div className="mt-5 text-center">
      <h1>Bienvenido maestro pokemón</h1>
      <img height="400" src={pikachu} alt="Pikachu" />
    </div>
  );
};
export default Home;
