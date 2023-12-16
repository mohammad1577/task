import VerticalDots from "@/shared/icons/VerticalDots";
import Image from "next/image";

const Card = () => {
    return (
        <div className="p-4 flex flex-col bg-lightGreen-100">
            <div className="flex w-full mb-5">
                <Image
                    quality={100}
                    src={"/images/img.png"}
                    width={46}
                    height={69}
                    alt="halloween-wallpaper-with-zombie-hand 33"
                    className="mr-3"
                />
                <div className="flex flex-col grow">
                    <div className="flex justify-between items-center">
                        <span className="text-siteYellow-400 uppercase font-semibold">
                            kaylay gunner
                        </span>
                        <VerticalDots />
                    </div>
                    <div className="w-full bg-white rounded-t-md h-1 mt-2">
                        <div className="w-3/4 h-full rounded-t-md bg-gradient-to-r from-lightGreen-200 to-lightGreen-300"></div>
                    </div>
                    <p className="text-lightGreen-300 uppercase text-xs mt-2 font-semibold">
                        PROFESSIONAL DESIGNER FOR MODELING AND RENDERING WALOR
                        DISNEY{" "}
                    </p>
                </div>
            </div>
            <div className="flex">
                <div className="flex flex-col basis-1/3 border-r border-lightGreen-200 mr-4">
                    <div className="flex items-center">
                        <div className="w-5 h-5 mr-2">
                            <Image
                                src={"/images/swiss.png"}
                                width={20}
                                height={20}
                                alt="Switzerland"
                                quality={100}
                            />
                        </div>
                        <span className="text-siteYellow-400 font-semibold">
                            SwitZerland
                        </span>
                    </div>
                    <span className="text-lightGreen-300 font-semibold">
                        COUNTRY
                    </span>
                </div>
                <div className="flex flex-col basis-1/3 border-r border-lightGreen-200 mr-4">
                    <div className="flex items-center">
                        <span className="text-siteYellow-400 font-semibold">
                            Full-Time
                        </span>
                    </div>
                    <span className="text-lightGreen-300 font-semibold">
                        COOPRATION TYPE
                    </span>
                </div>
                <div className="flex flex-col basis-1/3">
                    <div className="flex items-center">
                        <span className="text-siteYellow-400 font-semibold">
                            Designer
                        </span>
                    </div>
                    <span className="text-lightGreen-300 font-semibold">
                        CATEGORY
                    </span>
                </div>
            </div>
            <hr className="bg-lightGreen-200 h-[2px] w-full my-2" />
            <div className="flex">
                <div className="flex flex-col basis-1/3 border-r border-lightGreen-200 mr-4">
                    <div className="flex items-center">
                        <div className="w-5 h-5 mr-2">
                            <Image
                                src={"/images/swiss.png"}
                                width={20}
                                height={20}
                                alt="Switzerland"
                                quality={100}
                            />
                        </div>
                        <span className="text-siteYellow-400 font-semibold">
                            Montenegro
                        </span>
                    </div>
                    <span className="text-lightGreen-300 font-semibold">
                        CITY
                    </span>
                </div>
                <div className="flex flex-col basis-1/3 border-r border-lightGreen-200 mr-4">
                    <div className="flex items-center">
                        <span className="text-siteYellow-400 font-semibold">
                            Male
                        </span>
                    </div>
                    <span className="text-lightGreen-300 font-semibold">
                        GENDER
                    </span>
                </div>
                <div className="flex flex-col basis-1/3">
                    <div className="flex items-center">
                        <span className="text-siteYellow-400 font-semibold">
                            24 Months
                        </span>
                    </div>
                    <span className="text-lightGreen-300 font-semibold">
                        MIN EXPERIENCE
                    </span>
                </div>
            </div>
            <hr className="bg-lightGreen-200 h-[2px] w-full my-2" />
            <div className="flex">
                <div className="flex flex-col basis-1/3 border-r border-lightGreen-200 mr-4">
                    <div className="flex items-center">
                        <div className="w-5 h-5 mr-2">
                            <Image
                                src={"/images/swiss.png"}
                                width={20}
                                height={20}
                                alt="Switzerland"
                                quality={100}
                            />
                        </div>
                        <span className="text-siteYellow-400 font-semibold">
                            Montenegro
                        </span>
                    </div>
                    <span className="text-lightGreen-300 font-semibold">
                        NATIVE LANGUAGE
                    </span>
                </div>
                <div className="flex flex-col basis-1/3 border-r border-lightGreen-200 mr-4">
                    <div className="flex items-center">
                        <span className="text-siteYellow-400 font-semibold">
                            $ 12.00 Hour
                        </span>
                    </div>
                    <span className="text-lightGreen-300 font-semibold">
                        MINIMUM SALARY
                    </span>
                </div>
                <div className="flex flex-col basis-1/3">
                    <div className="flex items-center">
                        <span className="text-siteYellow-400 font-semibold">
                            8:00 AM GMT +2
                        </span>
                    </div>
                    <span className="text-lightGreen-300 font-semibold">
                        STARTING HOURS
                    </span>
                </div>
            </div>
            <hr className="bg-lightGreen-200 h-[2px] w-full my-2" />
            <div className="flex">
                <div className="flex flex-col basis-1/3 border-r border-lightGreen-200 mr-4">
                    <div className="flex items-center">
                        <span className="text-siteYellow-400 font-semibold">
                            In Person
                        </span>
                    </div>
                    <span className="text-lightGreen-300 font-semibold">
                        CONTRACT TYPE
                    </span>
                </div>
                <div className="flex flex-col basis-1/3 border-r border-lightGreen-200 mr-4">
                    <div className="flex items-center">
                        <span className="text-siteYellow-400 font-semibold">
                            $ 24.00 Hour
                        </span>
                    </div>
                    <span className="text-lightGreen-300 font-semibold">
                        MINIMUM SALARY
                    </span>
                </div>
                <div className="flex flex-col basis-1/3">
                    <div className="flex items-center">
                        <span className="text-siteYellow-400 font-semibold">
                            17:00 PM GMT +2
                        </span>
                    </div>
                    <span className="text-lightGreen-300 font-semibold">
                        ENDING HOURS
                    </span>
                </div>
            </div>
            <hr className="bg-lightGreen-200 h-[2px] w-full my-2" />
            <div className="flex flex-row gap-3">
                <div className="flex items-center">
                    <div className="w-5 h-5 mr-2">
                        <Image
                            src={"/images/swiss.png"}
                            width={20}
                            height={20}
                            alt="Switzerland"
                            quality={100}
                        />
                    </div>
                    <span className="text-siteYellow-400 font-semibold">
                        SwitZerland
                    </span>
                </div>
                <div className="flex items-center">
                    <div className="w-5 h-5 mr-2">
                        <Image
                            src={"/images/swiss.png"}
                            width={20}
                            height={20}
                            alt="Switzerland"
                            quality={100}
                        />
                    </div>
                    <span className="text-siteYellow-400 font-semibold">
                        SwitZerland
                    </span>
                </div>
                <div className="flex items-center">
                    <div className="w-5 h-5 mr-2">
                        <Image
                            src={"/images/swiss.png"}
                            width={20}
                            height={20}
                            alt="Switzerland"
                            quality={100}
                        />
                    </div>
                    <span className="text-siteYellow-400 font-semibold">
                        SwitZerland
                    </span>
                </div>
            </div>
            <span className="text-lightGreen-300 font-semibold">
                REQUIRED SKILLS
            </span>
            <hr className="bg-lightGreen-200 h-[2px] w-full my-2" />
            <div className="uppercase text-lightGreen-300 flex justify-center items-center font-semibold p-2">
                know more
            </div>
        </div>
    );
};

export default Card;
