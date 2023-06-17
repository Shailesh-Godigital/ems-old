import { useState } from "react";
import axios from "axios";
import { Label, Input, FormGroup, Form } from 'reactstrap';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Dashboard from "./Dashboard";

function RedirectReactRouterExample() {
    return (
        <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
    );
}


const AdminLogin = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await axios.post("http://localhost:5000/api/v1/auth/login", {
                email: email,
                password: password,
            });
            // add userId by user inside localStorage
            console.log("login successfull");
            localStorage.setItem("email", email);
            navigate('/dashboard', { replace: true });
        } catch (err) {
            setMessage("Login Failed");
            console.error({ Error: "loginFailed" });
        }
    };

    return (
        <>
            <div className='login position-absolute top-50 start-50 translate-middle'>
                <div className='d-flex justify-content-center p-4'>
                    <h1 className="fw-bold mb-2 text-uppercase">Login</h1>
                </div>
                <Form onSubmit={handleSubmit}>
                    <FormGroup>
                        <Label for="exampleEmail">Email</Label>
                        <Input bsSize="lg" id="exampleEmail" name="email" placeholder="Enter Your Email" type="email" onChange={(e) => setEmail(e.target.value)} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="examplePassword">Password</Label>
                        <Input bsSize="lg" id="examplePassword" name="password" placeholder="Enter Your Password" type="password" onChange={(e) => setPassword(e.target.value)}
                        />
                    </FormGroup>
                    <Label style={{ color: "red" }}>{message}</Label>
                    <FormGroup className='d-flex justify-content-center'>
                        <button type="submit" className='loginBT'>
                            Login
                        </button>
                    </FormGroup>
                </Form>
            </div>
        </>
    )
}

export default AdminLogin
