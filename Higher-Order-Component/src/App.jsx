import Greeting from "./Greeting";
import GreetingWithStyle from "./GreetingWithStyle";
import PostListWithData from "./PostListWithData";
import Dasboard from "./Dashboard";
import withAuth from "./hoc/withAuth";

const ProtectedDashboard = withAuth(Dasboard)

function App() {
  return (
    <div>
      <Greeting name="Anil Kumar" />
      <GreetingWithStyle name="Rishabh" /> 
      <PostListWithData />
      <ProtectedDashboard />
    </div>
  );
}

export default App;
