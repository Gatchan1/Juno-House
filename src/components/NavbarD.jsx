export default function NavbarD() {
  return (
    <nav id="NavbarD">
    <img className="logo" src="logo_arcs_v2.png" alt="logo" />
    <ul>
        <li>About</li>
        <li>House</li>
        <li>Community</li>
        <li>Gastronomy</li>
        <li>Agenda</li>
        <li className="membership" >
        <img src="./p_left.png" alt="" />
        <p>Apply for membership</p>
        <img src="./p_right.png" alt="" />
        </li>
        <li>Sign In</li>
        <li className="language" >en</li>
    </ul>
    </nav>
  )
}
