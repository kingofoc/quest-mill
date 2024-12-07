import { Telegraf } from 'telegraf';
import fetch from 'node-fetch';
import { db } from './firebase';


const BOT_TOKEN = process.env.BOT_TOKEN;
const bot = new Telegraf(BOT_TOKEN);

function generateStartKeyboard() {
  return {
    inline_keyboard: [
      [
        {
          text: 'Open QuestMill App',
          web_app: { url: 'https://quest-milltest.vercel.app/' },
        },
      ],
    ],
  };
}

bot.start(async (ctx) => {
    const user_id = ctx.from.id.toString();
    const user_username = ctx.from.username;
    const user_language_code = ctx.from.language_code;
    const text = ctx.message.text.split(' ');
  
    const welcomeMessage = `
      Hi, ${user_username}!👋
  
      Welcome to QuestMill App!🥳
  
      Here you can earn coins by mining them!
  
      Invite friends to earn more coins together, and level up faster!🚀
    `;
  
    try {
      const userRef = db.collection('users').doc(user_id);
      const userDoc = await userRef.get();
  
      if (!userDoc.exists) {
        const userData = {
          username: user_username,
          languageCode: user_language_code,
          referrals: {},
          pointBalance: 0,
          airdropBalance: 0,
          silverKey: 0,
          goldKey: 0,
          diamondKey: 0,
          platinumKey: 0,
          isClaiming: false,
          claimStartedTime: null,
          daily: {
            claimTime: null,
            claimedDay: 0,
          },
          links: null,
          referredBy: null,
        };
  
        if (text.length > 1 && text[1].startsWith('ref_')) {
          const referrer_id = text[1].substring(4);
          const referrerRef = db.collection('users').doc(referrer_id);
          const referrerDoc = await referrerRef.get();
  
          if (referrerDoc.exists) {
            userData.referredBy = referrer_id;
            const referrerData = referrerDoc.data();
            const bonus_amount = 100;
            const current_balance = referrerData.balance || 0;
            const referrals = referrerData.referrals || {};
  
            if (Object.keys(referrals).length < 100) {
              const new_balance = current_balance + bonus_amount;
  
              referrals[user_id] = {
                addedValue: bonus_amount,
                username: user_username,
              };
  
              await referrerRef.update({
                balance: new_balance,
                referrals: referrals,
              });
            }
          }
        }
  
        await userRef.set(userData);
      }
  
      await ctx.reply(welcomeMessage, { reply_markup: generateStartKeyboard() });
    } catch (error) {
      console.error(error);
      await ctx.reply('Error. Please try again!');
    }
  });
  

export default bot;
