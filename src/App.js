import { useState } from "react";
import { shortenLink } from "./api";
import Features from "./components/Features/Features";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Input from "./components/Input/Input";
import Starter from "./components/Starter/Starter";
import { isUrlValid } from "./isUrlValid";


function App() {
  const [url,setUrl] = useState('');
  const [shortened,setShortened] = useState('');
  const [error,setError] = useState('');
  const [apiError,setApiError] = useState('');
  const [loading,setLoading] = useState(false);
  const handleSubmit=(e) => {
    e.preventDefault();
    if(url.length < 1){
      setError('Please add a link');
    }else if(!isUrlValid(url)){
      setError('Provided link is not valid');
    } else{
      setLoading(true);
      if(url.startsWith('www.')){
        url.replace('www.','');
      }

      shortenLink(url).then((value) => {
        setShortened(value);
        setLoading(false);
      }).catch((err)=> setApiError('Error has occured, please try again'))
      setError('');
    }
    
  }
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <Input setUrl={setUrl} validation={error} onSubmit={handleSubmit}/>
      <Features shortened={shortened} isLoading={loading} error={apiError}/>
      <Starter/>
      <Footer/>
    </div>
  );
}

export default App;
