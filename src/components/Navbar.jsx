import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <>
    <div className="navbar bg-base-100 shadow-sm">
  <div className="flex-1">
    <NavLink className="btn btn-ghost text-xl" to="/">daisyUI</NavLink>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1">
      <li><NavLink to="/createNote">+ Nueva Nota</NavLink></li>
      <li>
      </li>
    </ul>
  </div>
</div>
    </>
  )
}

export default Navbar