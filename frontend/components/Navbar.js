/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useContext } from "react";
import Link from "next/link";
import AuthContext from "../context/auth/authContext";
import { useRouter } from "next/router";

const lawyerLinks = (user, logout) => {
  const router = useRouter();
  return (
    <>
      <Link href="/applications">
        <li className="cursor-pointer transition-all  ease-in-out hover:border-b-2">
          My Applications
        </li>
      </Link>
      <div className="relative group">
        <button>
          <span>LegalAI</span>
        </button>
        <div className="absolute z-10 hidden bg-grey-200 group-hover:block">
          <div className=" bg-white rounded-md shadow-lg text-sm text-purple-dark">
            <Link href="/summarizer">
              <p className="cursor-pointer p-2 hover:bg-secondary hover:text-white transition-all ease-in">
                Summarizer
              </p>
            </Link>
            <Link href="/analyzer">
              <p className="cursor-pointer p-2 hover:bg-secondary hover:text-white transition-all ease-in">
                Analyzer
              </p>
            </Link>
          </div>
        </div>
      </div>
      <Link href="/services">
        <li className="cursor-pointer transition-all  ease-in-out hover:border-b-2">
          Services
        </li>
      </Link>
      <Link href={`/chats/${user?.name}`}>
        <li className="cursor-pointer transition-all  ease-in-out hover:border-b-2">
          Chats
        </li>
      </Link>
      <div className="relative group">
        <button>
          <span>Hi, {user?.name}</span>
        </button>
        <div className="absolute z-10 hidden bg-grey-200 group-hover:block">
          <div className=" bg-white rounded-md shadow-lg text-sm text-purple-dark">
            <p
              className="cursor-pointer p-2 hover:bg-secondary hover:text-white transition-all ease-in"
              onClick={() => {
                logout();

                router.push("/login");
              }}
            >
              Logout
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

const clientLinks = (user, logout) => {
  const router = useRouter();
  return (
    <>
      <Link href="/">
        <li className="cursor-pointer transition-all  ease-in-out hover:border-b-2 ">
          Home
        </li>
      </Link>
      <Link href="/applications">
        <li className="cursor-pointer transition-all  ease-in-out hover:border-b-2">
          My Applications
        </li>
      </Link>
      <div className="relative group">
        <button>
          <span>LegalAI</span>
        </button>
        <div className="absolute z-10 hidden bg-grey-200 group-hover:block">
          <div className=" bg-white rounded-md shadow-lg text-sm text-purple-dark">
            <Link href="/summarizer">
              <p className="cursor-pointer p-2 hover:bg-secondary hover:text-white transition-all ease-in">
                Summarizer
              </p>
            </Link>
            <Link href="/analyzer">
              <p className="cursor-pointer p-2 hover:bg-secondary hover:text-white transition-all ease-in">
                Analyzer
              </p>
            </Link>
          </div>
        </div>
      </div>

      <Link href="/services">
        <li className="cursor-pointer transition-all  ease-in-out hover:border-b-2">
          Services
        </li>
      </Link>
      <Link href={`/chats/${user?.name}`}>
        <li className="cursor-pointer transition-all  ease-in-out hover:border-b-2">
          Chats
        </li>
      </Link>
      <div className="relative group">
        <button>
          <span>Hi, {user?.name}</span>
        </button>
        <div className="absolute z-10 hidden bg-grey-200 group-hover:block">
          <div className=" bg-white rounded-md shadow-lg text-sm text-purple-dark">
            <p
              className="cursor-pointer p-2 hover:bg-secondary hover:text-white transition-all ease-in"
              onClick={() => {
                logout();

                router.push("/login");
              }}
            >
              Logout
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
const Navbar = () => {
  const authContext = useContext(AuthContext);
  const router = useRouter();

  const { user, logout } = authContext;

  return (
    <div className="flex justify-between items-center bg-primary p-6 text-white">
      <h2 className="text-3xl font-bold">LegalMate</h2>

      <ul className="flex justify-between items-center w-1/3">
        {user?.role === 0
          ? clientLinks(user, logout)
          : lawyerLinks(user, logout)}
      </ul>
    </div>
  );
};

export default Navbar;
