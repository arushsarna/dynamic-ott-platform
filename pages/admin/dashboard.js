import React from "react";
import Sidebar from "../../components/Sidebar";
import * as cookie from "cookie";
import { useRouter } from "next/router";
export async function getServerSideProps(context) {
  const parsedCookies = cookie.parse(context.req.headers.cookie || "");
  console.log(parsedCookies.JWT);
  const auth = await fetch(
    "http://localhost:3000/api/authAdmin?cookies=" + parsedCookies.JWT
  ).then((t) => t.json());
  console.log(auth);
  if (auth.data == false) {
    return {
      redirect: {
        destination: "/admin",
        permanent: false,
      },
    };
  }
  return {
    props: {},
  };
}
export default function dashboard() {
  return (
    <div className="bg-[#135CC5] h-screen">
      <div>
        <Sidebar />
      </div>
    </div>
  );
}
