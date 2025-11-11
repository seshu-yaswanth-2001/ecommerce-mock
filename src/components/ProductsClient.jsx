import Link from "next/link";

const ProductsClient = (props) => {
    const {products} = props;

    return (
        <div>
            {products?.map((product) => (
                <div key={product.id}>
                    <h1>
                        <Link href={`/products/${product.id}`}>{product.title}</Link>
                    </h1>
                </div>
            ))}
        </div>
    )
}

export default ProductsClient;