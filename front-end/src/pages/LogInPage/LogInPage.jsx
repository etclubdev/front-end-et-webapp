import './LogInPage.css';
import { noTextLogo } from '../../assets/images/logos';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

export const LogInPage = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [eyeSlashIcon, setEyeSlashIcon] = useState(faEye);
    const [passwordType, setPasswordType] = useState("text");

    const togglePasswordVisibility = () => {
        setShowPassword((prevState) => !prevState);
        
        if(showPassword) {
            setEyeSlashIcon(faEye);
            setPasswordType("text");
        } else {
            setEyeSlashIcon(faEyeSlash);
            setPasswordType("password");
        }
      };

    return (
        <div className="log-in">
            <div className="log-in-form">
                <div className="log-in-form-item">
                    <img className='log-in-logo' src={noTextLogo} alt="ET Club" />
                    <p className="log-in-welcome">Chào mừng trở lại!</p>
                    <div className="log-in-division">
                        <div className="log-in-division-bar"></div>
                        <div className="log-in-desc">Đăng nhập vào hệ thống quản lý website ET</div>
                        <div className="log-in-division-bar"></div>
                    </div>
                </div>
                <form action="/submit" method="POST">
                    <div className="log-in-input">
                        <label htmlFor="username">Tên đăng nhập</label>
                        <input type="text" id="username" name="username" required/>
                    </div>
                    <div className="log-in-input">
                        <label htmlFor="password">Mật khẩu</label>
                        <div className="password-input">
                            <input type={passwordType} id='password' name='password' required/>
                            <FontAwesomeIcon onClick={togglePasswordVisibility} className='password-eye' icon={eyeSlashIcon}/>
                        </div>
                    </div>
                </form>
                <button type="submit">Đăng nhập</button>
            </div>
        </div>
    )
}