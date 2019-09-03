import Styled from 'styled-components';

const primary = 'rgb(99, 47, 141)';
const maxContainerWidth = '940px';
const mainFont = `'Roboto', sans-serif`;
const Nav = Styled.nav`
  display:flex;
  flex-flow: row wrap;
  align-items:center;
  margin: auto;
    @media(max-width:600px) {
    margin: 0px -20px 0px -13px;
    }
`
const FormContainer = Styled.div`
  display:flex;
  flex-flow: column;
  width:52%;
  @media(max-width:600px) {
    margin: 20px auto;
    width: 100% ;
  }
      
`

const Home = Styled.div`
    display:flex;
    flex-flow:row no-wrap;
    justify-content:space-between;
    margin:20px 20px;

    @media (max-width:600px) {
      flex-flow: column;
    }
`

const RightView = Styled.div`
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

const FindTab = Styled.div`
  width:100%;
  max-width: 900px;
  display:flex;
  justify-content: center;
  align-items: center;
  font-family: ${mainFont};
  background: ${primary};
  border-radius:.5rem;
  color: white;
  height: 300px;
  margin: auto 19px;
`


export {
  Nav,
  FormContainer,
  Home,
  RightView,
  FindTab
};