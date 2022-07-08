import styled from "styled-components";

export const StyledAvatar = styled.div`
  display: inline-block;
  position: relative;
  border-radius: 100%;
  height: ${(props)=> props.size};
  width: ${(props)=> props.size};
  padding: 20px;
  
  
  background-color: ${({ theme }) => theme.colors.primaryColor};
  border: 3px solid ${({ theme }) => theme.colors.primarybg};
  img {
    position: absolute;
    align-items: center;
    margin: auto;
    width: 100%;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
  }
`;
