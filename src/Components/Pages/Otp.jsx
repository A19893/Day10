import React, { useState } from "react";
import OtpInput from "react-otp-input";
import { useNavigate } from "react-router-dom";
import { Button } from "antd";
const Otp = () => {
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();
  const submitOtp = () => {
    console.log(process.env.REACT_APP_OTP);
    if (otp === process.env.REACT_APP_OTP) {
      navigate("/profile");
    } else {
      navigate("/login");
    }
  };
  return (
    <div className="ot">
      <div className="otContainer">
        <div className="otpImgContainer">
          <img
            className="otpimg"
            src="https://img.freepik.com/premium-photo/smartphone-with-sms-alert-when-login-online-service-3d-render-illustration_594542-177.jpg?w=1380"
            alt="aews"
          />
        </div>
        <div className="otpContainer">
          <div className="ottContainer">
            <OtpInput
              value={otp}
              onChange={setOtp}
              numInputs={4}
              renderSeparator={<span>&nbsp;&nbsp;</span>}
              renderInput={(props) => <input {...props} />}
            />
            <br />
            <br />
            </div>
            <div className="otpBtn">
              <Button
                type="primary"
                style={{ width: 200 }}
                onClick={(e) => submitOtp()}
              >
                Submit
              </Button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Otp;
