
import {Routes, Route} from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Uploads from './pages/Uploads'
import Sidebar from './components/Sidebar'
import Topbar from './components/Topbar'
import LoginPage from './pages/loginpage'
import SignupPage from './pages/signuppage'


function App() {

  return (
    <>
      <div className='flex h-screen bg-gray-900 text-gray-100 overflow-hidden'>
        {/* Background */}
        <div className='fixed inset-0 z-0'>
          <div className='absolute inset-0 bg-gradient-to-br via-gray-800 from-gray-900 opacity-80'/>
          <div className='absolute inset-0 backdrop-blur-sm' />
        </div>
        <Sidebar />
        <div className="flex-1 flex flex-col relative z-10">
          <Topbar />
          <div className="flex-1 overflow-auto">
            <Routes>
              <Route path='/' element={<Dashboard />} />
              <Route path='/uploads' element={<Uploads />} />
              <Route path='/profile' element={<div>Profile Page</div>} />
              <Route path='/loginpage' element={<LoginPage/>} />
              <Route path='/signuppage' element={<SignupPage/>} />
            </Routes>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
