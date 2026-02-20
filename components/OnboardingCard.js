"use client";
import { useState } from "react";
import axios from "axios";

const OnboardingCard = ({ heading, description }) => {
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
  return (
    <form className="card card-border bg-base-100 w-96" onSubmit={handleSubmit}>
      <div className="card-body">
        <h2 className="card-title">{heading}</h2>
        <p className="opacity-70 text-sm">{description}</p>
        <input
          type="text"
          placeholder="XXX-XXX-XXXX"
          className="input input-md border-gray-400"
        />
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Submit Google Ads ID</button>
        </div>
      </div>
    </form>
  );
};

export default OnboardingCard;
