import './App.css';
import AppRouterProvider from './app/providers/AppRouterProvider';
import AuthProvider from './app/providers/AuthProvider';
import ThemeProvider from './app/providers/ThemeProvider';

function App() {
  return (
    <AuthProvider>
      <ThemeProvider>
        <AppRouterProvider></AppRouterProvider>
      </ThemeProvider>
    </AuthProvider>
  );
}

export default App;
