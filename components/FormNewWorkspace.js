const FormNewWorkspace = () => {
  return (
    <div className="bg-base-100 p-8 rounded-3xl space-y-8">
      <p className="text-bold text-lg">Create a new workspace</p>
      <label className="form-control w-full">
        <div className="label">
          <span className="label-text uppercase">Workspace name</span>
        </div>
        <input
          type="text"
          placeholder="Dundermifflin"
          className="input input-bordered w-full"
        />
      </label>
      <button className="btn btn-primary btn-block">Create</button>
    </div>
  );
};

export default FormNewWorkspace;
