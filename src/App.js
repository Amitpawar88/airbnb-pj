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
        img = {item.coverImg}
        rating = {item.stats.rating}
        reviewCount = {item.stats.reviewCount}
        location = {item.location}
        title = {item.title}
        price = {item.price}
      />
    )
  })

  return (
    <div>
      < Navbar/>
      {/* < Hero/> */}
      <section className="cards--list">
        {cards}
      </section>
    </div>
  );
}

export default App;
