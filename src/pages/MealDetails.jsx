import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function MealDetails() {
    const { id } = useParams();
    const [meal, setMeal] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        if (id) {
            fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
                .then(res => res.json())
                .then(data => setMeal(data.meals[0]))
        }

    }, [id])


    const { strMeal, strCategory, strArea, strTags, strMealThumb, idMeal,
        strInstructions,
        strIngredient1, strMeasure1,
        strIngredient2, strMeasure2,
        strIngredient3, strMeasure3,
        strIngredient4, strMeasure4,
        strIngredient5, strMeasure5,
        strIngredient6, strMeasure6,
        strIngredient7, strMeasure7,
        strIngredient8, strMeasure8,
        strIngredient9, strMeasure9
    } = meal;

    const ingredients = [
        { ing: strIngredient1, meas: strMeasure1 },
        { ing: strIngredient2, meas: strMeasure2 },
        { ing: strIngredient3, meas: strMeasure3 },
        { ing: strIngredient4, meas: strMeasure4 },
        { ing: strIngredient5, meas: strMeasure5 },
        { ing: strIngredient6, meas: strMeasure6 },
        { ing: strIngredient7, meas: strMeasure7 },
        { ing: strIngredient8, meas: strMeasure8 },
        { ing: strIngredient9, meas: strMeasure9 },
    ]

    return <div className="hero min-h-screen bg-base-100 w-11/12 mx-auto my-10">
        <div className="">

            <img src={strMealThumb} className="w-full lg:w-2/5 h-[350px] rounded-lg shadow-2xl mx-auto" />

            <div className="mt-5">
                <h1 className="text-5xl font-bold mb-8">{strMeal}</h1>
                {strTags && <h6 className="mb-2"><span className="font-bold">Tags:</span> {strTags.split(',').join(', ')}</h6>}
                <h6 className="mb-2"> <span className="font-bold">Category:</span> {strCategory}</h6>
                <h6 className="mb-2"><span className="font-bold">Origin:</span> {strArea}</h6>
                <div>
                    <h2 className="font-bold">Ingredients</h2>
                    <ul className="list-disc ps-8 mt-1">
                        {ingredients.map((item, index) => item.ing && <li key={index}>{item.ing} - {item.meas}</li>)}
                    </ul>
                </div>
                <h2 className=" mt-5 mb-1 font-bold">How to Cook</h2>
                <p className="mb-5">{strInstructions}</p>
                <button onClick={() => navigate('/')} className="btn btn-primary">Go to Home Page</button>
            </div>
        </div>
    </div>
}

export default MealDetails;