import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import Data from "./Data";
console.log(Data);

function App() {

  const cards = Data.map(item => {
    return (
      < Card
        key={item.id}
        item={item} // or {...item}
      />
    )
  })

  return (
    <div>
        <Navbar />
        <Hero />
        <section className="cards-list">
            {cards}
        </section>
    </div>
  );
}

export default App;

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax#spread_in_object_literals
