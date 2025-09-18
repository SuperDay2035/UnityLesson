import React, { useContext } from 'react'
import "../Home/Home.css"
import banner from "../../assets/Logos/unitybrandlogo.png"
import coding from "../../assets/Img/coding.jpg"
import unity3d from "../../assets/Img/unity3D.jpg"
import minibanner from "../../assets/Img/minibanner.jpg"
import bf from "../../assets/Img/bf.png"
import { MyContext } from '../../Context/Context'

function Home() {

    const { user, setUser, currentuser, setcurrentuser } = useContext(MyContext);


    return (
        <div className='home'>
            <div className="home-min">
                <div className="banner">
                    <div className="b-txt">
                        <h2>Unityda To'liq O'yin Yaratishni O'rganing</h2>
                        <p>Barcha Darsliklar 0 dan Advance Darajasigacha O'zbek tilida To'liq Tushuntirilgan</p>

                        <div className="b-button">
                            <button onClick={() => setcurrentuser(null)} >Darsni boshlash</button>
                        </div>
                    </div>
                    <div className="b-banner">
                        <img src={banner} alt="" />
                    </div>
                </div>

                <div className="company">
                    <h2>Katta Raxmad</h2>   

                    <div className="company-names">
                        <p>Super Day Company</p>
                        <p>Code Monkey</p>
                        <p>Giraffe Academy</p>
                        <p>Brackeys</p>
                        <p>Unity Engine</p>
                    </div>
                </div>

                <div className="aboutcsharp">
                    <div className="txt">
                        <h3>C# Bilan Tanishing</h3>
                        <p>
                            Unity Dasturi 90% asosiy va muhim amallarni kod orqali bajaradi, Unity Engine C# dasturlash tilini talab qiladi va barcha kodlar C# da yoziladi. C# dasturlash tili juda ham tushunishga sodda oson til hisoblanadi, Ammo shu o'rinda murakkab amallarni bajarish uchun murakkab kodlarni yozishga to'ri keladi, C# ni bilasizmi yoki yo'qmi unityni oson boshlashingiz uchun sizga C# boshlang'ich bilimlar bilan 0 dan tanishishni tavsiya qilamiz va o'rgatamiz. Sizdan talab qilinadigon narsa sabr va tushuncha bo'lishi muhim, Qanchalik ko'p o'rgansangiz yo'l davomida C# ni tushunish shunchalik oson bo'ladi, C# da ko'rishguncha
                        </p>
                        <button>C# Start</button>
                    </div>
                    <div className="csharpimg">
                        <img src={coding} alt="" />
                    </div>
                </div>

                <div className="about-unity">
                    <div className="txt-unity">
                        <h2>Unity Start?</h2>
                        <p>
                            Agar C# to'liq bilsangiz unda Unityga qaytamiz, Unity-da juda ko'p ishlar vazifalar sizni kutyapti ko'rinishidan juda oddiy Bo'lgan Unity ichida ko'plab murakkab structsiyalar bor, UI, Audio, Post-Proccessing Prototype vhk, Ammo sizlarga bu murakkab detallarni ichma ich osonlik bilan tushuntiramiz, Aslida ham kichik narsalarni osonlik bilan o'rganish va uni jamlash bilan aslid katta narsani osonlik biolan o'rgangan bo'lasiz, Ho'sh bu turdagi narsalar o'zi nima yuqorida keltirilgan narsalar nimalarni bajaradi nega kerak desangiz, Sodda tushuntiraman, Siz bu mavzular orqali o'yinchingizga ovoz qo'shish, sozlamalar bo'limini yaratish, o'yiningizni atmosferasini o'zgartirish imkoniyatlariga va juda sodda Animatsiyalar tuzishni o'rganasiz, Bu narsalarni barini o'rgangach o'z o'yinigizni yaratish qobilyatiga ham ega bo'la boshlaysiz, Agar Siz C# ni Rostan Ham Yaxshi Bilsangiz Unda Unityga Start Berish Vaqti Keldi
                        </p>
                        <button>Start Unity</button>
                    </div>
                    <div className="aboutunity-img">
                        <img src={unity3d} alt="" />
                    </div>
                </div>


            </div>
            <div className="max-banner">
                <div className="minibanner">
                    <div className="mini-txt">
                        <h2>Biz Sizga O'yin Yaratishini O'rgatamiz</h2>
                        <p>Siz Mashxur O'yinlarga O'xshagan Katta O'yinlarni Yaratishni Istaysizmi Unda Bizga Ro'yhatga Yoziling Va Kurslarimizni Boshlang</p>
                        <div className="mini-btn">
                            <button>Ro'yhatdan o'tish</button>
                        </div>
                    </div>
                    <div className="mini-img">
                        <img src={minibanner} alt="" />
                    </div>
                </div>
            </div>


            <div className="new">
                <h2>News</h2>

                <div className="news">
                    <div className="news-photo">
                        <img src={bf} alt="" />
                    </div>
                    <div className="news-txt">
                        <p>August 18 2025</p>
                        <h3>Battlefield 2042 UPDATE #9.2.0</h3>
                        <p>An Update for Battlefield 2042 starts the roads to Battlefield 6</p>
                    </div>
                </div>

            </div>


            <footer>
                <h2>Unity.uz Official Unity Learning Course | 2025</h2>
            </footer>

            <p>Salom</p>

        </div>
    )
}

export default Home