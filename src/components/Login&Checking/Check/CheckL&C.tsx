export default function Check() {
  return (
    <>
      <div className="check">
        <input
          className="form-check-input"
          type="checkbox"
          value=""
          id="flexCheckCheckedDisabled"
          checked
          disabled
        />
        <label className="form-check-label" htmlFor="flexCheckCheckedDisabled">
          Accept term and conditions
        </label>
      </div>
      <div>
        <button type="submit" className="btn btn-primary">
          Sign In
        </button>
      </div>
    </>
  );
}
