# REACT DEPENDENT MULTI SELECT

A multi select component that has a dependency on previous field values. Select the initial values and see the next select load according the result.

<hr/>
   <h2> History</h2>
    v1.0 - September 2023 - first version    <p>see more details > https://quirinojess.github.io/react-dependent-multiselect/ </p>
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
    <p>
     <strong>clickCheckbox </strong>- Receives the click and checks its status,
     if true, adding to the state (selectedItems)
    </p>
    <p>
     <strong>handleSubmit </strong>- Checks the checked options and calls the
     function that returns the final array of selected options
     (HandleSubmitOptions)
    </p>
    <p>
     <strong>handleClear </strong>- Clears all values and states of the defined id
    </p>
    <h3>
     In <strong>pages/home</strong> we have an implementation model that
     includes the component and its dependent structures:
    </h3>
    <p>
     <strong>Filter state</strong> - stores selected values
    </p>
    <p>
     <strong>Function HandleSubmitOptions </strong> - sets the filter according
     to selected values and clear the next select values (according IdClear)
    </p>
        <p>
     <strong>handleClear </strong>- Set filter to initial state
    </p>
    <p>
     <strong> Component </strong> - Calling the component and its properties
    </p>
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
      <td>typeOption</td>
      <td  >string</td>
      <td>Used to call the corresponding api to load data from that select</td>
     </tr>
     <tr>
      <td>label</td>
      <td  >string</td>
      <td>For label description</td>
     </tr>
     <tr>
      <td>id</td>
      <td  >string</td>
      <td>For label select id - Determines an identifier for select</td>
     </tr>
     <tr>
      <td>idClear</td>
      <td  >string</td>
      <td>
       Used to clean the filter. It must always be the ID of the next select
       handleSubmitOptions
      </td>
     </tr>
     <tr>
      <td>idDependentOption</td>
      <td  >function()</td>
      <td>Function that sets the data in the main filter</td>
     </tr>
     <tr>
      <td>required</td>
      <td  >boolean</td>
      <td>If true, shows the description of 'required'</td>
     </tr>
     <tr>
      <td>value</td>
      <td  >string[]</td>
      <td>Select filter values</td>
     </tr>
    </table>
    <hr />
    <h2>Style guide</h2>
    <p>
     The Component has important classes . But you can adapt to your needs and
     build your own style.
    </p>
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
    <hr />
    <h2>Show your support</h2>
    <p>
     This is a component under development and continues to improve. If you have
     any suggestions, please make your contribution.
    </p>
    <h5>Give a ⭐️ if this project helped you! Thank You!</h5>

