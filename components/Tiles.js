import React, { useState } from "react";
import Link from "next/link";
import { useEffect } from "react";
export default function tiles(props) {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const newData = await fetch("/api/getContent").then((t) => t.json());
      setData(newData);
    }
    fetchData();
  }, []);

  return (
    <div className="px-20 mt-10 ">
      <div>{props.title}</div>

      <div className="flex    gap-20  h-72 mt-10 ">
        {data.map((i) => (
          <Link href={`/${i._id}`}>
            <div key={i.toString()} className="    ">
              <img
                className="object-cover rounded-md  hover:border-white hover:border-4 hover:scale-110  min-w-60 h-72 "
                src={i.poster}
              />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
