const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('set.env'))
    require('dotenv').config({ path: __dirname + '/set.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaUFrcjUzcVRoaHFTOVgwTThxTEtUVjVOcktrS3kxNGxCUHFWVlUxNVZXTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVFdtSXFacXg2dWJoa2x1K0JKdHhTUit2UHNjNkhESGsyTVFmTzlDdzlrMD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJBQnBLT3VOd25JNUVUVzhMdnRYRlN5RFpvVTR5UkVCQzZWMHR1OTAzK1ZFPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIzamhxY2RlTEVkVjJmcFJuU3N2N3BEYUdHSE8vM2VVU1NjdXlhS0kxUm1RPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkFLSDRKanhrZ0NvdGlldU5oOEVpZWxIOW9NK2F2aGc4SXhVdEtIamxJSG89In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjRzVnlLU1hMWGFpMExKQkxQWHYybW9YREZQSHpsMUQvazVzZ2tTRGpvRVk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUUdadHJrOEU5Ym1qaW4vb0NwdGxNQ3BqYUtHTCtoYjZGcXdKY1h2VFRIYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZTBrcmwrMzE0aE9Ic3dLMjByWTUwaFJsQm1wclh1V1BHdFk2c2VNOWxuTT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjlEblV0dkVHeDRZYkFFeCtqOHluUEVGMkM5RVJTREJyUlY4QS9uUGFyU2lvc1lSeXNER2pYMStmbmZKU25CSGRHK0x3cXpwTHNQZVF1UmJoMHRLR0FRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6ODEsImFkdlNlY3JldEtleSI6IkFjclQwdmRlQ21sNkluekdEZGZFK3Q0bFU0M0dFWVdlVWlxYlE1eFJKdW89IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6InQtOEpHamtfUkotbUptdmZoTXZETmciLCJwaG9uZUlkIjoiMDE2MWY1ODItNGYxYi00MGNlLTg1M2EtODY5MjU5NTc0ZmY1IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik9nYlEwQ0N2N0pZUllaa0JCSElNN1pSMEFUTT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJXK3JKV1ZHd0lKNXdaamdLcGREMVlxaERpcTA9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiRlpCQzVFVzEiLCJtZSI6eyJpZCI6Ijk0NzUyNTMzNzM0OjgxQHMud2hhdHNhcHAubmV0IiwibmFtZSI6IkRpbGFib3R6In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNKSGduaUlRdTlINXV3WVlBaUFBS0FBPSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJnUWdsclgxUjd0dzVnTHcyN0k5RlhXTk5mMTZySzUrdTFyWUxGUk44SHpRPSIsImFjY291bnRTaWduYXR1cmUiOiIzWFZqZGdycUtxV3NsaC9qMENubHl1Y3JobFA3aG93WWpTQjFXUVRsMVdvNUp2a1dlc25UaFpWU1pIcnFiOUNTTGo5ZHgxSGhydUErS09lakdOeHZBZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiODR2M1c4S3E0NjJMcUdnTExvZzVrTGdudGVJTEpqU3RNQzlKaTNIWWlQWWNzeFFwTzI4bjNOWnpjREpnc2g4MEdGSUE2T2VBM0lCYUQ4dVFBVlBnRHc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5NDc1MjUzMzczNDo4MUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJZRUlKYTE5VWU3Y09ZQzhOdXlQUlYxalRYOWVxeXVmcnRhMkN4VVRmQjgwIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzM2MzM3NjA4fQ==',
    PREFIXE: process.env.PREFIX || ".",
    OWNER_NAME: process.env.OWNER_NAME || "Ibrahim Adams",
    NUMERO_OWNER : process.env.NUMERO_OWNER || " Ibrahim Adams",              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "yes",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'no',
    BOT : process.env.BOT_NAME || 'BMW_MD',
    URL : process.env.BOT_MENU_LINKS || 'https://telegra.ph/file/17c83719a1b40e02971e4.jpg',
    MODE: process.env.PUBLIC_MODE || "yes",
    PM_PERMIT: process.env.PM_PERMIT || 'yes',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME,
    HEROKU_APY_KEY : process.env.HEROKU_APY_KEY ,
    WARN_COUNT : process.env.WARN_COUNT || '3' ,
    ETAT : process.env.PRESENCE || '',
    CHATBOT : process.env.PM_CHATBOT || 'no',
    DP : process.env.STARTING_BOT_MESSAGE || "yes",
    ADM : process.env.ANTI_DELETE_MESSAGE || 'no',
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway" : "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway",
   
};
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});
