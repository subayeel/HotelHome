import styled from "styled-components";

export const StyledNavbarLink = styled.div`
  flex: 20%;
  ul {
    list-style-type: none;

    .home-button {
      a {
        border-radius: 5px;
        padding: 5px;
        background-color: ${({ theme }) => theme.colors.orangeBtnColor};
        color: ${({ theme }) => theme.colors.primarybg};
      }
    }
  }
  li {
    display: inline;
    margin: 0 7px 0 7px;
  }
  a {
    color: ${({ theme }) => theme.colors.primaryColor};
    font-size: 14px;
    font-weight: 600;
    font-family: Arial, Helvetica, sans-serif;
    text-decoration: none;
    &:hover {
      color: ${({ theme }) => theme.colors.orangeBtnColor};
    }
  }
`;
