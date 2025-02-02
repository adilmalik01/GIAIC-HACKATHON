const DashboardContent = () => {
    return (
      <div className="p-6 flex flex-col gap-6">
        <div className="grid grid-cols-4 gap-6">
          {["Total Views", "Total Profit", "Total Products", "Total Users"].map((title, idx) => (
            <div key={idx} className="bg-white p-4 shadow-md rounded-lg">
              <h4 className="text-gray-600">{title}</h4>
              <p className="text-xl font-bold">$45,000</p>
              <p className="text-green-500">+4.35%</p>
            </div>
          ))}
        </div>


  
        <div className="grid grid-cols-2 gap-6">
          <div className="bg-white p-4 shadow-md rounded-lg">
            <h4 className="mb-4 text-gray-600">Total Revenue</h4>
          </div>
          <div className="bg-white p-4 shadow-md rounded-lg">
            <h4 className="mb-4 text-gray-600">Profit This Week</h4>
          </div>
        </div>
      </div>
    );
  };
  
  export default DashboardContent;
  