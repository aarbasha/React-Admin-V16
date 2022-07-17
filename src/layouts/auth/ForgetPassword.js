import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap"
import { setDisabled, setSuccess, setError } from "./validation/ValidationForget";
import Logo from "../../images/brand-logo-2.png";
import "./style/auth.css";
const ForgetPassword = () => {
    const Rediract = useNavigate();

    const SendToEmail = () => {

        const name = "x"

        setDisabled();
        setTimeout(() => {
            if (name === "x") {
                setSuccess();
                setTimeout(() => {
                    Rediract("/confirmCode");
                }, 6000);
            } else {
                setError()
            }
        }, 4000);
    };

    return (
        <main className="wrap">
            <motion.div
                initial={{ opacity: 0, y: 40, scale: 0.8 }}
                animate={{ opacity: 1, y: 40, scale: 1, transition: { duration: 1 } }}
                exit={{ opacity: 0, y: 40, scale: 0.8 }}
            >
                <div className="container">
                    <div className="authentication-card radius-30 forgetPassword">
                        <div className="card shadow rounded-0  overflow-hidden">
                            <div className="d-none success">
                                <div className="bg-success text-white text-center w-100 position-absolute py-2 px-2 text-center">
                                    The data has been successfully sent to the email, please check
                                    Thank you
                                </div>
                            </div>

                            <div className="d-none error">
                                <div className="bg-danger text-white text-center w-100 position-absolute py-2 px-2 text-center">
                                    invalid error
                                </div>
                            </div>

                            <div
                                className="m-4 d-none loding spinner-border text-primary"
                                role="status"
                            >
                                <span className="visually-hidden">Loading...</span>
                            </div>

                            <div className="">
                                <div className="col-lg-12 mt-5 d-flex align-items-center justify-content-center">
                                    <img src={Logo} className="img-fluid" alt="logo" />
                                </div>
                                <div className="col-lg-12">
                                    <div className="card-body p-sm-5">
                                        <h3 className="card-title text-center p-2">
                                            Forgot Password?
                                        </h3>

                                        <p className="card-text mb-5 text-center">
                                            Enter your registered email ID to reset the password
                                        </p>

                                        <div className="row g-3">
                                            <div className="col-12">
                                                <input
                                                    type="email"
                                                    className="form-control text-center form-control-lg radius-30"
                                                    id="inputEmailid"
                                                    placeholder="Email id or Username or Number Phone "
                                                />
                                            </div>
                                            <div className="col-12">
                                                <div className="d-grid gap-3">
                                                    <button
                                                        onClick={SendToEmail}
                                                        type="button"
                                                        id="send"
                                                        className="btn btn-lg btn-primary radius-30"
                                                    >
                                                        Send
                                                    </button>
                                                    <Button
                                                        variant="dark" size="lg"
                                                        onClick={() => Rediract(-1)}
                                                        id="login"
                                                        className=" radius-30"
                                                    >
                                                        Back to Login
                                                    </Button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </main>
    );
};

export default ForgetPassword;
