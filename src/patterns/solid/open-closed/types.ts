// Define a type for notification styles
export type NotificationType = 'success' | 'error' | 'info';

export interface NotificationProps {
    type: NotificationType;
    message: string;
}