


const Dashboard = () => {
  return (<div>
    <h1 style={{ textAlign: 'center' }}>Welcome to Dashboard</h1>
    <div className="container">
      <div className="col-1">

      </div>
      <div className="col-10">
        <table className="table table-dark">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">product Name</th>
              <th scope="col">Discount Price</th>
              <th scope="col">Stock</th>
            </tr>
          </thead>
          <tbody>
            <td>1</td>
            <td>car</td>
            <td>10%</td>
            <td>50</td>
          </tbody>
        </table>
      </div>
      <div className="col-1">

      </div>
    </div>

   

 
  </div>)
}
export default Dashboard;