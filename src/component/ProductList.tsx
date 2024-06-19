import useProduct from "../hooks/useProduct"
import ProductItem from "./ProductItem";
import { useSearchParams } from "react-router-dom";
import { useForm } from 'react-hook-form'
import useCreateProduct from '../hooks/useCreateProduct';

interface IProductItemProps {
    title: string;
    price: number;
    image: string;
    id: number;
}
interface IFormData {
    category: string;
    description: string;
    image: string;
    price: string;
    title: string;
}
const PostList = () => {
    const { register, handleSubmit, formState: { errors }
    } = useForm<IFormData>()
    const { mutateAsync } = useCreateProduct()
    const [, setSearchParams] = useSearchParams()
    const handleFilter = (param: string) => {
        const qs = param ? `sort=${param}` : ''
        setSearchParams(qs)

    }
    const { data, isPending } = useProduct()
    if (isPending) return (<>loading...</>)



    const handleFromSubmit = (data: IFormData) => {
        mutateAsync(data).then((result) => {
            console.log(result);

        }).catch((err) => {

        });

    }

    return (
        <>
            <div>
                <form onSubmit={handleSubmit(handleFromSubmit)}>
                    <div>
                        <label htmlFor="title">Title</label>
                        <input {...register('title', { required: true })} type="text" id='title' />
                        {errors.title && <span style={{ color: 'red' }}>error</span>}
                    </div>
                    <div>
                        <label htmlFor="price">Price</label>
                        <input {...register('price')} type="text" id='price' />
                    </div>
                    <div>
                        <label htmlFor="description">Description</label>
                        <input {...register('description')} type="text" id='description' />
                    </div>
                    <div>
                        <label htmlFor="image">Image</label>
                        <input {...register('image')} type="text" id='image' value={'https://i.pravatar.cc'} />
                    </div>
                    <div>
                        <label htmlFor="category">Category</label>
                        <input {...register('category')} type="text" id='category' />
                    </div>
                    <button >click me</button>
                </form>
            </div>

            <br />
            <br />

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




