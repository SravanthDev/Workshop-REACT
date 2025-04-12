import { useState, useEffect } from 'react';
import './App.css';
import PocketBaseConnectionCreator from 'pocketbase';

const pb = new PocketBaseConnectionCreator('http://127.0.0.1:8090');

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getData() {
      try {
        const records = await pb.collection('Categories').getFullList();
        console.log(records);
        setData(records);
      } catch (err) {
        console.error('Error fetching data:', err);
      }
    }

    getData()
  }, []); 

  return (
    <>
      <div>      
      <h1>Expenss Manager</h1>
      <table className='table'>
        <thead>
          <tr>
            <th>ID</th>
            <th>Item Description</th>
            <th>Current Balance</th>
            <th>Debit</th>
            <th>Credit</th>
            <th>Type of Transaction</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item,index) => (
            <tr key={item.id}>
              <td>{index+1}</td>
              <td>{item.item_description}</td>
              <td>{item.Current_Balance_Amount}</td>
              <td>{item.Debit}</td>
              <td>{item.Credit}</td>
              <td>{item.Type_of_transiction}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    <div>
  <form>
    <label htmlFor="item_description">Item Description:</label>
    <input type="text" id="item_description" name="item_description" required />

    <label htmlFor="Current_Balance_Amount">Current Balance Amount:</label>
    <input type="number" id="Current_Balance_Amount" name="Current_Balance_Amount" required />

    <label htmlFor="Debit">Debit:</label>
    <input type="number" id="Debit" name="Debit" required />

    <label htmlFor="Credit">Credit:</label>
    <input type="number" id="Credit" name="Credit" required />

    <label htmlFor="Type_of_transiction">Type of Transaction:</label>
    <input type="text" id="Type_of_transiction" name="Type_of_transiction" required />

    <button type="submit">Submit</button>
  </form>
</div>

    </>
  );
}

export default App;


