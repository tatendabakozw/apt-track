/* eslint-disable @typescript-eslint/no-explicit-any */
// unique key for all items should have name of _id
// key should be called _id because database being used is mongodb

// remove item from array
export const removeFromArray = (arr: any[], key: string) => {
    const new_array = arr.filter((item: { _id: string }) => item._id !== key);
    return new_array;
  };
  
  // add any item to the array
  export const addToArray = (arr: any[], newItem: any) => {
    const new_arr = [...arr, newItem];
    return new_arr;
  };
  
  // add to array if it doesnt exist
  export const addUniqueToArray = (arr: any[], key: string, newItem: any) => {
    const existItem = arr.find((item: { _id: string }) => item._id === key); // check if item already exists
    const new_array = existItem
      ? arr.map((item: { _id: string }) => (item._id === key ? newItem : item))
      : [...arr, newItem]; // add if its not tehre
    return new_array;
  };
  
  // check if item already exists in array
  export const doesItemExist = (arr: any[], key: string) => {
    const newitem = arr.find((item) => item._id === key);
    const exists = newitem ? true : false;
    return exists;
  };
  
  // find arraay and return it
  export const getItemFromArray = (arr: any[], key: string) =>{
    const newitem = arr?.find((item) => item._id === key);
    return newitem;
  }