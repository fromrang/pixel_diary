import React, {useEffect, useState} from 'react';
import "./styles/LoginRegister.css"
import axios from 'axios';
import { json, useLocation, useNavigate } from "react-router-dom";
import setAuthorizationToken from './utils/setAuthorizationToken';

function LoginPage(){

    const navigate = useNavigate();
    const { state } = useLocation();
    const [id, setId] = useState("")
    const [password, setPassword] = useState("");

    const onIdHandler = (event) => {
        setId(event.currentTarget.value);
    }
    const onPasswordHandler = (event) => {
        setPassword(event.currentTarget.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();

        if(id == '') {
            return alert('아이디를 입력해주세요');
        }
        if(password == '') {
            return alert('비밀번호를 입력해주세요');
        }

        var body= {
            id: id,
            password : password
        };

        // [GET 방식]
        // var config = {
        //     method: 'get',
        //     url: 'http://localhost:7777/user',
        //     headers: { 
        //         'Content-Type': 'application/json'
        //     },
        //     params : body
        // };

        // axios(config).then(function (response) {
        //     //console.log(JSON.stringify(response.data));
        //     if (JSON.stringify(response.data['statusCode']) == 201){
        //         return alert('존재하지 않는 회원이거나 비밀번호가 일치하지 않습니다.');
        //     }else if(JSON.stringify(response.data['statusCode']) == 200){
        //     navigate('/main');
        //     }
        // })
        // .catch(function (error) {
        //     console.log(error);
        // });

        var config = {
            method: 'post',
            url: 'http://localhost:7777/token',
            headers: { 
                'Content-Type': 'application/json'
            },
            data : body
        };
        
        axios(config).then(function (response) {
            if (JSON.stringify(response.data['statusCode']) == 201){
                return alert('존재하지 않는 회원이거나 비밀번호가 일치하지 않습니다.');
            }else if(JSON.stringify(response.data['statusCode']) == 200){
                const token = response.data['data'];
                localStorage.setItem('jwtToken', token);
                setAuthorizationToken(token);
                navigate('/main');
            }
        })
        .catch(function (error) {
            console.log(error);
        });

    }


    return(
        <div className="loginregister">
        <form>
            <div><input name="id" type="text" placeholder="ID" value={id} onChange={onIdHandler} className="loginregister__input"/></div>
            <div><input name="password" type="password" placeholder="비밀번호" value={password} onChange={onPasswordHandler} className="loginregister__input"/></div>
            
            <div><button type="submit" onClick={onSubmit} className="loginregister__button">계정 생성하기</button></div>
        </form>
        </div>
    );
}
export default LoginPage;