import React from 'react'
import HomeLogo from "../../Images/Home.png"
import "./home.css"
function Home() {
    return (
        <div className='home'>
            <div className="home-section">
                <div className="home-text">
                    <h2>Unityda To'liq O'yin
                        Yaratishni O'rganing</h2>
                    <p>Barcha Darsliklar 0 dan Advance Darajasigacha O'zbek tilida To'liq Tushuntirilgan</p>

                    <button className='btn-start'>
                        Darsni Boshlash
                    </button>
                </div>
                <div className="home-logo">
                    <img src={HomeLogo} alt="" />
                </div>
            </div>
            <div className="Company-Section">

                <h1>Katta Raxmad</h1>

                <div className="partners">
                    <h2>Super Day Company</h2>
                    <h2>Code Monkey</h2>
                    <h2>Giraffe Academy</h2>
                    <h2>Brackeys</h2>
                    <h2>Unity Engine</h2>
                </div>
            </div>

        </div>
    )
}

export default Home
