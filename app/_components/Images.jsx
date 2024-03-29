import Image from "next/image";

const Images = ({bussiness}) => {
    console.log(bussiness);
    return (
        <div>
            <Image src={bussiness[0]?.images[0]?.url} alt='image'
                         width={500}
                         height={200}/>
        </div>
    );
};

export default Images;