export default function CarCard(props)
{

    return(
        <div className="car-card">
            <img src="{props.image}" alt="{props.name}" />
            <h2>{props.name}</h2>
            <p>{props.type}</p>
            <h3>{props.price}</h3>
            <button>View Details</button>

        </div>
    )
}