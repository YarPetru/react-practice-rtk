import { useDispatch, useSelector } from "react-redux";
import { changeName, changeCost, addCar, store } from "../store";

function CarForm() {
  const dispatch = useDispatch();
  // const name = useSelector((state) => state.form.name);
  // const cost = useSelector((state) => state.form.cost);
  const state = store.getState();

  const { name, cost } = useSelector((state) => {
    return {
      name: state.form.name,
      cost: state.form.cost,
    };
  });

  console.log(state);

  const handleNameChange = (e) => {
    dispatch(changeName(e.target.value));
  };

  const handleCostChange = (e) => {
    // переводим в число, т.к. в ивенте всегда лежит строка
    // и добавляем || 0, чтобы не получить NaN
    const carCost = +e.target.value || 0;
    dispatch(changeCost(carCost));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addCar({
        name,
        cost,
      })
    );
  };

  return (
    <div className="car-form panel">
      <h4 className="subtitle is-3">Add Car</h4>
      <form onSubmit={handleSubmit}>
        <div className="field-group">
          <div className="field">
            <label htmlFor="carNameInput" className="label">
              Name
            </label>
            <input
              type="text"
              className="input is-expanded"
              id="carNameInput"
              value={name}
              onChange={handleNameChange}
            />
          </div>

          <div className="field">
            <label htmlFor="carCostInput" className="label">
              Cost
            </label>
            <input
              type="number"
              className="input is-expanded"
              id="carCostInput"
              value={cost || ""}
              onChange={handleCostChange}
            />
          </div>
        </div>
        <div className="field">
          <button type="submit" className="button is-link">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default CarForm;
