"use client";

import { useState } from "react";
import axios from "axios";

const FormNewWorkspace = () => {
  const [workspaceName, setWorkspaceName] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isLoading) return;

    setIsLoading(true);

    try {
      const response = await axios.post("/api/workspace", {
        workspaceName,
      });
      console.log(response);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <form
      className="bg-base-100 p-8 rounded-3xl space-y-8"
      onSubmit={handleSubmit}
    >
      <p className="text-bold text-lg">Create a new workspace</p>
      <label className="form-control w-full">
        <div className="label">
          <span className="label-text uppercase">Workspace name</span>
        </div>
        <input
          required
          type="text"
          placeholder="Dundermifflin"
          className="input input-bordered w-full"
          value={workspaceName}
          onChange={(e) => setWorkspaceName(e.target.value)}
        />
      </label>
      <button
        className="btn btn-primary btn-block"
        type="submit"
        disabled={isLoading}
      >
        {isLoading && <span className="loading loading-dots loading-xs"></span>}
        Create workspace
      </button>
    </form>
  );
};

export default FormNewWorkspace;
