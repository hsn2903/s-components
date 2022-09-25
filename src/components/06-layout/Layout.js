import "./Layout.css";

const Layout = () => {
  return (
    <div className="section_layout">
      <nav>NAV</nav>
      <menu>
        <button>New</button>
        <button>Reply</button>
        <button>Forward</button>
        <button>Mark Unread</button>
        <button>Trash</button>
      </menu>
      <section>
        <div className="email">Email 1</div>
        <div className="email">Email 2</div>
        <div className="email">Email 3</div>
        <div className="email">Email 4</div>
        <div className="email">Email 5</div>
        <div className="email">Email 6</div>
        <div className="email">Email 7</div>
        <div className="email">Email 8</div>
        <div className="email">Email 9</div>
        <div className="email">Email 10</div>
      </section>
      <main>Email view</main>
      <aside>Additional View</aside>
    </div>
  );
};

export default Layout;
