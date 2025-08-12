function Card({ product, quantity }) {

    return (
        <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-bold mb-4">{product}</h2>
            <p className="text-gray-700">Quantity: {quantity}</p>
        </div>
    )
}

export default Card