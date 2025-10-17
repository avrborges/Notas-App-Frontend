import './App.css';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CreateNotePage from './pages/CreateNotePage';
import EditNotePage from './pages/EditNotePage';
import NotFoundPage from './pages/NotFoundPage';
import { ToastContainer } from 'react-toastify';

function App() {

  return (
    <div className='w-full max-w-[1200px] mx-auto px-3.5'>
      <Routes>
        <Route path='/' element={<HomePage></HomePage>}></Route>
        <Route path='/createNote' element={<CreateNotePage></CreateNotePage>}></Route>
        <Route path='/editNote/:id' element={<EditNotePage></EditNotePage>}></Route>
        <Route path='*' element={<NotFoundPage></NotFoundPage>}></Route>
      </Routes>
      <ToastContainer 
        position='top-center'
        autoClose = {3000}
        hideProgressBar = {false}
        newestOnTop = {false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        theme='light'
      />
    </div>

  )
}

export default App
