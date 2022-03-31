import axios from "axios";
import { useEffect, useState } from "react";

function User({ user }) {
  //   console.log(user);
  return (
    <div>
      We will fill this out in a second
      <h1>
        {user.name.first} {user.name.last}
      </h1>
      <img src={user.picture.large} alt={user.name.first + " profile pic"} />
    </div>
  );
}
export function FetchData() {
  const [data, setData] = useState(null);
  //   const [time, setTime] = useState(Date.now());

  //   so another example using axios
  async function fetchDataWithAxios() {
    const url = "https://randomuser.me/api/";
    const { data } = await axios.get(url);
    console.log(data);
    setData(data.results[0]);
  }

  //   async function fetchData() {
  //     // ... fetch the data...
  //     const url = "https://randomuser.me/api/";
  //     const response = await fetch(url);

  //     const data = await response.json();
  //     console.log(data);
  //     setData(data.results[0]);
  //   }
  //   fetchDataWithAxios();

  useEffect(() => {
    fetchDataWithAxios();

    const id = setInterval(() => {
      //   setTime(Date.now());
      fetchDataWithAxios();
    }, 2000);

    return () => {
      clearInterval(id);
    };
  }, []);

  //   useEffect(() => {}, [time]);

  const handleClick = () => {
    fetchDataWithAxios();
  };

  return (
    <div>
      {data ? <User user={data} /> : <h1>Loading ...</h1>}
      <button onClick={handleClick}>Fetch new User!</button>
    </div>
  );
}
