import Features from "./components/Features/Features";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Input from "./components/Input/Input";
import Starter from "./components/Starter/Starter";


function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <Input/>
      <Features/>
      <Starter/>
      <Footer/>
    </div>
  );
}

export default App;
