import React from 'react';
import UnityWhitLogo from "../../UnityWhiteLogo.png";
import "./CsharCourse.scss"
import Csharp_course from "../Courses/Course-Images/cshar_course.jpg"

function CsharCourse(props) {
    return (
        <div className="CsharpCourse">


            <header>

                <div className="logo">
                    <img src={UnityWhitLogo} alt=""/>
                </div>


                <div className="Login">
                    Bio
                </div>

            </header>


            <div className="manzil">

                <a href="/">Bosh Sahifa</a>
                <p>-></p>
                <a href="/Courses">Kurslar</a>
                <p>-></p>
                <a href="/cSharpCourse">C#</a>

            </div>


            <div className="csharp-start">

                <div className="about-image">

                    <img src={Csharp_course} alt=""/>

                </div>

                <div className="about-start">
                    <h2>C#</h2>
                    <p>Dars davomida sizni ajoyib va sodda kodlarni tushunishingiz uchun to'liq 0 dan tushuntirilgan
                        video darslar sizni kutyapti, Unityni boshlashingiz uchun C# ni yaxshilab to'liq tushunib yaxshi
                        coder
                        ustasi bo'lishingizga lozim, vazifalarni to'liq bajaring va yo'l davomida amaliyot qilishni
                        unutmang </p>

                    <div className="course_info">

                        <p className="info-first"> Davomiyligi: 3 ta Modul 40 ta dars</p>
                        <p className="info"> Dars Soni: 12 Soat 20 Daqiqa</p>


                    </div>

                </div>


            </div>


        </div>
    );
}

export default CsharCourse;