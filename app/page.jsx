
import Eightpage from "./components/eightpage/eightpage";
import Fivepage from "./components/fivepage/fivepage";
import Footer from "./components/footer/footer";
import Fourpage from "./components/fourpage/fourpage";
import Navbar from "./components/navbar/navbar";
import Ninepage from "./components/ninepage/ninepage";
import Onepage from "./components/onepage/onepage";
import Sevenpage from "./components/sevenpage/sevenpage";
import Sixpage from "./components/sixpage/sixpage";
import Threepage from "./components/threepage/threepage";
import Twopage from "./components/twopage/twopage";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <Footer/>
      <Onepage/>
      <Twopage/>
      <Threepage/>
      <Fourpage/>
      <Fivepage/>
      <Sixpage/>
      <Sevenpage/>
      <Eightpage/>
      <Ninepage/>

      
    </div>
  );
}
