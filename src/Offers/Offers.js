
import antojo from "../Offers/antojo.jpeg";
import donas from "../Offers/donas.jpeg";
import combo from "../Offers/combo.jpeg";

function Offers() {
    return (
        <div className="d-flex justify-content-center mt-4">
            <div
                id="carouselExampleSlidesOnly"
                className="carousel slide"
                data-bs-ride="carousel"
                style={{ maxWidth: "1000px", borderRadius: "12px", overflow: "hidden" }}
            >
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={antojo} className="d-block w-100" alt="Antojos de comida" style={{ objectFit: "cover" }} />
                    </div>
                    <div className="carousel-item">
                        <img src={donas} className="d-block w-100" alt="Promoción de donas" style={{ objectFit: "cover" }}  />
                    </div>
                    <div className="carousel-item">
                        <img src={combo} className="d-block w-100" alt="Combo Especial" style={{ objectFit: "cover" }}  />

                    </div>
                </div>

                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleSlidesOnly" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleSlidesOnly" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

        </div>
    )
}

export default Offers;