import Chart from './components/Chart/Chart';
import Table from './components/Table/Table';
import AppHeader from './components/AppHeader/AppHeader';
import AppFooter from './components/AppFooter/AppFooter';
import AddEmployee from './components/AddEmployee/AddEmployee';


function App() {
  return (
    <div>
        <AppHeader />
        <AddEmployee />
        <Table />
        <Chart />
        <AppFooter />
    </div>
  )
}

export default App;
