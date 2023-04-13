import React, { useContext } from "react";
import { PrimaryButton } from "../../Buttons";
import Link from "next/link";
import AuthContext from "../../../context/auth/authContext";
import moment from "moment";

const ServiceItem = ({ service }) => {
  const { _id, cost, name, description, date } = service;

  const authContext = useContext(AuthContext);

  const { user } = authContext;

  return (
    <div className="rounded-lg border-2 border-primary p-3  text-black my-6 w-full">
      <div className="flex justify-between mx-auto">
        <div className="p-6 border-r-2 border-gray-30 w-1/3">
          <div className="flex justify-between my-3">
            <p className="font-bold text-primary">Service Name</p>
            <p className="text-right">{name}</p>
          </div>
          {/* <div className="flex justify-between my-3">
            <p className="font-bold text-primary">Lawyer Name:</p>
            <p className="text-right">{user.name}</p>
          </div> */}
          <div className="flex justify-between my-3">
            <p className="font-bold text-primary">Date Posted:</p>
            <p>{moment(date).format("DD-MM-YYYY")}</p>
          </div>
        </div>
        <div className="border-r-2 border-gray-300 p-6 w-1/3">
          <p className="font-bold text-primary mb-3">Description</p>

          <p>{description}</p>
        </div>
        <div className="flex flex-col items-center p-6 w-1/3">
          <p>Average Cost estimation</p>
          <p className="text-2xl font-bold">₹{cost}</p>

          {user?.role === 1 ? (
            <button
              className={` transition-all ease-in p-2 w-64 text-white my-3 text-sm rounded font-bold bg-primary hover:opacity-80`}
            >
              View Applications
            </button>
          ) : (
            <Link href={`/services/${_id}`}>
              <button
                className={` transition-all ease-in p-2 w-64 text-white my-3 text-sm rounded font-bold bg-primary hover:opacity-80`}
              >
                Submit Application
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default ServiceItem;
