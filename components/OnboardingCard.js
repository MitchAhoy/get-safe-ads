"use client";
import { useState, useEffect } from "react";
import axios from "axios";

const OnboardingCard = ({ session }) => {
  const [formData, setFormData] = useState("");
  const [activeWorspaceId, setActiveWorspaceId] = useState(
    session.user.currentWorkspaceId || "",
  );
  const [currentStep, setCurrentStep] = useState(1);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios[onboardingFlowContent[currentStep].httpType](
        onboardingFlowContent[currentStep].sendTo(activeWorspaceId),
        { data: formData },
      );
      console.log(response);
    } catch (error) {
      console.error(error);
    } finally {
      setFormData("");
      currentStep < 2 && setCurrentStep(currentStep + 1);
    }
  };

  const onboardingFlowContent = {
    1: {
      heading: "What is your company or agency's name?",
      sendTo: () => "/api/workspace",
      httpType: "post",
      name: "workspace_name",
      callToAction: "Next",
      placeholder: "Dundermifflin",
    },
    2: {
      heading: "Add your Google Ads ID",
      description:
        "In order for us to be able to apply changes to your account, please add the ad ID located in the top right of your account",
      sendTo: (activeWorspaceId) => `/api/workspace/${activeWorspaceId}`,
      name: "add_cid",
      httpType: "patch",
      callToAction: "Submit",
      placeholder: "XXX-XXX-XXXX",
    },
  };
  const formContent = onboardingFlowContent[currentStep];
  return (
    <form className="card card-border bg-base-100 w-96" onSubmit={handleSubmit}>
      <div className="card-body">
        <h2 className="card-title">{formContent.heading}</h2>
        <p className="opacity-70 text-sm">{formContent.description}</p>
        <input
          type="text"
          placeholder={formContent.placeholder}
          className="input input-md border-gray-400"
          name={formContent.name}
          onChange={(e) => setFormData(e.target.value)}
          value={formData}
        />
        <div className="card-actions justify-end">
          <button className="btn btn-primary" type="submit">
            {formContent.callToAction}
          </button>
        </div>
      </div>
    </form>
  );
};

export default OnboardingCard;
