// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

import "./SmartCV_ListStudent.sol";

//CV dành cho sinh viên
contract Student {

    //Khai báo biến địa chỉ người dùng
    address owner;

    // Khai báo biến số dư của người dùng
    mapping(address=>uint) balances;

    //Khai contract đã import để sử dụng các function ở contract đó
    ListStudent liststudent = new ListStudent();
    // applyCV applycv = new applyCV();
    // Business business = new Business();

    // Gán địa chỉ cho người dùng
    constructor () public {
        owner =  msg.sender;
    }

    // Kiểm tra địa chỉ người dùng
    function getSender() public view returns (address){
        return owner;
    }

    // ======================================
    // ======= Profile Functions ============
    // ======================================

    // Thêm thông tin người dùng (Đăng ký)
    function addProfile (
        address _studentOwner,
        string memory _name,
        string memory _birthDay,
        string memory _professionalTitle,
        string memory _email,
        string memory _github,
        string memory _linked) public {
            liststudent.addSV(_studentOwner, _name, _birthDay, _professionalTitle, _email, _github, _linked);
    }

    function getList(address _studentOwner) public view returns(address[] memory, string[] memory, string[] memory, string[] memory, string[] memory, string[] memory, string[] memory)  {
        return liststudent.getListSV(_studentOwner);
    }

    

    // Chỉnh sửa thông tin người dùng
    // function editProfile (
    //     address _owner,
    //     string name,
    //     string birthDay,
    //     string professionalTitle,
    //     string email,
    //     string github,
    //     string linkedin) public payable valueEdit() {
    //         for(uint i=0; i<profiles.length;i++) {
    //             if(profiles[i]._owner == _owner){
    //                 profiles[i]._name = name;
    //                 profiles[i]._birthDay = birthDay;
    //                 profiles[i]._professionalTitle = professionalTitle;
    //                 profiles[i]._email = email;
    //                 profiles[i]._github = github; 
    //                 profiles[i]._linkedin = linkedin;
    //                 balances[msg.sender] -= 10;
    //             } 
    //         } 
    //     }

    // Lấy thông tin người dùng
    // function getProfile(address _studentOwner) public view returns(string memory Name, string memory Birthday, string memory ProfessionalTitle, string memory Email, string memory Github, string memory Linkedin) {
    //     for(uint i=0; i<profiles.length;i++){
    //         if(profiles[i].studentOwner == _studentOwner) {
    //             return (profiles[i].name, 
    //             profiles[i].birthDay, 
    //             profiles[i].professionalTitle, 
    //             profiles[i].email, 
    //             profiles[i].github, 
    //             profiles[i].linkedin);
    //         } 
    //     }  
    // }

    // Kiểm tra tài khoản người dùng có tồn tại hay không? (Đăng nhập)
    // function checkProfile(address _owner) public view returns(uint) {
    //     for(uint i=0; i<profiles.length;i++){
    //         if(profiles[i]._owner == _owner){
    //             return 1;
    //         } else {
    //             return 0;
    //         }
    //     }  
    // }
}

