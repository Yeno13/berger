import { mainData } from "../api/data";

const Thumbnail = () => {
  return (
    <div className="bg-came-blue p-5">
      {mainData.map((item) => (
        <div className="flex items-center justify-center mt-12" key={item.id}>
          <a
            className="relative block w-full h-full bg-gray-900 group rounded-lg"
            href={`/${item.id}`}
            key={item.id}
          >
            <img
              className="absolute inset-0 object-cover w-full h-full group-hover:opacity-50 rounded-lg"
              src={item.cover}
              alt={item.id}
            />
            <div className="relative p-5">
              <div className="mt-80">
                <div className="transition-all transform translate-y-8 opacity-0 group-hover:opacity-100 group-hover:translate-y-0">
                  <div className="p-2 flex items-center h-full justify-center">
                    <p className="text-8xl text-white absolute  ml-auto mr-auto bottom-28">
                      {item.title}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>
      ))}
    </div>
  );
};

export default Thumbnail;
