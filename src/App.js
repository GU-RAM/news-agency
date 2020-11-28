import Posts from './containers/Posts/Posts';
import styled from 'styled-components';
import { SharedContextComponent } from './hoc/Context/Context';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import ActiveUser from './components/ActiveUser/ActiveUser';

function App() {
  return (
    <div>
      <SharedContextComponent>
        <PageWrapper>
          <Posts />
          <Route exact path='/' component={ActiveUser} />
        </PageWrapper>
      </SharedContextComponent>
    </div>
  );
}

export default App;

const PageWrapper = styled.div`
  display: grid;
  grid-template-columns: 100%;
  padding: 30px;
  @media only screen and (min-width: 768px) {
    & {
      grid-template-columns: 60% 40%;
    }
  }
  @media only screen and (min-width: 1200px) {
    & {
      grid-template-columns: 75% 25%;
    }
  }
`;
