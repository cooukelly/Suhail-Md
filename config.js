const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://DARKSHAN:3000@Ccluster0.t1wsjlv.mongodb.net/"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "2347013172351" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null.2347013172351";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2347013172351";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_08_03_05_10_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICAxNDYsXG4gICAgICAgIDkzLFxuICAgICAgICAxMTAsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTEwLFxuICAgICAgICAxODAsXG4gICAgICAgIDczLFxuICAgICAgICAyMTAsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTM1LFxuICAgICAgICA2MixcbiAgICAgICAgNzksXG4gICAgICAgIDExMyxcbiAgICAgICAgMTY1LFxuICAgICAgICAxMTUsXG4gICAgICAgIDE0NCxcbiAgICAgICAgNDksXG4gICAgICAgIDksXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjQyLFxuICAgICAgICAyNDEsXG4gICAgICAgIDg0LFxuICAgICAgICA2NSxcbiAgICAgICAgOTcsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTM2LFxuICAgICAgICAxODMsXG4gICAgICAgIDI0NyxcbiAgICAgICAgNjIsXG4gICAgICAgIDIxLFxuICAgICAgICA3M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzMyxcbiAgICAgICAgMTczLFxuICAgICAgICA2NSxcbiAgICAgICAgMjE4LFxuICAgICAgICAxMzEsXG4gICAgICAgIDQ0LFxuICAgICAgICAyNCxcbiAgICAgICAgOTgsXG4gICAgICAgIDE5LFxuICAgICAgICAxMDIsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjIxLFxuICAgICAgICAxOTQsXG4gICAgICAgIDUwLFxuICAgICAgICAxMTYsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjUsXG4gICAgICAgIDMyLFxuICAgICAgICAxNzYsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTg1LFxuICAgICAgICAxMDQsXG4gICAgICAgIDE2OSxcbiAgICAgICAgODMsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMzAsXG4gICAgICAgIDksXG4gICAgICAgIDI0MixcbiAgICAgICAgMzksXG4gICAgICAgIDIwNixcbiAgICAgICAgMjU1LFxuICAgICAgICA5NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICAzLFxuICAgICAgICA3OCxcbiAgICAgICAgMjAsXG4gICAgICAgIDE5NCxcbiAgICAgICAgNTcsXG4gICAgICAgIDE3NixcbiAgICAgICAgNCxcbiAgICAgICAgOSxcbiAgICAgICAgMTY2LFxuICAgICAgICA2MSxcbiAgICAgICAgMzAsXG4gICAgICAgIDE0OSxcbiAgICAgICAgODIsXG4gICAgICAgIDcwLFxuICAgICAgICAxMDgsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyNDYsXG4gICAgICAgIDIxNyxcbiAgICAgICAgODQsXG4gICAgICAgIDYxLFxuICAgICAgICAxNDMsXG4gICAgICAgIDk3LFxuICAgICAgICAyMzEsXG4gICAgICAgIDEzOSxcbiAgICAgICAgNDMsXG4gICAgICAgIDIxLFxuICAgICAgICAyMTEsXG4gICAgICAgIDIwLFxuICAgICAgICAxMzYsXG4gICAgICAgIDc2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgwLFxuICAgICAgICAxMjksXG4gICAgICAgIDIyNixcbiAgICAgICAgNTQsXG4gICAgICAgIDUxLFxuICAgICAgICAxMjUsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjIyLFxuICAgICAgICAyNTAsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTE2LFxuICAgICAgICAxMzEsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTMwLFxuICAgICAgICA1MixcbiAgICAgICAgMTYzLFxuICAgICAgICAyMzUsXG4gICAgICAgIDExMCxcbiAgICAgICAgNTcsXG4gICAgICAgIDE4MyxcbiAgICAgICAgOTUsXG4gICAgICAgIDIxNyxcbiAgICAgICAgOTMsXG4gICAgICAgIDEyLFxuICAgICAgICA5MixcbiAgICAgICAgMTc4LFxuICAgICAgICAxNjQsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTIsXG4gICAgICAgIDU0LFxuICAgICAgICAxNjUsXG4gICAgICAgIDgwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3MixcbiAgICAgICAgMTI3LFxuICAgICAgICAxMixcbiAgICAgICAgMjQ1LFxuICAgICAgICA0MCxcbiAgICAgICAgMjA5LFxuICAgICAgICAwLFxuICAgICAgICAxNzAsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMzMsXG4gICAgICAgIDExOCxcbiAgICAgICAgOTYsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjAxLFxuICAgICAgICAyNTUsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTgxLFxuICAgICAgICAyNTAsXG4gICAgICAgIDgxLFxuICAgICAgICA4MixcbiAgICAgICAgMTE3LFxuICAgICAgICAzOSxcbiAgICAgICAgMTA4LFxuICAgICAgICAzOSxcbiAgICAgICAgMTExLFxuICAgICAgICAyMDksXG4gICAgICAgIDIyNyxcbiAgICAgICAgNzEsXG4gICAgICAgIDM4LFxuICAgICAgICAxODIsXG4gICAgICAgIDE0MyxcbiAgICAgICAgOTVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjAsXG4gICAgICAgIDg2LFxuICAgICAgICAxMDgsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjIxLFxuICAgICAgICA3OCxcbiAgICAgICAgODksXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTI3LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTcsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjUsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjIsXG4gICAgICAgIDc2LFxuICAgICAgICA2MCxcbiAgICAgICAgMixcbiAgICAgICAgMjQ0LFxuICAgICAgICA4NCxcbiAgICAgICAgMTM4LFxuICAgICAgICAzMyxcbiAgICAgICAgMTgyLFxuICAgICAgICAyNDcsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjE4LFxuICAgICAgICA5LFxuICAgICAgICA1NixcbiAgICAgICAgMTI2LFxuICAgICAgICAxNTUsXG4gICAgICAgIDEwNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICA5MixcbiAgICAgICAgICA3MixcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgNjdcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAyMlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ4LFxuICAgICAgICA2MyxcbiAgICAgICAgMTE2LFxuICAgICAgICAxMTYsXG4gICAgICAgIDQ3LFxuICAgICAgICAyMzIsXG4gICAgICAgIDk1LFxuICAgICAgICAxMjMsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTMxLFxuICAgICAgICAyNDYsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTMsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTEwLFxuICAgICAgICAxODMsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTA1LFxuICAgICAgICAyMjEsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTk0LFxuICAgICAgICA1NSxcbiAgICAgICAgMjQyLFxuICAgICAgICA4MixcbiAgICAgICAgODMsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTk1LFxuICAgICAgICAzMyxcbiAgICAgICAgMjE0LFxuICAgICAgICAyMTksXG4gICAgICAgIDUsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjQyLFxuICAgICAgICAxODUsXG4gICAgICAgIDExLFxuICAgICAgICAxMzQsXG4gICAgICAgIDQ3LFxuICAgICAgICAyNyxcbiAgICAgICAgMTU2LFxuICAgICAgICAyMDcsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTg0LFxuICAgICAgICAxNzAsXG4gICAgICAgIDUsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMzMsXG4gICAgICAgIDc5LFxuICAgICAgICAyNCxcbiAgICAgICAgMTA5LFxuICAgICAgICA0LFxuICAgICAgICAxNzUsXG4gICAgICAgIDgsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTU3LFxuICAgICAgICAyMjMsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNTYsXG4gICAgICAgIDUzLFxuICAgICAgICAxNzcsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTI3LFxuICAgICAgICAyMDMsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogODEsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiUFVTVDRiMTN6WEVZMVBxSTA5SGkzNm40bWNGS1ZNUURzdU9udmVocmkrZz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ3MDEzMTcyMzUxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI1QTQxMzJCMEJCMzExMDgzRjg3MjMzRDI1MjgwMEI2OFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MTUzMjgyMDRcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiB0cnVlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJMcWwwem5zMlNiZTI3X3NHX1dScE93XCIsXG4gIFwicGhvbmVJZFwiOiBcIjQ0OTMzNzdmLTg5M2EtNDQ1Yy1iZDg2LTE2OWRjNmI2OTk4ZFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAzMixcbiAgICAgIDEzMCxcbiAgICAgIDY4LFxuICAgICAgMTM2LFxuICAgICAgMjMyLFxuICAgICAgMTIyLFxuICAgICAgMjQ3LFxuICAgICAgNDksXG4gICAgICA5OSxcbiAgICAgIDE2LFxuICAgICAgODEsXG4gICAgICA2MSxcbiAgICAgIDE0LFxuICAgICAgMTk3LFxuICAgICAgMjUwLFxuICAgICAgMzgsXG4gICAgICAxNTMsXG4gICAgICAyMjcsXG4gICAgICAxMyxcbiAgICAgIDE2MFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IGZhbHNlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMzIsXG4gICAgICAyMDMsXG4gICAgICAxNDEsXG4gICAgICAxNzgsXG4gICAgICAyMjgsXG4gICAgICAyMyxcbiAgICAgIDE1NCxcbiAgICAgIDQ2LFxuICAgICAgNyxcbiAgICAgIDE1MixcbiAgICAgIDI0MCxcbiAgICAgIDExNyxcbiAgICAgIDMsXG4gICAgICAxMTYsXG4gICAgICAxMTQsXG4gICAgICAxNTEsXG4gICAgICAxNDUsXG4gICAgICAxOTMsXG4gICAgICAxMDgsXG4gICAgICAxMzVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNQREU3dXNERU1TcDk3RUdHQVVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlBmVEFKNjNQcjdYNFc5NElBbnE3YzJ1SWJCam1kWEIxSU9sWDgzZDJDaDQ9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiY0p0bWhiVlZYdkVyRGVQSExDZlhpcFVya1h3dTd3ZEY3NlgzdnBUUFR6WEdiU3huWGRsbThaaEIydzJ6elREWUVXek9odWl4SktxSmZZanBFNURiRHc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiTUNLaEFsd2ZMaldMTDZqTDlrOC9wN2MweDlPa2w4elZEVWVVZ1FtbFZpakdXWVdGeVFyY3NQdlNrekxWTjloNGJZSHZJSDhJR09ZWXY4RmdZZGFDQmc9PVwiXG4gIH0sXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ3MDEzMTcyMzUxOjE1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwicmVhbFwiLFxuICAgIFwibGlkXCI6IFwiNjM4OTYyNDUyNjQ1NTE6MTVAbGlkXCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ3MDEzMTcyMzUxOjE1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICA4LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAzMFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE1MzI4MjAxLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBQlM3XCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFCUzYuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJGMTM4WllhdHJVaVJwWWgvTXVwbG9VVjRsMnp3VkVCUjVteThoZXZ5QmRJPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjEwMzE1MTI2ODgsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcxNTMyODAxOTA0MVwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUJTNy5qc29uIjogIntcImtleURhdGFcIjpcIlpPTEk4aXZldVdjSXFIUlpySnBhY2NNa3p2RUFzVDJTb1BIOWZ6dWl4K1k9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTAzMTUxMjY4OCxcImN1cnJlbnRJbmRleFwiOjUsXCJkZXZpY2VJbmRleGVzXCI6WzAsMSw1XX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTUzMjgyMDM5MjdcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.4",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "hopefully",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "hopeful",
  ownername:process.env.OWNER_NAME|| "hopefully",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
