"use client";
import { useState } from "react";
import axios from "axios";

const OnboardingCard = () => {
  const [formData, setFormData] = useState({});
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/google-ads/customers", formData);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  const onboardingFlowContent = {
    stepOne: {
      heading: "What is your company or agency's name?",
      sendTo: "/api/workspace",
      name: "workspace_name",
    },
    stepTwo: {
      heading: "Add your Google Ads ID",
      description:
        "In order for us to be able to apply changes to your account, please add the ad ID located in the top right of your account",
      sendTo: "/api/google-ads/customers",
      name: "add_cid",
    },
  };

  return (
    <form className="card card-border bg-base-100 w-96" onSubmit={handleSubmit}>
      <div className="card-body">
        <h2 className="card-title">{heading}</h2>
        <p className="opacity-70 text-sm">{description}</p>
        <input
          type="text"
          placeholder="XXX-XXX-XXXX"
          className="input input-md border-gray-400"
          name="CID"
          onChange={(e) => setFormData({ cid: e.target.value })}
        />
        <div className="card-actions justify-end">
          <button className="btn btn-primary" type="submit">
            Submit Google Ads ID
          </button>
        </div>
      </div>
    </form>
  );
};

export default OnboardingCard;
