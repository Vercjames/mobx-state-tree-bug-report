import { types, Instance, SnapshotIn, SnapshotOut } from "mobx-state-tree"
import { TaskModel } from "./task-model"


// Mobx Controller || Model Definition
// =====================================================================================================================
// =====================================================================================================================
export const TaskStore = types.model({
  TaskCollection: types.optional(types.array(TaskModel), [
    {id: "1", title: "task #1", description: "description for task: 1"},
    {id: "2", title: "task #2", description: "description for task: 2"},
  ]),
}).actions((self: any) => ({
  addTask(title: string, description: string) {
    self.TaskCollection.push({ id:`${self.TaskCollection.length + 1}`, title: title, description: description })
  },
}))


// Mobx Controller || Interface Exports
// =====================================================================================================================
// =====================================================================================================================
export interface ITaskStore extends Instance<typeof TaskStore> { }
export interface ITaskStoreSnapshotIn extends SnapshotIn<typeof TaskStore> { }
export interface ITaskStoreSnapshotOut extends SnapshotOut<typeof TaskStore> { }


