import data from "./data";

function App() {
  return (
    <div>
      {data.map((item, i) => {
        return <img key={i} src={item.icon} alt="test" />;
      })}
    </div>
  );
}

export default App;
