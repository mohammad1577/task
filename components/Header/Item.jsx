import Link from "next/link";

const Item = ({ text, icon, active = false }) => {
    return (
        <>
            <Link
                href={"/"}
                className="flex flex-col justify-center items-center"
            >
                {icon}
                <span
                    className={`text-xs uppercase mt-1 ${
                        active ? "text-siteYellow-400" : "text-lightGreen-300"
                    }`}
                >
                    {text}
                </span>
            </Link>
        </>
    );
};

export default Item;
