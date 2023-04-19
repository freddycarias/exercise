export const CardsBody = () => {
  return (
    <>
      <div className="col">
        <div className="p-3">
          <div className="card" style={{ width: "18rem" }}>
            <img src="https://media.cnn.com/api/v1/images/stellar/prod/allbirds-sneakers-review-wool-runnerjpg.jpg?q=h_1090,w_1938,x_0,y_0" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card with stretched link</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary stretched-link">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

  