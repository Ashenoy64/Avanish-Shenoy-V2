import Badge from "@/components/Badge.";
import _data from "@/data/badges";

export default function Page() {
  return (
    <section className="flex flex-col justify-start">
      <div className="flex flex-row justify-between ">
        <button className="btn w-1/2 text-center">Certificates</button>
        <button className="btn w-1/2 text-center">Badges</button>
      </div>

      <div className="w-full h-full overflow-auto no-scrollbar  ">
        <div className="backdrop-blur-xl  p-6 w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 place-items-start rounded-box  justify-center">
          Hello
        </div>

        <div className="backdrop-blur-xl overflow-auto no-scrollbar  p-6 w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 place-items-start rounded-box  justify-center">
          {_data.map((obj, index) => {
            return <Badge key={index} url={obj.url} title={obj.title} />;
          })}
        </div>
      </div>
    </section>
  );
}
