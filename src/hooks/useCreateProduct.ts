import { useMutation, useQueryClient } from "@tanstack/react-query"

const useCreateProduct=()=>{
    // const client = useQueryClient()
const {mutate, mutateAsync} = useMutation({
    mutationFn:(data)=>{
        return fetch('https://fakestoreapi.com/products',{
            method:"POST",
            body:JSON.stringify(
                {
                    ...data
                }
            )
        })
    }
})
// client.invalidateQueries({queryKey: ['/product']})

return {mutate,mutateAsync}
}


export default useCreateProduct