import React, { Component } from "react";
import swal from "sweetalert";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      UserList: [
        {
          firstName: "Rohit",
          lastName: "Maurya",
          email: "muhammad.hoti@gmail.com",
          salary: "50,000",
          joinDate: "30/8/2018",
        },
        {
          firstName: "Ankit",
          lastName: "Maurya",
          email: "ankit.lateral2k22@mpgi.edu.in",
          salary: "50,000",
          joinDate: "30/8/2018",
        },
        {
          firstName: "Vishal",
          lastName: "Maurya",
          email: "zeece96@gmail.com",
          salary: "70,000",
          joinDate: "30/8/2017",
        },
        {
          firstName: "Durgesh",
          lastName: "Maurya",
          email: "hrc10@gmail.com",
          salary: "90,000",
          joinDate: "30/8/2015",
        },
      ],
      addUser: false,
      editIndex: null,
    };
    this.updateFirstName = this.updateFirstName.bind(this);
    this.updateLastName = this.updateLastName.bind(this);
    this.updateEmail = this.updateEmail.bind(this);
    this.updateSalary = this.updateSalary.bind(this);
  }

  //Event Functions

  login() {
    const email = document.getElementById(`email`).value;
    const password = document.getElementById("password").value;
    email === "admin@domain.com" && password === "admin"
      ? this.setState({
          user: {
            email: email,
            password: password,
          },
        })
      : swal("Access Deneid", "Please Enter Correct Email And Password");
  }

  addUser() {
    this.setState({
      addUser: true,
    });
  }

  cancelAddUser() {
    this.setState({
      addUser: false,
    });
  }

  addUserData() {
    const date = new Date();
    const firstName = document.getElementById(`firstName`).value;
    const lastName = document.getElementById(`lastName`).value;
    const email2 = document.getElementById(`email2`).value;
    const salary = document.getElementById(`salary`).value;
    const joinDate =
      date.getDate() + "/" + (+date.getMonth() + 1) + "/" + date.getFullYear();
    this.state.UserList.push({
      firstName: firstName,
      lastName: lastName,
      email: email2,
      salary: salary,
      joinDate: joinDate,
    });
    this.setState({
      addUser: false,
    });
  }

  logOut() {
    this.setState({
      user: false,
    });
  }

  deleteUser(index) {
    const UserList = this.state.UserList;
    UserList.splice(index, 1);
    this.setState({
      UserList,
    });
  }

  editUser(index) {
    this.setState({
      editIndex: index,
    });
  }

  canceleditUser() {
    this.setState({
      editIndex: null,
    });
  }

  updateUser() {
    const edI = this.state.editIndex;
    this.state.editedFirstName &&
      (this.state.UserList[edI].firstName = this.state.editedFirstName);
    this.state.editedLastName &&
      (this.state.UserList[edI].lastName = this.state.editedLastName);
    this.state.editedEmail &&
      (this.state.UserList[edI].email = this.state.editedEmail);
    this.state.editedSalary &&
      (this.state.UserList[edI].salary = this.state.editedSalary);
    this.setState({
      // UserList[edI].firstName : this.state.editedFirstName,
      //I Tried This But It Throws An Error
      editIndex: null,
    });
  }

  updateFirstName(e) {
    this.setState({
      editedFirstName: e.target.value,
    });
  }

  updateLastName(e) {
    this.setState({
      editedLastName: e.target.value,
    });
  }

  updateEmail(e) {
    this.setState({
      editedEmail: e.target.value,
    });
  }

  updateSalary(e) {
    this.setState({
      editedSalary: e.target.value,
    });
  }

  //JSX Rendering Functions

  renderHeader() {
    return (
      <header className="App-header">
        <h1 className="App-title">Welcome To User Management System</h1>
      </header>
    );
  }

  renderLogin() {
    return (
      <div className="loginForm">
        <h1 className="loginFormHeader">
          <b>Login</b>
        </h1>
        <form>
          <div className="form-group">
            <label>Email address</label>
            <input
              type="email"
              className="form-control"
              id="email"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Password"
            />
          </div>
          <button
            type="button"
            className="btn btn-success"
            onClick={() => {
              this.login();
            }}
          >
            Login
          </button>
        </form>
      </div>
    );
  }

  rendertoDoList() {
    return (
      <div className="renderTodoList">
        <h1 className="todoHeader">User List</h1>
        <div className="UserList">
          <table className="table table-striped table-dark">
            <thead>
              <tr>
                <th scope="col" className="centerAll">
                  #
                </th>
                <th scope="col" className="centerAll">
                  First Name
                </th>
                <th scope="col" className="centerAll">
                  Last Name
                </th>
                <th scope="col" className="centerAll">
                  Email
                </th>
                <th scope="col" className="centerAll">
                  Salary
                </th>
                <th scope="col" className="centerAll">
                  Join Date
                </th>
                <th scope="col" className="centerAll">
                  Edit
                </th>
                <th scope="col" className="centerAll">
                  Delete
                </th>
              </tr>
            </thead>
            <tbody>
              {this.state.UserList.map((value, index) => {
                return this.state.editIndex !== index ? (
                  <tr>
                    <th scope="row" id={index + 1}>
                      {index + 1}
                    </th>
                    <td className="centerAll" id={index + 2}>
                      {value.firstName}
                    </td>
                    <td className="centerAll" id={index + 3}>
                      {value.lastName}
                    </td>
                    <td className="centerAll" id={index + 4}>
                      {value.email}
                    </td>
                    <td className="centerAll" id={index + 5}>
                      Rs.{value.salary}/=
                    </td>
                    <td className="centerAll" id={index + 6}>
                      {value.joinDate}
                    </td>
                    <td className="centerAll" id={index + 7}>
                      <button
                        onClick={() => {
                          this.editUser(index);
                        }}
                        className="btn btn-primary"
                      >
                        Edit
                      </button>
                    </td>
                    <td className="centerAll" id={index + 8}>
                      <button
                        onClick={() => {
                          this.deleteUser(index);
                        }}
                        className="btn btn-danger"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ) : (
                  <tr>
                    <th scope="row" id={index + 1}>
                      {index + 1}
                    </th>
                    <td className="centerAll" id={index + 2 + "edit"}>
                      <input
                        type="text"
                        defaultValue={value.firstName}
                        onChange={this.updateFirstName}
                      />
                    </td>
                    <td className="centerAll" id={index + 3 + "edit"}>
                      <input
                        type="text"
                        defaultValue={value.lastName}
                        onChange={this.updateLastName}
                      />
                    </td>
                    <td className="centerAll" id={index + 4 + "edit"}>
                      <input
                        type="text"
                        defaultValue={value.email}
                        onChange={this.updateEmail}
                      />
                    </td>
                    <td className="centerAll" id={index + 5 + "edit"}>
                      <input
                        type="text"
                        defaultValue={value.salary}
                        onChange={this.updateSalary}
                      />
                    </td>
                    <td className="centerAll" id={index + 6 + "edit"}>
                      <input type="text" defaultValue={value.joinDate} />
                    </td>
                    <td className="centerAll" id={index + 7 + "edit"}>
                      <button
                        onClick={() => {
                          this.canceleditUser();
                        }}
                        className="btn btn-primary"
                      >
                        Cancel
                      </button>
                    </td>
                    <td className="centerAll" id={index + 8}>
                      <button
                        onClick={() => {
                          this.updateUser(index);
                        }}
                        className="btn btn-info"
                      >
                        Update
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <a
          class="btn-floating btn-large waves-effect waves-light green"
          onClick={() => {
            this.addUser();
          }}
        >
          <i class="material-icons">+</i>
        </a>
      </div>
    );
  }

  renderAddUser() {
    return (
      <div className="loginForm">
        <h1 className="todoHeader">Add User</h1>
        <form className="addUserForm">
          <div className="form-group">
            <label>First Name</label>
            <input
              type="text"
              className="form-control"
              id="firstName"
              aria-describedby="emailHelp"
              placeholder="Enter First Name"
            />
          </div>
          <div className="form-group">
            <label>Last Name</label>
            <input
              type="text"
              className="form-control"
              id="lastName"
              aria-describedby="emailHelp"
              placeholder="Enter Last Name"
            />
          </div>
          <div className="form-group">
            <label>Email address</label>
            <input
              type="email"
              className="form-control"
              id="email2"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
          </div>
          <div className="form-group">
            <label>Salary</label>
            <input
              type="text"
              className="form-control"
              id="salary"
              aria-describedby="emailHelp"
              placeholder="Enter Salary"
            />
          </div>
          <a
            class="btn-floating btn-large waves-effect waves-light blue  "
            onClick={() => {
              this.addUserData();
            }}
          >
            <i class="material-icons">+</i>
          </a>
        </form>
        <button
          className="btn btn-danger addUserForm"
          onClick={() => {
            this.cancelAddUser();
          }}
        >
          Cancel
        </button>
      </div>
    );
  }

  renderLogOut() {
    return (
      <div className="logOut">
        <button
          className="btn btn-warning"
          onClick={() => {
            this.logOut();
          }}
        >
          Log Out
        </button>
      </div>
    );
  }

  render() {
    return (
      <div className="App">
        {this.renderHeader()}
        {!this.state.user && this.renderLogin()}
        {this.state.user && !this.state.addUser && this.rendertoDoList()}
        {this.state.addUser && this.renderAddUser()}
        {this.state.user && !this.state.addUser && this.renderLogOut()}
      </div>
    );
  }
}

export default App;
