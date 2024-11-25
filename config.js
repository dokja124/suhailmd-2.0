const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://files.catbox.moe/5ufmuh.mp4" || "https://files.catbox.moe/5ufmuh.mp4" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2250100113543";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "true"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "true" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_06_19_11_25_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTQxLFxuICAgICAgICAzOSxcbiAgICAgICAgNTcsXG4gICAgICAgIDIzOCxcbiAgICAgICAgNjAsXG4gICAgICAgIDIwLFxuICAgICAgICAxNzUsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTM2LFxuICAgICAgICAxMDksXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTM1LFxuICAgICAgICAxNDgsXG4gICAgICAgIDM0LFxuICAgICAgICAxODYsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjQwLFxuICAgICAgICA1MyxcbiAgICAgICAgMzYsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjQwLFxuICAgICAgICAyMjcsXG4gICAgICAgIDg2LFxuICAgICAgICAyMTYsXG4gICAgICAgIDE5LFxuICAgICAgICAzMSxcbiAgICAgICAgMjEzLFxuICAgICAgICAxNTksXG4gICAgICAgIDExMSxcbiAgICAgICAgNzhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTAwLFxuICAgICAgICAxMTUsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjExLFxuICAgICAgICAxNjEsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTU3LFxuICAgICAgICAxNjksXG4gICAgICAgIDIwMSxcbiAgICAgICAgNzQsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjYsXG4gICAgICAgIDIxNixcbiAgICAgICAgNzksXG4gICAgICAgIDkwLFxuICAgICAgICAxNjYsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTUzLFxuICAgICAgICA5NyxcbiAgICAgICAgOTQsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjI3LFxuICAgICAgICAxNTcsXG4gICAgICAgIDIsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjUzLFxuICAgICAgICAxMjMsXG4gICAgICAgIDEzNixcbiAgICAgICAgMzMsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTY1LFxuICAgICAgICAxNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICAyMTQsXG4gICAgICAgIDg5LFxuICAgICAgICAyMzEsXG4gICAgICAgIDIsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjU0LFxuICAgICAgICAxMzEsXG4gICAgICAgIDE4LFxuICAgICAgICAyNCxcbiAgICAgICAgMzIsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjIwLFxuICAgICAgICA0MSxcbiAgICAgICAgMTkyLFxuICAgICAgICAxODgsXG4gICAgICAgIDg4LFxuICAgICAgICAxNzMsXG4gICAgICAgIDUxLFxuICAgICAgICAxMTEsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjMyLFxuICAgICAgICAyOCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAzNCxcbiAgICAgICAgODUsXG4gICAgICAgIDE2LFxuICAgICAgICAxMTksXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTIxLFxuICAgICAgICA4NCxcbiAgICAgICAgOTBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg5LFxuICAgICAgICAxOTgsXG4gICAgICAgIDIzNyxcbiAgICAgICAgNCxcbiAgICAgICAgMjI2LFxuICAgICAgICAxODksXG4gICAgICAgIDIzMyxcbiAgICAgICAgNjgsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjA1LFxuICAgICAgICAxMDEsXG4gICAgICAgIDg4LFxuICAgICAgICAxMDMsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjMxLFxuICAgICAgICA1MixcbiAgICAgICAgMjIwLFxuICAgICAgICAyNDksXG4gICAgICAgIDI0NixcbiAgICAgICAgMzgsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjQsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjAzLFxuICAgICAgICAyMzcsXG4gICAgICAgIDQ5LFxuICAgICAgICA5MCxcbiAgICAgICAgMyxcbiAgICAgICAgMjQwLFxuICAgICAgICA4NSxcbiAgICAgICAgMTg3LFxuICAgICAgICA5M1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICAxMSxcbiAgICAgICAgODIsXG4gICAgICAgIDU2LFxuICAgICAgICA5OCxcbiAgICAgICAgMjUsXG4gICAgICAgIDM5LFxuICAgICAgICAzMixcbiAgICAgICAgMjksXG4gICAgICAgIDYyLFxuICAgICAgICAyMTUsXG4gICAgICAgIDk1LFxuICAgICAgICAxNzIsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTksXG4gICAgICAgIDI5LFxuICAgICAgICA3OCxcbiAgICAgICAgMTQwLFxuICAgICAgICA0OSxcbiAgICAgICAgMjUsXG4gICAgICAgIDM5LFxuICAgICAgICAxNjgsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTcwLFxuICAgICAgICAyNDYsXG4gICAgICAgIDEzOCxcbiAgICAgICAgNzAsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNSxcbiAgICAgICAgMTk1LFxuICAgICAgICA4NyxcbiAgICAgICAgOThcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTM5LFxuICAgICAgICA0MyxcbiAgICAgICAgNSxcbiAgICAgICAgMjQwLFxuICAgICAgICA5MyxcbiAgICAgICAgNjksXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjE2LFxuICAgICAgICAxMzUsXG4gICAgICAgIDIxMyxcbiAgICAgICAgNTksXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTI2LFxuICAgICAgICAyMjMsXG4gICAgICAgIDE4MixcbiAgICAgICAgMzMsXG4gICAgICAgIDIxLFxuICAgICAgICAxNjEsXG4gICAgICAgIDIwNixcbiAgICAgICAgNjQsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTg4LFxuICAgICAgICAxMCxcbiAgICAgICAgMjUwLFxuICAgICAgICA4OSxcbiAgICAgICAgODcsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjAwLFxuICAgICAgICAxMjIsXG4gICAgICAgIDEwNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAzLFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxMDFcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgNjBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4NyxcbiAgICAgICAgMzgsXG4gICAgICAgIDQzLFxuICAgICAgICAxMjksXG4gICAgICAgIDY1LFxuICAgICAgICA5MixcbiAgICAgICAgMjUwLFxuICAgICAgICAyMTMsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNjcsXG4gICAgICAgIDEwNSxcbiAgICAgICAgNDQsXG4gICAgICAgIDU3LFxuICAgICAgICAyMjAsXG4gICAgICAgIDgyLFxuICAgICAgICAyMyxcbiAgICAgICAgNzEsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMzIsXG4gICAgICAgIDE2LFxuICAgICAgICAxNTcsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTg3LFxuICAgICAgICA5MixcbiAgICAgICAgNzAsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTcxLFxuICAgICAgICA2NCxcbiAgICAgICAgMTg5LFxuICAgICAgICAxMzgsXG4gICAgICAgIDE5NyxcbiAgICAgICAgNzAsXG4gICAgICAgIDM0LFxuICAgICAgICA3NixcbiAgICAgICAgMTM3LFxuICAgICAgICAxODYsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTAsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjQsXG4gICAgICAgIDE0NixcbiAgICAgICAgMzgsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjU1LFxuICAgICAgICAxNzAsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTMsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTUzLFxuICAgICAgICAyNDcsXG4gICAgICAgIDM3LFxuICAgICAgICAyMDksXG4gICAgICAgIDIwMyxcbiAgICAgICAgNCxcbiAgICAgICAgMTAxLFxuICAgICAgICAxODAsXG4gICAgICAgIDExMSxcbiAgICAgICAgOTcsXG4gICAgICAgIDkxLFxuICAgICAgICAyNyxcbiAgICAgICAgMjM4LFxuICAgICAgICA0NSxcbiAgICAgICAgMTQyLFxuICAgICAgICAxNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTE4LFxuICBcImFkdlNlY3JldEtleVwiOiBcIitUVG9sZlpyV1Q5c3pnTEk3ZGc4Snp0VUs2L28yalRtQ1VvR1VpOURPdHM9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIjBTR0ZmWTBkUVh5SThfRFozLWNkVWdcIixcbiAgXCJwaG9uZUlkXCI6IFwiYjI1YWE5OGYtZWRlZS00ODk4LThkZWEtZmIzNWQyOWQ5YTNhXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIyNixcbiAgICAgIDU4LFxuICAgICAgMjMsXG4gICAgICAyMDQsXG4gICAgICAxNTYsXG4gICAgICAxODgsXG4gICAgICAxMTcsXG4gICAgICA2LFxuICAgICAgMTM4LFxuICAgICAgMTMxLFxuICAgICAgMTE3LFxuICAgICAgMTUwLFxuICAgICAgNDksXG4gICAgICAxNTksXG4gICAgICAxODUsXG4gICAgICA2MCxcbiAgICAgIDE5NixcbiAgICAgIDUwLFxuICAgICAgMTMyLFxuICAgICAgMTg3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDYyLFxuICAgICAgMjEzLFxuICAgICAgMTc1LFxuICAgICAgMTcwLFxuICAgICAgMTA5LFxuICAgICAgMjIsXG4gICAgICA3MixcbiAgICAgIDE1MixcbiAgICAgIDkxLFxuICAgICAgMTk3LFxuICAgICAgMjMwLFxuICAgICAgMjA1LFxuICAgICAgMTE1LFxuICAgICAgMixcbiAgICAgIDE1MixcbiAgICAgIDg2LFxuICAgICAgMyxcbiAgICAgIDE3MyxcbiAgICAgIDE0LFxuICAgICAgMTE5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkExNkQ2MkZLXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMjUwMTAwMTEzNTQzOjE1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCI3NTIwNTQxNDI2MDk2MzoxNUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNJV3hndWtHRVA2dGtMb0dHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkZlNG0rYngzVkdMd0lvUTczOXIxZXNmeTFqUlJaZEVJaTdCRWJQKzNaMVE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiK3czaWp2NXVnUmRQS1JOUytVQjB4M1drN2krSTFOSENIYy9INjRhZU81SmwrVTFCbU9XcXM5Q3BPV0VTNnRtVUY2NjkvVS94TGxxMDJIL1dlZ2RCRGc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiVmQ0bm1FTy9jWDY4NkNUUVlkUTM0QzVOWWg1ZGJseVN4WUNUNWlvblpPRk9UbGdsdkY2UzdwWWh5Sk9qMjJDTmZSZjY0ajZWT3lQeGluREJwZ0VTRHc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjI1MDEwMDExMzU0MzoxNUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICA1MixcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgODRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczMjUxNTU4NixcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUpVTlwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSlVOLmpzb24iOiAie1wia2V5RGF0YVwiOlwiMjZVbXU1OG9nNkNCOUc2aVo1OWp0dGVScklxK3llaVh3TmJhZnAvZ0E1ST1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxODMwODUyNzQwLFwiY3VycmVudEluZGV4XCI6NCxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhailmd-2.0",
  ownername:process.env.OWNER_NAME|| "",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
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
