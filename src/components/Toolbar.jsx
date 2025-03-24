function Toolbar({ filters, selected, onSelectFilter }) {
  return (
    <div className="toolbar">
      {filters.map(filter => (
        <button
          type="button"
          className={`btn-filter ${filter === selected ? "selected" : ""}`}
          key={filter}
          onClick={() => onSelectFilter(filter)}
        >
          {filter}
        </button>
      ))}
    </div>
  )
}

export default Toolbar