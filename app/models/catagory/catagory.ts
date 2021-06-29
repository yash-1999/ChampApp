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
    mainCatagory : types.optional(types.frozen(),[]),
    userToken: types.optional(types.string,""),
    subCatagory : types.optional(types.array(types.frozen()),[])
  })
  .views((self) => ({})) // eslint-disable-line @typescript-eslint/no-unused-vars
  .actions((self) => ({
    authUser(token:string){
      self.userToken = token;
    },

    getMainCategoryData: flow(function* getMainCategoryData(id: number) {
      console.tron.log("id",id);
      const data = yield api.getCatagoriesById(id)
      if(data.kind == "ok") {
        
        self.mainCatagory = data.catagoryData.data;
        console.tron.log("self.maincatagory",self.mainCatagory);
        return true;
      }
      else {
        console.log("error");
        return false;
      }
    }),

    getSubCatagoryData: flow(function* getSubCatagoryData(id: number){
      const data = yield api.getCatagoriesById(id)
      console.tron.log("hello",data);
      if(data.kind == "ok") {
        
        let index = self.subCatagory.findIndex(x => x.parentID == id)
        if( index == -1){
          self.subCatagory.push({ parentID: id, media: data.catagoryData.data  })
        }
        else{
          self.subCatagory[id] = data.catagoryData.data;
        }
        console.tron.log("data.catagorydata",data.catagoryData);
        
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
