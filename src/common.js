/**
 * ERR CODE (maybe more to add):
 * 200: OK
 * 404: 无版权
 * -110: 未付款
 */
const API_OK = 200
const ERR_UNPAID = -110
const ERR_COPYRIGHT = 404

const HELPER_DESCRIPTION_WIDTH = 10
const SUPPORT_SERVER_SERVER = "966754695123177554"
const SUPPORT_SERVER_CHANNEL = "966754695123177557"

const REGEX_CHINESE = /[\u4e00-\u9fff]|[\u3400-\u4dbf]|[\u{20000}-\u{2a6df}]|[\u{2a700}-\u{2b73f}]|[\u{2b740}-\u{2b81f}]|[\u{2b820}-\u{2ceaf}]|[\uf900-\ufaff]|[\u3300-\u33ff]|[\ufe30-\ufe4f]|[\uf900-\ufaff]|[\u{2f800}-\u{2fa1f}]/u

exports.API_OK = API_OK
exports.ERR_UNPAID = ERR_UNPAID
exports.ERR_COPYRIGHT = ERR_COPYRIGHT
exports.REGEX_CHINESE = REGEX_CHINESE
exports.HELPER_DESCRIPTION_WIDTH = HELPER_DESCRIPTION_WIDTH
exports.SUPPORT_SERVER_SERVER = SUPPORT_SERVER_SERVER
exports.SUPPORT_SERVER_CHANNEL = SUPPORT_SERVER_CHANNEL