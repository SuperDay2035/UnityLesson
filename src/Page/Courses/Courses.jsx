import React from 'react'
import "./Courses.css"
function Courses() {
    return (
        <div className='courses'>

            <div className="">
                <h2>Kurslar</h2>

                <div className="box-course">
                    <div className="coursecsharp">
                        <div className="about-course">
                            <div className="course-img">
                                <img src="https://i.redd.it/nbc8i22ia3091.png" alt="" />
                            </div>
                            <h3>C# Beginner</h3>
                            <p>C# Beginner — dasturlashni oddiy qilib o‘rganuvchilar uchun: nazariya + amaliy loyiha, bosqichma-bosqich.</p>
                        </div>

                        <div className="btn">

                            <button>Boshlash</button>
                        </div>

                    </div>
                    <div className="coursecsharp">
                        <div className="about-course">

                            <div className="course-img">
                                <img src="https://codewithmosh.com/_next/image?url=https%3A%2F%2Fuploads.teachablecdn.com%2Fattachments%2FMK9YsUTnRuH96BjzcPmS_Cover%2Bwith%2BTitle.jpg&w=3840&q=75" alt="" />
                            </div>
                            <h3>C# Intermade</h3>
                            <p> C# Intermediate — boshlang‘ich bilimlarni mustahkamlash va yanada chuqurlashtirish kursi. Bu bosqichda kolleksiyalar, massivlar, metodlar, exception handling, fayllar bilan ishlash va OOP mavzularining kengaytirilgan qismi amaliy misollar bilan o‘rganiladi. </p>

                        </div>
                        <button>Boshlash</button>

                    </div>
                    <div className="coursecsharp">

                        <div className="about-course">
                          <div className="course-img">
                                <img src="https://w0.peakpx.com/wallpaper/453/256/HD-wallpaper-c-sharp-glitter-logo-programming-language-grid-metal-background-c-sharp-creative-programming-language-signs-c-sharp-logo.jpg" alt="" />
                            </div>
                            <h3>C# Advance</h3>
                            <p> C# Advanced — yuqori darajadagi dasturlash ko‘nikmalarini shakllantirish kursi. Bu bosqichda generics, LINQ, async/await, delegatlar, eventlar, design patternlar va murakkab OOP konseptlari amaliy loyihalar orqali chuqur o‘rganiladi. </p>

                        </div>
                        <button>Boshlash</button>

                    </div>
                    <div className="coursecsharp">
                        <div className="about-course">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6dOZYkU8yzWPUzgH-L2RbjEsiKZKojXo1DA&s" alt="" />

                            <h3>Unity: Beginner (Essential)</h3>
                            <p>Unity’ga yangimisiz? Ushbu yo‘naltirilgan o‘quv yo‘li sizga boshlash uchun kerak bo‘ladigan hamma narsani o‘z ichiga oladi.</p>
                        </div>

                        <div className="btn">

                            <button>Boshlash</button>
                        </div>

                    </div>
                    <div className="coursecsharp">
                        <div className="about-course">
                            <img src="https://miro.medium.com/0*BhI2ZKAxMW5ujVkv.png" alt="" />

                            <h3>Unity: Junior Programmer</h3>
                            <p>C# Beginner — dasturlashni oddiy qilib o‘rganuvchilar uchun: nazariya + amaliy loyiha, bosqichma-bosqich.</p>
                        </div>

                        <div className="btn">

                            <button>Boshlash</button>
                        </div>

                    </div>
                    <div className="coursecsharp">
                        <div className="about-course">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxzmfh6PeF7kU1u73lSmylHI5JjioNEVW2-w&s" alt="" />

                            <h3>Unity: Creative Core</h3>
                            <p>Yana ko‘proqqa tayyormisiz? Unity haqidagi asosiy tushunchangizni dvigatelning ijodiy jihatlari orqali yangi bosqichga ko‘taring.</p>
                        </div>

                        <div className="btn">

                            <button>Boshlash</button>
                        </div>

                    </div>

                </div>
            </div>


        </div>
    )
}

export default Courses