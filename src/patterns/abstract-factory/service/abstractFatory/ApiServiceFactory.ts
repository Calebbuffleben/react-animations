export interface ApiServiceFactory {
    login(username: string, password: string): Promise<boolean>
}