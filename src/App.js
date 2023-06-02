import AppLayout from './layout/index'
import './App.css';
// 引入单个页面（包括嵌套的子页面）
import MyChart from './components/chart.js'


function App() {
  return (
    <div className="App">
      <AppLayout>
        <MyChart></MyChart>
      </AppLayout>
    </div>
  );
}

export default App;
