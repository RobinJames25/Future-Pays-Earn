export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="brand">Earn Future</div>

      <nav className="menu">
        <a className="active">Dashboard</a>
        <a>My Investments</a>
        <a>Withdraw</a>
        <a>Profile</a>
        <a>Logout</a>
      </nav>
    </aside>
  );
}
