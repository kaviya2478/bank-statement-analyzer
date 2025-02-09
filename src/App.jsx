import "./index.css";
import Header from "./components/Header";
import Nav from "./components/nav";
import SummarySection from './components/SummarySection';
import ChartComponent from './components/ChartComponent';
import TransactionTable from './components/TransactionTable';
import PieChartComponent from './components/PieChartComponent';


function App() {
  return (
    <div className="min-h-screen bg-[#D9D6D6]">
      <Header />
      <Nav />
      <div className="ml-[25%] w-[75%] p-6 min-h-screen space-y-6">
      <div className="flex gap-4">
        <div className="w-1/2 flex flex-col gap-6">
          <SummarySection />
          <div className="w-full h-[46vh]">
            <TransactionTable />
          </div>
        </div>
        <div className="w-1/2">
          <PieChartComponent />
        </div>
      </div>
    </div>
    </div>
  );
}

export default App;