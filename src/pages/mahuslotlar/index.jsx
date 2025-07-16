import { useState } from "react";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import { Modal } from "antd";

const Mahsulotlar = () => {
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState("all");
  const [modalOpen, setModalOpen] = useState(false);

  const [form, setForm] = useState({
    name: "",
    price: "",
    quantity: "",
    category: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const addProduct = (e) => {
    e.preventDefault();
    const { name, price, quantity, category } = form;
    if (!name || !price || !quantity || !category) {
      alert("Barcha maydonlarni to‘ldiring");
      return;
    }

    const newProduct = {
      ...form,
      id: Date.now(),
    };

    setProducts([newProduct, ...products]);
    setForm({ name: "", price: "", quantity: "", category: "" });
    setModalOpen(false);
  };

  const filtered =
    filter === "all" ? products : products.filter((p) => p.category === filter);

  return (
    <div className="w-full text-black">
      <Navbar />

      <div className="py-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-[#46A358]">Mahsulotlar</h2>
          <button
            onClick={() => setModalOpen(true)}
            className="bg-[#46A358] hover:bg-[#3d8b4d] text-white px-5 py-2 rounded"
          >
            + Mahsulot qo'shish
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div
            onClick={() => setFilter("meva")}
            className="bg-white p-4 rounded shadow cursor-pointer hover:shadow-lg transition"
          >
            <img
              src="https://i.pinimg.com/originals/48/43/11/4843110c0a87f69186b7ad89e64100ee.jpg"
              alt="Meva"
              className="w-35 h-28 mx-auto"
            />
            <h3 className="text-center mt-2 font-semibold text-lg text-[#46A358]">
              Meva mahsulotlari
            </h3>
          </div>

          <div
            onClick={() => setFilter("sabzavot")}
            className="bg-white p-4 rounded shadow cursor-pointer hover:shadow-lg transition"
          >
            <img
              src="https://cdn5.imgbb.ru/user/1/19154/201410/ebd1b88bc581149392f73bf2c6095d8c.jpg"
              alt="Sabzavot"
              className="w-35 h-30 mx-auto"
            />
            <h3 className="text-center mt-2 font-semibold text-lg text-[#46A358]">
              Sabzavot mahsulotlari
            </h3>
          </div>
        </div>

        {filtered.length === 0 ? (
          <p className="text-gray-500">Mahsulot yo'q</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filtered.map((product) => (
              <div
                key={product.id}
                className="bg-white p-4 rounded-lg shadow border border-gray-100"
              >
                <h3 className="text-lg font-semibold text-[#46A358] mb-1">
                  {product.name}
                </h3>
                <p className="text-gray-600">Narxi: {product.price} so‘m</p>
                <p className="text-gray-600">Miqdori: {product.quantity}</p>
                <p className="text-gray-500 text-sm mt-1">
                  Guruh:{" "}
                  <span className="uppercase font-medium">
                    {product.category}
                  </span>
                </p>
              </div>
            ))}
          </div>
        )}
      </div>

      <Footer />

      <Modal
        open={modalOpen}
        onCancel={() => setModalOpen(false)}
        footer={null}
        centered
        className="!w-[370px]"
      >
        <h2 className="text-xl font-semibold mb-4 text-center text-[#46A358]">
          Mahsulot qo'shish
        </h2>
        <form onSubmit={addProduct} className="grid grid-cols-1 gap-4">
          <select
            name="category"
            value={form.category}
            onChange={handleChange}
            className="border px-3 py-2 rounded"
          >
            <option value="">Guruhni tanlang</option>
            <option value="meva">Meva</option>
            <option value="sabzavot">Sabzavot</option>
          </select>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Mahsulot nomi"
            className="border px-3 py-2 rounded"
          />
          <input
            type="number"
            name="price"
            value={form.price}
            onChange={handleChange}
            placeholder="Narxi (so'm)"
            className="border px-3 py-2 rounded"
          />
          <input
            type="text"
            name="quantity"
            value={form.quantity}
            onChange={handleChange}
            placeholder="Miqdori (kg/dona)"
            className="border px-3 py-2 rounded"
          />
          <button
            type="submit"
            className="bg-[#46A358] text-white py-2 rounded hover:bg-[#3d8b4d]"
          >
            Qo'shish
          </button>
        </form>
      </Modal>
    </div>
  );
};

export default Mahsulotlar;
