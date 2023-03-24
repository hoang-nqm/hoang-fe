import React, { useEffect, useState } from "react";
import "./EditPage.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
function EditPage() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  const [fulllname, setFullName] = useState(user.fullname);
  const [dob, setDOB] = useState(user.dob);
  const [email, setEmail] = useState(user.email);
  const [phone, setPhone] = useState(user.phone);
  const [errorMessage, setErrorMessage] = useState("");
  const [isUpdating, setIsUpdating] = useState(false);
  const navigate = useNavigate();
  function HandleCancle(event) {
    navigate("/");
    localStorage.removeItem("user");
  }
  function handleSubmit(event) {
    event.preventDefault();

    if (!fulllname || !dob || !email || !phone) {
      setErrorMessage("Please fill in all fields.");
      toast.warning(errorMessage, {
        position: toast.POSITION.TOP_LEFT,
      });
      return;
    }

    setIsUpdating(true);
  }

  useEffect(() => {
    if (isUpdating) {
      setTimeout(() => {
        const newUser = {
          fullname: fulllname,
          dob: dob,
          email: email,
          phone: phone,
        };
        setFullName(fulllname);
        setDOB(dob);
        setEmail(email);
        setPhone(phone);
        setIsUpdating(false);
        toast.success("Profile updated successfully! ", {
          position: toast.POSITION.TOP_LEFT,
        });
        setUser(newUser);
      }, 1000);
      localStorage.setItem("user", JSON.stringify(user));
    }
  });

  if (user) {
    return (
      <div className="profile-container">
        <ToastContainer />
        <form onSubmit={handleSubmit} className="profile-form">
          <h5 className="profile-heading">Profile</h5>

          <label htmlFor="full-name" className="profile-label">
            Full name:
          </label>
          <input
            type="text"
            id="full-name"
            className="profile-input"
            value={fulllname}
            onChange={(event) => setFullName(event.target.value)}
          />
          <label htmlFor="dob" className="profile-label">
            Date of birth
          </label>
          <input
            type="date"
            id="dob"
            className="profile-input"
            value={dob}
            onChange={(event) => setDOB(event.target.value)}
          />
          <label htmlFor="email" className="profile-label">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="profile-input"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <label htmlFor="phone" className="profile-label">
            Phone
          </label>
          <input
            type="text"
            id="phone"
            className="profile-input"
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
          />
          <div class="row">
            <div class="content"></div>
            <div className="button-group">
              <button type="submit" className="profile-button">
                Update
              </button>
              <button
                type="button"
                className="profile-button"
                onClick={HandleCancle}
              >
                Cancle
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default EditPage;
