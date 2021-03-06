const express = require('express');
const multer = require('multer');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');
const app = express();
const axios = require('axios');
const jwt = require('jsonwebtoken');
const session = require('express-session');
const MysqlStore = require('express-mysql-session')(session);
const moment = require('moment-timezone');
const cors = require('cors');
const db = require(__dirname + '/db_connect');
const sessionStore = new MysqlStore({}, db);
const upload = multer({ dest: __dirname + '/../tmp_uploads' });

// 處理表單資料的body-parser
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
// 開啟CORS
const corsOptions = {
    credentials: true,
    origin: function(origin, cb){
        console.log(`origin: ${origin}`);
        cb(null, true);
    }
};
app.use(cors(corsOptions));

// //連線資料庫
// app.get('/try-db', (req, res) => {
//     db.query('SELECT * FROM `member_list` WHERE 1')
//         .then(([results]) => {
//             res.json(results);
//         })
// });


app.use(express.static(__dirname + '/../public'));

//範例
app.use('/example', require(__dirname + '/Name/example'));


//引入的檔案裡面一定要有東西，不然會報錯，所以先註解掉

//Cha
app.use('/cart-api', require(__dirname + '/Cha/cha'));

// Claudia
// app.use('/farm', require(__dirname + '/Claudia'));

// Iris
// app.use('/member', require(__dirname + '/Iris'));

//Janice
// app.use('/index', require(__dirname + '/Janice'));

//Jess
// app.use('/bento', require(__dirname + '/Jess'));

//Ru
// app.use('/product', require(__dirname + '/Ru'));


// Server
app.listen(5000, () => {
    console.log('伺服器已啟動');
})