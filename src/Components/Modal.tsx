import { useState } from "react";
const Modal = ({ setModalState, modalType, addInput }: any) => {
  const [onChangeE, setChangeE] = useState("");
  const [onChangeSelect, setChangeSelect] = useState({});

  const closeModal = () => {
    setModalState(false);
  };

  const handleSubmit = (e: any) => {
    console.log(onChangeE);
    e.preventDefault();
    addInput(onChangeE);
  };
  return (
    <form>
      {modalType === "select" ? (
        <div>
          <input
            onChange={(e) => setChangeE(e.target.value)}
            name="opt1"
            placeholder="Añade una opción"
            type="text"
          />
          <input
            onChange={(e) => setChangeE(e.target.value)}
            name="opt2"
            placeholder="Añade una opción"
            type="text"
          />
          <input
            onChange={(e) => setChangeE(e.target.value)}
            name="opt3"
            placeholder="Añade una opción"
            type="text"
          />
        </div>
      ) : (
        <div>
          <input
            onChange={(e) => setChangeE(e.target.value)}
            placeholder="Añade tu pregunta"
            type="text"
          />
        </div>
      )}
      <button className="bg-red-400 rounded-md" onClick={handleSubmit}>
        Guardar
      </button>
      <button className="bg-red-400 rounded-md" onClick={closeModal}>
        Guardar
      </button>
    </form>
  );
};

export default Modal;
