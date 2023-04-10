import styled from 'styled-components';

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: ${(props) => (props.show ? 'block' : 'none')};
`;

export const ModalWrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  border-radius: 5px;
  display: ${(props) => (props.show ? 'block' : 'none')};
`;

export const ModalHeader = styled.div`
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #ddd;
`;

export const ModalTitle = styled.h5`
  margin: 0;
`;

export const CloseButton = styled.button`
  background-color: transparent;
  border: none;
  font-size: 1.25rem;
  cursor: pointer;
`;

export const ModalBody = styled.div`
  padding: 1rem;
`;

export const ModalFooter = styled.div`
  padding: 1rem;
  display: flex;
  justify-content: flex-end;
  border-top: 1px solid #ddd;
`;

export const Button = styled.button`
  background-color: ${(props) => (props.primary ? '#007bff' : '#ccc')};
  color: ${(props) => (props.primary ? 'white' : 'black')};
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  cursor: pointer;
  margin-left: 0.5rem;
`;

export const ImageGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
`;

export const Thumbnail = styled.img`
  width: 100%;
  height: 100px;
  object-fit: cover;
  cursor: pointer;
  border: ${(props) => (props.selected ? '3px solid #007bff' : 'none')};
  box-sizing: border-box;
`;

export const UploadButton = styled.label`
  display: inline-block;
  background-color: #007bff;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 1rem;
`;

export const FileInput = styled.input`
  display: none;
`;