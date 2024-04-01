import React from 'react';

import "./Courses.scss"
import UnityWhitLogo from "../../UnityWhiteLogo.png";
import csharCourse from "./Course-Images/cshar_course.jpg"
import Unity_Course from "./Course-Images/unity_course.jpg"


function Courses(props) {
    return (
        <div className="Courses">

            <header>

                <div className="logo">
                    <img src={UnityWhitLogo} alt=""/>
                </div>


                <div className="Login">
                    Kursni Tanglang
                </div>

            </header>


            <div className="Card_Container">

                <div className="Card">
                    <div className="image">
                        <img src={csharCourse} alt=""/>
                    </div>

                    <div className="start">
                        <h3>C# Kursi</h3>
                        <p>Unityga Moslashtirilgan C# Dasturlash Tilini 0 dan O'rganing</p>

                        <div className="Start-Course">
                            <a href="/cSharpCourse">
                                <button>Start C#</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="Card">
                    <div className="image">
                        <img src={Unity_Course} alt=""/>
                    </div>

                    <div className="start">
                        <h3>Unity Beginner</h3>
                        <p>Unityni Boshlang'ich Darslarini 0 dan Boshlab O'rganing</p>

                        {/*    <div className="Start-Course">
                            <button>Start C#</button>
                        </div>*/}

                        <p className="soon">Tez Kunda</p>
                    </div>
                </div>
                <div className="Card">
                    <div className="image">
                        <img src={Unity_Course} alt=""/>
                    </div>

                    <div className="start">
                        <h3>Unity Coding</h3>
                        <p>Unityga Code Yozib O'yin Yaratish</p>

                        {/*    <div className="Start-Course">
                            <button>Start C#</button>
                        </div>*/}

                        <p className="soon">Tez Kunda</p>
                    </div>
                </div>
                <div className="Card">
                    <div className="image">
                        <img src={Unity_Course} alt=""/>
                    </div>

                    <div className="start">
                        <h3>Unity Advance</h3>
                        <p>Unityga Advance So'ngi Bosqich</p>

                    {/*    <div className="Start-Course">
                            <button>Start C#</button>
                        </div>*/}

                        <p className="soon">Tez Kunda</p>
                    </div>
                </div>

            </div>

        </div>


    );
}

export default Courses;