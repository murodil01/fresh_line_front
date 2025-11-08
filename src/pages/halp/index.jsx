import Footer from "../../components/footer";

const Halp = () => {
  return (
    <div className="wull">
      <div className="bg-white shadow-md rounded-xl p-8 w-full">
        <h3 className="text-3xl font-bold text-[#46A358] mb-6 border-b pb-2">
          Help and support
        </h3>

        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-800">
              1. How can I change my password?
            </h3>
            <p className="text-gray-600 mt-1">
              Go to the settings page, enter the new password, and click the
              save button.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800">
              2. What should I do if my account is blocked?
            </h3>
            <p className="text-gray-600 mt-1">
              Please contact our support team:{" "}
              <a
                href="mailto:support@example.com"
                className="text-[#46A358] underline"
              >
                support@example.com
              </a>
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800">
              3. How do I use the website?
            </h3>
            <p className="text-gray-600 mt-1">
              Each page clearly shows the necessary information. Additionally,
              you can customize it for yourself through "Settings" or "Profile".
            </p>
          </div>

          <div className="border-t pt-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Do you need additional help?
            </h3>
            <p className="text-gray-600">Contact us:</p>
            <ul className="text-[#46A358] mt-2 space-y-1 list-disc list-inside">
              <li>
                Email:{" "}
                <a href="mailto:support@example.com">support@example.com</a>
              </li>
              <li>
                Telegram:{" "}
                <a href="https://t.me/example" target="_blank">
                  t.me/example
                </a>
              </li>
              <li>Telefon: +998 90 123 45 67</li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Halp;
