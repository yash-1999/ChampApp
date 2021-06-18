import { flow, Instance, SnapshotOut, types } from "mobx-state-tree"
import { Api } from "../../services/api"

/**
 * Model description here for TypeScript hints.
 */
const api = new Api()
api.setup()

export const CatagoryModel = types
  .model("Catagory")
  .props({
    mainCatagory : types.optional(types.frozen(),[])
  })
  .views((self) => ({})) // eslint-disable-line @typescript-eslint/no-unused-vars
  .actions((self) => ({
    getMainCategoryData: flow(function* getMainCategoryData(id: number) {
      const data = yield api.getCatagoriesById(id)
      if(data.kind == "ok") {
        //console.tron.log(data.catagoryData);
        self.mainCatagory = data.catagoryData.data;
        return true;
      }
      else {
        console.log("error");
        return false;
      }
    }),

  })) // eslint-disable-line @typescript-eslint/no-unused-vars

/**
 * Un-comment the following to omit model attributes from your snapshots (and from async storage).
 * Useful for sensitive data like passwords, or transitive state like whether a modal is open.

 * Note that you'll need to import `omit` from ramda, which is already included in the project!
 *  .postProcessSnapshot(omit(["password", "socialSecurityNumber", "creditCardNumber"]))
 */

type CatagoryType = Instance<typeof CatagoryModel>
export interface Catagory extends CatagoryType {}
type CatagorySnapshotType = SnapshotOut<typeof CatagoryModel>
export interface CatagorySnapshot extends CatagorySnapshotType {}
export const createCatagoryDefaultModel = () => types.optional(CatagoryModel, {})
