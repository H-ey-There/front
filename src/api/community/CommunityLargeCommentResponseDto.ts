export interface CommunityLargeCommentResponseDto {
    id: number,
    comment: string,
    createdAt: Date,
    modifiedAt?: Date,
    userId: number,
    email: string,
    name: string,
    userImg: string
}