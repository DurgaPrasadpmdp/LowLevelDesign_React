import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="">
      <ul className="flex flex-wrap bg-black text-white p-4 mt-1 ">
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
        <li className="pl-2 pr-2">
          <Link to="multi-language-support">Multi-Language-Support</Link>
        </li>
        <li className="pl-2 pr-2">
          <Link to="nested-comments">Nested-Comments</Link>
        </li>
        <li className="pl-2 pr-2">
          <Link to="live-chat">Youtube-Live-Chat</Link>
        </li>
        <li className="pl-2 pr-2">
          <Link to="protected-route">Protected-Route</Link>
        </li>

        <li className="pl-2 pr-2">
          <Link to="short-polling">Short Polling</Link>
        </li>

        <li className="pl-2 pr-2">
          <Link to="long-polling">Long Polling</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
