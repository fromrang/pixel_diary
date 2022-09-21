import React, {useEffect, useState} from 'react';
import axios from 'axios';

function login(){
    var axios = require('axios');
    var data = JSON.stringify({
    "useq": 0,
    "nickname": "a",
    "id": "a",
    "password": "a",
    "birthday": "2022-09-21",
    "reg_date": "2022-09-21"
    });

    var config = {
    method: 'post',
    url: 'http://localhost:7777/user',
    headers: { 
        'Content-Type': 'application/json'
    },
    data : data
    };

    axios(config)
    .then(function (response) {
    console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
    console.log(error);
    });

    return(
        <div>hello</div>
    );
}
export default login;