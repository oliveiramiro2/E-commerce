import { Store } from 'react-notifications-component';

export const notify = (type: "danger" | "default" | "success" | "info" | "warning", title: string, message: string) => (
    Store.addNotification({
        title,
        message,
        type,
        insert: "top",
        container: "top-right",
        animationIn: ["animate__animated", "animate__zoomIn"],
        animationOut: ["animate__animated", "animate__zoomOut"],
        dismiss: {
          duration: 5000,
          onScreen: true,
          showIcon: true,
        }
    })
);
