//mypage사용
var express = require('express');
var router = express.Router();
var db = require('../db');

// oxnote 문제 list.json
router.get('/oxnote.list', function(req, res){
    const user_id = req.query.user_id;
    const sql = 'select * from oxnote,problems where oxnote.user_id = ? and problems.problem_id=oxnote.problem_id';
    db.get().query(sql, [user_id], function(err, rows){
        if(err) console.log(err);
        res.send(rows);
    });
});

//user별 comment 가져오기
router.get('/comments.list', function(req, res){
    const user_id = req.query.user_id;
    const sql = 'select * from comments where user_id=?';
    db.get().query(sql, [user_id], function(err, rows){
        res.send({list:rows[0]});
    });
});

module.exports = router;