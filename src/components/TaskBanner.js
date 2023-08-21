export const TaskBanner = ({ taskItems }) => (
  <h4 
    className=" cambiarcolor text-white text-center p-4 fw-bold" 
    style={{ background: "blue"}}
  >
    
    <span className="text-info">
      {taskItems.filter((t) => !t.done).length} TAREAS POR HACER
    </span>
  </h4>
);

