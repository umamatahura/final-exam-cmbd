import { useNavigate } from "react-router-dom";

function MealCard({ meal }) {
    const navigate = useNavigate();

    const { strMeal, strCategory, strArea, strTags, strMealThumb, idMeal } = meal;


    return <div className="card card-compact w-full bg-base-100 shadow-xl">
        <figure className="h-60"><img src={strMealThumb} alt="meal thumbnail" /></figure>
        <div className=" p-5 flex flex-col justify-between gap-5">
            <div className="h-24">
                <h2 className="card-title">{strMeal}</h2>
                {strTags && <h6>Tags: {strTags.split(',').splice(0, 4).join(', ')}</h6>}
                <h6>Category: {strCategory}</h6>
                <h6>Origin: {strArea}</h6>
            </div>
            <div className=" flex justify-end ">
                <button
                    onClick={() => navigate(`meal-detals/${idMeal}`)}
                    className="btn btn-primary btn-sm">View Details</button>
            </div>
        </div>
    </div>
}

export default MealCard;