export function TodosFilter({ filters, changeFilters }) {
  return (
    <div className="filters">
      <input
        type="text"
        name="name"
        onChange={changeFilters}
        value={filters.name}
      />
      Both:
      <input
        type="radio"
        name="done"
        value="both"
        checked={filters.done === "both"}
        onChange={changeFilters}
      />
      Done:
      <input
        type="radio"
        name="done"
        value="true"
        checked={filters.done === "true"}
        onChange={changeFilters}
      />
      Undone:
      <input
        type="radio"
        name="done"
        value="false"
        checked={filters.done === "false"}
        onChange={changeFilters}
      />
    </div>
  );
}
