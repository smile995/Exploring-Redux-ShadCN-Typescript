import { Button } from "../ui/button";
import AddTodoModal from "./AddTodoModal";
import Dropdown from "./Dropdown";
import TodoCard from "./TodoCard";

const Container = () => {
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
        <div className="bg-white rounded-lg space-y-3 p-2">
          <div>
            <div className="flex justify-between items-center border-2  bg-white px-3 py-2  rounded-lg">
              
              <p className="text-xl font-semibold capitalize text-pink-600">Complete</p>
              <p className="text-xl font-semibold capitalize text-pink-600">title</p>
              <p className="text-xl font-semibold capitalize text-pink-600">time</p>
              <p className="text-xl font-semibold capitalize text-pink-600">description</p>
              <div className="flex gap-4 items-center">
               <p className="text-xl font-semibold capitalize text-pink-600">Take Actions</p>
              
              </div>
            </div>
          </div>
          <TodoCard />
        </div>
      </div>
    </div>
  );
};

export default Container;
