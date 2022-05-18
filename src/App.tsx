import { useState } from "react";
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { NewTransectionModal } from "./components/NewTransectionModal";
import { GlobalStyle } from "./styles/global";

export function App() {
  const [onOpenModal, setOnOpenModal] = useState(false);

  function handleOnOpenModal() {
    setOnOpenModal(true);
  }

  function handleOnCloseModal() {
    setOnOpenModal(false);
  }

  return (
    <>
      <Header onOpenNewTransactionModal={handleOnOpenModal} />

      <Dashboard />

      <NewTransectionModal 
        isOpen={onOpenModal}
        onRequestClose={handleOnCloseModal}
      />

      <GlobalStyle />
    </>
  );
};
