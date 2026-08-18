import './App.css';
import AppRouterProvider from './app/providers/AppRouterProvider';
import AuthProvider from './app/providers/AuthProvider';

function App() {
  return (
    <AuthProvider>
      <AppRouterProvider></AppRouterProvider>
    </AuthProvider>
  );
}

export default App;
