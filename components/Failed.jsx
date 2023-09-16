import { useRouter } from "next/navigation";

const Failed = ({text}) => {
  const router = useRouter();

  const goBack = () => {
    router.back();
  };
    return ( 
        <div className="h-[100vh] flex flex-col justify-center items-center">
          <div className=" w-52 h-52 mx-auto lg:h-96 lg:w-96">
            <img src="/rock.png" alt='failed' className="w-full lg:h-full"/>
          </div>
          <h2 className="text-lg">
            {text}
          </h2>
          <button onClick={goBack} className="border-1 border-red-500 p-2 rounded-md my-2">Go Back</button>
        </div>
     );
}
 
export default Failed;