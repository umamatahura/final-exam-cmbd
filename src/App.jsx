import { Route, Routes } from "react-router-dom"
import NavBar from "./components/NavBar"
import Home from "./pages/Home"
import MealDetails from "./pages/MealDetails"
import { useEffect, useState } from "react"

function App() {
  const [searchText, setSearchText] = useState('');
  const [meals, setMeals] = useState([]);
  const [submit, setSubmit] = useState('');

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`)
      .then(res => res.json())
      .then(data => setMeals(data.meals));
    setSubmit('');
  }, [searchText, submit])

  const handleSearch = (e) => {
    e.preventDefault();
    setSubmit((prev) => `${prev} submit`);
    setSearchText('');
  }



  const navProps = {
    searchText,
    setSearchText,
    handleSearch
  }

  const homeProps = {
    meals
  }

  return (
    <div>
      <NavBar navProps={navProps} />
      <Routes>
        <Route path="/" element={<Home homeProps={homeProps} />} />
        <Route path="meal-detals/:id" element={<MealDetails />} />
      </Routes>
    </div>
  )
}

export default App
