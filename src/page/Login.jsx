import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { login } from "../firebase/firebase";

const Login = () => {
    const navigate = useNavigate()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const handleLogin = async (e) => {
        e.preventDefault()
        try {
            const res = await login(email, password)
            console.log(res);
            navigate("/home")
        } catch (err) {
            console.log(err);
            alert("login failed ")
        }

    }
    return (
        <div className="flex flex-col p-4 justify-center items-center">
            <h1 className="text-3xl my-2 font-black text-fuchsia-600">
                Login
            </h1>
            <form className="flex flex-col gap-1" >
                <div className="mt-1">
                    <label htmlFor="email">Email : </label>
                    <input
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        required
                        type="email" name="email" id="email"
                        placeholder="Enter email"
                        className="m-2 px-4 py-1 border border-fuchsia-600 rounded"
                    />
                </div>
                <div>
                    <label htmlFor="password">Password :</label>
                    <input
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        required
                        type="password" name="password" id="password"
                        placeholder="Enter Password"
                        className="m-2 px-4 py-1 border border-fuchsia-600 rounded"
                    />
                </div>
                <button
                    className="text-white bg-fuchsia-600 hover:bg-fuchsia-700 shadow rounded px-4 py-2 w-fit m-auto"

                    type="submit" onClick={handleLogin}>
                    Login
                </button>


            </form>
            <p>
                Don't have an Account , Register
                <span className="underline text-fuchsia-600">
                    <NavLink to={"/register"}> here </NavLink>
                </span>
            </p>
        </div>
    );
};

export default Login;