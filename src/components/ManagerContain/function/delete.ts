import { notify } from "@/functions/notifications"
import { deleteProduct } from "@/services/api"

export const deleteItem = async (product: boolean, id: number): Promise<void> => {
    if (product) {
        const data = await deleteProduct(id)
        if (data) {
            notify("success", "Sucesso,", "Produto deletado com sucesso!")
        }
    }
}
