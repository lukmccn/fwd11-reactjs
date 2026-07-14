import Header from '../../organisms/Header/Header';
import Footer from '../../organisms/Footer/Footer';
import { ScrollProvider } from '../../../context/ScrollContext';

function MainLayout({ children }) {
  return (
    <ScrollProvider>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1 w-full max-w-[960px] mx-auto px-0 sm:px-4 py-5">
          {children}
        </main>
        <Footer />
      </div>
    </ScrollProvider>
  );
}

export default MainLayout;
