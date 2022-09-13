import { useState } from "react";
import fields from "../data/form.json";

const typesButtons = [
  { value: "text", textValue: "Text input" },
  { value: "select", textValue: "Select input" },
  { value: "radio", textValue: "Radio input" },
  { value: "checkbox", textValue: "Checkbox input" },
];

const Forms = () => {
  const [form, setFrom] = useState(fields);
  const addInput = (e: any) => {
    const newForm = [...form];
    newForm.push({
      label: e.target.value,
      type: e.target.value,
      placeholder: e.target.value,
    });
    setFrom(newForm);
  };

  const deleteState = (index: number) => {
    let data3 = [...form];
    console.log(data3);
    data3.splice(index, 1);
    setFrom(data3);
  };

  return (
    <div className="text-white h-screen">
      <div className="flex border-r-2 w-full h-52 bg-orange-300 justify-center items-center fixed top-0">
        {typesButtons.map((item, index) => {
          return (
            <button
              className="bg-blue-500 p-2 m-2 rounded-md w-40 h-40"
              key={index}
              value={item.value}
              onClick={(e) => addInput(e)}
            >
              {item.textValue}
            </button>
          );
        })}
      </div>

      <div className="overflow-y-hidden w-full h-auto flex  justify-center flex-col items-center  pt-52">
        {form.map((item, index) => {
          return (
            <div className="py-4 ml-2" key={index}>
              {item.type === "select" ? (
                <>
                  <label>{item.label}</label>
                  <div className="mt-2 mb-2 w-80 flex justify-between h-8">
                    <select className="text-black w-full" name="" id="">
                      <option value="x">1</option>
                      <option value="x">2</option>
                      <option value="x">3</option>
                    </select>
                    <button
                      className="bg-red-800 mx-4 p-1 rounded-md"
                      onClick={() => deleteState(index)}
                    >
                      Eliminar
                    </button>
                  </div>
                </>
              ) : (
                <>
                  <label>{item.label}</label>
                  <div className="w-80 flex justify-between h-8">
                    <input
                      className={`text-black ${
                        item.type !== "text" ? "w-50" : "w-full"
                      }`}
                      type={item.type}
                    />
                    <button
                      className="bg-red-800 mx-4 p-1 rounded-md"
                      onClick={() => deleteState(index)}
                    >
                      Eliminar
                    </button>
                  </div>
                </>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Forms;
