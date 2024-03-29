import Image from "next/image";

const CategoryList = ({categoryList}) => {

    return (
        <div className="container mx-auto gap-10 pt-4 flex items-center  justify-between overflow-x-auto ">
            
            {categoryList.length > 0?
                categoryList.map((cate,idx)=><div key={idx}
              className="flex flex-col h-50 items-center justify-center bg-purple-50 p-5 rounded-lg hover:scale-110 cursor-pointer transition-all ease-in-out gap-2"
                >
                    <Image src={cate.icon.url} alt="icon"
                    width={50}
                    height={50}
                    />
                <p className="text-primary">{cate.name}</p>
                </div>) :[1,2,3,4,5,6].map((item,idx)=><div key={idx}
                className="h-[120px] w-full bg-slate-200 animate-pulse rounded-lg"
                ></div>)
} 
          
        </div>
    );
};

export default CategoryList;