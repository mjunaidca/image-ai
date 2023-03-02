import Image from "next/image";

interface Props {
    ImagePath?: string;
    ImageAlt?: string;
    Label: string;
}

const DrowDownHeader = ({ ImagePath, ImageAlt, Label }: Props) => {
    return (
        <div className="flex mb-5 items-center space-x-3 my-5">
            {ImagePath && ImageAlt && (
                <Image src={ImagePath} width={30} height={30} alt={ImageAlt} />
            )}
            <p className="text-left font-medium text-md sm:text-lg">{Label}</p>
        </div>
    );
};

export default DrowDownHeader;
