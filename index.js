document.addEventListener('DOMContentLoaded', function() {
    const toggle = document.getElementById('certificationsToggle');
    const content = document.getElementById('certificationsCollapse');

    toggle.addEventListener('click', function(e) {
        e.preventDefault(); // Prevent the default anchor link behavior
        // Toggle display
        const isCollapsed = window.getComputedStyle(content).display === 'none';
        content.style.display = isCollapsed ? 'block' : 'none';
    });

    document.addEventListener('click', function(e) {
        // Check if the click is outside the content and not on the toggle
        if (!content.contains(e.target) && !toggle.contains(e.target)) {
            content.style.display = 'none'; // Hide the content
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const totalDuration = 3000; // Total duration of 5 seconds for the animation
    const slowDownStart = 3000; // Start slowing down with 2 seconds remaining
    const startTime = Date.now();

    const counters = document.querySelectorAll('.counter');

    const updateCount = (counter) => {
        const target = +counter.getAttribute('data-target');
        const format = counter.getAttribute('data-format');
        const now = Date.now();
        const elapsedTime = now - startTime;
        const remainingTime = totalDuration - elapsedTime;
        let progress = elapsedTime / totalDuration;

        // Adjust progress for slow down in the last seconds
        if (remainingTime <= slowDownStart) {
            // Calculate a slow-down factor based on the remaining time
            const slowFactor = remainingTime / slowDownStart;
            progress = 1 - ((1 - progress) * slowFactor);
        }

        const currentCount = progress * target;

        // Format and display the current count
        if (format === 'currency') {
            counter.innerText = `$${Math.min(currentCount, target).toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`;
        } else {
            counter.innerText = Math.min(currentCount, target).toFixed(0);
        }

        // Continue the animation unless it's complete
        if (elapsedTime < totalDuration) {
            requestAnimationFrame(() => updateCount(counter));
        } else {
            // Ensure the final value is exactly the target value
            if (format === 'currency') {
                counter.innerText = `$${target.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`;
            } else {
                counter.innerText = target.toString();
            }
        }
    };

    counters.forEach((counter) => {
        requestAnimationFrame(() => updateCount(counter));
    });
});

