import { useState, type FormEvent } from "react";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { useAddTodosMutation } from "@/redux/api/api";

const AddTodoModal = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("");
  const [addTodos] =useAddTodosMutation();


  const handleAddTodo = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const todoDetails = {
      title,
      description,
      priority,
      isComplete: false,
      isDeleted: false,
      time: new Date().toLocaleString(),
    };
    addTodos(todoDetails);
  };
  return (
    <Dialog>
      <DialogTrigger className="bg-gradient-to-r from-indigo-500 to-pink-500 rounded px-3 py-2 text-white font-semibold">
        Add Todo
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add Todo</DialogTitle>
          <DialogDescription>
            Add your task here and don't forget to click on save changes
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleAddTodo}>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Title
              </Label>
              <Input
                onBlur={(e) => setTitle(e.target.value)}
                id="title"
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="description" className="text-right">
                Description
              </Label>
              <Input
                onBlur={(e) => setDescription(e.target.value)}
                id="description"
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="username" className="text-right">
                Priority
              </Label>
              <div className="w-full">
                <Select onValueChange={(value) => setPriority(value)}>
                  <SelectTrigger className="w-[280px]">
                    <SelectValue placeholder="Select Priority" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="high">High</SelectItem>
                    <SelectItem value="medium">Medium</SelectItem>
                    <SelectItem value="low">Low</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
          <div className="flex justify-end">
            <DialogClose asChild>
              <Button
                type="submit"
                className="bg-gradient-to-r from-indigo-500 to-pink-500"
              >
                Save Changes
              </Button>
            </DialogClose>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddTodoModal;
