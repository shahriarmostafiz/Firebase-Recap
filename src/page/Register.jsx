import { NavLink, useNavigate } from "react-router-dom";
import { register } from "../firebase/firebase";
import { useState } from "react";
const Register = () => {
    const navigate = useNavigate()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const user = await register(email, password)
            console.log(user);
            navigate("/login")

        } catch (err) {
            console.log(err);
        }
    }
    return (
        <div className="flex flex-col p-4 justify-center items-center">
            <h1 className="text-3xl my-2">
                Register
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

                    type="submit" onClick={handleSubmit}>
                    Register
                </button>


            </form>
            <p>
                Already have an Account , Go to
                <span className="underline text-fuchsia-600">
                    <NavLink to={"/login"}> login </NavLink>
                </span>
            </p>
        </div>
    );
};

export default Register;