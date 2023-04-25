import { deleteProduct } from "@/services/api"

export const deleteItem = async (product: boolean, id: number): Promise<boolean> => {
    if (product) {
        const data = await deleteProduct(id)
        return data
    }
    return false
}
