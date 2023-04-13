import axios from "axios";
import React, { useState, useEffect } from "react";
import { PrimaryButton, DashedButton } from "../../Buttons";
import { useRouter } from "next/router";
import moment from "moment";

const ApplicationForm = ({ id }) => {
  const [description, setDescription] = useState("");
  const [service, setService] = useState(null);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      problem: description,
      service: id,
      status: "Pending",
      lawyer: service.user._id,
    };

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/api/applications`,
        formData,
        config
      );

      router.push("/applications");
    } catch (error) {
      console.log({ error });
    }
  };

  useEffect(() => {
    const fetchServiceDetails = async (id) => {
      try {
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/api/services/${id}`
        );
        setService(res.data);
      } catch (error) {
        console.log({ error });
      }
    };

    if (id) fetchServiceDetails(id);
  }, []);

  if (!service) return <h3 className="text-primary">Loading...</h3>;
  return (
    <div className="text-black p-6 w-4/5 mx-auto">
      <h2 className="text-2xl text-purple-dark font-bold">
        Make an application
      </h2>

      <div className="flex items-center justify-evenly">
        <textarea
          className="my-6 h-80 p-3 w-1/2 rounded-lg border-2 border-gray-300 text-black"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>

        <div className="p-6 border-2 border-primary w-1/3 rounded-md ml-3">
          <div className="flex justify-between my-3">
            <p className="font-bold text-primary">Service Name</p>
            <p className="text-right">{service.name}</p>
          </div>
          <div className="flex justify-between my-3">
            <p className="font-bold text-primary">Lawyer Name:</p>
            <p className="text-right">{service.user.name}</p>
          </div>
          <div className="flex justify-between my-3">
            <p className="font-bold text-primary">Date Posted:</p>
            <p>{moment(service.date_created).format("DD-MM-YYYY")}</p>
          </div>

          <PrimaryButton
            text="Submit Application"
            size="large"
            handleClick={handleSubmit}
          />
        </div>
      </div>

      <h3 className="text-xl text-purple-dark font-bold my-6">Attachments</h3>
      <p className="text-primary font-semibold">
        Please attach a file related to the application if necessary.
      </p>
      <DashedButton text="Attach file" size="large" />
    </div>
  );
};

export default ApplicationForm;
