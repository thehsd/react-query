import { Route, Routes } from 'react-router-dom'
import PostList from './component/ProductList.tsx'

// https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/function_components


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