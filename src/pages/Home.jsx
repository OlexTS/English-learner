import { useState } from 'react';
import { Button } from '@mui/material';
import { WordsList } from 'components/WordsList/WordsList';
import { AddWordsForm } from 'components/AddWordsForm/AddWordsForm';
import Modal from 'components/Modal/Modal';
import { createPortal } from 'react-dom';

const modalRef = document.querySelector('#modal-root');

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

    const handleToggleModal = () => {
        setIsModalOpen(prevState => !prevState)
    }

  return (
    <>
      <div style={{ textAlign: 'center' }}>
        <h1>home</h1>
        <Button variant="contained" onClick={handleToggleModal}>
          Addnewword
        </Button>
        <WordsList />
      </div>
          {isModalOpen && createPortal(<Modal handleToggleModal={ handleToggleModal}><AddWordsForm/></Modal>, modalRef)  }
    </>
  );
};

export default Home;
