import homeImage from "../../images/home.jpg";

const HomePage = () => {
  return (
    <div>
      <h1 className="text-4xl mb-10 text-center font-bold text-blue-950">
        Contact Book
      </h1>
      <img className=" rounded-2xl" src={homeImage} alt="home page" />
    </div>
  );
};
export default HomePage;
