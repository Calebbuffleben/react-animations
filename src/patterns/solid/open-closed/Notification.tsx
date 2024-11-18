import { FC } from "react";
import NotificationConfig from "./NotificationConfig";
import { NotificationProps } from "./types";

const Notification: FC<NotificationProps> = ({type, message}) => {
    const style = NotificationConfig[type];
    return <div style={style}>{message}</div>;
}

export default Notification;