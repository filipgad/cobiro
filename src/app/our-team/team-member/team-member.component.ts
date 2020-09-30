import {Component, Input} from '@angular/core';

import {IMemberData} from '../models/member-data';
import {MemberAvatar} from '../models/member-avatar';

@Component({
  selector: 'app-team-member',
  templateUrl: './team-member.component.html',
  styleUrls: ['./team-member.component.scss']
})
export class TeamMemberComponent {

  @Input()
  memberKey: string;
  @Input()
  memberAvatar: MemberAvatar;
  @Input()
  memberData: IMemberData;

}
