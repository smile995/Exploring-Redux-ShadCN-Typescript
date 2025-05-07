import { deleteTodo,  } from "@/redux/features/TodoSlice";
import { Button } from "../ui/button";
import { useAppDispatch } from "@/redux/hooks";
import { useState } from "react";


const TodoCard = ({ todo }) => {
  const { title, description, time, id, isComplete } = todo;
  const dispatch = useAppDispatch();
  const handleDeleteTodo = (todoId: string) => {
    dispatch(deleteTodo(todoId));
  };
  // const [IsChecked, setIsChecked] = useState(false);
  // if(IsChecked){
  //   dispatch(updateIsComplete({id,status:true}))
  // }
  // if(!IsChecked){
  //   dispatch(updateIsComplete({id,status:false}))
  // }

  return (
    <div className="flex justify-between items-center border-2  bg-white px-3 py-2  rounded-lg ">
      <input
        // onChange={(e) => setIsChecked(e.target.checked)}
        type="checkbox"
        name=""
        id=""
      />
      <p>{title}</p>
      <p>{time}</p>
      <p>{description}</p>
      {isComplete ? (
        <p className="text-green-600 ">Done</p>
      ) : (
        <p className="text-red-600 ">Pending</p>
      )}
      <div className="flex gap-4 items-center ">
        <Button onClick={() => handleDeleteTodo(id)} className="bg-red-600">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5m6 4.125 2.25 2.25m0 0 2.25 2.25M12 13.875l2.25-2.25M12 13.875l-2.25 2.25M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z"
            />
          </svg>
        </Button>
        <Button className="bg-purple-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
            />
          </svg>
        </Button>
      </div>
    </div>
  );
};

export default TodoCard;
