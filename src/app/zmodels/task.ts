import { Person } from "./person";
import { Location } from "./location";

export interface Task {
    id: string;
    taskName: string;
    taskDescription: string;
    whenToStart: Date;
    whenToComplete: Date;
    whenAssigned: Date;
    whenCompleted: Date;
    locations: Location[];
    peopleInvolved: Person[];
    images: string[];
    completed: boolean;
    toolsInvoled: string[];
}