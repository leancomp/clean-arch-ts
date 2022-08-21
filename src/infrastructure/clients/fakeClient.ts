export class FakeClient {
    public mimic(o: any): Promise<any> {
        return Promise.resolve(o)
    }
}