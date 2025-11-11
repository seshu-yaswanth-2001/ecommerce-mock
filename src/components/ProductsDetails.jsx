import Link from "next/link";

const ProductDetails = (params) => {
    const {details} = params;

    console.log(details)

    return (
        <div>
            <Link className="underline text-bold" href="/products">Back</Link>
            <h1>{details.title}</h1>
        </div>
    )
}

export default ProductDetails;