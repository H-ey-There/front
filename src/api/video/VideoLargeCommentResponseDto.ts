export interface VideoLargeCommentResponseDto {
    id:number,
    comment: string,
    createdAt:Date
    modifiedAt?: Date
    userId: number,
    email: string,
    name: string,
    userImg?: string
}