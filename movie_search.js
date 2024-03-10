document.getElementById('searchButton').addEventListener('click', function() {
    var searchTerm = document.getElementById('searchInput').value.trim().toLowerCase();
    var imageContainers = document.querySelectorAll('.image-container a');

    // Remove existing search results if any
    var existingResults = document.querySelectorAll('.search-result');
    existingResults.forEach(function(result) {
        result.remove();
    });

    // Create a container for the search results
    var searchResultsContainer = document.getElementById('searchResultsContainer');

    imageContainers.forEach(function(container) {
        var img = container.querySelector('img');
        var altText = img.getAttribute('alt').toLowerCase();
        var href = container.getAttribute('href');

        if (altText.includes(searchTerm)) {
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