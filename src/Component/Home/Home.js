import React from 'react';
import "./Home.scss"
import UnityHomeLogo from "../../UnityHomeLogo.png"
function Home(props) {
    return (
        <div className="Home">

            <div className="home-about">

                <div className="start-section">


                    <h3>Unityda To'liq O'yin Yaratishni O'rganing</h3>

                    <p>Barcha Darsliklar 0 dan Advance Darajasigacha O'zbek tilida To'liq Tushuntirilgan</p>


                    <div className="btn-start">
                        Darsni Boshlash
                    </div>


                </div>
                <div className="logo-section">
                    <img src={UnityHomeLogo} alt=""/>
                </div>
            </div>

            <div className="Thanks-for">

                <div className="thanks-text">
                    <h1>Katta Raxmad</h1>
                </div>

                <div className="partners">

                    <h2>Super Day Company</h2>
                    <h2>Code Monkey</h2>
                    <h2>Giraffe Academy</h2>
                    <h2>Brackeys</h2>
                    <h2>Unity Engine</h2>
                </div>


            </div>


        </div>
    );
}

export default Home;