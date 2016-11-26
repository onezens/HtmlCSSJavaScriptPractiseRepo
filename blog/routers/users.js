/**
 * Created by wangzhen on 16/11/24.
 */

const express = require('express');
const router = express.Router();

router.get('/:name', function(req, res){
    res.render('users', {
        name : req.params.name
    });

    console.log(req.params.name);
});

module.exports = router;