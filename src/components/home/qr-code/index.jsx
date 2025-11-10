import qrcode from "../../../assets/qrcode.png";

const QrCode = () => {
  return <div className="w-[90%] m-auto py-10 flex justify-center bg-gradient-to-r from-[#46A358] to-[#3a6b45] rounded-2xl">
    <img src={qrcode} alt="QrCode" className="w-full max-w-[400px] h-auto"/>
  </div>;
};

export default QrCode;
