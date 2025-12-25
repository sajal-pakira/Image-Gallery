import axios from "axios";
import { useEffect, useState } from "react";
import Card from "./Components/Card";

const App = () => {
  let [userData, setUserData] = useState([]);
  // const [first, setfirst] = useState(second);
  const getdata = async () => {
    let fetchedData = await axios.get(
      "https://picsum.photos/v2/list?page=2&limit=20"
    );
    // console.log(fetchedData.data);
    setUserData(fetchedData.data);
  };

  useEffect(() => {
    getdata();
  }, []);

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
      <div className="h-full flex flex-wrap gap-10">
        {printUserData}
        {/* <div className="flex justify-center gap-5 items-center w-full">
          <div className="bg-amber-300 text-black text-lg px-5 py-2 active:scale-85 cursor-pointer">
            Prev
          </div>
          <h4>Page 1</h4>
          <div className="bg-amber-300 text-black text-lg px-5 py-2 active:scale-85 cursor-pointer">
            Next
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default App;
