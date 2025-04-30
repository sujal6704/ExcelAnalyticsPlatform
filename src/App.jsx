import {Routes, Route, useLocation} from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Uploads from './pages/Uploads'
import ProfilePage from './pages/ProfilePage'
import Sidebar from './components/Sidebar'
import Topbar from './components/Topbar'
import Login from './pages/loginpage'
import Signup from './pages/signuppage'


function App() {
  const location = useLocation()
  const isAuthPage = location.pathname === '/auth/login' || location.pathname === '/auth/signup'

  return (
    <>
      <div className='flex h-screen bg-gray-900 text-gray-100 overflow-hidden'>
        {/* Background */}
        <div className='fixed inset-0 z-0'>
          <div className='absolute inset-0 bg-gradient-to-br via-gray-800 from-gray-900 opacity-80'/>
          <div className='absolute inset-0 backdrop-blur-sm' />
        </div>
        {!isAuthPage && <Sidebar />}
        <div className="flex-1 flex flex-col relative z-10">
          {!isAuthPage && <Topbar />}
          <div className="flex-1 overflow-auto">
            <Routes>
              <Route path='/' element={<Dashboard />} />
              <Route path='/uploads' element={<Uploads />} />
              <Route path='/profile' element={<ProfilePage />} />
              <Route path='/auth/login' element={<Login/>} />
              <Route path='/auth/signup' element={<Signup/>} />

            </Routes>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
