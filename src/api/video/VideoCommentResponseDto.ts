import {VideoLargeCommentResponseDto} from "./VideoLargeCommentResponseDto";

export interface VideoCommentResponseDto {
    id:number,
    comment: string,
    createdAt:Date
    modifiedAt?: Date
    userId: number,
    email: string,
    name: string,
    userImg: string
    largeComments?: VideoLargeCommentResponseDto[],
}