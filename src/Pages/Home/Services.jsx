import React from "react";
import { Link } from "react-router-dom";
import { servicesData } from "./Data/data";
import * as Unicons from "@iconscout/react-unicons";

export default function Services() {
    return (
      


<div className="container mx-auto my-20">
<div className="container mx-auto text-center">

  <div className='grid justify-center items-center my-6'>






    <div className="text-4xl font-bold  text-[#6f42c1] font-mono" >What i do Offer?</div>
    <div className="divider divider-info text-[#6f42c1] ">-/-</div>

  </div>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-20">
  {servicesData.map((item, index) => {
                const Icon = item.Icon;
                return (
                    <div className="px-6 py-10 shadow shadow-gray-200 hover:shadow-md dark:shadow-gray-800 dark:hover:shadow-gray-700 transition duration-500 rounded-2xl bg-white dark:bg-slate-900" key={index}>
                        <Icon className="h-10 w-10 stroke-1 text-purple-700" />

                        <div className="content mt-7">
                            <Link to="" className="title h5 text-[17px] font-medium hover:text-amber-500">
                                {item.title}
                            </Link>
                            <p className="text-slate-400 mt-3 text-[15px]">{item.desc}</p>

                            <div className="mt-5">
                                <Link href="" className="hover:text-amber-500 dark:hover:text-amber-500 after:bg-amber-500 dark:text-white transition duration-500 inline-flex items-center gap-1">
                                    Read More <Unicons.UilArrowRight width={16} />
                                </Link>
                            </div>
                        </div>
                    </div>
                );
            })}



  </div>
</div>
</div>

    );
}
