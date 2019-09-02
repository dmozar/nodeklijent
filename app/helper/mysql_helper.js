var mysql  = require('mysql');

export const MysqlHelper = {

    conf: {
        'host':         'localhost',
        'database':     'searchclients',
        'user':         'root',
        'password':     '',
        'charset':      'utf8'
    },


    connect: () => {
        return mysql.createConnection(MysqlHelper.conf);
    },

}