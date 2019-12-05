var mysql = require('mysql')
var config = require('./defaultConfig')

//创建线程
var pool = mysql.createPool({
  host: config.database.HOST,
  user: config.database.USERNAME,
  password: config.database.PASSWORD,
  database: config.database.DATABASE,
  port: config.database.PORT,
})

//统一连接数据库的方法
let allServeices = {
  query: function (sql, values) {
    return new Promise((resolve, reject) => {
      pool.getConnection(function (err, connection) {
        if (err) {
          reject(err)
        } else {
          connection.query(sql, values, (err, rows) => {
            if (err) {
              reject(err)
            } else {
              resolve(rows)
            }
            connection.release()
          })
        }
      })
    })
  }
}

//读取所有 users 表数据,测试数据连接
let getAllusers = function () {
  let _sql = `select * from users;`
  return allServeices.query(_sql)
}

//用户登录
let userLogin = function (username, userpwd) {
  let _sql = `select * from users where username="${username}" and userpwd="${userpwd}";`
  return allServeices.query(_sql)
}

//查找用户是否存在
let findUser = function (username) {
  let _sql = `select * from users where username="${username}";`
  return allServeices.query(_sql)
}

//注册用户 将三个实参封装对象
let insertUser = function (value) {
  let _sql = `insert into users set username=?,userpwd=?,nickname=?`
  return allServeices.query(_sql,value)
}

//根据分类名称查找对应笔记列表
let findNoteListBytype = function (note_type) {
  let _sql = `select * from note where note_type="${note_type}";`
  return allServeices.query(_sql)
}

module.exports = {
  getAllusers,
  userLogin,
  findUser,
  insertUser,
  findNoteListBytype

}