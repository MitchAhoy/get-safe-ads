const OnboardingCard = ({ heading, description }) => {
  return (
    <form className="card card-border bg-base-100 w-96">
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
