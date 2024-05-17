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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_18_50_05_17_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICAzMCxcbiAgICAgICAgMTY4LFxuICAgICAgICAxNjMsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjM1LFxuICAgICAgICA3NSxcbiAgICAgICAgMjE4LFxuICAgICAgICAxOTYsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjE4LFxuICAgICAgICAzNCxcbiAgICAgICAgMTE1LFxuICAgICAgICAxODIsXG4gICAgICAgIDEzOCxcbiAgICAgICAgODYsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTYzLFxuICAgICAgICAxNDksXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjQyLFxuICAgICAgICAxNDYsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjMsXG4gICAgICAgIDE2LFxuICAgICAgICAyMzIsXG4gICAgICAgIDExNixcbiAgICAgICAgNTksXG4gICAgICAgIDkzLFxuICAgICAgICA0MSxcbiAgICAgICAgNzQsXG4gICAgICAgIDcyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyNixcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNzgsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTQ4LFxuICAgICAgICA1NixcbiAgICAgICAgMjQwLFxuICAgICAgICAxMTksXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjQ3LFxuICAgICAgICA4MCxcbiAgICAgICAgMTc5LFxuICAgICAgICAyMTIsXG4gICAgICAgIDk0LFxuICAgICAgICAxODMsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTIxLFxuICAgICAgICAxMzcsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTg1LFxuICAgICAgICAxNyxcbiAgICAgICAgMTQsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTc4LFxuICAgICAgICA0NyxcbiAgICAgICAgOTcsXG4gICAgICAgIDc3LFxuICAgICAgICAyMTIsXG4gICAgICAgIDM0LFxuICAgICAgICAyNDQsXG4gICAgICAgIDgwLFxuICAgICAgICAxMjdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxNixcbiAgICAgICAgMjUwLFxuICAgICAgICAxMzUsXG4gICAgICAgIDExMCxcbiAgICAgICAgNDIsXG4gICAgICAgIDI0MyxcbiAgICAgICAgODAsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTI4LFxuICAgICAgICA4MixcbiAgICAgICAgNyxcbiAgICAgICAgMTM5LFxuICAgICAgICA1NixcbiAgICAgICAgMjQwLFxuICAgICAgICAyMSxcbiAgICAgICAgMTk5LFxuICAgICAgICAxNyxcbiAgICAgICAgMTU0LFxuICAgICAgICAyNTEsXG4gICAgICAgIDEzNSxcbiAgICAgICAgOTEsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjIwLFxuICAgICAgICAxNzYsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTA4LFxuICAgICAgICA0NCxcbiAgICAgICAgMjEsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTA2LFxuICAgICAgICA2MSxcbiAgICAgICAgMTIwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5NCxcbiAgICAgICAgNixcbiAgICAgICAgMjA0LFxuICAgICAgICAxMDQsXG4gICAgICAgIDkxLFxuICAgICAgICAxMjcsXG4gICAgICAgIDg3LFxuICAgICAgICAzNyxcbiAgICAgICAgOTgsXG4gICAgICAgIDg3LFxuICAgICAgICAxNzQsXG4gICAgICAgIDE3LFxuICAgICAgICAyMzQsXG4gICAgICAgIDYzLFxuICAgICAgICA3MixcbiAgICAgICAgMjI5LFxuICAgICAgICAxLFxuICAgICAgICAxNjksXG4gICAgICAgIDQxLFxuICAgICAgICAyMSxcbiAgICAgICAgMTM5LFxuICAgICAgICAxOTUsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTI1LFxuICAgICAgICAxMzMsXG4gICAgICAgIDExMixcbiAgICAgICAgMTgzLFxuICAgICAgICA4OSxcbiAgICAgICAgMjQsXG4gICAgICAgIDY2LFxuICAgICAgICAyNTQsXG4gICAgICAgIDc2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjQsXG4gICAgICAgIDE0MixcbiAgICAgICAgOTUsXG4gICAgICAgIDI0LFxuICAgICAgICA0MyxcbiAgICAgICAgNSxcbiAgICAgICAgODgsXG4gICAgICAgIDE3MixcbiAgICAgICAgNjksXG4gICAgICAgIDgwLFxuICAgICAgICAyMyxcbiAgICAgICAgMTYzLFxuICAgICAgICAyMTgsXG4gICAgICAgIDg3LFxuICAgICAgICA0NCxcbiAgICAgICAgMjIsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTUyLFxuICAgICAgICA4MixcbiAgICAgICAgMTY5LFxuICAgICAgICAxNzcsXG4gICAgICAgIDEyNixcbiAgICAgICAgNzEsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjA3LFxuICAgICAgICAxMDUsXG4gICAgICAgIDk3LFxuICAgICAgICAxNzEsXG4gICAgICAgIDY4LFxuICAgICAgICAxNTYsXG4gICAgICAgIDE2NyxcbiAgICAgICAgNzlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkxLFxuICAgICAgICAxNzcsXG4gICAgICAgIDUzLFxuICAgICAgICAxNTAsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjEyLFxuICAgICAgICAyMjksXG4gICAgICAgIDE4NSxcbiAgICAgICAgODIsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTUwLFxuICAgICAgICAyMjQsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTA0LFxuICAgICAgICAxOCxcbiAgICAgICAgMTQ1LFxuICAgICAgICA1MSxcbiAgICAgICAgMTI3LFxuICAgICAgICAyMjMsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTk2LFxuICAgICAgICA3OSxcbiAgICAgICAgMTg5LFxuICAgICAgICA4NCxcbiAgICAgICAgNjksXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjIwLFxuICAgICAgICA3MixcbiAgICAgICAgMTM5LFxuICAgICAgICAxMTksXG4gICAgICAgIDgxLFxuICAgICAgICAyOFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMixcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAxMDZcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxNVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjUwLFxuICAgICAgICAxNjQsXG4gICAgICAgIDQ1LFxuICAgICAgICA5NyxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMzgsXG4gICAgICAgIDE5NSxcbiAgICAgICAgOTQsXG4gICAgICAgIDE2NixcbiAgICAgICAgOTUsXG4gICAgICAgIDYwLFxuICAgICAgICAyMDUsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMzYsXG4gICAgICAgIDY2LFxuICAgICAgICA1OCxcbiAgICAgICAgMTc2LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMzIsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTE0LFxuICAgICAgICA1MSxcbiAgICAgICAgODksXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjMzLFxuICAgICAgICA5NCxcbiAgICAgICAgMTA1LFxuICAgICAgICAxMzUsXG4gICAgICAgIDU1LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE1MyxcbiAgICAgICAgNCxcbiAgICAgICAgMTA5LFxuICAgICAgICAxOTAsXG4gICAgICAgIDEwLFxuICAgICAgICAyNDYsXG4gICAgICAgIDMzLFxuICAgICAgICAyNDAsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNTcsXG4gICAgICAgIDEwLFxuICAgICAgICAyMDAsXG4gICAgICAgIDk1LFxuICAgICAgICA5NyxcbiAgICAgICAgMTYyLFxuICAgICAgICAxNDIsXG4gICAgICAgIDY5LFxuICAgICAgICAxNzEsXG4gICAgICAgIDE4NCxcbiAgICAgICAgNTksXG4gICAgICAgIDM0LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTE1LFxuICAgICAgICAyMDEsXG4gICAgICAgIDM4LFxuICAgICAgICAxOSxcbiAgICAgICAgMTQsXG4gICAgICAgIDEyMyxcbiAgICAgICAgNixcbiAgICAgICAgNTYsXG4gICAgICAgIDEyOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTgwLFxuICBcImFkdlNlY3JldEtleVwiOiBcIm1kUGJLVGtnS0NLZ3BNempCbFFJZllFK0czaDJsdXFEMnNLNCtQSmJ2S1U9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0ODEyMzc1MTkzNEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiNzg0OEZDNUVGREQyMjYzRjdDMTZFNDMzQzIyMkFBMTZcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzE1OTcxODA4XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiA2MSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiA2MSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImNmalo0eng1UVRTWWdQckx5Q3AtT0FcIixcbiAgXCJwaG9uZUlkXCI6IFwiNGEyM2FmNDUtMDJjYi00ZGE1LTlhYWEtMTdjYjA0ZmZmODE1XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE2MCxcbiAgICAgIDE0MixcbiAgICAgIDYwLFxuICAgICAgODMsXG4gICAgICAyMjUsXG4gICAgICAxOTYsXG4gICAgICAxMzYsXG4gICAgICAxMzIsXG4gICAgICA1MyxcbiAgICAgIDE2MCxcbiAgICAgIDEzOCxcbiAgICAgIDk1LFxuICAgICAgMTU0LFxuICAgICAgMzIsXG4gICAgICAxMyxcbiAgICAgIDM1LFxuICAgICAgMTA0LFxuICAgICAgMjExLFxuICAgICAgODIsXG4gICAgICAxNTVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiBmYWxzZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDUyLFxuICAgICAgMTI3LFxuICAgICAgMzYsXG4gICAgICA1OCxcbiAgICAgIDE4OSxcbiAgICAgIDI4LFxuICAgICAgMTY4LFxuICAgICAgNTIsXG4gICAgICAxNDksXG4gICAgICAzLFxuICAgICAgMTcyLFxuICAgICAgMTYxLFxuICAgICAgOTMsXG4gICAgICAxODMsXG4gICAgICAxMTYsXG4gICAgICAyNDEsXG4gICAgICAzMCxcbiAgICAgIDEyMSxcbiAgICAgIDEyMCxcbiAgICAgIDM4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSW4yeDI4UTJNMmVzZ1lZQXlBQUtBQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJKL0Z5d2VnaGNLbElTTVFPekVKcCtCZWhyZUFBc2VRbGYzU0VJdDJ5VVU0PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlFEQUk5OHlBSG9zWXV5WUtvMzJnbXNMemxqRC9SZDdZRDRyYkNRRkNwVWpDT2ZvQ1hwTTdLL015YVloYlQ1S0YzOHh4T0tuRmRVMzl4aitoNE81aER3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInVscUpaZkQ4S0xGclBFRm04alpnbWJqWlgxc0VkeFJZS0x5UHQ0UmZBNThrUnUzTGMvaGpJZnRBNnlLT3ltYTc2UmdMOVp2ank4UGduS0R3YWJiYmhBPT1cIlxuICB9LFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0ODEyMzc1MTkzNDo0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiQkFST05cIixcbiAgICBcImxpZFwiOiBcIjI2MzUyMjQ4MzIyMDY1NDo0QGxpZFwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0ODEyMzc1MTkzNDo0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDc4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTU5NzE4MDUsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFMM2pcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUwzaS5qc29uIjogIntcImtleURhdGFcIjpcIlVsd0I3Wmo2bDJOYjJzVGJZSTA0ejdvNXpXUmRRbUtRVXpyYU1sR1FPTFU9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MjMzOTYyMjQ5LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFMM2ouanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJlOEh3Y3pRUitOMHN5bjJ3SkFUVlZwSWEzOGtLbjg0WFlSVVUyYlpnT0pVPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjIzMzk2MjI0OSxcImN1cnJlbnRJbmRleFwiOjIsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzE1OTcxNzY5OTE1XCJ9Igp9"  // PUT your SESSION_ID 


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
