import { Apps } from "./Apps";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Hero } from "./Hero";
import { Information } from "./Information"
import { Process } from "./Process";


function App() {
  return (
    <>
    <Header/>
    <main>
      <Hero/>
      <Process/>
      <Information/>
      <Apps/>
    </main>
    <Footer/>
    </>
    );
  }
  
  export default App;
  