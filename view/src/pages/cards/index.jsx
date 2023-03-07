import { useEffect, useState } from "react";
import { fetchCardsService, mediaURL } from "api";
import { Link } from "react-router-dom";

export const Cards = () => {
  const [data, setData] = useState();
  useEffect(() => {
    fetchCardsService().then((res) => setData(res.data.data));
  }, []);

  return (
    <ul>
      {data?.map((i) => (
        <Link to={`/cards/${i._id}`} key={i._id}>
          <li>
            <h2>{i.title}</h2>
            {/* <img className="max-w-xs" src={uploadsURL + i.picture} alt="" /> */}
          </li>
        </Link>
      ))}
    </ul>
  );
};
