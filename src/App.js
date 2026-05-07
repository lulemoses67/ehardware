import Featured from "./Components/Featured";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";


function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Featured />
      </main>
      <Footer />
    </>
  );
}

export default App;
