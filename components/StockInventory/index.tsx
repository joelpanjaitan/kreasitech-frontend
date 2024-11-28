import connect from "../../connection/connectionData";
import { Stocks } from "../../dto/FileInterface.dto";
import { useState, useEffect } from "react";

const StockInventoryComponent = () => {
  const [stock, setStock] = useState<Stocks[]>([]);
  useEffect(() => {
    const fetchStock = async () => {
      try {
        const response = await connect.get("/stock");
        setStock(response.data);
      } catch (error) {
        console.error("Error fetching stock data:", error);
      }
    };
    fetchStock();
  }, []);

  return {
    stock,
    setStock,
  };
};

export default StockInventoryComponent;
