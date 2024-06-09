import { useQuery } from "@tanstack/react-query"
import { useSearchParams } from "react-router-dom"
const useProduct=()=>{
    
const [searchParams] = useSearchParams()
const sortFilter:string = searchParams.get('sort')??''

const { data, isPending } = useQuery({
    queryKey: ['/product',sortFilter],
    queryFn: async () => {
        let baseUrl:string = 'https://fakestoreapi.com/products'
        if (sortFilter) {
            baseUrl = baseUrl + '?sort=' + sortFilter
        }
        const response = await fetch(baseUrl)
        return await response.json()
    },
    gcTime: 20000
})
return { data, isPending }
}
export default useProduct