import styled from "styled-components";

export const Button = styled.button`
  color: white;
  background: black;
  border: 1px solid black;
  border-radius: 5px;
  padding: 10px 18px;
  width: 220px;
  height: 44px;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: white;
    color: black;
  }

  @media (max-width: 768px) {
    width: 180px;
    font-size: 14px;
  }

  @media (max-width: 480px) {
    width: 150px;
    font-size: 13px;
  }
`;

export const OutlineButton = styled(Button)`
  background: white;
  color: black;

  &:hover {
    background-color: black;
    color: white;
  }
`;
