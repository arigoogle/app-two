import { useState, useEffect } from "react";
import MeetupList from "../components/meetups/MeetupList";

const DUMMY_DATA = [
    {
        id: 'm1',
        title: 'This is a first meetup',
        image:
            'https://source.unsplash.com/random/?Design=?1',
        address: 'Meetupstreet 5, 12345 Meetup City',
        description:
            'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
    },
    {
        id: 'm2',
        title: 'This is a second meetup',
        image:
            'https://source.unsplash.com/random/?Design=?2',
        address: 'Meetupstreet 5, 12345 Meetup City',
        description:
            'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
    },
];

function AllMeetupsPage() {
    const [isLoading, setIsLoading] = useState(true);
    const [loadedMeetups, setLoadedMeetups] = useState([]);

    useEffect(() => {
        setIsLoading(true);
        fetch('https://react-getting-started-216a8-default-rtdb.asia-southeast1.firebasedatabase.app/meetups.json').then(response => {
            return response.json();
        }).then(data => {
            const meetups = [];

            for (const key in data) {
                const meetup = {
                    id: key,
                    ...data[key]
                };

                meetups.push(meetup);
            }

            setIsLoading(false);
            setLoadedMeetups(meetups);
        });
    }, []);



    if (isLoading) {
        return (
            <section>
                <p>Loading...</p>
            </section>

        );
    }

    return (
        <section>
            <h1>All Meetups</h1>
            <MeetupList meetup={loadedMeetups} />

        </section>
    )

}

export default AllMeetupsPage;