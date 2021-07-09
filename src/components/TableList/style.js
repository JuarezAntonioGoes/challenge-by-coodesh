import styled from "styled-components";

export const IconArrowCircle = styled.img`
  height: 1.5rem;
  animation: ${({ isLoadingBtn }) =>
    isLoadingBtn ? "rotation .4s infinite linear" : ""};

  @keyframes rotation {
    to {
      transform: rotate(-360deg);
    }
  }
`;

export const ButtonViewAction = styled.button`
  height: 45px;
  border-radius: 50%;
  width: 45px;

  display: flex;
  align-items: center;
  justify-content: center;
`;
