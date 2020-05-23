export class Invite {
  id: number;
  teamId: number;
  userId: number;
  status: InviteStatusEnum;
}

enum InviteStatusEnum {
  Pending,
  Accepted,
  Rejected
}
