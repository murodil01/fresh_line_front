import Footer from "../../components/footer";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  Legend,
} from "recharts";

const Statistic = () => {
  const data = [
    { name: "January", ichki1: 400, ichki2: 300, tashqi1: 240, tashqi2: 180 },
    { name: "February", ichki1: 300, ichki2: 250, tashqi1: 139, tashqi2: 200 },
    { name: "March", ichki1: 200, ichki2: 180, tashqi1: 980, tashqi2: 600 },
    { name: "April", ichki1: 278, ichki2: 310, tashqi1: 390, tashqi2: 420 },
    { name: "May", ichki1: 189, ichki2: 210, tashqi1: 480, tashqi2: 460 },
    { name: "June", ichki1: 239, ichki2: 280, tashqi1: 380, tashqi2: 300 },
    { name: "Jule", ichki1: 349, ichki2: 290, tashqi1: 430, tashqi2: 370 },
  ];

  return (
    <div className="text-black min-h-screen flex flex-col">
      <div className="max-w-6xl mx-auto w-full py-8 flex-1">
        <div className="bg-white shadow-md rounded-lg p-4 mb-6">
          <h3 className="text-lg font-semibold text-[#46A358] mb-3">
            Domestic market statistics
          </h3>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data}>
                <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="ichki1"
                  stroke="#1E90FF"
                  strokeWidth={3}
                  name="Internal 1"
                />
                <Line
                  type="monotone"
                  dataKey="ichki2"
                  stroke="#00C49F"
                  strokeWidth={3}
                  name="Internal 2"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white shadow-md rounded-lg p-4">
          <h3 className="text-lg font-semibold text-[#46A358] mb-3">
            Foreign market statistics
          </h3>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data}>
                <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="tashqi1"
                  stroke="#FF8042"
                  strokeWidth={3}
                  name="External 1"
                />
                <Line
                  type="monotone"
                  dataKey="tashqi2"
                  stroke="#8884d8"
                  strokeWidth={3}
                  name="External 2"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Statistic;
