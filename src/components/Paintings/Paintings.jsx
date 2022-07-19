import { PAINTING_PER_PAGE } from "../../utils/constants";

function Paintings({ currentData, page }) {
  const startIndex = (page - 1) * PAINTING_PER_PAGE;
  const selectedPaintings = currentData.slice(
    startIndex,
    startIndex + PAINTING_PER_PAGE
  );

  return (
    <section className="paintings-container">
      {selectedPaintings.map((painting) => {
        const { id, name, author, location, created } = painting;
        return (
          <div className="painting-container" key={id}>
            <img src={`./images/painting-${id}.png`} alt="#" />
            <div className="painting-text">
              <h2>{name}</h2>
              <div className="painting-description">
                <p>
                  <span>Author: </span>
                  {author}
                </p>
                <p>
                  <span>Creted: </span>
                  {created}
                </p>
                <p>
                  <span>Location: </span>
                  {location}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
}

export default Paintings;
