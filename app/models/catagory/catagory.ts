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
    subCatagory : types.optional(types.frozen(),[]),
    visitedSubCatagory : types.optional(types.frozen(),[]),
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
          //self.subCatagory.push({ parentID: id, media: data.catagoryData.data  })
          let newObject = { parentID: id, media: data.catagoryData.data  }
          console.tron.log("newObject", newObject);
          self.subCatagory = [...self.subCatagory,newObject]
        }
        else{
        //   let tempArray = [...self.subCatagory];
        //  tempArray[index] = data.catagoryData.data;
        //  self.subCatagory = tempArray;
        }
        console.tron.log("data.catagorydata",data.catagoryData);
        
        return true;
      }
      else {
        console.log("error");
        return false;
      }
    }),

    getVisitedSubCatagory: flow(function* getVisitedSubCatagory(newArray: any){
      //const data = yield api.getCatagoriesById(id)
      //console.tron.log("hello",data);
      //if(data.kind == "ok") {
        console.tron.log("catagory newArray",newArray)
        
        let index = self.visitedSubCatagory.findIndex(x => x.parentID == newArray.parentID && x.category_id == newArray.category_id && x.id == newArray.id)
        console.tron.log("index",index);
        if( index == -1){

          let tempArray = [...self.visitedSubCatagory,newArray]
          console.tron.log("tempArray", tempArray);
          self.visitedSubCatagory = tempArray

          //self.visitedSubCatagory.push(newArray)
          console.tron.log("self.visitedSubCatagory",newArray);
        }
        else{
          //self.subCatagory[id] = data.catagoryData.data;
        }
        //console.tron.log("data.catagorydata",data.catagoryData);
        
        //return true;
      //}
      //else {
       // console.log("error");
       // return false;
     // }
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
