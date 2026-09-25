import Banner from "@/Components/Banner";
import Homepage from "@/Components/Homepage";
import GetData from "@/Data";





const WorkOut = async () => {
  const datas = await GetData();

  return (
    <div>
      <Banner></Banner>
      <div className="mx-auto container px-5 my-10">
        <h2 className="{`${oswald.className} text-3xl `} font-bold">
          THE LIBRARY
        </h2>
        <p className="text-md text-slate-400">
          Twelve lifts covering every major muscle group.
        </p>
      </div>
      <div className="container mx-auto mt-5 grid grid-cols-1 gap-5 px-4 sm:grid-cols-2 lg:grid-cols-3 my-15">
        {datas.map((data, ind) => (
          <Homepage data={data} key={ind}></Homepage>
        ))}
      </div>
    </div>
  );
};

export default WorkOut;
