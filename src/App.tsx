import { Route, Routes } from 'react-router-dom'
import PostList from './component/ProductList.tsx'

const App = () => {
  return (
    <>
      <Routes>
        <Route path={'/product'} element={<PostList />} />

      </Routes>


    </>
  )
}

export default App