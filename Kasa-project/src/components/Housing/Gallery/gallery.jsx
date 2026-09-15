import { useState } from "react";
import arrowLeft from "../../../assets/arrow-gallery-left.svg";
import arrowRight from "../../../assets/arrow-gallery-right.svg";
import "./Gallery.scss";

function Gallery({ pictures }) {
    const [currentImage, setCurrentImage] = useState(0);


    return (
        <div className="housing-gallery">
            <img
                className="housing-gallery-image"
                src={pictures[currentImage]}
                alt={`Photo ${currentImage + 1}`}
            />
            <button
                onClick={() =>
                    setCurrentImage(
                        currentImage === 0
                            ? pictures.length - 1
                            : currentImage - 1
                    )
                }
            >
                <img src={arrowLeft} alt="Image précédente" />
            </button>
            <button
                onClick={() =>
                    setCurrentImage(
                        currentImage === pictures.length - 1
                            ? 0
                            : currentImage + 1
                    )
                }
            >
                <img src={arrowRight} alt="Image suivante" />
            </button>
            <p>
                {currentImage + 1}/{pictures.length}
            </p>
        </div>
    );
}

export default Gallery;