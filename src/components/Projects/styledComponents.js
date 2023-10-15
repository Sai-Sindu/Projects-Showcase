import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 50px;
`
export const SelectCard = styled.select`
  border: 1px solid #475569;
  border-radius: 3px;
  padding: 10px;
  outline: none;
  width: 350px;
  font-size: 18px;
  cursor: pointer;
`
export const OptionCard = styled.option`
  font-size: 18px;
  cursor: pointer;
`
export const FailureViewContainer = styled.div`
  height: 70vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: 'Roboto';
  margin-top: 70px;
`
export const FailureViewImg = styled.img`
  height: 300px;
`
export const FailureViewTitle = styled.h1`
  color: #475569;
  font-size: 30px;
  font-weight: 600;
`
export const FailureViewDescription = styled.p`
  color: #475569;
  font-size: 15px;
`
export const RetryButton = styled.button`
  background-color: #328af2;
  color: #ffffff;
  padding: 10px 30px 10px 30px;
  border: none;
  outline: none;
  cursor: pointer;
  border-radius: 5px;
`
export const ProjectsContainer = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  margin-top: 30px;
  list-style-type: none;
`
