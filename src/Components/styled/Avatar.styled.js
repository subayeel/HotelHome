import styled from 'styled-components';

export const StyledAvatar = styled.div`

display: inline-flex;
border-radius: 100%;
height: 50px;
width: 50px;
margin: 10px;
background-color: ${({theme})=> theme.colors.primaryColor};
img{
  align-items: center;
      margin: auto;
      width:100%;
      height: 100%;
}



`;