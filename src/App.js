import "./App.css";
import SortableList from "./Component/DragDropFiles";
import DragDropFiles from "./Component/SortableList";

const App = () => {
    return (
        <div className="container">
            <SortableList />
            <DragDropFiles />
        </div>
    )
};

export default App;