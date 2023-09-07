import GetAllNotice from "../../../Components/GetAllNotice/GetAllNotice";
async function getData() {
  const res = await fetch("http://localhost:3000/api/add-notice", {
    cache: "no-store",
  });
  const data = await res.json();
  if (!res.ok) {
    throw new Error("Failed To Fetch");
  }
  return data;
}
const page = async () => {
  const data = await getData();
  console.log("all notice", data);
  return (
    <div>
      <GetAllNotice data={data}></GetAllNotice>
    </div>
  );
};

export default page;
