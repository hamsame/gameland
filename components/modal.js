import styled from 'styled-components'

const ModalMessage = styled.h5`
  color: ${(props) => props.color};
`

export const Modal = ({ modalText, textColor }) => {
  return <ModalMessage color={textColor}>{modalText}</ModalMessage>
}

export default Modal
