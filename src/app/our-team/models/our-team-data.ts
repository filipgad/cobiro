import {Member} from './member';

export interface IOurTeamData {
    title: string;
    members: Member[];
}

export class OurTeamData implements IOurTeamData {
    public title: string;
    public members: Member[];

    constructor(ourTeamData: any) {
        this.title = ourTeamData.title;
        this.members = Object.entries(ourTeamData.memberCards).map(([key, value]) => {
            return new Member({
                memberKey: key,
                memberAvatar: (value as any).imageUrl,
                memberData: (value as any).block
            });
        });
    }
}
