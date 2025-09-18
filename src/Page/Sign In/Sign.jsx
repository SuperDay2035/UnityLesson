import React, { useContext, useEffect, useState } from 'react'
import "./Sign.css";
import { Link } from 'react-router';
import { MyContext } from '../../Context/Context';

function Sign() {

    const { user, setUser } = useContext(MyContext);
    const [name, setName] = useState("");
    const [password, setpassword] = useState("");
    const [tel, setTel] = useState("");

    // Soxta
    // const addUser = (e) => {
    //     e.preventDefault();

    //     // borligini tekshiradi
    //     const existingUser = user.find((u) => u.tel == tel);

    //     if(existingUser){
    //         alert("⚠️ Bu foydalanuvchi allaqachon ro‘yxatdan o‘tgan!")
    //         return
    //     }

    //     const newuser = {
    //         name: name,
    //         tel: tel,
    //         password, password
    //     }

    //     setUser([...user, newuser])


    //     console.log(user);
    // }

    const addUser = async (e) => {
        e.preventDefault();

        try {
            const res = await fetch("http://localhost:5000/signup", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    username: name,
                    email: tel,
                    password
                })
            });

            const data = await res.json();
            if (res.ok) {
                alert("Ro‘yxatdan o‘tish muvaffaqiyatli ✅");
                console.log("Server javobi:", data);
            } else {
                alert(data.message);
            }
        } catch (err) {
            console.error("Signup xatolik:", err);
        }
    };


    useEffect(() => {
        console.log("User yangilandi:", user);
    }, [user]);


    return (
        <div className='Sign-page'>

            <div className="sign-form">
                <h2>Sign Up</h2>
                <p>Start Your Journey with us!</p>
                <form onSubmit={addUser} action="">
                    <div className="form-group">
                        <label htmlFor="#">Ismingiz</label>
                        <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder='Ismingizni Kiriting' />
                    </div>
                    <div className="form-group">
                        <label htmlFor="#">Telefon Raqamingiz</label>
                        <input value={tel} onChange={(e) => setTel(e.target.value)} type="text" placeholder='Telefon raqamingiz' />
                    </div>
                    <div className="form-group">
                        <label htmlFor="#">Parolingiz</label>
                        <input value={password} onChange={(e) => setpassword(e.target.value)} type="text" placeholder='Parolingizni Kiriting' />

                    </div>


                    <button className='signup-btn'>Sign Up</button>
                </form>


                <p>Already Have an account? <Link to='/login'>
                    <span> Login up</span> </Link></p>

            </div>
        </div>
    )
}

export default Sign