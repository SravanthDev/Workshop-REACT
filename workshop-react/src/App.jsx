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

    getData();
  }, []); 

  return (
    <>
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
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.item_description}</td>
              <td>{item.Current_Balance_Amount}</td>
              <td>{item.Debit}</td>
              <td>{item.Credit}</td>
              <td>{item.Type_of_transaction}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default App;

