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
      <div className="flex justify-center">
        <div className="flex border-r-2 w-1/2 h-screen bg-orange-300 justify-center items-center">
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

        <div className="overflow-y-scroll w-1/2  h-screen">
          {form.map((item, index) => {
            return (
              <div className="pt-4 ml-2 flex" key={index}>
                {item.type === "select" ? (
                  <div className="mt-6 mb-6">
                    <label className="p-2 my-4 ">{item.label}</label>
                    <select className="text-black" name="" id="">
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
                ) : (
                  <div className="mt-6 mb-6 bg-yellow-300 ">
                    <label className="p-2 my-4 ">{item.label}</label>
                    <input className="text-black" type={item.type} />
                    <button
                      className="bg-red-800 mx-4 p-1 rounded-md"
                      onClick={() => deleteState(index)}
                    >
                      Eliminar
                    </button>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Forms;
