import {ConfigBot} from "../model/botConfig"

async function telegramRepository(){
 return await ConfigBot.findOne({cliente_id:209}).lean()
 
}
export default telegramRepository