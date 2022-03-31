import { useEffect, useState } from "react";
import { baseUrl } from "./consts";
import { SingleCrypto } from "./SingleCrypto";

export function Cryptos() {
  const [cryptos, setCryptos] = useState([]);

  useEffect(() => {
    async function fetchCryptoInfo(id) {
      const response = await fetch(baseUrl + "/coins/" + id);
      const data = await response.json();
      return data;
    }

    async function fetchCryptos() {
      const coinIds = [
        "bitcoin",
        "ethereum",
        "binancecoin",
        "cardano",
        "solana",
        "terra-luna",
        "dogecoin",
        "shiba-inu",
      ];
      const promises = coinIds.map(fetchCryptoInfo);
      const data = await Promise.all(promises);
      console.log(data);
      setCryptos(data.flat());
    }
    fetchCryptos();
  }, []);

  return (
    <div>
      <h1>Top 7 Trending Cryptos Coingecko</h1>
      {cryptos.map((coin) => {
        return <SingleCrypto key={coin.name} coin={coin} />;
      })}
    </div>
  );
}
