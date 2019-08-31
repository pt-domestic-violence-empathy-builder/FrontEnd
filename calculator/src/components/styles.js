import Styled from 'styled-components';

const primary = 'rgb(99, 47, 141)';

const Nav = Styled.nav `
  display:flex;
  flex-flow: row wrap;
  align-items:center;
  margin: auto;
`
const FormContainer = Styled.div `
  display:flex;
  flex-flow: column;
  width:50%;
`

const Home = Styled.div `
    display:flex;
    flex-flow:row no-wrap;
    justify-content:space-between;
    margin:20px 20px;

    @media (max-width:600px) {
      flex-flow: column;
    }
`

const RightView = Styled.div `
  display:flex;
  flex-flow:column;
  align-items:center;
  width:50%
  background:${primary};
  height:600px;

  h1{
    coloer:white;
  }
`


export {
    Nav,
    FormContainer,
    Home,
    RightView
};