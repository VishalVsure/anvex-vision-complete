import { useNavigate } from "react-router-dom"
import { Button } from "./components/ui/button"

function App() {
  const Navigate = useNavigate()
  return (
    <div className='flex flex-col px-12 lg:px-24 py-8 space-y-4 items-center'>
      {/* <p className='font-bold text-xl'>Use <span className='bg-gray-300 p-2 rounded-md'>/dash</span> to go to the dashboard</p> */}
      <Button onClick={()=>{Navigate('/dashboard')}}>Dashboard</Button>
      <Button onClick={()=>{Navigate('/login')}}>Login</Button>
      <Button onClick={()=>{Navigate('/signup')}}>Signup</Button>
    </div>
  )
}

export default App
