import React, { useEffect, useState } from "react";
import PocketBase from "pocketbase";

const pb = new PocketBase("http://127.0.0.1:8090", { autoCancel: false });

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
        const records = await pb.collection("categories").getList();
        setData(records.items);
    };
    fetchData();
  }, []);
3
  return (
    <div>
      <h1>Expenses</h1>
      {data.length > 0 ? (
        <table border="1" >
          <thead>
            <tr>
              {Object.keys(data[0]).map((key) => (
                <th key={key}>{key}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id}>
                {Object.values(item).map((value, index) => (
                  <td key={index}>
                    {value !== null ? value.toString() : ""}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
};

export default App;
