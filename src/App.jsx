import './App.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import {Dashboard} from "./pages/dashboard/Dashboard.jsx";
import {Layout} from "./components/layout/Layout.jsx";
import {Calendar} from "./pages/calendar/Calendar.jsx";
import {BoardPage} from "./pages/board/BoardPage.jsx";
import {DataGrid} from "./pages/datagrid/DataGrid.jsx";

function App() {
    return (
        <div id='dashboard'>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Layout/>}>
                        <Route path='dashboard' element={<Dashboard/>}/>
                        <Route path='calendar' element={<Calendar/>}/>
                        <Route path='board' element={<BoardPage/>}/>
                        <Route path='users' element={<DataGrid/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App
