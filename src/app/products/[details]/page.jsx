import ProductDetails from "@/components/ProductsDetails";

const fetchData = async(productId) => {
    try {
        const response = await fetch(`https://dummyjson.com/products/${productId}`);
        
        if(!response.ok) {
            const errorText = await response.text();
            console.log(errorText);
            throw new Error(`HTTP error stauts: ${response.status}`)
        }

        const result = await response.json();
        return result;
    }catch (err) {
        throw new Error(err.message);
    }
}

const Details = async({params}) => {
    const {details} = await params;
    const productDetails = await fetchData(details);
    
    return (
        <>
            <ProductDetails details={productDetails} />
        </>
    )
}

export default Details;