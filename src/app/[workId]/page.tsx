import Datailspage from "@/Components/Datailspage";
import GetData from "@/Data";

interface PramProps {
  params: Promise<{ workId: string }>;
}

const page = async ({ params }: PramProps) => {
  const { workId } = await params;
  const Datas = await GetData();
  const findData = Datas.find((data) => data.id === Number(workId));

  if (!findData) {
    return <p>No Data Found</p>;
  } else {
    return (
      <div>
        <Datailspage exercise={findData}></Datailspage>
      </div>
    );
  }
};

export default page;
