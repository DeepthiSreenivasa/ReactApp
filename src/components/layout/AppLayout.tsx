import Header from './Header';
import MainContent from './MainContent';
import SideBar from './SideBar';
import './AppLayout.css';

const AppLayout = () => {
  return (
    <>
      <div className="app-layout">
        <header className="app-header">
          <Header></Header>
        </header>

        <div className="app-body">
          <aside className="app-sidebar">
            <SideBar></SideBar>
          </aside>
          <main className="app-main">
            <MainContent></MainContent>
          </main>
        </div>
      </div>
    </>
  );
};

export default AppLayout;
