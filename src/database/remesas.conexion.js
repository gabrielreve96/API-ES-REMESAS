const {createPool}=require("mysql2/promise")
const dotenv=require("dotenv").config()
const setting=require("../config.js")
const pool=createPool({
 user:setting.user,
 password:setting.password,
 host:setting.host,
 port:setting.port,
 database:setting.data_base
  
})

module.exports=pool;