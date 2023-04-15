import { APP_ROUTES } from "@/constants/appRoutes";

export const checkRoute = (path: string): boolean => {
    const publicRoutes = Object.values(APP_ROUTES.public)

    return publicRoutes.includes(path)
}