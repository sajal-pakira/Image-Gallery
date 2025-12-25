import axios from "axios";
import { useEffect, useState } from "react";
import Card from "./Components/Card";
import Button from "./Components/Button";

const App = () => {
  let [userData, setUserData] = useState([]);
  const [page, setPage] = useState(1);
  const getdata = async () => {
    let fetchedData = await axios.get(
      `https://picsum.photos/v2/list?page=${page}&limit=20`
    );
    // console.log(fetchedData.data);
    setUserData(fetchedData.data);
  };

  useEffect(() => {
    getdata();
  }, [page]);

  let printUserData = (
    <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      Loading...
    </h1>
  );
  if (userData.length > 0) {
    printUserData = userData.map((elem) => {
      return (
        <div className="h-44 w-52" key={elem.id}>
          <Card {...elem} />
        </div>
      );
    });
  }
  return (
    <div className="bg-black text-white h-full px-12 py-5">
      <h1 className="text-5xl flex justify-center items-center pb-7">
        Image Gallery
      </h1>
      <div className="h-full flex flex-col gap-14">
        <div className="flex flex-wrap gap-10 ">{printUserData}</div>

        <div className="flex justify-center gap-5 items-center w-full">
          <Button
            onClick={() => {
              if (page > 1) setPage(page - 1);
            }}
            text={"Prev"}
          />
          <h4>Page {page}</h4>
          <Button
            onClick={() => {
              setPage(page + 1);
            }}
            text="Next"
          />
        </div>
      </div>
    </div>
  );
};

export default App;
