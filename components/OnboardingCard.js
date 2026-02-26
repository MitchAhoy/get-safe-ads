"use client";
import { useState, useEffect } from "react";
import axios from "axios";

const OnboardingCard = () => {
  const [formData, setFormData] = useState({});
  const [hasWorkspace, setHasWorkspace] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/google-ads/customers", formData);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const checkWorkspace = async () => {
      try {
        const response = await axios.get("/api/workspace");
        setHasWorkspace(response.data.hasWorkspace);
        console.log("this user has a workspace: " + response.data.hasWorkspace);
        return;
      } catch (e) {
        console.error(e);
      }
    };

    checkWorkspace();
  });

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
        <h2 className="card-title">Heading placeholder</h2>
        <p className="opacity-70 text-sm">Description placeholder</p>
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
