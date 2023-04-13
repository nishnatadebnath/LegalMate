import React, { useState, useEffect, useContext } from "react";
import ServiceItem from "./ServiceItem";
import AuthContext from "../../../context/auth/authContext";
import axios from "axios";
import { PrimaryButton } from "../../Buttons";
import Modal from "../../Modal";

const ServiceList = () => {
  const authContext = useContext(AuthContext);

  const { user } = authContext;

  const [services, setServices] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [service, setService] = useState({
    name: "",
    description: "",
    cost: 0,
  });

  const onChange = (e) =>
    setService({ ...service, [e.target.name]: e.target.value });

  const fetchServices = async (id) => {
    try {
      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/api/services/user`
      );

      setServices(res.data);
    } catch (error) {
      console.log({ error });
    }
  };

  const fetchAllServices = async () => {
    try {
      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/api/services`
      );

      setServices(res.data);
    } catch (error) {
      console.log({ error });
    }
  };

  useEffect(() => {
    if (user?.role === 1) fetchServices();
    else if (user?.role === 0) fetchAllServices();
  }, [user]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/api/services`,
        service,
        config
      );

      setModalOpen(false);

      fetchServices();
    } catch (error) {
      console.log({ error });
    }
  };

  return (
    <>
      <div className="w-4/5 mx-auto">
        <div className="relative w-1/4 my-12">
          <img
            src="search.svg"
            alt=""
            className="absolute right-3 top-3 h-6 w-6"
          />
          <input
            className="rounded-lg border-2 border-primary p-3 focus:outline-none w-full"
            placeholder="search for services"
          ></input>
        </div>

        <div className="flex justify-between items-center">
          {user?.role === 1 ? (
            <>
              {services.length < 0 ? (
                <h3 className="text-primary font-bold">
                  You do not have any services now
                </h3>
              ) : (
                <h3 className="text-primary font-bold">Your services</h3>
              )}
              <PrimaryButton
                text="Add Service"
                size="medium"
                handleClick={() => setModalOpen(true)}
              />
            </>
          ) : (
            <h3 className="text-primary font-bold">Top services by lawyers</h3>
          )}
        </div>

        {services?.map((item) => (
          <ServiceItem key={item._id} service={item} />
        ))}
      </div>
      {modalOpen && (
        <Modal
          setModalOpen={setModalOpen}
          service={service}
          onChange={onChange}
          handleSubmit={handleSubmit}
        />
      )}
    </>
  );
};

export default ServiceList;
