import axios from "axios";

const Trial = async () => {
  const data = await axios.get("http://localhost:3000/api/auth/doc");

  console.log("data -----------", data.data);

  return <>hello {data.data.message}</>;
};

export default Trial;
