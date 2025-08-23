import { createContext, useState } from "react";

const ModalContext = createContext({});

function Modal({ children }: { children: React.ReactNode }) {
  const [openModal, setOpenModal] = useState("");
  return (
    <ModalContext.Provider value={{ openModal, setOpenModal }}>
      {children}
    </ModalContext.Provider>
  );
}

function Open({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

function Window({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

Modal.Open = Open;
Modal.Window = Window;

export default Modal;
