// const fs = require('fs');
// const fileName = 'currentBlock.json';
// const file = require('currentBlock.json');
const express = require('express');
const { google } = require('googleapis');

const app = express();

const SCOPES = 'https://www.googleapis.com/auth/calendar.readonly';
const GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCZuQuicz6SW2F3\nTE25k3WLQ20kaA2HhBdZ3wMf72oIuazJWeS0fWu1rIgm4IKJLnTXMkkn1okquvgN\n4ZaZM/KkceuT30in/lxI/+97u+8ssFd50dEfP/5n5VhCjM23tz+G3xtyCs2YjyzM\nkMXY2f/VQ+t8REb1xrJFeuX8/Cb2InSIJvGieF4v1In2D7ohtiYTs36XpOlrJddn\nZXw8lVFnKzlxpZ7N2DLw+sCsZDC1WvRjrUV5Die5pjlmAtebUkZok+zug7J1twvB\nOEWgLxVY2j8/T8+76Ni8Dhh0tDhJq9u6rrTB6Nv0xZ15D7Wccg4SqAmwivLnvRsA\nmdwuA3NfAgMBAAECggEABF9G/W/Zr7/5nbMF4ulWxoc8a3SqLdiL8XpuVFIy6dye\nFXwBDUEj9x7ZIIHyNISlvhkoC4IGlLiMpZhs+B6KIDM9SA9puZ16cnkVDqfhvZum\nYUiecg0X50yWng3zK+6CWAuwdCXqgxRPaeIUPn600BQGdppailMEbwV31SI22XlG\nHgeeSWyBd5kWXi2eF4KkiSXFEEqqgR25ZT+p4MMgq65qBbDgW77egvkyVNN7EzKA\nGgAf3gSj4mGnVGUek6lnNrQ8TUSfCFoZgY8gnNcmpBZLaliALjBKZBO+ZkxM4Jsb\nM8lfwW6aDEEHbGA1foOpSoZJ8HfeA2VgsXo8u95CgQKBgQDJdPCt0ZTGa7RjnRCk\nJSDNIwFsDIuJ17vWaKidRmUkXv+2hfFKue4EVfqgQmcxgh4raBQCamSDcqhZHC9P\njgEDspAjDex+t/GCn936ShFrNM8UzRpG2hc+M7wtTYX/Zf4sZTWMGTRLqlq0Ix3L\npoV1Z847VS1R46tzTfbOf9kz1wKBgQDDV6SkXAq/2tkDSipyrEbIfQOfcd2oq43q\nnM6R/kpZJNy4MZ+4hkl1xMqo7QkYpu9sEqP+F+6ZbK+h7gWqATv9ejXqodZWN5K9\nXbHknHdH6SJOnZ6qBgL3Ur1AknvLcWoj8w8yKXrz4Z4LwJIRsIvvtv6MmtfLauHZ\nTA3fy2tLuQKBgE44L3Lt2xwnmYTL6Tgyikfb/aNcQ5mjv/UB8eYO/RpgIF1YKFXh\nVz8ruwIahkK8yMYFxS8i7B/1ltPyk5QKCO7MmBZkQ5z4Are7Js8VjynW+UiUUk2M\nRFYMdFYKsap2iXfnXCEncByo6krjD6CQ6WSqh3KWIeCXy2wbq2aGUWlFAoGAe5hm\nib/a5U0Y5eX1OZ0bJBtFQYsQDnqNTpZsdR8J96FFLh3nyx7cN/GNsJhZmwl0j1K0\nBD8sLlMARVqOpuQlCtpaZtyC+wYqiDpSJi2BozQ1Crzb+QPYuJfXOpX0UeKun5RY\nVwq7yrdEAneTdDHaOI/2Owx14TT9NTnTxXe1qbECgYEAvIhnYpYsCRESMGsbpSuV\nQmStZC6/DhbL29/Dzy/um7yvkYe4TRqAyWbmW0YGOODtCpQQxzeCplJ7k6AawMcU\n9+R/oaeygm55yUNtz8C3LJgLu4KNsC2JZ0md5oO8D2F4ipSTwiuPoyWmDsKLgbAP\nlED+oNuyYs6tD7wdymcNi5E=\n-----END PRIVATE KEY-----\n"
const GOOGLE_CLIENT_EMAIL = "supbuddy-roombot@cc-project-dylan.iam.gserviceaccount.com"
const GOOGLE_PROJECT_NUMBER = "277000327297"
const GOOGLE_CALENDAR_ID = "lwhs.org_tvjp6fa3cekf71mm0ahd6f8sbk@group.calendar.google.com"

const jwtClient = new google.auth.JWT(
    GOOGLE_CLIENT_EMAIL,
    null,
    GOOGLE_PRIVATE_KEY,
    SCOPES
);

const calendar = google.calendar({
    version: 'v3',
    project: GOOGLE_PROJECT_NUMBER,
    auth: jwtClient
});

app.get('/', async (req, res) => {
    try {
        const { data } = await calendar.events.list({
            calendarId: GOOGLE_CALENDAR_ID,
            timeMin: (new Date()).toISOString(),
            maxResults: 50,
            singleEvents: true,
            orderBy: 'startTime',
        });

        const blockSummaries = ['A Block', 'B Block', 'C Block', 'D Block', 'E Block', 'F Block', 'G Block', 'H Block'];

        let currentBlockIndex = -1;
        let nextBlockIndex = -1;
        const now = Date.now();

        data.items.forEach((event, index) => {
            const startTime = new Date(event.start.dateTime || event.start.date).getTime();
            const endTime = new Date(event.end.dateTime || event.end.date).getTime();

            if (blockSummaries.includes(event.summary.trim())) {
                if (startTime <= now && endTime >= now && currentBlockIndex === -1) {
                    currentBlockIndex = index;
                } else if (startTime > now && (nextBlockIndex === -1 || startTime < new Date(data.items[nextBlockIndex].start.dateTime || data.items[nextBlockIndex].start.date).getTime())) {
                    nextBlockIndex = index;
                }
            }
        });

        if (currentBlockIndex !== -1) {
            const currentBlock = data.items[currentBlockIndex].summary.trim();
            const blockNumber = blockSummaries.indexOf(currentBlock) + 1;
            res.send(JSON.stringify({ blockNumber }));
            console.log(blockNumber)

            //new
            socket.broadcast.emit('info',blockNumber)
            // document.addEventListener('DOMContentLoaded', () => {
            //     var blockNumberSend = blockNumber
            // const event = new CustomEvent('blockNumberDefined', { detail: blockNumberSend });
            // document.dispatchEvent(event);
            // });
            //new




            console.log('The current block is:', currentBlock);
        } else if (nextBlockIndex !== -1) {
            const nextBlock = data.items[nextBlockIndex].summary.trim();
            console.log('The current block has ended. The next block is:', nextBlock);
            const blockNumber = blockSummaries.indexOf(nextBlock) + 1;
            res.send(JSON.stringify({ blockNumber }));
            
            //new
            socket.broadcast.emit('info',blockNumber)
            //new
            // document.addEventListener('DOMContentLoaded', () => {
            //     var blockNumberSend = blockNumber
            //     const event = new CustomEvent('blockNumberDefined', { detail: blockNumberSend });
            //     document.dispatchEvent(event);
            //     });
            //     //new

        } else {
            res.send(JSON.stringify({ message: 'No upcoming block events found.' }));
            
        }
    } catch (error) {
        res.status(500).send(JSON.stringify({ error: error.message }));
    }
    
    

});




app.listen(3000, () => console.log(`App listening on port 3000!`));
