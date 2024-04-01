import React from 'react';
import "./csharpinfo.scss"
import csharpInfophoto from "../../Csharpcodes.jpg";
function Csharpinfo() {
    return (
        <div className="csharpInfo">


            <div className="csharp-info">

                <div className="info">

                    <h1>C# Bilan Tanishing</h1>

                    <div className="csharpinfo-text">

                        <p>Unity Dasturi 90% asosiy va muhim amallarni kod orqali
                        bajaradi, Unity Engine C# dasturlash tilini talab qiladi va barcha kodlar
                        C# da yoziladi. C# dasturlash tili juda ham tushunishga sodda oson til hisoblanadi,
                        Ammo shu o'rinda murakkab amallarni bajarish uchun murakkab kodlarni yozishga to'ri keladi,
                        C# ni bilasizmi yoki yo'qmi unityni oson boshlashingiz uchun sizga C# boshlang'ich bilimlar
                        bilan 0 dan tanishishni tavsiya qilamiz va o'rgatamiz. Sizdan talab qilinadigon narsa
                        sabr va tushuncha bo'lishi muhim, Qanchalik ko'p o'rgansangiz yo'l davomida C# ni tushunish
                        shunchalik oson bo'ladi, C# da ko'rishguncha</p>

                    </div>

                </div>

                <div className="info-photo">

                    <img src={csharpInfophoto} alt=""/>

                </div>

            </div>




        </div>
    );
}

export default Csharpinfo;