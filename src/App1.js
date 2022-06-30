import React, { useState, useEffect } from "react";
import axios from "axios"; //Sử dụng axios
 
//Component hiển thị danh sách người dùng
const ShowUser = (props) => {
  //Lấy giá tri của props listUser
  const { listUser } = props;
 
  // Render ra list user
  // React.Fragment cho phép bọc JSX lại.
  // List Keys :  chỉ định key, giúp loại bỏ cảnh báo.
  return (
    <div>
      {listUser.map((user, index) => {
        return (
          <React.Fragment key={user.id}>
            <ul>
              <li>{user.name}</li>
              <li>{user.email}</li>
            </ul>
            <hr />
          </React.Fragment>
        );
      })}
    </div>
  );
};
 
 function App1(props) {
  //Khai báo state, sử dụng hook: useState
  const [listUser, setListUser] = useState([]);
 
  //Sử dụng useEffect hook như componentDidMount
  useEffect(() => {
    const getUserAPI = 'https://5df8a4c6e9f79e0014b6a587.mockapi.io/freetuts/users'
 
    //Gọi API bằng axios
    axios.get(getUserAPI).then((res) => {
      // Cập nhật lại listUser bằng
      // Bạn có thể xem lại bài viết về useState()
      setListUser(res.data);
    }).catch((err) => {
      //Trường hợp xảy ra lỗi
      console.log(err);
      alert("Xảy ra lỗi");
    })
 
  }, [])
 
  return (
    <>
      <code>freetuts.net</code> <br />
 
      <ShowUser listUser={listUser} />
    </>
  );
}
export default App1;