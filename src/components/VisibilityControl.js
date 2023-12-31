export const VisibilityControl = ({
  isChecked,
  callback,
  description,
  cleanTasks,
}) => {
  const handleDelete = () => {
    if (window.confirm(`¿Está seguro de que desea eliminar todos ${description}?`)) {
      cleanTasks();
    }
  };

  return (
    <div className="d-flex justify-content-between bg-secondary text-center p-2 border-secondary">
      <div className="form-check form-switch">
        <input
          type="checkbox"
          className="form-check-input"
          checked={isChecked}
          onChange={(e) => callback(e.target.checked)}
        />
        <label htmlFor="form-check-label"> Mostrar {description}</label>
      </div>
      <button className="btn btn-danger btn-s" onClick={handleDelete}>
        Limpiar
      </button>
    </div>
  );
};
