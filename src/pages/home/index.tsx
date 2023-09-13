import { useState } from "react";
import { Multiselect } from "../../components/Multiselect";
import styles from "./index.module.css";
import { CodeBlock, dracula } from "react-code-blocks";

export function Home() {
 const [filter, setFilter] = useState({
  carsBrands: [],
  carsModels: [],
  carsColors: [],
 });
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

 function handleClear() {
  setFilter({
   carsBrands: [],
   carsModels: [],
   carsColors: [],
  });
 }

 return (
  <div className={styles.content}>
   <div className={styles.contentPreview}>
    <h1>React Dependent Select</h1>

    <p>
     A multi select component that has a dependency on previous field values.
     Select the initial values and see the next select load according the
     options.
    </p>
   </div>

   <div className={styles.gridSelects}>
    <Multiselect
     typeOption="brands_api"
     label="Brands"
     id="carsBrands"
     idClear="carsModels"
     handleSubmitOptions={handleSubmitOptions}
     required
     value={filter.carsBrands}
    />

    <Multiselect
     typeOption="models_api"
     label="Models"
     id="carsModels"
     idClear="carsColors"
     idDependentOption={filter.carsBrands}
     handleSubmitOptions={handleSubmitOptions}
     required
     value={filter.carsModels}
    />

    <Multiselect
     typeOption="colors_api"
     label="Colors"
     id="carsColors"
     idDependentOption={filter.carsModels}
     handleSubmitOptions={handleSubmitOptions}
     required
     value={filter.carsColors}
    />
   </div>

   <div className={styles.contentAlign}>
    <button onClick={() => handleClear()}>
     <span className="material-symbols-outlined">delete_sweep</span>Clear filter
    </button>{" "}
   </div>

   <div className={styles.contentDocumentation}>
    <h2> History</h2>
    v1.0 - September 2023 - first version
    <hr />
    <h2> Usage</h2>
    <h3>
     In the folder <strong>src/components/multiselect</strong> we have the main
     component, styles and your functions:
    </h3>
    <p>
     <strong>loadOptions </strong>- Makes the call to the API that returns the
     options to be set in the state (listOptions).
    </p>
    <CodeBlock
     text="   async function load(type: string, idDependent: string[]) {
        const result = await filterService.getForMultiSelect(type, idDependent);
        if (result) {
         setListOptions([{ label: 'Select All', value: '' }, ...result]);
        }
       }
  
  "
     language="javascript"
     showLineNumbers={true}
    />
    <p>
     <strong>clickCheckbox </strong>- Receives the click and checks its status,
     if true, adding to the state (selectedItems)
    </p>
    <CodeBlock
     theme={dracula}
     text="  function clickCheckbox(item: number, name: string) {
        const verifyItem = [...selectedItems];
        const verifyNames = [...namesSelecteds];
      
        if (verifyItem[item] === false) {
         if (name !== 'Select All') {
          verifyItem[item] = true;
          verifyNames.push(name);
          setNamesSelecteds(verifyNames);
         } else {
          verifyNames.splice(0, verifyNames.length);
          listOptions.forEach((itens: { label: string; value: string }) =>
           verifyNames.push(itens.label)
          );
          verifyNames.splice(0, 1);
          setNamesSelecteds(verifyNames);
          verifyItem.splice(0, verifyItem.length);
          selectedItems.forEach((status: boolean, index: number) => {
           if (!status) {
            verifyItem[index] = true;
           }
          });
         }
        } else if (verifyItem[item] === true) {
         if (name !== 'Select All') {
          verifyItem[0] = false;
          verifyItem[item] = false;
      
          setNamesSelecteds(verifyNames);
          const validateIndex = verifyNames.indexOf(name);
          verifyNames.splice(validateIndex, 1);
         } else {
          setNamesSelecteds([]);
          selectedItems.forEach((status: boolean, index: number) => {
           verifyItem[index] = !status;
          });
         }
        }
      
        setSelectedItems(verifyItem);
       }
  "
     language="javascript"
     showLineNumbers={true}
    />
    <p>
     <strong>handleSubmit </strong>- Checks the checked options and calls the
     function that returns the final array of selected options
     (HandleSubmitOptions)
    </p>
    <CodeBlock
     theme={dracula}
     text="    function handleSubmit() {
        const itensTrue: number[] = [];
        const selectedOptions: string[] = [];
        selectedItems.forEach((item, index) => {
         if (item === true) {
          itensTrue.push(index);
         }
        });
        listOptions.forEach((item, index) => {
         if (itensTrue.includes(index)) {
          selectedOptions.push(item.value);
         }
         handleSubmitOptions(id, selectedOptions, idClear);
         setShowOptions(false);
        });
       }
  
  "
     language="javascript"
     showLineNumbers={true}
    />
    <p>
     <strong>handleClear </strong>- Clears all values and states of the defined
     id
    </p>
    <CodeBlock
     theme={dracula}
     text="    function handleClear() {
        setSelectedItems([]);
        setNamesSelecteds([]);
        setShowOptions(false);
        handleSubmitOptions(id, [], idClear);
       }
  "
     language="javascript"
     showLineNumbers={true}
    />
    <h3>
     In <strong>pages/home</strong> we have an implementation model that
     includes the component and its dependent structures:
    </h3>
    <p>
     <strong>Filter state</strong> - stores selected values
    </p>
    <CodeBlock
     theme={dracula}
     text="const [filter, setFilter] = useState({
        carsBrands: [],
        carsModels: [],
        carsColors: [],
        });"
     language="javascript"
     showLineNumbers={true}
    />
    <p>
     <strong>Function HandleSubmitOptions </strong> - sets the filter according
     to selected values and clear the next select values (according IdClear)
    </p>
    <CodeBlock
     theme={dracula}
     text="function handleSubmitOptions(id: string, values: string[], idClear?: string) {
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
        }"
     language="typescript"
     showLineNumbers={true}
    />
    <p>
     <strong>handleClear </strong>- Set filter to initial state
    </p>
    <CodeBlock
     theme={dracula}
     text="     function handleClear() {
      setFilter({
       carsBrands: [],
       carsModels: [],
       carsColors: [],
      });
     }
  "
     language="javascript"
     showLineNumbers={true}
    />
    <p>
     <strong> Component </strong> - Calling the component and its properties
    </p>
    <CodeBlock
     theme={dracula}
     text=" <Multiselect
     typeOption='models_api'
     label='Models'
     id='carsModels'
     idClear='carsColors
     idDependentOption={filter.carsBrands}
     handleSubmitOptions={handleSubmitOptions}
     required
     value={filter.carsModels}
    />"
     language="javascript"
     showLineNumbers={true}
    />
    <p>
     <strong>Props</strong>
    </p>
    <table>
     <tr>
      <th>Name</th>
      <th>Type</th>
      <th>Description</th>
     </tr>
     <tr>
      <td>typeOption</td>{" "}
      <td className={styles.contentDocumentationHighlight}>string</td>{" "}
      <td>Used to call the corresponding api to load data from that select</td>
     </tr>
     <tr>
      <td>label</td>{" "}
      <td className={styles.contentDocumentationHighlight}>string</td>{" "}
      <td>For label description</td>
     </tr>
     <tr>
      <td>id</td>{" "}
      <td className={styles.contentDocumentationHighlight}>string</td>
      <td>For label select id - Determines an identifier for select</td>
     </tr>
     <tr>
      <td>idClear</td>{" "}
      <td className={styles.contentDocumentationHighlight}>string</td>
      <td>
       Used to clean the filter. It must always be the ID of the next select
       handleSubmitOptions
      </td>
     </tr>
     <tr>
      <td>idDependentOption</td>{" "}
      <td className={styles.contentDocumentationHighlight}>function()</td>
      <td>Function that sets the data in the main filter</td>
     </tr>
     <tr>
      <td>required</td>{" "}
      <td className={styles.contentDocumentationHighlight}>boolean</td>
      <td>If true, shows the description of 'required'</td>
     </tr>
     <tr>
      <td>value</td>{" "}
      <td className={styles.contentDocumentationHighlight}>string[]</td>
      <td>Select filter values</td>
     </tr>
    </table>
    <hr />
    <h2>Style guide</h2>
    <p>
     The Component has important classes . But you can adapt to your needs and
     build your own style.
    </p>
    <CodeBlock
     theme={dracula}
     text="   /*  Defines the size of the box */

     .selectContainer {
      position: relative;
      width: 100%;
     }
     
     /*  Defines the label appearance */
     
     .label {
      margin-bottom: 8px;
      font-size: 14px;
     }
     
     /*  Defines the select box appearance */
     
     .select {
      height: 35px;
      padding: 3px 5px;
      display: flex;
      justify-content: space-around;
      align-items: center;
      border-radius: 10px;
     }
     
     /* Defines the width and style for placeholder */
     
     .selectPlaceholder {
      width: 95% !important;
      padding: 5px;
      text-align: left;
      font-size: 12px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
     }
     
     /*  Defines the appearance of selected items  */
     
     .selectPlaceholder ul {
      margin: 0;
      padding: 0;
      display: flex;
     }
     
     .selectPlaceholder li {
      padding: 5px;
      margin: 0 3px;
      list-style: none;
     }
     
     /*  Defines the appearance of action selectors  */
     
     .selectClear {
      max-width: 25px !important;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
     }
     
     .selectOpen {
      max-width: 25px !important;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 600;
     }
     
     .selectOpen svg,
     .selectClear svg {
      width: 20px;
     }
     
     /*  Defines the appearance of box options  */
     
     .selectOptions {
      max-height: 200px;
      overflow: scroll;
      padding: 7px 5px 0px 5px;
      position: absolute;
      top: 65px;
      z-index: 1;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;
      overflow-x: hidden;
     }
     .selectOptions ul {
      margin: 0;
      padding: 0;
     }
     
     .selectOptions li {
      min-height: 40px;
      list-style: none;
      padding: 5px 0;
      font-size: 12px;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: flex-start;
     }
     .selectOptions span {
      padding-left: 10px;
      max-width: 80%;
     }
     
       "
     language="css"
     showLineNumbers={true}
    />
    <hr />
    <h2>Implementing API</h2>
    <p>
     You can load your API according to the select type (typeOption) and its
     dependent values (value(filterIdDependent)).
    </p>
    <p>
     The base example works with mocked data, but the idea is that you integrate
     with a database API.
    </p>
    <h3>
     In <strong>src/services</strong> we have a example of implementation:
    </h3>
    <CodeBlock
     theme={dracula}
     text="async function getForMultiSelect(type: string, query: string[]) {
        if (type === 'brands_api') {
         return makeData.carsBrands();
        }
       
        if (type ==='models_api') {
         return makeData.carsModels(query);
        }
       
        if (type === 'colors_api') {
         return makeData.carsColors(query);
        }
       
        return [];
       }"
     language="typescript"
     showLineNumbers={true}
    />
    <hr />
    <h2>Show your support</h2>
    <p>
     This is a component under development and continues to improve. If you have
     any suggestions, please make your contribution.
    </p>
    <h5>Give a ⭐️ if this project helped you! Thank You!</h5>
   </div>
  </div>
 );
}
