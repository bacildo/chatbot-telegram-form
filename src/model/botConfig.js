import mongoose from 'mongoose';

const configSchema=new mongoose.Schema(
  {
    cliente_id:{type:Number, require:true},
    token_bot:{type:String, require:true},
    group_id:{type:String, require: true}
  },
  {collection:'BotConfig'}
);
export const ConfigBot = mongoose.model("BotConfig", configSchema)