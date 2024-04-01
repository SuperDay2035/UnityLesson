import React from 'react';
import "./AboutUnity.scss";
import UnityPng from "../../Unity_Png.png"

function AboutUnity() {
    return (
        <div className='About'>

            <div className="About_unity">


                <div className="about-image">

                    <img src={UnityPng} alt=""/>

                </div>
                <div className="about-text">

                    <h2>Unity Start?</h2>

                    <p>Agar C# to'liq bilsangiz unda Unityga qaytamiz, Unity-da juda ko'p ishlar vazifalar sizni kutyapti
                    ko'rinishidan juda oddiy Bo'lgan Unity ichida ko'plab murakkab structsiyalar bor, UI, Audio, Post-Proccessing
                    Prototype vhk, Ammo sizlarga bu murakkab detallarni ichma ich osonlik bilan tushuntiramiz, Aslida ham kichik narsalarni
                    osonlik bilan o'rganish va uni jamlash bilan aslid katta narsani osonlik biolan o'rgangan bo'lasiz, Ho'sh bu turdagi
                    narsalar o'zi nima yuqorida keltirilgan narsalar nimalarni bajaradi nega kerak desangiz, Sodda tushuntiraman, Siz
                    bu mavzular orqali o'yinchingizga ovoz qo'shish, sozlamalar bo'limini yaratish, o'yiningizni atmosferasini o'zgartirish
                    imkoniyatlariga va juda sodda Animatsiyalar tuzishni o'rganasiz, Bu narsalarni barini o'rgangach o'z o'yinigizni yaratish
                    qobilyatiga ham ega bo'la boshlaysiz, Agar Siz C# ni Rostan Ham Yaxshi Bilsangiz Unda Unityga Start Berish Vaqti Keldi</p>

                    <div className="start-unity">
                        <button>Start Unity</button>
                    </div>

                </div>


            </div>


        </div>
    );
}

export default AboutUnity;