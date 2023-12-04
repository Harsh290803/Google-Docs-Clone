import TextEditor from "./TextEditor";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { v4 as uuidV4 } from "uuid";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Redirect to={`/docs/${uuidV4()}`} />
        </Route>
        <Route path="/docs/:id">
          <TextEditor />
        </Route>
      </Switch>
    </Router>
  );
}
