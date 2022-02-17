export interface ISurePromise <T> {
    success: boolean
    data: T
    status: number
    blob?: Blob
}
