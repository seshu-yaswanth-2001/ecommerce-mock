import ProductsClient from "@/components/ProductsClient";

const fetchData = async() => {
    try {
        const response = await fetch("https://dummyjson.com/products");
        
        if(!response.ok) {
            const errorText = await result.text();
            console.log(errorText);
            throw new Error(`HTTP error stauts: ${response.status}`)
        }

        const result = await response.json();
        return result.products;
    }catch (err) {
        throw new Error(err);
    }
}

const Products = async() => {
    const productsData = await fetchData();

    return (
        <div>
            <ProductsClient products={productsData} />
        </div>
    )
}

export default Products;