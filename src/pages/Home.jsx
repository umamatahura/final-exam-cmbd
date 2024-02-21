import { useEffect, useState } from "react"
import MealCard from "../components/MealCard"


function Home({ homeProps }) {

    const { meals } = homeProps;

    return (
        <div className="w-11/12 mx-auto mt-5">
            {/* need to alter searched meals and all meals */}

            {/* rendering searched meals only */}

            {/* rendering all meals */}
            <div className=" grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-5">
                {
                    meals.map(meal => <MealCard key={meal.idMeal} meal={meal} />)
                }
            </div>
        </div>
    )
}

export default Home
