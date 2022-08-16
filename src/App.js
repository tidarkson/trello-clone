import AppBar from "./Components/AppBar/AppBar";
import BoardBar from "./Components/BoardBar/BoardBar";
import  BoardContent from "./Components/BoardContent/BoardContent";
// import SignUp from "./Components/SignUp/SignUp";
function App() {
  return (
    <div className="trello-master">
      <AppBar />  
      <BoardBar />
      <BoardContent />
      <SignUp />
    </div>
  );
}

export default App;
