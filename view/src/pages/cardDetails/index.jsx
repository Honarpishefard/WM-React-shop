import { fetchCardDetailsService } from "api";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

export const CardDetails = () => {
  const [card, setCard] = useState({});
  const { id } = useParams();
  useEffect(() => {
    fetchCardDetailsService(id).then((res) => setCard(res.data.data[0]));
  }, []);

  return (
    <>
      <p>{card.desc}</p>
    </>
  );
};
