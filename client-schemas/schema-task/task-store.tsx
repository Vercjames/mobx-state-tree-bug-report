import { types, Instance, SnapshotIn, SnapshotOut } from "mobx-state-tree"
import { TaskModel } from "./task-model"


// Mobx Controller || Model Definition
// =====================================================================================================================
// =====================================================================================================================
export const TaskStore = types.model({
  TaskCollection: types.optional(types.array(TaskModel), [
    {id: 0, description: "description for task: 0"},
    {id: 1, description: "description for task: 1"},
  ]),
}).actions((self: any) => ({
  addTask(id: number, description: string) {
    self.TaskCollection.push({ title, description })
  },
}))


// Mobx Controller || Interface Exports
// =====================================================================================================================
// =====================================================================================================================
export interface ITaskStore extends Instance<typeof TaskStore> { }
export interface ITaskStoreSnapshotIn extends SnapshotIn<typeof TaskStore> { }
export interface ITaskStoreSnapshotOut extends SnapshotOut<typeof TaskStore> { }


