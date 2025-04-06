// import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';


function App() {
  // let [uname, setUanme]=useState('')
  // let [password ,setPassword]=useState('')
  let [formdata, setFormdata] = useState(
    {
      uname: '',
      password: ''
    }
  )
  let getData = (event) => {
    let olddata = { ...formdata }
    let inputName = event.target.name;
    let inputValue = event.target.value;
    olddata[inputName] = inputValue
    setFormdata(olddata)


  }
  let [userdata, setUserdata] = useState([])
  let handleSubmit = (event) => {
    let currentuserdata = {
      uname: formdata.uname,
      password: formdata.password
    }
    let checkUserData = userdata.filter((v) => v.uname == formdata.uname)
    if (checkUserData.length == 1) {
      toast.success("username allredy Exits....");

      // alert("username allredy Exits....")


    }
    else {
      let olduserdata = [...userdata, currentuserdata]
      setUserdata(olduserdata)
      setFormdata(
        {
          uname: '',
          password: ''
        }

      )
     

    }
    event.preventDefault()



  }
  let deleteRow = (indexnuber) => {
    let filterdataafterdelte = userdata.filter((v, i) => i != indexnuber)
    // alert(filterdataafterdelte)
    // console.log(filterdataafterdelte)
    toast.error(" delete username successfully....");
    setUserdata(filterdataafterdelte)
    // console.log(filterdataafterdelte)

  }
  let editRow = (indexnuber) => {
    console.log(indexnuber)
    let editdata=userdata.filter((v, i) => i==indexnuber)[0];
    console.log(editdata);

  }

  return (
    <div className="App">

      <table>
        <thead>
          <tr>
            <th>username</th>
            <th>password</th>

          </tr>
        </thead>
        <tbody>
          {userdata.length >= 1 ?
            userdata.map((obj, i) => {
              return (
                <tr key={i}>
                  <td>{obj.uname}</td>
                  <td>{obj.password}</td>
                  <td>
                    <button onClick={() => deleteRow(i)}>Delete</button>
                    <button onClick={()=>editRow(i)}>Edit</button>

                  </td>
                </tr>

              )

            })

            :
            <tr>
              <td>No data</td>
            </tr>


          }


        </tbody>


      </table>
      {userdata.length}
      <ToastContainer />
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username</label>
          <input type='text' name='uname' value={formdata.uname} onChange={getData}></input>
        </div>
        <div>
          <label>password</label>
          <input type='text' name='password' value={formdata.password} onChange={getData}></input>
        </div>
        <div>
          <button onl>Login</button>
        </div>
      </form>


    </div>
  );
}

export default App;
