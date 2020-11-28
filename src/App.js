import Posts from './containers/Posts/Posts';
import { SharedContextComponent } from './hoc/Context/Context';

function App() {
  return (
    <div>
      <SharedContextComponent>
        <Posts />
      </SharedContextComponent>
    </div>
  );
}

export default App;
