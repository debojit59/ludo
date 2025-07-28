import styled from "styled-components";

export const Button = styled.button`
  color: white;
  width: 220px;
  height: 44px;
  padding: 10px 18px;
  background: black;
  border-radius: 5px;
  transition: 0.3s ease-in;
  cursor: pointer;

  &:hover {
    background-color: white;
    color: black;
    border-color: 1px solid black;
    transition: 0.3s ease-in;
    @media (max-width: 768px) {
      width: 180px;
      font-size: 14px;
    }
  }
`;

export const OutlineButton = styled(Button)`
  color: Black;
  background: white;
  &:hover {
    background-color: Black;
    color: White;
    border-color: 1px solid white;
    transition: 0.3s ease-in;
  }
`;

// const NewButton = styled.a()
