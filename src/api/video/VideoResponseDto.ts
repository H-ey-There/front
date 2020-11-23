import {VideoCommentResponseDto} from "./VideoCommentResponseDto";

export interface VideoResponseDto {
    id: number,
    title: string,
    description: string,
    createdAt: Date,
    modifiedAt?: Date,
    thumbnailUrl: string,
    videoUrl: string
    viewCount: number
    userId: number,
    email: string,
    name: string,
    userImg?: string
    comments?: VideoCommentResponseDto[],
}