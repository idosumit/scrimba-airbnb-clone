import logo from "../src/assets/airbnb-logo.svg";

export default function Navbar() {
  return (
    <div>
      <nav>
        <img src={logo} className="nav--logo" />
      </nav>
    </div>
  );
}
