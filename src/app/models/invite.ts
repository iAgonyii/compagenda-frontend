export class Invite {
  id: number;
  teamName: string;
  userId: number;
  status: InviteStatusEnum;
}

enum InviteStatusEnum {
  Pending,
  Accepted,
  Rejected
}
