import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  
  50% {
    transform: rotate(720deg);
  }
  
  100% {
    transform: rotate(1440deg);
  }
`;

const SpinnerContainer = styled.div`
  position: absolute;
  background: rgba(0, 0, 0, 0.5);
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
`;

const SpinnerCircle = styled.div`
  animation: ${spin} 5s infinite linear;
  border-radius: 50%;
  border: 5px solid var(--light-red) !important;
  border-top-color: var(--black) !important;
  border-bottom-color: var(--black) !important;
  border-left-color: transparent;
  border-right-color: transparent;
  width: 50px;
  height: 50px;
  position: fixed;
  left: 50%;
  top: 50%;
  z-index: 9999;
`;

const Spinner: React.FC = () => {
  return (
    <SpinnerContainer>
      <SpinnerCircle />
    </SpinnerContainer>
  );
};

export default Spinner;
