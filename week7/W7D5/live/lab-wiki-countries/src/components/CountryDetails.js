import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { FlagImage } from './FlagImage';
// import countryData from '../countries.json';

export function CountryDetails({ countryData }) {
  const [country, setCountry] = useState();
  const params = useParams();

  useEffect(() => {
    console.log(params);
    if (!params.alpha3Code) return;

    const controller = new AbortController();
    const signal = controller.signal;
    async function fetchSingleCountryDetails() {
      try {
        const response = await fetch(
          `https://ih-countries-api.herokuapp.com/countries/${params.alpha3Code}`,
          { signal }
        );

        const data = await response.json();
        console.log(data);
        setCountry(data);
      } catch (error) {
        console.log('There was an error fetching from the API', error);
      }
    }

    fetchSingleCountryDetails();
    return () => {
      controller.abort();
    };
  }, [params]);

  //   const country = countryData.find(
  //     (country) => country.alpha3Code === params.alpha3Code
  //   );
  return (
    <div>
      {country ? (
        <>
          <FlagImage alpha2Code={country.alpha2Code} width={100} />
          <h1>{country.name.common}</h1>
          <div className="capital">
            <h2>Capital:</h2>
            {country.capital[0]}
          </div>
          <div className="area">
            <h2>Area:</h2>
            {country.area}
          </div>
          <div className="borders">
            <h2>Borders:</h2>
            {country.borders
              .map((borderAlpha3Code) => {
                return countryData.find(
                  (country) => country.alpha3Code === borderAlpha3Code
                );
              })
              .map(({ alpha3Code, name: { common } }) => {
                return (
                  <div key={alpha3Code}>
                    <Link to={'/' + alpha3Code}>{common}</Link>
                  </div>
                );
              })}
          </div>
        </>
      ) : (
        'Loading...'
      )}
    </div>
  );
}
