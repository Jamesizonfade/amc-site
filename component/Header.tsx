export const Header = () => {
  return (
    <header id="nav-transparent">
      <nav id="navigation4" className="container navigation">
        {/* Logo and Toggler */}
        <div className="nav-header">
          <a href="/" className="nav-brand">
            <img
              src="/img/logos/logo.png"
              className="main-logo"
              alt="logo"
              id="light_logo"
              style={{ width: "50px" }}
            />
            <img
              src="/img/logos/logo.png"
              className="main-logo"
              alt="logo"
              id="main_logo"
              style={{ width: "50px" }}
            />
            {/* Toggler */}
          </a>
          <div className="nav-toggle" style={{ marginRight: "20px" }}></div>
        </div>

        {/* Navigation Section */}
        <div className="nav-menus-wrapper">
          <ul className="nav-menu align-to-right">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/projects">Project</a>
            </li>
            <li>
              <a href="/the-team">The Team</a>
            </li>
            <li>
              <a href="/own-a-property">Own a Property</a>
            </li>
            <li>
              <a href="/news">News</a>
            </li>
            <li>
              <a href="/site-update">Site Update</a>
            </li>
            <li>
              <a href="/gallery">Gallery</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
            <li>
              <a href="/millennium-court">Millennium Court</a>
            </li>
            <li>
              <a href="/amc-two">AMC 2</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};
