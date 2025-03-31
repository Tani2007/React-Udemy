import NewTask from "./NewTask";

export default function Tasks({ onAdd, onDelete, tasks }) {
  function handleDelete(id) {
    onDelete(id);
  }
  return (
    <section>
      <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
      <NewTask onAdd={onAdd} />
      {tasks.lenght === 0 && (
        <p className="text-stone-800 my-4">
          This Project does not have any task yet.
        </p>
      )}
      {tasks.length > 0 && (
        <ul className="p-4 mt-8 rounded-md bg-stone-100">
          {tasks.map((task) => {
            return (
              <li className="flex justify-between my-4" key={task.id}>
                <span>{task.text}</span>
                <button
                  onClick={() => handleDelete(task.id)}
                  className="text-stone-700 rounded-sm px-1 hover:text-red-500"
                >
                  Clear
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </section>
  );
}
