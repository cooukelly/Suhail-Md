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


global.devs = "2348123751934" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null.2348123751934";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348123751934";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_18_19_05_17_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICAyMzAsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTk3LFxuICAgICAgICAxMDcsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjA1LFxuICAgICAgICAxNTYsXG4gICAgICAgIDU4LFxuICAgICAgICA5NCxcbiAgICAgICAgMjA0LFxuICAgICAgICAxNTcsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTg2LFxuICAgICAgICA0NSxcbiAgICAgICAgMjEwLFxuICAgICAgICAxMCxcbiAgICAgICAgNDYsXG4gICAgICAgIDI3LFxuICAgICAgICAzNixcbiAgICAgICAgNzksXG4gICAgICAgIDE3NixcbiAgICAgICAgMTIyLFxuICAgICAgICA0NCxcbiAgICAgICAgNjYsXG4gICAgICAgIDMyLFxuICAgICAgICAyMDIsXG4gICAgICAgIDczLFxuICAgICAgICAxNDUsXG4gICAgICAgIDQsXG4gICAgICAgIDcwLFxuICAgICAgICA5NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjIsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTczLFxuICAgICAgICA2NCxcbiAgICAgICAgMzgsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjEzLFxuICAgICAgICAxMjgsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjMzLFxuICAgICAgICAxNTYsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTcyLFxuICAgICAgICA2OCxcbiAgICAgICAgMTAzLFxuICAgICAgICAyMTcsXG4gICAgICAgIDI3LFxuICAgICAgICA1NSxcbiAgICAgICAgMTE4LFxuICAgICAgICAxOTIsXG4gICAgICAgIDkxLFxuICAgICAgICAyMDAsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTM3LFxuICAgICAgICAyNDEsXG4gICAgICAgIDg3LFxuICAgICAgICA0MCxcbiAgICAgICAgMTUwLFxuICAgICAgICAzNixcbiAgICAgICAgNjEsXG4gICAgICAgIDM5LFxuICAgICAgICAxOVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICAzMCxcbiAgICAgICAgNTYsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjMwLFxuICAgICAgICA5LFxuICAgICAgICAxMjMsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTIsXG4gICAgICAgIDEsXG4gICAgICAgIDcwLFxuICAgICAgICA3NCxcbiAgICAgICAgMjEsXG4gICAgICAgIDQyLFxuICAgICAgICAzNCxcbiAgICAgICAgNTYsXG4gICAgICAgIDUwLFxuICAgICAgICAyNDYsXG4gICAgICAgIDc5LFxuICAgICAgICAxNyxcbiAgICAgICAgMjUsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjA0LFxuICAgICAgICAwLFxuICAgICAgICAxNzQsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTk5LFxuICAgICAgICAxMTYsXG4gICAgICAgIDYwLFxuICAgICAgICA3NSxcbiAgICAgICAgMjAsXG4gICAgICAgIDEwNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjEsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjI5LFxuICAgICAgICAxNTgsXG4gICAgICAgIDkwLFxuICAgICAgICAxMjcsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMzgsXG4gICAgICAgIDcsXG4gICAgICAgIDYzLFxuICAgICAgICAyNDIsXG4gICAgICAgIDExLFxuICAgICAgICAxMjcsXG4gICAgICAgIDYzLFxuICAgICAgICAxOTUsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTI5LFxuICAgICAgICAyMCxcbiAgICAgICAgNTYsXG4gICAgICAgIDU2LFxuICAgICAgICA2OCxcbiAgICAgICAgNjgsXG4gICAgICAgIDcsXG4gICAgICAgIDUwLFxuICAgICAgICAzNSxcbiAgICAgICAgMTU1LFxuICAgICAgICAyMzAsXG4gICAgICAgIDU3LFxuICAgICAgICAyMjUsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjMxLFxuICAgICAgICAxMDhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTg1LFxuICAgICAgICAxMjgsXG4gICAgICAgIDE4MyxcbiAgICAgICAgOTcsXG4gICAgICAgIDU1LFxuICAgICAgICAyMDksXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTMxLFxuICAgICAgICAxOTcsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTUyLFxuICAgICAgICAxMzQsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjI3LFxuICAgICAgICA3MixcbiAgICAgICAgNzEsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTk0LFxuICAgICAgICAyMyxcbiAgICAgICAgMTIsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTU1LFxuICAgICAgICA5MixcbiAgICAgICAgMTI1LFxuICAgICAgICAxMjgsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNDQsXG4gICAgICAgIDY5LFxuICAgICAgICAxNTAsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTEyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY1LFxuICAgICAgICAxOSxcbiAgICAgICAgMTkzLFxuICAgICAgICAyMTksXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjE2LFxuICAgICAgICAyNDcsXG4gICAgICAgIDE2NixcbiAgICAgICAgMSxcbiAgICAgICAgMjU0LFxuICAgICAgICAxNzMsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTIwLFxuICAgICAgICA4OCxcbiAgICAgICAgMTYyLFxuICAgICAgICA1NSxcbiAgICAgICAgNzYsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTc4LFxuICAgICAgICAxNixcbiAgICAgICAgNzMsXG4gICAgICAgIDY0LFxuICAgICAgICAyMTIsXG4gICAgICAgIDU0LFxuICAgICAgICAyMTgsXG4gICAgICAgIDg5LFxuICAgICAgICAxMDAsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjQ3LFxuICAgICAgICAzMSxcbiAgICAgICAgMTQwLFxuICAgICAgICA3OVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA4LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDExOVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICA1MixcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgOTFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzMsXG4gICAgICAgIDQ0LFxuICAgICAgICA1OCxcbiAgICAgICAgMjE3LFxuICAgICAgICA1MSxcbiAgICAgICAgMzcsXG4gICAgICAgIDEzNSxcbiAgICAgICAgODEsXG4gICAgICAgIDM3LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjMsXG4gICAgICAgIDgwLFxuICAgICAgICA5NCxcbiAgICAgICAgMjQxLFxuICAgICAgICAxMTUsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTU3LFxuICAgICAgICAyMzMsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNjIsXG4gICAgICAgIDcsXG4gICAgICAgIDg1LFxuICAgICAgICAyNDYsXG4gICAgICAgIDcyLFxuICAgICAgICA3MixcbiAgICAgICAgNzIsXG4gICAgICAgIDE5NyxcbiAgICAgICAgNTUsXG4gICAgICAgIDM4LFxuICAgICAgICAxMTcsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjM0LFxuICAgICAgICA3LFxuICAgICAgICAxNTMsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTc2LFxuICAgICAgICAxNzksXG4gICAgICAgIDEyMixcbiAgICAgICAgNDQsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjQwLFxuICAgICAgICAxNzcsXG4gICAgICAgIDk5LFxuICAgICAgICA2MixcbiAgICAgICAgODAsXG4gICAgICAgIDk4LFxuICAgICAgICAxMzMsXG4gICAgICAgIDcsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjgsXG4gICAgICAgIDI4LFxuICAgICAgICA1LFxuICAgICAgICAyNTAsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTI1LFxuICAgICAgICAzMCxcbiAgICAgICAgMjE4LFxuICAgICAgICA3NSxcbiAgICAgICAgMTU1LFxuICAgICAgICAxNDYsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTM3LFxuICAgICAgICAxNDJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDc5LFxuICBcImFkdlNlY3JldEtleVwiOiBcIlBMSWxVT3BrUXF0OE9FL0oySGEvNC9idDdzWE9KSXRDa1NhY2V6N0xpNGs9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiA2MSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiA2MSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIndfSk0zZE1jUTNlRGhxZTY5alRiVHdcIixcbiAgXCJwaG9uZUlkXCI6IFwiNTY1YTY2MzUtMjQwZC00OTM5LWJiYzUtNGEzNTdlOWQ3NDk1XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIzMCxcbiAgICAgIDI0MixcbiAgICAgIDgzLFxuICAgICAgMTM4LFxuICAgICAgMTk3LFxuICAgICAgOTksXG4gICAgICA5NixcbiAgICAgIDIxLFxuICAgICAgMTc3LFxuICAgICAgMjM0LFxuICAgICAgMTg1LFxuICAgICAgMTQyLFxuICAgICAgMTcyLFxuICAgICAgMTAzLFxuICAgICAgMjE3LFxuICAgICAgNDgsXG4gICAgICAyNyxcbiAgICAgIDE3MSxcbiAgICAgIDU5LFxuICAgICAgMTQ1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogZmFsc2UsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA4NyxcbiAgICAgIDY0LFxuICAgICAgMTY2LFxuICAgICAgNDQsXG4gICAgICAzNCxcbiAgICAgIDIzNyxcbiAgICAgIDEwLFxuICAgICAgNjIsXG4gICAgICAxNSxcbiAgICAgIDIwNyxcbiAgICAgIDMyLFxuICAgICAgNTMsXG4gICAgICAyMDIsXG4gICAgICA3NyxcbiAgICAgIDIyMCxcbiAgICAgIDk4LFxuICAgICAgOTcsXG4gICAgICAzOSxcbiAgICAgIDY1LFxuICAgICAgNzFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNJbjJ4MjhRZzcrZXNnWVlBaUFBS0FBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkovRnl3ZWdoY0tsSVNNUU96RUpwK0JlaHJlQUFzZVFsZjNTRUl0MnlVVTQ9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiM3J6dXJ4cWZDODVkdVhibHdaNlpZYUJVMXJOOXBETmJwVWs3eUFHK3JlV3VGdjlMdGN2Qk9EU1pnK2o4RHNrWTFuR2pnd2dOSlk3UnhJTE0zSkt0QlE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwielg4Sm5yaStybDZzaTRWMVZtUStNdkplZThpWWJoSlNEMWd0TTZ3ckpROUI0Q2VHMml4L0RwY09kd2M1NWV4bUNtcnNiNnAyTnBaTFRKWHBGM2M2aUE9PVwiXG4gIH0sXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ4MTIzNzUxOTM0OjNAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJCQVJPTlwiLFxuICAgIFwibGlkXCI6IFwiMjYzNTIyNDgzMjIwNjU0OjNAbGlkXCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ4MTIzNzUxOTM0OjNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICA3MixcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgNzhcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxNTk2OTkyOCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUwzaVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTDNpLmpzb24iOiAie1wia2V5RGF0YVwiOlwiVWx3QjdaajZsMk5iMnNUYllJMDR6N281eldSZFFtS1FVenJhTWxHUU9MVT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoyMzM5NjIyNDksXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcxNTk2OTYyMjA1MlwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.4",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "baron",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Baron",
  ownername:process.env.OWNER_NAME|| "baron",


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
