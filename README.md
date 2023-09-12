# REACT DEPENDENT MULTI SELECT

A multi-select component that has a dependency on previous field values. Select the initial values and see the next select load according the result.

<hr/>

<h2> Implementing the component</h2> 

In the folder src/components/multislect we have the main component and your styles.

In pages/home we have an implementation model that includes the component and its dependent structures

<h3> 1. Filter state - stores selected values</h3>

<code>
const [filter, setFilter] = useState({
carsBrands: [],
carsModels: [],
carsColors: [],
});
</code>

<h3> 2. Function HandleSubmitOptions - sets the filter according to the selected values and clear the options according IdClear</h3> 

<code>
function handleSubmitOptions(id: string, values: string[], idClear?: string) {
if (values.length > 0) {
setFilter({
...filter,
[id]: values,
});
}

if (idClear) {
setFilter({
...filter,
[id]: values,
[idClear]: [],
});
}
}
</code>

<h3> 3. Component - Calling the component and its properties</h3> 

<blockquote>
typeOption - Used to call the corresponding api to load data from that select
label - For label select
id - Determines an identifier for that select
idClear - Used to clean the filter. It must always be the ID of the next select
handleSubmitOptions - Function that sets the data in the main filter
required - True or False
value - Select filter values
</blockquote>

<code>
<Multiselect
    typeOption="brands_api"
    label="Brands"
    id="carsBrands"
    idClear="carsModels"
    handleSubmitOptions={handleSubmitOptions}
    required
    value={filter.carsBrands}
   />
</code>

<hr/>

<h2>Style classes</h2>

.label  - Label select
.select - input
.selectPlaceholder - Placeholder Text
.selectPlaceholder li - After selected itens
.selectClear && .selectOpen - Icons
.selectOptions - Options box
.button - Handle submit button options

<hr/>

<h2>Implementing API</h2>

You can load your API according to the select type (typeOption) and its dependent values (value(filterIdDependent)).

In this example case we are working with mocked data, but it is possible to integrate with a database API. In src/services we have a example of implementation: 

<code>
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
</code>

<hr/>

This is a component under development and continues to improve. If you have any suggestions, please make your contribution.


