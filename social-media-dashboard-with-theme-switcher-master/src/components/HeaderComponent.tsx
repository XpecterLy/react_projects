import { useEffect, useState } from "react"

export const HeaderComponet = () => {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        if(darkMode)
            document.documentElement.classList.add("dark");
        else
            document.documentElement.classList.remove("dark");

            console.log(darkMode);
            
    }, [darkMode]);

    return (
        <header className="bg-Very-Pale-Blue dark:bg-Very-Dark-Blue h-[235px] rounded-b-[20px] pt-8 px-6 mb-[1000px] md:mb-[500px] xl:mb-[200px]"  >
            <h1 className="text-Very-Dark-Blue dark:text-Very-Pale-Blue text-2xl font-bold mb-1">Social Media Dashboard</h1>
            <p className="text-Dark-Grayish-Blue dark:text-Desaturated-Blue font-bold mb-6">Total Followers: 23,004</p>
            <hr className="bg-black mb-[19px]" />
            <div className="flex justify-between">
                <p className="text-Dark-Grayish-Blue dark:text-Desaturated-Blue font-bold">Dark Mode</p>
                <label htmlFor="check-box" className="bg-Toggle w-12 h-6 rounded-full cursor-pointer p-[3px] relative overflow-hidden" >
                    <input type="checkbox" className="sr-only peer" id="check-box" onClick={() => setDarkMode(!darkMode)} />
                    <div className="peer-checked:bg-linear-to-r from-[#378fe6] to-[#3eda82] absolute top-0 left-0 w-full h-full"></div>
                    <div className="w-[18px] h-[18px] bg-Light-Grayish-Blue rounded-full peer-checked:translate-x-[24px] transition-all "></div>
                </label>
            </div>
        </header>
    )
}