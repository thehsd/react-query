import useProduct from "../hooks/useProduct"
import ProductItem from "./ProductItem";
import { useSearchParams } from "react-router-dom";

interface IProductItemProps {
    title: string;
    price: number;
    image: string;
    id: number;
}
const PostList = () => {

    const [, setSearchParams] = useSearchParams()
    const handleFilter = (param: string) => {
        const qs = param ? `sort=${param}` : ''
        setSearchParams(qs)

    }
    const { data, isPending } = useProduct()
    if (isPending) return (<>loading...</>)


    return (
        <>
            <button onClick={() => handleFilter('')}>all</button>
            |  <button onClick={() => handleFilter('asc')}>asc</button>
            |   <button onClick={() => handleFilter('desc')}>desc</button>
            <div>
                {!isPending && data?.map((product: IProductItemProps) => {

                    return <ProductItem
                        key={product.id}
                        title={product.title}
                        price={product.price}
                        image={product.image}
                    />
                })}
            </div>
        </>
    )
}

export default PostList