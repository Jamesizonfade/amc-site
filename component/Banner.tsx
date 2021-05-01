export const Banner = ({ page }) => {
  return (
    <div
      className="breadcrumb-section jarallax pixels-bg"
      data-jarallax
      data-speed="0.6"
    >
      <div className="container text-center">
        <h1>{page}</h1>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="#">{page}</a>
          </li>
        </ul>
      </div>
    </div>
  );
};
