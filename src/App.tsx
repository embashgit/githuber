import * as React from 'react'
import { useSelector } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import Alert from './components/Alert'
import PageLoader from './components/PageLoader'
import { StoreState } from './interfaces/store.interfaces'
import Routes from './routes'
import MainLayout from './views/layouts/MainLayout'

export default function App() {
  const { Errormessage, isError } = useSelector(
    (state: StoreState) => state.Repositories
  );
  return (
    <React.Suspense fallback={<PageLoader />}>
      {isError && <Alert Errormessage={Errormessage} />}
      <Router>
        <MainLayout>
          <Routes />
        </MainLayout>
      </Router>
    </React.Suspense>
  )
}
