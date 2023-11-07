import { useNavigate } from "react-router-dom";
import map from "../images/marta-map.jpg";

export default function About() {
    const navigate = useNavigate();

    return (
        <div className="about">
            <div className="about-header-container">
                <div className="about-header-sub-container">
                <div>
                    <p onClick={() => {
                        navigate('/');
                        }}>Home</p>
                    </div>
                    <h1 className="about-header-text">ABOUT</h1>
                </div>
            </div>
            <div className="about-content">
                    <div className="about-content-sub-container">
                        <img src={map} alt="marta map" className="about-img"></img>
                        <div className="about-content-right">
                            <h1>Our Mission</h1>
                            <p>At MARTA, we strive to advocate for and provide safe, multimodal transit services that advance prosperity, connectivity and equity for a more livable region.</p>
                        </div>
                    </div>
                </div>
            </div>
    )
}