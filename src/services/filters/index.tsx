import { makeData } from "../../utils/makeData";

async function getForMultiSelect(type: string, query: string[]) {
 if (type === "brands_api") {
  return makeData.carsBrands();
 }

 if (type === "models_api") {
  return makeData.carsModels(query);
 }

 if (type === "colors_api") {
  return makeData.carsColors(query);
 }

 return [];
}

export const filterService = {
 getForMultiSelect,
};
