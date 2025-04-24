import "./App.css";
import CoinFlip from "./components/Flip";

function App() {
  return (
    <div className="bg-[#404a65] flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 md:px-10 lg:px-20">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-white font-poppins text-outline-black pt-10">
        Flip the coin
      </h1>

      <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-center text-white font-poppins text-outline-black py-6 sm:py-8 md:py-10 text-shadow-2xs">
        Press the button to flip the coin
      </h2>

      <CoinFlip />
    </div>
  );
}

export default App;
