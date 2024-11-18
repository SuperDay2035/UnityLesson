import React from 'react';
import "./About.css"
import Coding from "../../Images/Coding.png"
import AboutUnity from "../../Images/UnityAbout.png"

function About() {
    return (
        <div className='About'>
            <div className="section">
                <div className="about-text">
                    <h3>C# Bilan Tanishing</h3>
                    <p>Unity Dasturi 90% asosiy va muhim amallarni kod
                        orqali bajaradi, Unity Engine C# dasturlash tilini talab qiladi va barcha
                        kodlar C# da yoziladi. C# dasturlash tili juda ham tushunishga sodda oson
                        til hisoblanadi, Ammo shu o'rinda murakkab amallarni bajarish uchun murakkab
                        kodlarni yozishga to'ri keladi, C# ni bilasizmi yoki yo'qmi unityni oson
                        boshlashingiz uchun sizga C# boshlang'ich bilimlar bilan 0 dan tanishishni
                        tavsiya qilamiz va o'rgatamiz. Sizdan talab qilinadigon
                        narsa sabr va tushuncha bo'lishi muhim, Qanchalik ko'p o'rgansangiz yo'l
                        davomida C# ni tushunish shunchalik oson bo'ladi, C# da ko'rishguncha</p>
                        <button className='btn-start'>C# Start</button>
                </div>
                <div className="about-photo">
                    <img src={Coding} alt="" />
                </div>
            </div>
            <div className="section">
                <div className="about-photo">
                    <img src={AboutUnity} alt="" />
                </div>
                <div className="about-text">
                    <h3>Unity Start?</h3>
                    <p>
                        Agar C# to'liq bilsangiz unda Unityga qaytamiz,
                        Unity-da juda ko'p ishlar vazifalar sizni kutyapti
                        ko'rinishidan juda oddiy Bo'lgan Unity ichida
                        ko'plab murakkab structsiyalar bor, UI, Audio,
                        Post-Proccessing Prototype vhk, Ammo sizlarga
                        bu murakkab detallarni ichma ich osonlik bilan
                        tushuntiramiz, Aslida ham kichik narsalarni osonlik bilan o'rganish
                        va uni jamlash bilan aslid katta narsani osonlik biolan o'rgangan
                        bo'lasiz, Ho'sh bu turdagi narsalar o'zi nima yuqorida keltirilgan
                        narsalar nimalarni bajaradi nega kerak desangiz, Sodda tushuntiraman,
                        Siz bu mavzular orqali o'yinchingizga ovoz qo'shish, sozlamalar
                        bo'limini yaratish, o'yiningizni atmosferasini o'zgartirish
                        imkoniyatlariga va juda sodda Animatsiyalar tuzishni o'rganasiz,
                        Bu narsalarni barini o'rgangach o'z o'yinigizni yaratish qobilyatiga
                        ham ega bo'la boshlaysiz, Agar Siz C# ni Rostan Ham Yaxshi Bilsangiz
                        Unda Unityga Start Berish Vaqti Keldi</p>
                    <button className='btn-start'>Unity Start</button>
                </div>

            </div>

            <footer>
               Unity.uz Official Unity Learning Course | 2024
            </footer>
        </div>
    )
}

export default About
