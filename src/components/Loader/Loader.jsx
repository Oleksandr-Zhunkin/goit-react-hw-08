import { CirclesWithBar } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className="flex justify-center items-center fixed bottom-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <CirclesWithBar
        height="100"
        width="100"
        color="#172554"
        outerCircleColor="#172554"
        innerCircleColor="#172554"
        barColor="#bfdbfe"
        ariaLabel="circles-with-bar-loading"
        visible={true}
      />
    </div>
  );
};

export default Loader;
