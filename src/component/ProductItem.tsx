interface IProductItemProps {
    title: string;
    price: number;
    image: string;
}
const ProductItem = ({ title, price, image }: IProductItemProps) => {

    return (
        <div>{title}</div>
    )
}

export default ProductItem