import {CommunityLargeCommentResponseDto} from "./CommunityLargeCommentResponseDto";

export interface CommunityCommentResponseDto {
    id: number,
    comment: string,
    createdAt: Date,
    modifiedAt?: Date,
    userId: number,
    email: string,
    name: string,
    userImg: string,
    largeComments: CommunityLargeCommentResponseDto[],
}