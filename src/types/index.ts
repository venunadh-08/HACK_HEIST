export interface User {
  id: string;
  email: string;
  role: 'organizer';
  name?: string;
}

export interface AttendanceRecord {
  userId: string;
  regNo: string;
  name: string;
  email: string;
  team: string;
  session1: boolean;
  session2: boolean;
  session3: boolean;
  session1_markedBy?: string; 
  session2_markedBy?: string;
  session3_markedBy?: string;
  lastUpdated: string;
}

export interface Session {
  id: number;
  name: string;
  startTime: string;
  endTime: string;
  isActive: boolean;
}
