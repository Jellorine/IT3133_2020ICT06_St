import logo from './logo.svg';
import './App.css';
import {students} from './data/StudentsDb';
import StudentTable from './components/StudentTable';

function App() {
  return (
    <div className="App">
      <h1>Student Information Portal</h1>
      <hr/>
      <table>
        <tr>
          <td>
            <StudentTable students={students}></StudentTable>
          </td>
        </tr>
      </table>
    </div>
  );
}

export default App;
