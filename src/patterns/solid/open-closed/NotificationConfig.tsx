import React from 'react';
import { NotificationType } from './types';

const NotificationConfig: Record<NotificationType, React.CSSProperties> = {
    success: { color: 'green', border: '1px solid green' },
    error: { color: 'red', border: '1px solid red' },
    info: { color: 'blue', border: '1px solid blue' },
}

export default NotificationConfig;