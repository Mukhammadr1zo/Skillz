import "./App.scss";
import Courses from "./Components/Courses/Courses";
import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";
import Rating from "./Components/Rating/Rating";
import Recomendation from "./Components/Recomendation/Recomendation";
import Workshop from "./Components/Workshop/Workshop";
import Teaching from "./Components/Teaching/Teaching";
import Articles from "./Components/Articles/Articles";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Courses />
        <Recomendation />
        <Workshop />
        <Rating />
        <Teaching/>
        <Articles/>
      </main>
    </>
  );
}

export default App;
