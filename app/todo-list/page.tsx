"use client";
import { FormEvent, useRef, useState } from "react";

const TodoList = () => {
  const [todoList, setTodoList] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const [editMode, setEditMode] = useState<boolean>(false);
  const [editIndex, setEditIndex] = useState<number | null>();

  const handleAddTodo = (event: FormEvent) => {
    event.preventDefault();
    const inputText = inputRef.current?.value.trim();
    if (inputText && inputText !== "") {
      if (editMode) {
        setTodoList((prevTodoList) => prevTodoList.map((item, index) => (index === editIndex ? inputText : item)));
        setEditMode(false);
        setEditIndex(null);
      } else {
        setTodoList([inputText, ...todoList]);
      }
      if (inputRef.current) {
        inputRef.current.value = "";
      }
    } else {
      alert("Enter Valid Task");
    }
  };

  const handleEditItem = (index: number) => {
    setEditMode(true);
    setEditIndex(index);
    if (inputRef.current) {
      inputRef.current.value = todoList[index];
    }
    inputRef.current?.focus();
  };
  const handleRemoveItem = (index: number) => {
    setTodoList((prevTodoList) => prevTodoList.filter((_, i) => i !== index));
  };

  return (
    <div className="h-screen w-screen bg-slate-300">
      <section className="w-96 mx-auto flex flex-col items-center justify-center pt-20">
        <form className="flex gap-5">
          <input type="text" placeholder="Enter your Todo" className="p-2 rounded-md" ref={inputRef} />
          <button type="submit" className="bg-green-400 text-white font-medium hover:bg-green-600 p-2 rounded-md" onClick={(e) => handleAddTodo(e)}>
            {editMode ? "Edit Todo" : "Add Todo"}
          </button>
        </form>
        <ul className="w-80">
          {todoList?.map((listItem, index) => {
            return (
              <li className="bg-white rounded-md p-2 flex gap-5 justify-between items-center mt-5" key={index}>
                <span>{listItem}</span>
                <div className="flex gap-2">
                  <button className="py-1 px-4 rounded-md bg-slate-400 hover:bg-slate-500" onClick={() => handleEditItem(index)}>
                    Edit
                  </button>
                  <button className="py-1 px-4 rounded-md bg-slate-400 hover:bg-slate-500" onClick={() => handleRemoveItem(index)}>
                    Remove
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
};

export default TodoList;
