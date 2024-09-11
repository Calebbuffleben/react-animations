import { ApiService } from './ApiServiceFactory';

export class FakeApiService implements ApiService {
  async login(username: string, password: string): Promise<boolean> {
    // Simulate a fake API call
    console.log(`Logging in with ${username}:${password}`);
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(username === 'admin' && password === 'admin');
      }, 1000);
    });
  }
}