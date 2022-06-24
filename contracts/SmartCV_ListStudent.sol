// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

//Lưu trữ danh sách sinh viên
contract ListStudent {

    struct ListSV {
        address studentOwner;
        string name; 
        string birthDay; 
        string professionalTitle;
        string email;
        string github; 
        string linkedin;
    }

    ListSV[] public listSVs;

    function addSV (
        address _studentOwner,
        string memory _name,
        string memory _birthDay,
        string memory _professionalTitle,
        string memory _email,
        string memory _github,
        string memory _linked) public {
            listSVs.push(ListSV(_studentOwner, _name, _birthDay, _professionalTitle, _email, _github, _linked));
    }

    function getListSV(address _studentOwner) public view returns(address[] memory, string[] memory, string[] memory, string[] memory, string[] memory, string[] memory, string[] memory) {
        address[] memory studentOwners = new address[](listSVs.length);
        string[] memory names = new string[](listSVs.length);
        string[] memory birthDays = new string[](listSVs.length);
        string[] memory professionalTitles = new string[](listSVs.length);
        string[] memory emails = new string[](listSVs.length);
        string[] memory githubs = new string[](listSVs.length);
        string[] memory linkedins = new string[](listSVs.length);
        for(uint i=0; i<listSVs.length;i++){
            if(listSVs[i].studentOwner == _studentOwner){
                studentOwners[i] = listSVs[i].studentOwner;
                names[i] = listSVs[i].name;
                birthDays[i] = listSVs[i].birthDay;
                professionalTitles[i] = listSVs[i].professionalTitle;
                emails[i] = listSVs[i].email;
                githubs[i] = listSVs[i].github;
                linkedins[i] = listSVs[i].linkedin;
            }
        }
        return (studentOwners, names,birthDays,  professionalTitles, emails, githubs, linkedins);
    }
    
}