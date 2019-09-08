import Styled from 'styled-components';

const primary = 'rgb(99, 47, 141)';
const maxContainerWidth = '940px';
const mainFont = `'Roboto', sans-serif`;

const Nav = Styled.nav`
  display:flex;
  flex-flow: row wrap;
  align-items:center;
  margin: auto 0 0 -7px;
    @media(max-width:600px) {
    width: 55% ;
    justify-content: center;
    margin: 10px auto;
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
  background:teal;
  height:600px;
  border-radius: .5rem;

  h4{
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
  height: 200px;
  margin: auto 19px;
  transition:0.5s;

  @media(max-width: 600px) {
    width:90%;
    height: 300px;
    h1{
      text-align:center;
    }
  }


  &:hover{
    cursor:pointer;
    background: white;
    color:${primary};
    border: 2px solid ${primary};
    opacity:0.8;
  }


  .find-tab{
    h1{
      font-size:4rem;
    }
  }
  `

const Cost = Styled.div`
  font-size:2rem;
  color: white
  font-family: white;
  font-weight: bolder;
  padding:20px;
`


export {
  Nav,
  FormContainer,
  Home,
  RightView,
  FindTab,
  Cost
  
};