import {IMemberData} from './member-data';
import {IMemberAvatar, MemberAvatar} from './member-avatar';

export interface IMember {
    memberKey: string;
    memberData: IMemberData;
    memberAvatar: IMemberAvatar;
}

export class Member implements IMember {
    public memberKey: string;
    public memberData: IMemberData;
    public memberAvatar: MemberAvatar;

    constructor(member: IMember) {
        this.memberKey = member.memberKey;
        this.memberData = member.memberData;
        this.memberAvatar = new MemberAvatar(member.memberAvatar);
    }
}
