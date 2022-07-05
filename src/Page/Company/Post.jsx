import react from "react";
import HeaderCompany from './../../Components/HeaderCompany';

const Post = () => {
    return ( 
    <>
        <HeaderCompany />
        <div className="w-full min-h-screen flex flex-col justify-center items-center bg-primary">
            <div className="mt-[-20%] w-[60%]">
                <h1 className=" text-white text-5xl font-bold">Post</h1>
                <div className="text-left w-[100%] mt-[2rem]">
                    <div className="w-[10%]">
                        <label className=" text-white text-lg mr-10" name="">Position</label>
                    </div>
                    <input type="text" className="text-white w-[30%] mt-2 bg-secondary p-3 rounded-[10px] outline-none"/>
                </div>
                <div>
                    <div className="w-[10%]">
                        <label className=" text-white text-lg mr-10" name="">Skill</label>
                    </div>
                    <input type="text" className="text-white w-[30%] mt-2 bg-secondary p-3 rounded-[10px] outline-none"/>
                </div>
                <button type="submit" id="btn_show" className="h-[2.75rem] w-[8rem] mt-8 text-white font-medium bg-orange-btn rounded-[30px]">Add</button>
            </div>
           
                
        </div>
    </>
     );
}
 
export default Post;