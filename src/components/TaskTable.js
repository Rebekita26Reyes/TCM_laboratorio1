import { TaskRow } from "./TaskRow";

export function TaskTable({ tasks, toggleTask, MostrarCompletadas = false }) {
  console.log(MostrarCompletadas);
  const taskTableRows = (doneValue) =>
    tasks
      .filter((task) => task.done === doneValue)
      .map((task) => (
        <TaskRow key={task.name} task={task} toggleTask={toggleTask} />
      ));

  return (
    <table className="table table-dark table-striped table-bordered table-dark border-secondary">
      <thead>
        <tr className="table-primary">
          <th>Tareas</th>
        </tr>
      </thead>
      <tbody>{taskTableRows(MostrarCompletadas)}</tbody>
    </table>
  );
}
