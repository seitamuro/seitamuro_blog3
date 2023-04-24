import firebase from "firebase/app";

export enum TaskStatus {
  Done = "Done",
  NotStarted = "NotStarted",
  Progress = "Progress",
}

export type Task = {
  title: string;
  status: TaskStatus;
  timestamp: firebase.firestore.Timestamp;
};
