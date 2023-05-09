export default function BodyHome() {
  return (
    <div
      id="carouselExampleAutoplaying"
      className="carousel slide carousel-body"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(15).webp"
            className="d-block w-100"
            alt="1"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(22).webp"
            className="d-block w-100"
            alt="2"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(23).webp"
            className="d-block w-100"
            alt="3"
          />
        </div>
      </div>
      <button
        className="carousel-control-prev carousel-body"
        type="button"
        data-bs-target="#carouselExampleAutoplaying"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next carousel-body"
        type="button"
        data-bs-target="#carouselExampleAutoplaying"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}
