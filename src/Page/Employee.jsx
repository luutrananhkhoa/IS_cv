import react from "react";
import HeaderCompany from './../Components/HeaderCompany';

const Employee = () => {
    const employee = [{
        id:1,
        name: 'Luu Tran Anh Khoa',
        position: 'Frontend Developer',
        start: '17/05/2022',
        status:'Active'
    },
    ];
    return ( 
        <>
            <HeaderCompany />
            <div className="min-h-screen min-w-full bg-primary pb-[8rem]">
                <h1 className="text-center text-5xl pt-10 font-semibold text-white">EMPLOYEE</h1>
                <div className="w-[70%] h-[100%] mx-auto pt-[4rem] flex flex-col justify-center pb-[4rem]">
                    <div className="mt-6 w-[80%] flex justify-center mx-auto">
                        <input type="text" className="py-3 px-6 w-full rounded-l-lg outline-none" placeholder="Employee name" />
                        <button className="py-3 px-6 bg-secondary text-white rounded-r-lg">Search</button>
                    </div>
                    <div className="w-[80%] mx-auto mt-8">
                        <div className="flex bg-secondary p-3 rounded-t-lg justify-between text-white text-xl">
                            <p className="w-[40%]">Name</p>
                            <p className="w-[20%]">Position</p>
                            <p className="w-[20%]">Start Date</p>
                            <p className="w-[20%] text-center">Status</p>
                        </div>
                        {employee.map((employee) => (
                            <div key={employee.id} className="flex justify-between p-3 mt-4 text-white text-xl hover:bg-orange-btn cursor-pointer" >
                                <p className="w-[40%]">{employee?.name}</p>
                                <p className="w-[20%]">{employee?.position}</p> 
                                <p className="w-[20%]">{employee?.start}</p>
                                <p className="w-[20%] text-center">{employee?.status}</p>
                            </div>
                        ))};
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default Employee;