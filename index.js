'use strict';

require('dotenv').config();
const ViberBot = require('viber-bot').Bot;
const BotEvents = require('viber-bot').Events;

const TextMessage = require('viber-bot').Message.Text;
const UrlMessage = require('viber-bot').Message.Url;
const ContactMessage = require('viber-bot').Message.Contact;
const PictureMessage = require('viber-bot').Message.Picture;
const VideoMessage = require('viber-bot').Message.Video;
const LocationMessage = require('viber-bot').Message.Location;
const StickerMessage = require('viber-bot').Message.Sticker;
const FileMessage = require('viber-bot').Message.File;
const RichMediaMessage = require('viber-bot').Message.RichMedia;
const KeyboardMessage = require('viber-bot').Message.Keyboard;

let clientpref = [];

function say(response, message) {
    response.send(new TextMessage(message));
}

const MENU = {
    "ButtonsGroupColumns": 6,
    "ButtonsGroupRows": 3,
    "BgColor": "#FFFFFF",
    "Buttons": [{
        "ActionBody": "Buy a property",
        "ActionType": "reply",
        "BgColor": "#85bb65",
        "Text": "Buy a property",
        "TextSize":"large",
        "TextOpacity": 60,
        "Rows": 1,
        "Columns": 6
    }, {
        "ActionBody": "listing",
        "ActionType": "reply",
        "BgColor": "#85bb65",
        "Text": "View Full listing",
        "TextSize":"large",
        "TextOpacity": 60,
        "Rows": 1,
        "Columns": 6
    }, {
        "ActionBody": "connect with an agent",
        "ActionType": "reply",
        "BgColor": "#85bb65",
        "Text": "Connect with an Agent",
        "TextSize":"large",
        "TextOpacity": 60,
        "Rows": 1,
        "Columns": 6
    }]
};

const LOCATION = {
    "ButtonsGroupColumns": 3,
    "ButtonsGroupRows": 7,
    "BgColor": "#FFFFFF",
    "Buttons": [{
        "ActionBody": "Manila City",
        "ActionType": "",
        "BgColor": "#85bb65",
        "Text": "Manila City",
        "TextSize":"medium",
        "TextOpacity": 60,
        "Rows": 1,
        "Columns": 3
    },{
        "ActionBody": "QC",
        "ActionType": "reply",
        "BgColor": "#85bb65",
        "Text": "QC",
        "TextSize":"medium",
        "TextOpacity": 60,
        "Rows": 1,
        "Columns": 3
    },{
        "ActionBody": "Taguig",
        "ActionType": "reply",
        "BgColor": "#85bb65",
        "Text": "Taguig",
        "TextSize":"medium",
        "TextOpacity": 60,
        "Rows": 1,
        "Columns": 3
    },{
        "ActionBody": "Pasay",
        "ActionType": "reply",
        "BgColor": "#85bb65",
        "Text": "Pasay",
        "TextSize":"medium",
        "TextOpacity": 60,
        "Rows": 1,
        "Columns": 3
    },{
        "ActionBody": "Pasig",
        "ActionType": "reply",
        "BgColor": "#85bb65",
        "Text": "Pasig",
        "TextSize":"medium",
        "TextOpacity": 60,
        "Rows": 1,
        "Columns": 3
    },{
        "ActionBody": "Makati",
        "ActionType": "reply",
        "BgColor": "#85bb65",
        "Text": "Makati",
        "TextSize":"medium",
        "TextOpacity": 60,
        "Rows": 1,
        "Columns": 3
    },{
        "ActionBody": "Las Pinas",
        "ActionType": "reply",
        "BgColor": "#85bb65",
        "Text": "Las Pinas",
        "TextSize":"medium",
        "TextOpacity": 60,
        "Rows": 1,
        "Columns": 3
    },{
        "ActionBody": "Mandaluyong",
        "ActionType": "reply",
        "BgColor": "#85bb65",
        "Text": "Mandaluyong",
        "TextSize":"medium",
        "TextOpacity": 60,
        "Rows": 1,
        "Columns": 3
    },{
        "ActionBody": "Muntinlupa",
        "ActionType": "reply",
        "BgColor": "#85bb65",
        "Text": "Muntinlupa",
        "TextSize":"medium",
        "TextOpacity": 60,
        "Rows": 1,
        "Columns": 3
    },{
        "ActionBody": "Paranaque",
        "ActionType": "reply",
        "BgColor": "#85bb65",
        "Text": "Paranaque",
        "TextSize":"medium",
        "TextOpacity": 60,
        "Rows": 1,
        "Columns": 3
    },{
        "ActionBody": "Pampanga",
        "ActionType": "reply",
        "BgColor": "#85bb65",
        "Text": "Pampanga",
        "TextSize":"medium",
        "TextOpacity": 60,
        "Rows": 1,
        "Columns": 3
    },{
        "ActionBody": "Baguio",
        "ActionType": "reply",
        "BgColor": "#85bb65",
        "Text": "Baguio",
        "TextSize":"medium",
        "TextOpacity": 60,
        "Rows": 1,
        "Columns": 3
    },{
        "ActionBody": "Tarlac",
        "ActionType": "reply",
        "BgColor": "#85bb65",
        "Text": "Tarlac",
        "TextSize":"medium",
        "TextOpacity": 60,
        "Rows": 1,
        "Columns": 3
    },{
        "ActionBody": "Rizal",
        "ActionType": "reply",
        "BgColor": "#85bb65",
        "Text": "Rizal",
        "TextSize":"medium",
        "TextOpacity": 60,
        "Rows": 1,
        "Columns": 3
    },{
        "ActionBody": "Cavite",
        "ActionType": "reply",
        "BgColor": "#85bb65",
        "Text": "Cavite",
        "TextSize":"medium",
        "TextOpacity": 60,
        "Rows": 1,
        "Columns": 3
    },{
        "ActionBody": "Laguna",
        "ActionType": "reply",
        "BgColor": "#85bb65",
        "Text": "Laguna",
        "TextSize":"medium",
        "TextOpacity": 60,
        "Rows": 1,
        "Columns": 3
    },{
        "ActionBody": "Batangas",
        "ActionType": "reply",
        "BgColor": "#85bb65",
        "Text": "Batangas",
        "TextSize":"medium",
        "TextOpacity": 60,
        "Rows": 1,
        "Columns": 3
    },{
        "ActionBody": "Visayas",
        "ActionType": "reply",
        "BgColor": "#85bb65",
        "Text": "Visayas",
        "TextSize":"medium",
        "TextOpacity": 60,
        "Rows": 1,
        "Columns": 3
    },{
        "ActionBody": "Mindanao",
        "ActionType": "reply",
        "BgColor": "#85bb65",
        "Text": "Mindanao",
        "TextSize":"medium",
        "TextOpacity": 60,
        "Rows": 1,
        "Columns": 3
    }]
};

const PRIZE = {
    "ButtonsGroupColumns": 6,
    "ButtonsGroupRows": 6,
    "BgColor": "#FFFFFF",
    "Buttons": [{
        "ActionBody": "Php 500k - Php 750k",
        "ActionType": "reply",
        "BgColor": "#85bb65",
        "Text": "Php 500k - Php 750k",
        "TextSize":"large",
        "TextOpacity": 60,
        "Rows": 1,
        "Columns": 6
    },{
        "ActionBody": "Php 750k - Php 1M",
        "ActionType": "reply",
        "BgColor": "#85bb65",
        "Text": "Php 750k - Php 1M",
        "TextSize":"large",
        "TextOpacity": 60,
        "Rows": 1,
        "Columns": 6
    },{
        "ActionBody": "Php 1M - Php 1.25M",
        "ActionType": "reply",
        "BgColor": "#85bb65",
        "Text": "Php 1M - Php 1.25M",
        "TextSize":"large",
        "TextOpacity": 60,
        "Rows": 1,
        "Columns": 6
    },{
        "ActionBody": "Php 1.25M - Php 1.5M",
        "ActionType": "reply",
        "BgColor": "#85bb65",
        "Text": "Php 1.25M - Php 1.5M",
        "TextSize":"large",
        "TextOpacity": 60,
        "Rows": 1,
        "Columns": 6
    },{
        "ActionBody": "Php 1.5M - Php 1.75M",
        "ActionType": "reply",
        "BgColor": "#85bb65",
        "Text": "Php 1.5M - Php 1.75M",
        "TextSize":"large",
        "TextOpacity": 60,
        "Rows": 1,
        "Columns": 6
    },{
        "ActionBody": "Php 1.75M - Php 2M+",
        "ActionType": "reply",
        "BgColor": "#85bb65",
        "Text": "Php 1.75M - Php 2M+",
        "TextSize":"large",
        "TextOpacity": 60,
        "Rows": 1,
        "Columns": 6
    }]
};

const BEDROOM = {
    "ButtonsGroupColumns": 6,
    "ButtonsGroupRows": 6,
    "BgColor": "#FFFFFF",
    "Buttons": [{
        "ActionBody": "Any Beds",
        "ActionType": "reply",
        "BgColor": "#85bb65",
        "Text": "Any Beds",
        "TextSize":"large",
        "TextOpacity": 60,
        "Rows": 1,
        "Columns": 6
    },{
        "ActionBody": "1 Bedroom",
        "ActionType": "reply",
        "BgColor": "#85bb65",
        "Text": "1 Bedroom",
        "TextSize":"large",
        "TextOpacity": 60,
        "Rows": 1,
        "Columns": 6
    },{
        "ActionBody": "2 Bedrooms",
        "ActionType": "reply",
        "BgColor": "#85bb65",
        "Text": "2 Bedrooms",
        "TextSize":"large",
        "TextOpacity": 60,
        "Rows": 1,
        "Columns": 6
    },{
        "ActionBody": "3 Bedrooms",
        "ActionType": "reply",
        "BgColor": "#85bb65",
        "Text": "3 Bedrooms",
        "TextSize":"large",
        "TextOpacity": 60,
        "Rows": 1,
        "Columns": 6
    },{
        "ActionBody": "4 Bedrooms",
        "ActionType": "reply",
        "BgColor": "#85bb65",
        "Text": "4 Bedrooms",
        "TextSize":"large",
        "TextOpacity": 60,
        "Rows": 1,
        "Columns": 6
    },{
        "ActionBody": "5 Bedrooms",
        "ActionType": "reply",
        "BgColor": "#85bb65",
        "Text": "5 Bedrooms",
        "TextSize":"large",
        "TextOpacity": 60,
        "Rows": 1,
        "Columns": 6
    }]
};

const PROPERTY_TYPE = {
    "ButtonsGroupColumns": 6,
    "ButtonsGroupRows": 5,
    "BgColor": "#FFFFFF",
    "Buttons": [{
        "ActionBody": "Condo",
        "ActionType": "reply",
        "BgColor": "#85bb65",
        "Text": "Condo",
        "TextSize":"large",
        "TextOpacity": 60,
        "Rows": 1,
        "Columns": 6
    },{
        "ActionBody": "Detached House",
        "ActionType": "reply",
        "BgColor": "#85bb65",
        "Text": "Detached House",
        "TextSize":"large",
        "TextOpacity": 60,
        "Rows": 1,
        "Columns": 6
    },{
        "ActionBody": "Semi-Detached House",
        "ActionType": "reply",
        "BgColor": "#85bb65",
        "Text": "Semi-Detached House",
        "TextSize":"large",
        "TextOpacity": 60,
        "Rows": 1,
        "Columns": 6
    },{
        "ActionBody": "Townhouse",
        "ActionType": "reply",
        "BgColor": "#85bb65",
        "Text": "Townhouse",
        "TextSize":"large",
        "TextOpacity": 60,
        "Rows": 1,
        "Columns": 6
    },{
        "ActionBody": "Any Type",
        "ActionType": "reply",
        "BgColor": "#85bb65",
        "Text": "Any Type",
        "TextSize":"large",
        "TextOpacity": 60,
        "Rows": 1,
        "Columns": 6
    }]
};

const SUBMIT_PREF = {
    "ButtonsGroupColumns": 6,
    "ButtonsGroupRows": 1,
    "BgColor": "#FFFFFF",
    "Buttons": [{
        "ActionBody": "clientpref",
        "ActionType": "reply",
        "BgColor": "#85bb65",
        "Text": 'SUBMIT',
        "TextSize":"large",
        "TextOpacity": 60,
        "Rows": 1,
        "Columns": 6
    }]
};

const PROPERTY_LISTING = {
    "ButtonsGroupColumns": 6,
    "ButtonsGroupRows": 5,
    "BgColor": "#FFFFFF",
    "Buttons": [{
        "ActionBody": "https://myelite.pro/en-ph/category/other-referral-partner-are-viewing-to/3467209f38c3fe6a5beacfa3d8f81678",
        "ActionType": "open-url",
        "BgColor": "#85bb65",
        "Text": "Partners Viewed",
        "TextSize":"medium",
        "TextOpacity": 60,
        "Rows": 1,
        "Columns": 6
    },{
        "ActionBody": "https://myelite.pro/en-ph/category/most-search-projects/1252cff07e91ae3a76231784fcdf4f47",
        "ActionType": "open-url",
        "BgColor": "#85bb65",
        "Text": "Most Searched Projects",
        "TextSize":"medium",
        "TextOpacity": 60,
        "Rows": 1,
        "Columns": 6
    },{
        "ActionBody": "https://myelite.pro/en-ph/category/pag-ibig-accredited-projects/82e92f54705da69861610ee60cff3675",
        "ActionType": "open-url",
        "BgColor": "#85bb65",
        "Text": "Pag-ibig Accredited Projects",
        "TextSize":"medium",
        "TextOpacity": 60,
        "Rows": 1,
        "Columns": 6
    },{
        "ActionBody": "https://myelite.pro/en-ph/category/inside-townships/7e9f12a32692c8a9784cee4eeb9fbc10",
        "ActionType": "open-url",
        "BgColor": "#85bb65",
        "Text": "Inside Townships",
        "TextSize":"medium",
        "TextOpacity": 60,
        "Rows": 1,
        "Columns": 6
    },{
        "ActionBody": "https://myelite.pro/en-ph/category/popular-on-elite/443e08030047ce18786c6b06c7831dac",
        "ActionType": "open-url",
        "BgColor": "#85bb65",
        "Text": "Popular on Elite",
        "TextSize":"medium",
        "TextOpacity": 60,
        "Rows": 1,
        "Columns": 6
    }]
};

function checkUrlAvailability(botResponse, text_received) {
    let sender_name = botResponse.userProfile.name;
    let message;

    if(text_received === 'menu') {message = new RichMediaMessage(MENU);}
    else if(text_received === 'Buy a property') {message = new RichMediaMessage(LOCATION);}
    else if(text_received === 'Manila City'){message = new RichMediaMessage(PRIZE);clientpref.push(' Manila City')}
    else if(text_received === 'QC'){message = new RichMediaMessage(PRIZE);clientpref.push(' QC')}
    else if(text_received === 'Taguig'){message = new RichMediaMessage(PRIZE);clientpref.push(' Taguig')}
    else if(text_received === 'Pasay'){message = new RichMediaMessage(PRIZE);clientpref.push(' Pasay')}
    else if(text_received === 'Pasig'){message = new RichMediaMessage(PRIZE);clientpref.push(' Pasig')}
    else if(text_received === 'Makati'){message = new RichMediaMessage(PRIZE);clientpref.push(' Makati')}
    else if(text_received === 'Las Pinas'){message = new RichMediaMessage(PRIZE);clientpref.push(' Las Pinas')}
    else if(text_received === 'Mandaluyong'){message = new RichMediaMessage(PRIZE);clientpref.push(' Mandaluyong')}
    else if(text_received === 'Muntinlupa'){message = new RichMediaMessage(PRIZE);clientpref.push(' Muntinlupa')}
    else if(text_received === 'Paranaque'){message = new RichMediaMessage(PRIZE);clientpref.push(' Paranaque')}
    else if(text_received === 'Pampanga'){message = new RichMediaMessage(PRIZE);clientpref.push(' Pampanga')}
    else if(text_received === 'Baguio'){message = new RichMediaMessage(PRIZE);clientpref.push(' Baguio')}
    else if(text_received === 'Tarlac'){message = new RichMediaMessage(PRIZE);clientpref.push(' Tarlac')}
    else if(text_received === 'Rizal'){message = new RichMediaMessage(PRIZE);clientpref.push(' Rizal')}
    else if(text_received === 'Cavite'){message = new RichMediaMessage(PRIZE);clientpref.push(' Cavite')}
    else if(text_received === 'Laguna'){message = new RichMediaMessage(PRIZE);clientpref.push(' Laguna')}
    else if(text_received === 'Batangas'){message = new RichMediaMessage(PRIZE);clientpref.push(' Batangas')}
    else if(text_received === 'Visayas'){message = new RichMediaMessage(PRIZE);clientpref.push(' Visayas')}
    else if(text_received === 'Mindanao'){message = new RichMediaMessage(PRIZE);clientpref.push(' Mindanao')} 
    else if(text_received === 'Php 500k - Php 750k') {message = new RichMediaMessage(BEDROOM);clientpref.push(' Php 500k - Php 750k')}
    else if(text_received === 'Php 750k - Php 1M') {message = new RichMediaMessage(BEDROOM);clientpref.push(' Php 750k - Php 1M')}
    else if(text_received === 'Php 1M - Php 1.25M') {message = new RichMediaMessage(BEDROOM);clientpref.push(' Php 1M - Php 1.25M')}
    else if(text_received === 'Php 1.25M - Php 1.5M') {message = new RichMediaMessage(BEDROOM);clientpref.push(' Php 1.25M - Php 1.5M')}
    else if(text_received === 'Php 1.5M - Php 1.75M') {message = new RichMediaMessage(BEDROOM);clientpref.push(' Php 1.5M - Php 1.75M')}
    else if(text_received === 'Php 1.75M - Php 2M+') {message = new RichMediaMessage(BEDROOM);clientpref.push(' Php 1.75M - Php 2M+')}
    else if(text_received === 'Any Beds') {message = new RichMediaMessage(PROPERTY_TYPE);clientpref.push(' Any Beds')}
    else if(text_received === '1 Bedroom') {message = new RichMediaMessage(PROPERTY_TYPE);clientpref.push(' 1 Bedroom')}
    else if(text_received === '2 Bedrooms') {message = new RichMediaMessage(PROPERTY_TYPE);clientpref.push(' 2 Bedrooms')}
    else if(text_received === '3 Bedrooms') {message = new RichMediaMessage(PROPERTY_TYPE);clientpref.push(' 3 Bedrooms')}
    else if(text_received === '4 Bedrooms') {message = new RichMediaMessage(PROPERTY_TYPE);clientpref.push(' 4 Bedrooms')}
    else if(text_received === '5 Bedrooms') {message = new RichMediaMessage(PROPERTY_TYPE);clientpref.push(' 5 Bedrooms')}
    else if(text_received === 'Condo') {message = new RichMediaMessage(SUBMIT_PREF);clientpref.push(' Condo')}
    else if(text_received === 'Detached House') {message = new RichMediaMessage(SUBMIT_PREF);clientpref.push(' Detached House')}
    else if(text_received === 'Semi-Detached House') {message = new RichMediaMessage(SUBMIT_PREF);clientpref.push(' Semi-Detached House')}
    else if(text_received === 'Townhouse') {message = new RichMediaMessage(SUBMIT_PREF);clientpref.push(' Townhouse')}
    else if(text_received === 'Any Type') {message = new RichMediaMessage(SUBMIT_PREF);clientpref.push(' Any Type')}
    else if(text_received === 'clientpref') {message = new TextMessage("-->"+ clientpref +".<-- ----------------------------------------------------- Hi, "+ sender_name +". Please copy your property detail above and forward text to this link. https://invite.viber.com/?g=nK9ytEgyO1BfGS44Nx8OArx6H9oAgLCF")}
    else if(text_received === 'listing') {message = new RichMediaMessage(PROPERTY_LISTING);}
    else if(text_received === 'connect with an agent') {message = new UrlMessage("https://invite.viber.com/?g=nK9ytEgyO1BfGS44Nx8OArx6H9oAgLCF");}
    else if(text_received === 'https://myelite.pro/en-ph/category/other-referral-partner-are-viewing-to/3467209f38c3fe6a5beacfa3d8f81678') {
        message = new TextMessage("After you choose a property, Please submit your preffered property name and the details to this group. https://invite.viber.com/?g=nK9ytEgyO1BfGS44Nx8OArx6H9oAgLCF ");
    }
    else if(text_received === 'https://myelite.pro/en-ph/category/most-search-projects/1252cff07e91ae3a76231784fcdf4f47' ) {
        message = new TextMessage("After you choose a property, Please submit your preffered property name and the details to this group. https://invite.viber.com/?g=nK9ytEgyO1BfGS44Nx8OArx6H9oAgLCF ");
    }
    else if(text_received === 'https://myelite.pro/en-ph/category/pag-ibig-accredited-projects/82e92f54705da69861610ee60cff3675' ) {
        message = new TextMessage("After you choose a property, Please submit your preffered property name and the details to this group. https://invite.viber.com/?g=nK9ytEgyO1BfGS44Nx8OArx6H9oAgLCF ");
    }
    else if(text_received === 'https://myelite.pro/en-ph/category/inside-townships/7e9f12a32692c8a9784cee4eeb9fbc10' ) {
        message = new TextMessage("After you choose a property, Please submit your preffered property name and the details to this group. https://invite.viber.com/?g=nK9ytEgyO1BfGS44Nx8OArx6H9oAgLCF ");
    }
    else if(text_received === 'https://myelite.pro/en-ph/category/popular-on-elite/443e08030047ce18786c6b06c7831dac') {
        message = new TextMessage("After you choose a property, Please submit your preffered property name and the details to this group. https://invite.viber.com/?g=nK9ytEgyO1BfGS44Nx8OArx6H9oAgLCF ");
    }
    else{
        message = new TextMessage("Good afternoon to you, "+ sender_name +". If you wish to learn more, Please type ---> menu");
    }

    console.log(message);
    botResponse.send(message);
}

const bot = new ViberBot({
	authToken: process.env.ACCESS_TOKEN,
	name: "Angel",
	avatar: "https://share.cdn.viber.com/pg_download?id=0-04-01-4e4c38874c91206b810b7ac639ca2a2bf81a28fac8f0194e349c58a0cb391169&filetype=jpg&type=icon" // It is recommended to be 720x720, and no more than 100kb.
});

bot.onConversationStarted((userProfile, isSubscribed, context, onFinish) =>
	onFinish(new TextMessage(`Hi, ${userProfile.name}! Nice to meet you. How may I help you?`)));
    
bot.onSubscribe(response => {
    say(response, `Hi there ${response.userProfile.name}. I am ${bot.name} from Elite Network. Thanks for Subscribing at Elite Ohmyhome! 
    
    If you wish to learn more, Please type menu`);
});

bot.on(BotEvents.MESSAGE_RECEIVED, (message, response) => {
    if (!(message instanceof TextMessage)) {
        say(response, `Sorry. I can only understand text messages.`);

        if(message instanceof PictureMessage) {
            say(response, `You sent picture message`);
        }
    }
});

bot.onTextMessage(/./, (message, response) => {
    checkUrlAvailability(response, message.text);
});

bot.getBotProfile().then(response => console.log(`Bot Named: ${response.name}`));

// Server
    const https = require('https');
    const port = process.env.PORT;
    const webhookUrl = process.env.WEBHOOK_URL;
    https.createServer(bot.middleware()).listen(port, () => bot.setWebhook(webhookUrl));