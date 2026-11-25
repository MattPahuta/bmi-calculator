import Hero from "./components/Hero";
import ResultMeaning from "./components/ResultMeaning";
import Limitations from "./components/Limitations";


function App() {

  return (
    <main className="min-h-screen py-8 px-6">
      {/* hero & form */}
      <Hero />
      {/* what your BMI result means section */}
      <ResultMeaning />
      {/* limitations of BMI section */}
      <Limitations />
    </main>
  );
}

export default App;
