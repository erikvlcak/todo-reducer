/* eslint-disable react/prop-types */
export default function Task({ item, dispatch }) {
  return (
    <div key={item.id} className="flex flex-row border-2 border-black w-fit m-4">
      <div className="text-4xl m-2 mr-10 p-2">{item.task}</div>
      <button
        className={`m-2 p-2 ${item.completed ? `bg-green-200` : `bg-red-200`}`}
        onClick={() => dispatch({ type: "toggle", payload: { toggleId: item.id } })}
      >
        {item.completed ? "FINISHED" : "WAITING"}
      </button>
      <button
        onClick={() => dispatch({ type: "remove", payload: { removeId: item.id } })}
        className="m-2 p-2 bg-red-200"
      >
        Remove task
      </button>
    </div>
  );
}
