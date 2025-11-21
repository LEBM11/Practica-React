import { useState } from "react";
import "./App.css";

const Button = ({ onClick, text }) => (
  <button type="button" onClick={onClick}>
    {text}
  </button>
);

const StatisticRow = ({ text, value }) => (
  <tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>
);

const Statistics = ({ statistics }) => {
  if (!statistics || statistics.length === 0) return null;
  return (
    <table className="statistics">
      <tbody>
        {statistics.map((s) => (
          <StatisticRow key={s.name} text={s.name} value={s.value} />
        ))}
      </tbody>
    </table>
  );
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const total = good + neutral + bad;
  const average = total === 0 ? 0 : (good - bad) / total;
  const positive = total === 0 ? 0 : (good / total) * 100;

  const statisticsData = [
    { name: "Good", value: good },
    { name: "Neutral", value: neutral },
    { name: "Bad", value: bad },
    { name: "Total", value: total },
    { name: "Average", value: average.toFixed(2) },
    { name: "Positive", value: `${positive.toFixed(2)} %` },
  ];

  return (
    <div>
      <h1>Give feedback</h1>
      <Button onClick={() => setGood((g) => g + 1)} text="Good" />
      <Button onClick={() => setNeutral((n) => n + 1)} text="Neutral" />
      <Button onClick={() => setBad((b) => b + 1)} text="Bad" />

      <h2>Statistics</h2>
      {total === 0 ? <p>No hay feedback</p> : <Statistics statistics={statisticsData} />}
    </div>
  );
};

export default App;
