import { RouterProvider } from "react-router"
import AppRoutes from "./AppRoutes"
import "./shared/style.scss"
import { AuthProvider } from "./features/auth/auth.context.jsx"
function App() {

  return (
    <AuthProvider>
    <AppRoutes />
    </AuthProvider>
  )
}

export default App
