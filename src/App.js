// import './App.css';

function App() {
  return (
    <div className="trello-master">
      <nav className="navbar app">App Bar</nav>
      <nav className="navbar board">Board bar</nav>
      <div className="board-columns">
        <div className="column">
          <header>Brainstorm</header>
          <ul>
            <li>
              <img src="./images/hero-image.jpg"></img>
              {/* Medicine and surgery */}
            </li>
            <li>Second</li>
            <li>Third</li>
            <li>Fourth</li>
            <li>Second</li>
            <li>Third</li>
            <li>Fourth</li> 
            <li>Second</li>
            <li>Third</li>
            <li>Fourth</li>
          </ul>
          <footer>Add another card</footer>
        </div>

        <div className="column">
          <header>Brainstorm</header>
          <ul>
            <li>
              <img src="./images/hero-image.jpg"></img>
            </li>
            <li>Second</li>
            <li>Third</li>
            <li>Fourth</li>
          </ul>
          <footer>Add another card</footer>
        </div>

        <div className="column">
          <header>Brainstorm</header>
          <ul>
            <li>
              <img src="./images/hero-image.jpg"></img>
            </li>
            <li>Second</li>
            <li>Third</li>
            <li>Fourth</li>
          </ul>
          <footer>Add another card</footer>
        </div>

        <div className="column">
          <header>Brainstorm</header>
          <ul>
            <li>
              <img src="./images/hero-image.jpg" alt=""></img>
            </li>
            <li>Second</li>
            <li>Third</li>
            <li>Fourth</li>
          </ul>
          <footer>Add another card</footer>
        </div>

        <div className="column">
          <header>Brainstorm</header>
          <ul>
            <li>
              <img src="./images/hero-image.jpg"></img>
            </li>
            <li>Second</li>
            <li>Third</li>
            <li>Fourth</li>
          </ul>
          <footer>Add another card</footer>
        </div>
      </div>
    </div>
  );
}

export default App;
