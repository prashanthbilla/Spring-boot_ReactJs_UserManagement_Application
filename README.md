## Spring-boot_ReactJs_UserManagement_Application
# User Registration Application: 
### This project aims to manage the users that you can login as an Admin and create new user roles such as user creation and update as well as, If we are new users to the app then we will creating new user details with the help of SignUp. After user creation you can login in to the app with login username and password that you are provided by the time of creation and update the user details if you want.
### This Application is developed by the SpringBoot(Backend) and React-Js(Frontend).


#### Required Tools and Softwares:
        -> Java_8V
        -> IDE(IntelliJIDEA)-Backend
        -> Visual Studio Code and Node (Frontend)
        -> Mysql Databse(Workbench)


__________________________________________________________________________
Links:

[Java_8V](https://www.oracle.com/java/technologies/downloads"download")
________[IntelliJIDEA](https://www.jetbrains.com/idea/download"download")
________[VisualStudioCode](https://https://code.visualstudio.com/download"download")
________[MySqlWorkbench](https://https://dev.mysql.com/downloads/workbench/"download")
 
       

___________________________________________________________________

## Working and Functionality :
     
**There are three login/signup scenarios:**

    1. Login as Admin:
        -Showing the details of All Users, Admin can create, update and delete the user records.
        -If there is no created users, It is showing no users found.
    2. Login as User:
        -Showing the details of logged user and can update the details.
    3. Signup as User:
        -complete the creation of user and Login as user with user credentials username and password.
        -In User creation process will provide the below details
            -Id:      (Auto-generated)
            -UserName:(Mandatory)
            -Name:    (Mandatory)
            -password:(Mandatory)
            -phoneNum:(Mandatory)

### Login page:

![Loginpage](https://user-images.githubusercontent.com/85600714/134907303-d7510734-4d57-4e7b-b505-9746320711db.png)
___________
    
### Login (When username and passwords are empty):
___________

![Empty uname pass](https://user-images.githubusercontent.com/85600714/134908174-ac3e547f-6828-4fd1-aedf-1db3c1ad23e7.png)
_________

### Login (When username and passwords are incorrect):
_________

![Invalid Credentials](https://user-images.githubusercontent.com/85600714/134909322-8d409546-e581-4f9b-9758-a7da72dbf804.png)

### 1.Login as Admin(Success):

![AdminLoginSuccess](https://user-images.githubusercontent.com/85600714/134929844-d9195a4e-ba97-4d85-9e89-243636e6a634.png)

### Showing All Users in Admin Login:

![AdminUserList](https://user-images.githubusercontent.com/85600714/134930465-732b11c2-3676-4072-b1da-4d44434f407e.png)

### AddUser in Admin Login:

![AdminAddUser](https://user-images.githubusercontent.com/85600714/134931741-b2673289-e239-4546-b82d-f8be017426ba.png)

### AddUser Success in Admin Login: Note- id is auto-generated integer value

![AdminAddUserSuccess](https://user-images.githubusercontent.com/85600714/134932047-d22ec530-8ab6-48cf-b494-32f44dc3b727.png)

### Admin Login UsersList After Adding the User:
![AdminUsersListAfterAddedOneUser](https://user-images.githubusercontent.com/85600714/134932572-8c469738-6559-469e-a035-a2dfa344a163.png)
### UpdateUser in Admin Login: When click update button it will fetch the user details and dispaly in update user page:

        **select the user:**
![AdminUpdateUserSelecting](https://user-images.githubusercontent.com/85600714/134933545-50d67f49-4f88-48fe-9771-89544641b690.png)
        **getting user details:**
        
![AdminUpdateUSer](https://user-images.githubusercontent.com/85600714/134934106-9375c458-f69a-47aa-9a6a-76704f32b966.png)

### UpdateUser in Admin Login, change the details:

![AdminUpdateUserAfterUpdating](https://user-images.githubusercontent.com/85600714/134934932-57833b9b-b8e8-4a07-baa5-6c9a2727de63.png)

 

