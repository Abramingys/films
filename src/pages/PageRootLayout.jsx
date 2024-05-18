import { Outlet } from 'react-router-dom';
import { loadHistoryFromLocalStorage } from '../redux/slices/historySlice';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { selectHistory } from '../redux/slices/historySlice';
import { Footer } from '../components/Footer/Footer';
import { Header } from '../components/Header/Header';

export function PageRootLayout() {
  const histories = useSelector(selectHistory);
  const dispatch = useDispatch();
  console.log(histories);
  useEffect(() => {
    dispatch(loadHistoryFromLocalStorage());
  }, [dispatch]);
  return (
    <div className="container">
      <Header />
      <section className="maincontent">
        <div className="page-container">
          <Outlet />
        </div>
      </section>
      <Footer />
    </div>
  );
}
