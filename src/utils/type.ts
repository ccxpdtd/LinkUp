
export interface Member {
  name: string;
  avatar: string;
  status: 'online' | 'offline';
}

export interface GroupFile {
  name: string;
  size: string;
  iconClass: string;
}

export interface Message {
  id: string;
  sender: string;
  avatar: string;
  text: string;
  time: string;
  isSelf?: boolean;
}

export interface ChatItem {
  id: number;
  name: string;
  avatar: string;
  preview: string;
  memberCount: number;
  messages: Message[];
  onlineMembers?: Member[];
  offlineMembers?: Member[];
  groupFiles?: GroupFile[];
}

