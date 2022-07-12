import React, { useState, useEffect } from "react";
import Link from "next/link";

// layout for page

import { useRouter } from "next/router";
export default function admin() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [login, setLogin] = useState(false);
  const [checkDetails, setCheckDetails] = useState(false);

  async function submitform() {
    const res = await fetch("/api/adminLogin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username: username, password: password }),
    }).then((t) => t.json());
    if (res.data == true) {
      async function fetchData() {
        const auth = await fetch("/api/authAdmin").then((t) => t.json());
        if (auth.data == true) {
          setLogin(true);

          router.push("/admin/dashboard");
        } else {
          setLogin(false);
          setCheckDetails(true);
        }
      }
      fetchData();
      setCheckDetails(false);
    } else {
      setLogin(false);
      setCheckDetails(true);
    }
  }
  useEffect(() => {
    async function fetchData() {
      const auth = await fetch("/api/authAdmin").then((t) => t.json());
      if (auth.data == true) {
        setLogin(true);

        router.push("/admin/dashboard");
      } else {
        setLogin(false);
      }
    }
    fetchData();
  }, []);
  return (
    <>
      <div className="container mx-auto px-4 h-full mt-20">
        <div className="flex content-center items-center justify-center h-full">
          <div className="w-full lg:w-4/12 px-4">
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0">
              <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                <form>
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      UserName
                    </label>
                    <input
                      type="text"
                      id="username"
                      name="username"
                      autoComplete="username"
                      required
                      value={username}
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="UserName"
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </div>

                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Password"
                    />
                  </div>
                  {checkDetails && (
                    <div className="text-red-500">wrong user details</div>
                  )}
                  <div className="text-center mt-6">
                    <button
                      onClick={() => {
                        submitform();
                      }}
                      className="bg-blue-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                      type="button"
                    >
                      Sign In
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
