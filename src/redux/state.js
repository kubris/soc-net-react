const state = {
    profilePage: {
        // user's comments
        "comments": [
            {   "id": 1,
                "messageContent": { "text": "I must to beat The React! Spartaaa!!!", "likes":12 },
                "publicatedDate": { "date": "16.12.2023", "time": "12:45" }
            },
            {   "id": 2,
                "messageContent": { "text": "I'm tearing my lessons to pieces! It's already the 16th!", "likes":18 },
                "publicatedDate": { "date": "17.12.2023", "time": "16:27" }
            },
            {   "id": 3,
                "messageContent": { "text": "The React course strengthens your will! YOPTA!", "likes":23 },
                "publicatedDate": { "date": "18.12.2023", "time": "14:44" }
            },
            {   "id": 4,
                "messageContent": { "text": "It's already 25h lesson and I'm mapping arrays like a PRO! Epic power!!!", "likes":77 },
                "publicatedDate": { "date": "21.12.2023", "time": "23:41" }
            },
        ],
        // Info about a specific user
        "userInfo": [
            {
                "id": "1",
                "avatar": "Admin", // doesn't work here
                "name": "Andrey M.",
                "borned": "8 january",
                "city": "SnK",
                "edu": "KubGTU, Krasnodar",
                "webSite": "https://kubris.github.io/portfolio/"
            },
            {
                "id": "2",
                "avatar": "woman.jpg",  // doesn't work here
                "name": "Olesia M.",
                "borned": "3 december",
                "city": "SnK",
                "edu": "SHT, SnK",
                "webSite": "-"
            }
        ],
    },
    messagesPage: {
        // users list in Messages
        "dialogs": [
            { id: 1, name: 'Andrey' },
            { id: 2, name: 'Olesia' },
            { id: 3, name: 'Mark' },
            { id: 4, name: 'Nikita' },
            { id: 5, name: 'Vladimir' },
            { id: 6, name: 'Olga' },
            { id: 7, name: 'Nikolay' },
            { id: 8, name: 'Natalia' },
        ],
        // Messages of a specific user
        "messages": [
            { id: 1, text: 'Hi, bro!' },
            { id: 2, text: 'How are you?' },
            { id: 3, text: 'What are you doing?' },
        ],
    },
    sidebar: {
        friendsOnline: [
            {
                "id": 2,
                "name": "Olesia"
            },
            {
                "id": 3,
                "name": "Mark"
            },
            {
                "id": 4,
                "name": "Nikita"
            }
        ],
    }
}
export default state;