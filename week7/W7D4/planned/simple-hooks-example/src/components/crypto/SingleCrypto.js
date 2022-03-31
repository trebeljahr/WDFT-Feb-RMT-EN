import { useEffect, useState } from "react";
import { baseUrl } from "./consts";
import { ChartPresentation } from "./CryptoChart";

export function SingleCrypto({
  coin: {
    name,
    image: { thumb },
    id,
  },
}) {
  const [showDetails, setShowDetails] = useState(false);
  const [chartData, setChartData] = useState(false);
  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  useEffect(() => {
    async function fetchCryptoDetails() {
      const response = await fetch(
        `${baseUrl}/coins/${id}/market_chart?` +
          new URLSearchParams({
            vs_currency: "eur",
            days: 365,
          })
      );
      const data = await response.json();
      console.log(data);
      setChartData(data);
    }

    if (showDetails && !chartData) {
      fetchCryptoDetails();
    }
  }, [showDetails, id, chartData]);

  return (
    <div className="crypto-card">
      <h2>
        <span>{name}</span>
        <img src={thumb} alt={name} />
      </h2>
      <button onClick={toggleDetails}>
        {showDetails ? "Hide details" : "Show details"}
      </button>
      {showDetails ? <ChartPresentation chartData={chartData} /> : ""}
    </div>
  );
}
