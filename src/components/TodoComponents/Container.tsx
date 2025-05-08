// import { useAppSelector } from "@/redux/hooks";
import type { TTodo } from "@/redux/features/TodoSlice";
import { Skeleton } from "../ui/skeleton";
import AddTodoModal from "./AddTodoModal";
import Dropdown from "./Dropdown";
import TodoCard from "./TodoCard";
import { useGetTodosQuery } from "@/redux/api/api";
import { useState } from "react";



const Container = () => {
  const [priority,setPriority]=useState("");
  
  
 const {data:todos,isLoading,isFetching}=useGetTodosQuery(priority);

 if (isFetching || isLoading){
  return (
    <div>
      <Skeleton className="w-[100px] h-[100px] rounded-full" />
    </div>
  )
 }
  
  return (
    <div>
      <div className="flex justify-between items-center mb-3">
        <AddTodoModal />
        <Dropdown priority={priority} setPriority={setPriority} />
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
              <p className="text-xl col-span-1 font-semibold capitalize text-pink-600">Priority</p>
              <p className="text-xl col-span-1 font-semibold capitalize text-pink-600">Status</p>
              <div className="flex gap-4 col-span-1 items-center">
               <p className="text-xl font-semibold capitalize text-pink-600">Take Actions</p>
              
              </div>
            </div>
          </div>
         {
          todos?.map((todo: TTodo)=><TodoCard todo={todo} key={todo._id} />)
         }
        </div>
      </div>
    </div>
  );
};

export default Container;
