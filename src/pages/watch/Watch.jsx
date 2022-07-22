import { ArrowBackOutlined } from "@material-ui/icons";
import { Link, useLocation } from "react-router-dom";
import "./watch.scss";

export default function Watch() {
  const location = useLocation();
  const movie = location.state.data;
  console.log(movie);
  console.log(location);
  return (
    <div className='watch'>
      <Link to="/">
        <div className="back">
          <ArrowBackOutlined />
          Home
        </div>
      </Link>
      <video className='video' autoPlay progress controls src={movie?.video} />
    </div>
  )
}