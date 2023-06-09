import { Navigate, useParams } from "react-router";
import { mainData } from "../api/data";

const Details = () => {
  const { itemId } = useParams();
  const item = mainData.find((item) => item.id === itemId);
  if (!item) {
    return <Navigate to="/no-found" />;
  }
  return (
    <div>
      <h1 className="text-center text-5xl font-bold">{item.title}</h1>
    </div>
  );
};
export default Details;
