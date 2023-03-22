import { useState } from 'react';
import { Button } from '@mui/material';
import { WordsList } from 'components/WordsList/WordsList';
import { AddWordsForm } from 'components/AddWordsForm/AddWordsForm';
import Modal from 'components/Modal/Modal';
import { createPortal } from 'react-dom';
import { Filter } from 'components/Filter/Filter';

const modalRef = document.querySelector('#modal-root');

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleToggleModal = () => {
    setIsModalOpen(prevState => !prevState);
  };

  return (
    <>
      <div style={{ textAlign: 'center' }}>
        <h1>home</h1>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 10,
          }}
        >
          <Filter />
          <Button variant="contained" onClick={handleToggleModal}>
            Add new word
          </Button>
        </div>

        <WordsList />
      </div>
      {isModalOpen &&
        createPortal(
          <Modal handleToggleModal={handleToggleModal}>
            <AddWordsForm />
          </Modal>,
          modalRef
        )}
    </>
  );
};

export default Home;
