import { useEffect, useState } from "react";
import { Loader } from "lucide-react";
import { usaAxios } from "../../../hooks/useAxios";

const Items = () => {
  const axios = usaAxios();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios({ url: "api/products/", method: "GET" })
      .then((res) => {
        setProducts(res); 
      })
      .catch((err) => {
        console.error("Mahsulotlarni olishda xatolik:", err);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="p-4 bg-gray-100 min-h-[200px]">
      {loading ? (
        <div className="flex justify-center items-center h-[150px]">
          <Loader className="animate-spin text-[#46A358] w-8 h-8" />
        </div>
      ) : products.length === 0 ? (
        <div className="text-center text-red-500 font-medium py-8">
          ❌ Mahsulotlar topilmadi!
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white p-4 rounded shadow hover:shadow-md transition"
            >
              <img
                src={
                  product.image && product.image !== "string"
                    ? product.image
                    : "https://via.placeholder.com/150"
                }
                alt={product.name}
                className="w-full h-[150px] object-cover rounded"
              />
              <h2 className="text-lg font-semibold mt-2">{product.name}</h2>
              <p className="text-gray-500 text-sm mt-1">
                {product.description}
              </p>
              <p className="text-green-600 font-bold mt-2">
                ${parseFloat(product.price).toFixed(2)}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Items;
