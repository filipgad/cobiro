export interface IMemberAvatar {
    w200: string;
    w400: string;
    w1080: string;
    w1920: string;
    w2560: string;
}

export class MemberAvatar implements IMemberAvatar {
    public w200: string;
    public w400: string;
    public w1080: string;
    public w1920: string;
    public w2560: string;

    constructor(avatars: IMemberAvatar) {
        this.w200 = avatars.w200;
        this.w400 = avatars.w400;
        this.w1080 = avatars.w1080;
        this.w1920 = avatars.w1920;
        this.w2560 = avatars.w2560;
    }

    getAvatar(): string {
        const screenWidth = window.innerWidth;
        if (screenWidth <= 200) {
            return this.w200;
        } else if (screenWidth <= 400) {
            return this.w400;
        } else if (screenWidth <= 1080) {
            return this.w1080;
        } else if (screenWidth <= 1920) {
            return this.w1920;
        } else {
            return this.w2560;
        }
    }
}
