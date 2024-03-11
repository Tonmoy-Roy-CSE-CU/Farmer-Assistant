import { useState, useEffect } from "react";
import axios from "axios";
import "../Style/Services.css";

const Services = () => {
  const [data, setData] = useState([]);
  const [month, setMonth] = useState("");
  const [soil, setSoil] = useState("");
  const [location, setLocation] = useState("");

  useEffect(() => {
    fetchData();
  }, []); // Provide an empty dependency array to run the effect only once

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:3000/crops", {
        params: { month, soil, location },
      });
      console.log("Response from server:", response.data);
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  const handlePredictClick = () => {
    fetchData();
  };

  return (
    <div className="crop-list-container">
      <h2>Crop List</h2>
      <div className="filter-container">
        <label>
          Month:
          <input
            type="text"
            value={month}
            onChange={(e) => setMonth(e.target.value)}
          />
        </label>
        <label>
          Soil:
          <input
            type="text"
            value={soil}
            onChange={(e) => setSoil(e.target.value)}
          />
        </label>
        <label>
          Location:
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </label>
        <button onClick={handlePredictClick}>Predict Crops</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Crop ID</th>
            <th>Crop Name</th>
            <th>Crop Image</th>
          </tr>
        </thead>
        <tbody>
          {data.map(
            (crops) => (
              console.log("Full crops object:", crops),
              console.log("Image URL:", crops.image_url),
              
              (
                <tr key={crops.crop_id}>
                  <td>{crops.crop_id}</td>
                  <td>{crops.crop_name}</td>
                  <td>{crops.image_url}</td>
                </tr>
              )
            )
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Services;
