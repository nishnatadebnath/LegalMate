import React, { useState, useEffect } from "react";
import ApplicationItem from "./ApplicationItem";
import axios from "axios";
import Cookies from "js-cookie";

const ApplicationList = () => {
  const [application, setApplication] = useState(null);

  useEffect(() => {
    const fetchApplication = async () => {
      const token = Cookies.get("token");
      const headers = {
        "x-auth-token": token,
      };

      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/api/applications/applicant`,
        { headers }
      );
      setApplication(res.data);
    };

    fetchApplication();
  }, []);

  return (
    <div className="w-4/5 mx-auto">
      <h2 className="font-bold text-purple-dark text-2xl my-6">
        Your Applications
      </h2>
      {application !== null &&
        application?.map((item) => (
          <ApplicationItem key={item._id} application={item} />
        ))}
    </div>
  );
};

export default ApplicationList;
