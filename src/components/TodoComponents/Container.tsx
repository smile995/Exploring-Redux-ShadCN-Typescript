import { useAppSelector } from "@/redux/hooks";
import AddTodoModal from "./AddTodoModal";
import Dropdown from "./Dropdown";
import TodoCard from "./TodoCard";

const Container = () => {
  const {todos}= useAppSelector((state)=>state.todos)
  console.log(todos);
  
  return (
    <div>
      <div className="flex justify-between items-center mb-3">
        <AddTodoModal />
        <Dropdown />
      </div>
      <div
        className="bg-gradient-to-r from-indigo-500 via-purple-500
     to-pink-500 p-1  rounded-lg "
      >
        <div className="bg-white rounded-lg space-y-3 p-2 grid-cols-5">
          <div>
            <div className="flex justify-between items-center border-2  bg-white px-3 py-2  rounded-lg">
              
              <p className="text-xl col-span-1 font-semibold capitalize text-pink-600">Complete</p>
              <p className="text-xl col-span-1 font-semibold capitalize text-pink-600">title</p>
              <p className="text-xl col-span-1 font-semibold capitalize text-pink-600">time</p>
              <p className="text-xl col-span-1 font-semibold capitalize text-pink-600">description</p>
              <p className="text-xl col-span-1 font-semibold capitalize text-pink-600">Status</p>
              <div className="flex gap-4 col-span-1 items-center">
               <p className="text-xl font-semibold capitalize text-pink-600">Take Actions</p>
              
              </div>
            </div>
          </div>
         {
          todos?.map(todo=><TodoCard todo={todo} key={todo.id} />)
         }
        </div>
      </div>
    </div>
  );
};

export default Container;
