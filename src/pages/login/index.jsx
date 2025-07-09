import logo1 from "../../assets/logo1.png";
import logom from "../../assets/logom.png";
import { Form, Input, Button } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { usaAxios } from "../../hooks/useAxios";
import { useState } from "react";
import { Loader } from "lucide-react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const axios = usaAxios();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const login = (e) => {
    setLoading(true);
    axios({ url: "api/users/login/", method: "POST", body: e })
      .then((data) => {
        toast.success("Welcome");
        let { token } = data;
        localStorage.setItem("token", token);
        navigate("/")
      })
      .catch(() => {
        toast.error("Login or password error");
      })
      .finally(() => setLoading(false));
  };

  return (
    <div className="flex flex-col lg:flex-row h-screen">
      <div className="hidden lg:flex w-1/2 bg-[#46A358] items-center justify-center">
        <img src={logo1} alt="Logo" className="w-2/3" />
      </div>

      <div className="w-full lg:w-1/2 flex items-center justify-center px-4 min-h-screen relative">
        <img
          src={logom}
          alt="Mobile Logo"
          className="w-50 lg:hidden absolute top-15 left-1/2 -translate-x-1/2"
        />

        <div className="w-full max-w-[350px] mx-auto">
          <h2 className="text-center text-xl font-semibold mb-6 mt-24 lg:mt-0">
            <span className="text-[#46A358] font-bold">Fresh Line</span>{" "}
            tizimiga kirish
          </h2>

          <Form
            name="login"
            layout="vertical"
            onFinish={login}
            autoComplete="off"
          >
            <Form.Item
              label={<span className="font-semibold">Username</span>}
              name="username"
              rules={[
                { required: true, message: "Username kiriting!" },
                { min: 3, message: "Kamida 3 ta harf kiriting!" },
              ]}
            >
              <Input
                prefix={<UserOutlined className="text-[#46A358] h-[30px]" />}
                placeholder="Username kiriting"
              />
            </Form.Item>

            <Form.Item
              label={<span className="font-semibold">Parol</span>}
              name="password"
              rules={[{ required: true, message: "Parolni kiriting!" }]}
            >
              <Input.Password
                prefix={<LockOutlined className="text-[#46A358] h-[30px]" />}
                placeholder="Parolni kiriting"
              />
            </Form.Item>

            <Form.Item className="mt-4 h-[35px]">
              <Button
                htmlType="submit"
                type="primary"
                style={{
                  backgroundColor: "#46A358",
                  borderColor: "#46A358",
                  color: "white",
                  width: "100%",
                  height: "40px",
                }}
              >
                {loading ? <Loader className="animate-spin" /> : "Kirish"}
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Login;
