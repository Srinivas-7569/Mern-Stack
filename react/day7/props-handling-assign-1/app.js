const domRoot = document.getElementById("root");
const reactRoot = ReactDOM.createRoot(domRoot);

const arr = [
  {
    name: "srinivas",
    score: 26,
  },
  {
    name: "venketesh",
    score: 30,
  },
  {
    name: "vamshi",
    score: 21,
  },
  {
    name: "likilesh",
    score: 30,
  },
  {
    name: "srinu",
    score: 50,
  },
];

const Card = (props) => {
  const { title, score } = props;
  return (
    <div className="card">
      <h1 style={{color:"red"}}>{title}</h1>
      <p>{score}</p>
    </div>
  );
};
const App = () => {
  return (
    <div className="hii">
      <h1>Hello</h1>
      {arr.map((elem) => {
       return <Card title={elem.name} score={elem.score} />;
      })}
    </div>
  );
};
reactRoot.render(App());
