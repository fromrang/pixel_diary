import React, {useState} from 'react'
import "./LoginRegister.css"
import axios from 'axios';
import { useLocation, useNavigate } from "react-router-dom";

 

function RegisterPage() {
    
    const navigate = useNavigate();
    const { state } = useLocation();
    const [id, setId] = useState("")
    const [nickname, setNickname] = useState("");
    const [birthDay, setBirthday] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const onIdHandler = (event) => {
        setId(event.currentTarget.value);
    }
    const onNicknameHandler = (event) => {
        setNickname(event.currentTarget.value);
    }
    const onBirthDayHandler = (event) => {
        setBirthday(event.currentTarget.value);
    }

    const onPasswordHandler = (event) => {
        setPassword(event.currentTarget.value);
    }

    const onConfirmPasswordHandler = (event) => {
        setConfirmPassword(event.currentTarget.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        if(password !== confirmPassword) {
            return alert('비밀번호와 비밀번호확인은 같아야 합니다.');
        }

        var body= JSON.stringify({
            id: id,
            nickname : nickname,
            password : password,
            birthDay : birthDay
        });

        var config = {
            method: 'post',
            url: 'http://localhost:7777/user',
            headers: { 
                'Content-Type': 'application/json'
            },
            data : body
        };
        
        axios(config).then(function (response) {
            console.log(JSON.stringify(response.data));
            navigate('/login');
        })
        .catch(function (error) {
            console.log(error);
        });

        // const request = axios.post('http://localhost:7777/user', body).then((response) => response.data);
        // if(request.statusCode == 200){
        //     navigate('/login');
        // }else{
        //     alert('error!!!');
        // }
    }

    return (
        <div className="loginregister">
        <form>
            <div><input name="id" type="text" placeholder="ID" value={id} onChange={onIdHandler} className="loginregister__input"/></div>
            <div><input name="nickname" type="text" placeholder="닉네임" value={nickname} onChange={onNicknameHandler} className="loginregister__input"/></div>
            <div><input name="birthDay" type="date" placeholder="birthDay" value={birthDay} onChange={onBirthDayHandler} className="loginregister__input"/></div>
            <div><input name="password" type="password" placeholder="비밀번호" value={password} onChange={onPasswordHandler} className="loginregister__input"/></div>
            <div><input name="confirmPassword" type="password" placeholder="비밀번호 확인" value={confirmPassword} onChange={onConfirmPasswordHandler} className="loginregister__input"/></div>
            <div><button type="submit" onClick={onSubmit} className="loginregister__button">계정 생성하기</button></div>
        </form>
        </div>
    );
}
export default RegisterPage;