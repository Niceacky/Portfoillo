document.addEventListener('DOMContentLoaded', () => {
    const rankingsContainer = document.getElementById('rankings-container');

    // Initialize songs array
    const songs = [
        { id: 1, title: 'Fallen Forest', image: '/images/Blink.png', rating: 0 },
        { id: 2, title: 'FinalStraw', image: '/images/Amis.png', rating: 0 },
        { id: 3, title: 'Forgotten Basement', image: '/images/Buddyart.png', rating: 0 }
    ];

    // Add event listeners to all rating inputs
    document.querySelectorAll('.rating input').forEach(input => {
        input.addEventListener('change', (e) => {
            const songId = parseInt(e.target.name.replace('rating', '')); // Extract song ID
            const rating = parseInt(e.target.value); // Get the selected rating

            // Update the rating for the corresponding song
            const song = songs.find(s => s.id === songId);
            if (song) {
                song.rating = rating;
            }

            // Update the rankings
            updateRankings();
        });
    });

    function updateRankings() {
        // Sort songs by rating in descending order
        const sortedSongs = [...songs].sort((a, b) => b.rating - a.rating);

        // Clear the rankings container
        rankingsContainer.innerHTML = '';

        // Add sorted songs to the rankings container
        sortedSongs.forEach((song, index) => {
            const rankElement = document.createElement('div');
            rankElement.classList.add('rank');
            rankElement.innerHTML = `
                <span>${index + 1}.</span>
                <img src="${song.image}" alt="${song.title}" class="rank-image">
                <p>${song.title}</p>
            `;
            rankingsContainer.appendChild(rankElement);
        });
    }

    // Initialize rankings on page load
    updateRankings();
});