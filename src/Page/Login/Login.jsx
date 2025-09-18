import React, { use, useContext, useState } from 'react'
import "./Login.css"
import { Link, useNavigate } from 'react-router'
import { MyContext } from '../../Context/Context';

export default function Login() {

    const navigate = useNavigate()
    const { user, setUser, currentuser, setcurrentuser } = useContext(MyContext);

    const [tel, setTel] = useState("")
    const [password, setpassword] = useState("")
    const [error, setError] = useState("");

    // Soxta
    // const handleLogin = (e) => {
    //     e.preventDefault();

    //     // agar allaqachon login bo'lgan bo'lsa
    //     if (currentuser) {
    //         alert("⚠️ Siz allaqachon login bo‘lgansiz!");
    //         console.log(currentuser);

    //         return;
    //     }

    //     // user massivida borligini tekshirish
    //     const foundUser = user.find(
    //         (u) => u.tel === tel && u.password === password
    //     );

    //     if (foundUser) {
    //         alert("Login muvaffaqiyatli ✅");
    //         setcurrentuser(foundUser)
    //         setError("");
    //         navigate("/")
    //     } else {
    //         alert("Mavjud Bo'lmagan Foydalanuvchi!")
    //         setError("❌ Noto‘g‘ri ism yoki parol");
    //     }
    // };
   
    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const res = await fetch("http://localhost:5173/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    email: tel,   // telefonni email sifatida yuboramiz
                    password
                })
            });

            const data = await res.json();

            if (res.ok) {
                alert("Login muvaffaqiyatli ✅");
                localStorage.setItem("token", data.token);
                setcurrentuser({ username: data.username, token: data.token });
                navigate("/");
            } else {
                setError(data.message);
            }
        } catch (err) {
            console.error("Login xatolik:", err);
        }
    };



    return (
        <div className='login-page'>

            <div className="login-form">
                <h2>Login</h2>
                <p>Welcome back! Please sign in to continue</p>
                <form onSubmit={handleLogin} action="#">
                    <div className="input">
                        <label htmlFor="#">Nomer</label>
                        <input onChange={(e) => setTel(e.target.value)} type="text" placeholder='Name' name="" id="" />
                    </div>

                    <div className="input">
                        <label htmlFor="#">Parol</label>
                        <input onChange={(e) => setpassword(e.target.value)} type="text" placeholder='Name' name="" id="" />
                    </div>
                    <button className='login-btn'>Login</button>
                    <p>Don’t have an account? <Link to="/signup">
                        <span> Sign up</span>
                    </Link> </p>

                </form>
            </div>

        </div>
    )
}
