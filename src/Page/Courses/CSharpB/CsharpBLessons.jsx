import React, { useState } from 'react'
import './CsharBLessons.css'
import { Link } from 'react-router'
import courseimg from "../../../assets/Img/bf.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

function CsharpBLessons() {
    const [activeModule, setActiveModule] = useState(null);

    const modules = [
        { id: 1, name: "1-modul", lessons: ["Dars 1.1", "Dars 1.2", "Dars 1.3"] },
        { id: 2, name: "2-modul", lessons: ["Dars 2.1", "Dars 2.2", "Dars 2.3"] },
        { id: 3, name: "3-modul", lessons: ["Dars 3.1", "Dars 3.2"] },
    ];

    return (
        <div className='csharpblesson-container'>

            {/* Pages */}
            <div className="router-page">
                <ul>
                    <Link> <li>Kurslar</li></Link>
                    <li>/</li>
                    <Link><li>Csharp Beginner</li></Link>

                </ul>
            </div>

            {/* About Cours */}

            <div className="csharpblesson-about-course">
                <div className="bcourse-img">
                    <img src="data:image/png;base64,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" alt="" />
                </div>
                <div className="course-infos">
                    <h2>Unity: Junior Programmer </h2>
                    <p>Bu kurs C# tilini hech qanday oldingi bilimsiz boshlovchilar uchun moʻljallangan. Har bir mavzu nazariyadan qisqacha o‘tib, toʻliq amaliy misol va loyihalar orqali tushuntiriladi. Mutloqo bepul — faqat o‘rganish va kod yozish kifoya.</p>
                    <div className="course-stats">
                        <div className="course-stat">
                            <FontAwesomeIcon className='user-logo' icon={faUser} />

                            <span>6822 o'quvchilar</span>
                        </div>
                        <div className="course-stat">
                            <FontAwesomeIcon className='user-logo' icon={faUser} />

                            <span>2025, 11-Mart</span>
                        </div>
                        <div className="course-stat">
                            <FontAwesomeIcon className='user-logo' icon={faUser} />

                            <span>47 darslar soni</span>
                        </div>
                    </div>
                    <button className='start-course'>Davom Etish</button>

                </div>
            </div>

            {/* Courses */}
            <div className="lessons-container">

                <div className="modules">
                    {modules.map((item) => (
                        <button onClick={() => setActiveModule(item.id)}
                            className={`px-4 py-2 rounded-lg module ${activeModule === item.id ? "bg-blue-600 text-white" : "bg-gray-200"
                                }`}><span>{item.name}</span></button>
                    ))}
                </div >
                {/* Lessons */}
                <div className="lessons">
                    {/* <div className="lesson">1-dars: Kirish va kurs haqida</div>
                    <div className="lesson">2-dars: Asosiy tushunchalar</div>
                    <div className="lesson">3-dars: Dastlabki kod yozish</div>
                    <div className="lesson">4-dars: O‘zgaruvchilar</div>
                    <div className="lesson">5-dars: Shart operatorlari</div>
                    <div className="lesson">6-dars: Sikllar</div>
                    <div className="lesson">7-dars: Funksiyalar</div>
                    <div className="lesson">8-dars: Massivlar</div>
                    <div className="lesson">9-dars: Object va Classlar</div>
                    <div className="lesson">10-dars: Amaliy loyiha</div> */}
                    {activeModule ? (
                        <div className="lessons">
                            {modules
                                .find((modul) => modul.id === activeModule)
                                .lessons.map((lesson, index) => (
                                    <div className='lesson' key={index}>{lesson}</div>
                                ))}
                        </div>
                    ) : (
                        <p>Modulni tanlang 👆</p>
                    )}
                </div>


            </div>
            <div className="border rounded-lg p-4">

            </div>
        </div>
    )
}

export default CsharpBLessons