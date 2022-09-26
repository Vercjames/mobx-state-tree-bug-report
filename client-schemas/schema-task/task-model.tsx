import { types, Instance, SnapshotIn, SnapshotOut } from "mobx-state-tree"


// Mobx Controller || Model Definition
// =====================================================================================================================
// =====================================================================================================================
export const TaskModel = types.model({
  id: types.identifier,
  title: types.string,
  description: types.string
  // The hacky code
  // description: types.optional(types.maybeNull(types.string), ""),
}).actions((self: any) => ({
  setTitle(title: string) {
    self.title = title
  },
  setDescription(description: string) {
    self.description = description
  },
}))


// Mobx Controller || Interface Exports
// =====================================================================================================================
// =====================================================================================================================
export interface ITaskModel extends Instance<typeof TaskModel> { }
export interface ITaskModelSnapshotIn extends SnapshotIn<typeof TaskModel> { }
export interface ITaskModelSnapshotOut extends SnapshotOut<typeof TaskModel> { }
