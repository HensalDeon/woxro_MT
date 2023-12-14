import fortnite from "../assets/fortnite.png";
import { datas } from "../constants/data";
const Home = () => {
    return (
        <div className="flex flex-col items-center justify-center lg:text-[2.625rem] sm:text-[1.625rem] font-[300] text-[1rem] lg:leading-[3rem] md:leading-[2rem] text-center max-w-[83vw]">

            <h1 className="py-3">
                Epic Games : An American video game and software developer and publisher based in Cary, North Carolina.
            </h1>
            <div className="py-8">
                <img className="object-contain" src={fortnite} alt="img1" />
            </div>
            <p className="text-sm max-w-[80%]">
                Create, play, and battle with friends for free in Fortnite. Be the last player standing in Battle Royale and
                Zero Build, experience a concert or live event, or discover over a million creator made games, including
                racing, parkour, zombie survival, and more. Each Fortnite island has an individual age rating so you can
                find the one that&#39;s right for you and your friends. Find it all in Fortnite ... Drop In.
            </p>
            <button className="bg-white px-9 md:py-0 py-2 md: my-5 text-black text-[1rem] font-[500]">Visit Website</button>
            <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-10 md:py-[7rem] py-[4rem] justify-center items-center">
                {datas.map((data, index) => (
                    <div key={index} className="flex flex-col col-span-1">
                        <img className="w-full h-auto max-w-[100%] max-h-[100%] object-cover" src={data?.img} alt="image" />
                        <p className="text-sm py-6 max-h-24 overflow-y-auto">{data?.desc}</p>
                    </div>
                ))}
            </div>
            <div className="flex flex-col items-center justify-center md:max-w-[80%]">
                <h1 className="text-4xl">Our Contribution</h1>
                <p className="text-[1.1rem] leading-[1.5rem] opacity-50 pt-5">
                    Our core offering extends beyond mere profit generation; we emphasize the growth and active involvement
                    of our user community. Collaborating with us represents an investment, rather than a mere expenditure.
                    Our dedication to providing distinctive digital interactions guarantees unparalleled benefits for our
                    clientele.
                </p>
            </div>
            <div className="flex flex-row justify-between w-full md:gap-0 gap-4 my-6 md:px-16 md:max-w-[80%]">
                <div className="flex flex-col max-w-[7rem] items-center">
                    <p className="text-4xl">5M</p>
                    <p className="text-[1.1rem] leading-[1.5rem] ">Daily User Engagements </p>
                </div>
                <div className="flex flex-col max-w-[7rem] items-center">
                    <p className="text-4xl">$500k</p>
                    <p className="text-[1.1rem] leading-[1.5rem] ">Revenue Surge for an Platform</p>
                </div>
                <div className="flex flex-col max-w-[7rem] items-center">
                    <p className="text-4xl">10X</p>
                    <p className="text-[1.1rem] leading-[1.5rem] ">ROAS on all our marketing campaigns</p>
                </div>
            </div>
            <div className="flex flex-col justify-center items-center my-14 px-6">
                <h1 className="text-4xl">Interested in delving deeper into the project?</h1>
                <p className="py-4 md:px-4 px-7 text-[1.1rem] leading-[1.5rem] md:max-w-[50%]">
                    If you&#39;d like to explore further details about our initiatives or any of our affiliated brands,
                    don&#39;t hesitate to connect. You can reach out to us via email at <b>hello@abc.com</b> or give us a
                    call at <b>+91 480 20802730</b>.
                </p>
                <div className="flex w-full gap-7 justify-center items-center">
                    <button className="bg-transparent border-[1px] border-white text-sm align-middle py-2 w-[9rem]">Ring us on Skype</button>
                    <button className="text-sm bg-white text-black w-[9rem] py-2">Contact Us</button>
                </div>
                <p className="text-sm pt-[6rem]">© 2019-2023 abcTechnology Solutions Pvt. Ltd. All Rights Reserved</p>
            </div>
        </div>
    );
};

export default Home;
