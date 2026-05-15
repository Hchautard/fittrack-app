import { Injectable } from '@angular/core';
import { Workout } from '@models/workout';

@Injectable({
  providedIn: 'root'
})
export class WorkoutService {

  getAllWorkouts(): undefined {
    // TODO: Replace with real data fetching logic
  }

  getAllWorkoutsByUserId(userId: number): Workout[]|undefined {
    return undefined;
  }

}
