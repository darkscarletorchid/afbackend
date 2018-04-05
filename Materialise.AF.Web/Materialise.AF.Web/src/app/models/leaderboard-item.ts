// export class LeaderboardItem {
//   userId: number;
//   userName: string;
//   progress: string;
//   markers: Array<UserMarker>;
// }

// class UserMarker {
//   markerId: string;
//   letter: string;
//   timestamp: string;
// }

export class LeaderboardItem {
  no: number;
  userName: string;
  progress: string;
  itemsFound: number;
}

class UserMarker {
  markerId: string;
  letter: string;
  timestamp: string;
}