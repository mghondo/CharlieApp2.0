import {Injectable} from '@angular/core'
import { Task } from '../zmodels/task'

@Injectable()
export class TaskService {
    getTasks() {
        return [
            {
            id: 1,
            taskName: 'Mow Grass',
            taskDescription: 'Use the mower in Shedrixs garage.',
            whenToStart: 1678584489000,
            whenToComplete: 1678757289000,
            whenAssigned: 1678325289000,
            whenCompleted: 1678498089000,
            locations: ['Thistlegate'],
            peopleInvolved: ['Tyler', 'Jared'],
            images: [],
            completed: true,
            toolsInvoled: ['lawn mower', 'fuel']
            },
            {
            id: 2,
            taskName: 'Feed Chickens',
            taskDescription: 'Grab the food from Shedrix barn. 3 gallons',
            whenToStart: 1679232489000,
            whenToComplete: 1679234400000,
            whenAssigned: 1678716000000,
            whenCompleted: 1679234400000,
            locations: ['Thistlegate'],
            peopleInvolved: ['Morgan', 'Bob'],
            images: [],
            completed: true,
            toolsInvoled: ['chicken feed', 'water']
            },
            {
            id: 3,
            taskName: 'Feed Cattle',
            taskDescription: 'Food is in the barn on the North West corner.',
            whenToStart: 1679968839000,
            whenToComplete: 1680141639000,
            whenAssigned: 1679277639000,
            // whenCompleted: 0,
            locations: ['Potter Farm'],
            peopleInvolved: ['Tyler', 'Brice'],
            images: [],
            completed: false,
            toolsInvoled: ['wheel barrow', 'feed bags']
            },
            {
            id: 4,
            taskName: 'Water Flowers',
            taskDescription: 'Hose is on the side of the main house.',
            whenToStart: 1679968832000,
            whenToComplete: 1680141638000,
            whenAssigned: 1679277630000,
            // whenCompleted: 0,
            locations: ['Potter Farm'],
            peopleInvolved: ['Suzette', 'Lexi'],
            images: [],
            completed: false,
            toolsInvoled: ['Hose', 'Faucet']
            },
            {
            id: 5,
            taskName: 'Pump Water',
            taskDescription: 'Make sure it has gas and oil. plug into plug down by the pond',
            whenToStart: 1679958832000,
            whenToComplete: 1680181638000,
            whenAssigned: 1679237630000,
            // whenCompleted: 0,
            locations: ['Potter Farm'],
            peopleInvolved: ['Suzette', 'Lexi'],
            images: [],
            completed: false,
            toolsInvoled: ['Hose', 'Faucet']
            },


        ]
    }

    getCompleted(task:Task){
        if (task.completed === true){
            return "Completed"
        } else {
            return "Incomplete"
        }
    }

    getOnlyCompleted(){
        return this.getTasks().filter((task: any)=>{
            return task.completed === true;
        })
    }

    getOnlyIncompleted(){
        return this.getTasks().filter((task: any)=>{
            return task.completed === false;
        }) 
    }


}