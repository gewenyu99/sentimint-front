import React from 'react';
import Modal from 'react-modal';
import question from './question.png';
import './App.css';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    width                 : '42%',
  }
};

Modal.setAppElement('#root')

class InfoModal extends React.Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: false
    };

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  afterOpenModal() {
    this.subtitle.style.color = '#A5DFCA';
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  render() {
    return (
      <div>
        <button className="InfoModalButton" onClick={this.openModal}>
            <img src={question} className="Question-icon" alt="help" />
        </button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Help"
        >

          <h2 className="Pier" ref={subtitle => this.subtitle = subtitle}>What is Sentimint?</h2>
          <div className="ModalText">Sentimint is here for you. You can jot down your thoughts, emotions, and 
              experiences in the text field below and receive suggestions and what to do to feel better. 
              Sentimint is completely secure, confidential, and free.</div>
              <br />
          <button class="InfoModalCloseButton" onClick={this.closeModal}>Close</button>
          <br />
        </Modal>
      </div>
    );
  }
}

export default InfoModal;