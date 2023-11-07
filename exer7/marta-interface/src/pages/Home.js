import train from "../images/marta-train.jpeg";
import { useNavigate } from "react-router-dom";

export default function Home() {
    const navigation = useNavigate();

    return (
        <div className="home">
            <div className="home-header-container">
                <div className="home-header-sub-container">
                    <h1 className="home-header-text">MARTA</h1>
                    <div>
                        <p style={{cursor : "pointer"}} onClick={() => {
                            navigation('/about')
                        }}>About MARTA</p>
                    </div>
                </div>
            </div>
            <div className="home-main-container">
                <div className="home-main-sub-container">
                <div className="home-left-container">
                    <h1>VIEW ROUTES SCHEDULE</h1>

                    <ul>
                        <li onClick={() => {
                            navigation("/linespage/gold")
                        }}>
                            <span style={{color : "goldenrod"}}>Gold</span> Line
                        </li>
                        <li onClick={() => {
                            navigation("/linespage/red")
                        }}>
                        <span style={{color : "rgba(255, 0, 0, 0.712)"}}>Red</span> Line
                        </li>
                        <li onClick={() => {
                            navigation("/linespage/blue")
                        }}>
                        <span style={{color : "rgb(25, 0, 255)"}}>Blue</span> Line
                        </li>
                        <li onClick={() => {
                            navigation("/linespage/green")
                        }}>
                        <span style={{color : "rgba(0, 134, 0, 0.616)"}}>Green</span> Line
                        </li>
                    </ul>

                </div>
                <img src={train} alt="marta train" className="home-img"></img>
                </div>
            </div>
        </div>
    )
}