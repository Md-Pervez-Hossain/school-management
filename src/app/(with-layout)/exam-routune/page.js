import AllExamRoutune from "../../../Components/AllExamRoutune/AllExamRoutune";
async function getClassRoutuneData() {
  const res = await fetch("http://localhost:3000/api/add-routune", {
    cache: "no-store",
  });
  const data = await res.json();
  if (!res.ok) {
    throw new Error("Failed To Fetch");
  }
  return data;
}
const page = async () => {
  const data = await getClassRoutuneData();
  console.log(data);
  return (
    <div>
      <AllExamRoutune data={data}></AllExamRoutune>
    </div>
  );
};

export default page;
