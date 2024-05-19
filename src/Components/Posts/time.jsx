const timeAgo = (datetime) => {
    const now = new Date();
    const then = new Date(datetime);
    const diffInSeconds = Math.floor((now - then) / 1000);

    const units = [
        { name: 'week', seconds: 60 * 60 * 24 * 7 },
        { name: 'day', seconds: 60 * 60 * 24 },
        { name: 'hour', seconds: 60 * 60 },
        { name: 'minute', seconds: 60 },
        { name: 'second', seconds: 1 },
    ];

    for (let unit of units) {
        const interval = Math.floor(diffInSeconds / unit.seconds);
        if (interval >= 1) {
            return `${interval}${unit.name[0]} ago`;
        }
    }
    return 'just now';
};

export default timeAgo;