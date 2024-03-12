// Add event listener to search button to handle search functionality
document.getElementById('searchButton').addEventListener('click', function() {
    // Retrieve search term and image containers
    var searchTerm = document.getElementById('searchInput').value.trim().toLowerCase();
    var imageContainers = document.querySelectorAll('.image-container a');

    // Remove existing search results if any
    var existingResults = document.querySelectorAll('.search-result');
    existingResults.forEach(function(result) {
        result.remove();
    });

    // Create a container for the search results
    var searchResultsContainer = document.getElementById('searchResultsContainer');

    // Loop through image containers to find matches and display search results
    imageContainers.forEach(function(container) {
        var img = container.querySelector('img');
        var altText = img.getAttribute('alt').toLowerCase();
        var href = container.getAttribute('href');

        // Check if alt text contains search term
        if (altText.includes(searchTerm)) {
            // Create link and section for search result
            var resultLink = document.createElement('a');
            resultLink.setAttribute('href', href);
            resultLink.appendChild(img.cloneNode(true));

            var resultSection = document.createElement('section');
            resultSection.classList.add('search-result');
            resultSection.appendChild(resultLink);

            // Append the search result to the search results container
            searchResultsContainer.appendChild(resultSection);
        }
    });
});
