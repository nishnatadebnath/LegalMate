import React, { useState, useEffect, useContext } from "react";
import { PrimaryButton } from "../Buttons";
import AuthContext from "../../context/auth/authContext";
import Link from "next/link";
import { useRouter } from "next/router";

const Login = () => {
  const authContext = useContext(AuthContext);
  const router = useRouter();
  const { login, isAuthenticated, user } = authContext;

  const [userDetails, setUserDetails] = useState({
    email: "",
    password: "",
  });

  const onChange = (e) =>
    setUserDetails({ ...userDetails, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    login(userDetails);
  };

  useEffect(() => {
    if (isAuthenticated && user?.role === 0) {
      router.push("/");
    } else if (isAuthenticated && user?.role === 1) {
      router.push("/applications");
    }
  }, [isAuthenticated, user, router]);

  return (
    <div className="h-full flex justify-between">
      <div className="w-1/2 p-6 flex flex-col items-center mt-12">
        <h1 className="text-purple-dark font-bold text-4xl">LegalMate</h1>

        <div className="bg-secondary rounded-lg p-6 shadow-2xl h-1/2 w-1/2 mt-12 flex flex-col items-center justify-between">
          <input
            name="email"
            type="email"
            className="rounded-md p-3 w-full my-6"
            placeholder="Email"
            value={userDetails.email}
            onChange={onChange}
          />
          <input
            name="password"
            type="password"
            className="rounded-md p-3 w-full my-6"
            placeholder="Password"
            value={userDetails.password}
            onChange={onChange}
          />

          <PrimaryButton text="Login" size="large" handleClick={onSubmit} />
          <p className="text-primary">or</p>
          <Link href="/register">
            <p className="text-primary font-bold cursor-pointer transition-all ease-in hover:border-b-2 hover:border-primary">
              Register
            </p>
          </Link>
        </div>
      </div>

      <div className="w-1/2 h-full flex justify-end">
        <img src="landingpage.png" alt="" className="h-full object-contain" />
      </div>
    </div>
  );
};

export default Login;
