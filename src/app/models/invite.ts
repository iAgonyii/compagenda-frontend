export class Invite {
  id: number;
  teamName: string;
  userId: number;
  status: InviteStatusEnum;
}

export enum InviteStatusEnum {
  Pending,
  Accepted,
  Rejected
}
