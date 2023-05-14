export const RoomsFilter = () => {
  return (
    <div className="border p-10 mb-10 rounded-xl">
      <div>
        <label className="label">
          <span className="label-text">Sort by</span>
        </label>
        <select className="select w-full max-w-xs select-bordered">
          <option disabled selected>
            Sort
          </option>
          <option>Alphabetically</option>
          <option>Seats amount</option>
        </select>
      </div>


      
    </div>
  );
};
