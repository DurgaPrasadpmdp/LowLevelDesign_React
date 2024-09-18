import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-black text-white p-4 mt-1">
      <ul className="flex ">
        <li className="pl-2 pr-2">
          <Link to="/"> Home</Link>
        </li>
        <li className="pl-2 pr-2">
          <Link to="infinite-scroll">Infinite-Scroll</Link>
        </li>
        <li className="pl-2 pr-2">
          <Link to="accordian">Accordian</Link>
        </li>
        <li className="pl-2 pr-2">
          <Link to="auto-complete">Auto-Complete</Link>
        </li>
        <li className="pl-2 pr-2">
          <Link to="image-slider">Image-slider</Link>
        </li>
        <li className="pl-2 pr-2">
          <Link to="client-side-pagination">Client-side-Pagination</Link>
        </li>
        <li className="pl-2 pr-2">
          <Link to="server-side-pagination">Server-Side-Pagination</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
