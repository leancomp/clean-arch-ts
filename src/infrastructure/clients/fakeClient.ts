export class FakeClient {
    private isConnected = false

    public connect(): void {
        this.isConnected = true
        return
    }

    public mimic(o: any): Promise<any> {
        if (!this.isConnected) {
            throw new Error('Client is not connected')
        }
        return Promise.resolve(o)
    }
}