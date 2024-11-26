import Form from "./components/Form";
import Humidity from "./components/Humidity";
import Temperature from "./components/Temperature";
import Updates from "./components/Updates";
import City1 from "./components/City1";
import Weather from "./components/Weather";
import SearchEngine from "./components/SearchEngine";

export default function App() {
  const humidity = 87; // percent
  const wind = 7.2; // km/h

  return (
    <div className="App">
      <Form />
      <City1 />
      <Updates />
      <Temperature />
      <Humidity humidity={humidity} wind={wind} />
      <Weather city="New York" temperature={23} />
      <Weather city="Tokyo" temperature={20} />
      <Weather city="Sydney" temperature={10} />
      <SearchEngine />
    </div>
  );
}
