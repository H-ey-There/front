import {CommunityCommentResponseDto} from "./CommunityCommentResponseDto";
import {CommunityPictureResponseDto} from "./CommunityPictureResponseDto";

export interface CommunityPostResponseDto {
    id:number,
    title: string,
    content: string,
    createdAt: Date,
    modifiedAt?: Date ,
    userId: number,
    email: string,
    name: string,
    userImg: string,
    good: number,
    bad: number,
    pressedGood: boolean
    pressedBad: boolean,
    imgUrls?: CommunityPictureResponseDto[],
    comments?: CommunityCommentResponseDto[]
}