import { ApiServiceFactory } from './ApiServiceFactory';

export class ApiService implements ApiServiceFactory {
    async login(username: string, password: string): Promise<boolean> {
        const response = await fetch('https://api.example.com/login', {
            method: 'POST',
            headers:  {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({username, password}),
        });

        if(!response.ok) {
            return false;
        }

        const data = await response.json();
        return data.success;
    }
}
