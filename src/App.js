import Construction from "./Components/Construction";
import Featured from "./Components/Featured";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import Plumbering from "./Components/Plumber";
import Whyus from "./Components/Whyus";


function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Featured />
        <Whyus />
        <Construction />
        <Plumbering />
      </main>
      <Footer />
    </>
  );
}

export default App;
