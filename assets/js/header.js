document.addEventListener('DOMContentLoaded', function() {
    const headerContainer = document.getElementById('header-container');
    if (headerContainer) {
        headerContainer.innerHTML = `
            <!-- Header -->
            <header id="header">
                <h1><a href="index.html"><img src="images/salvium-logo.png" alt="Salvium Logo" style="height: 20px; vertical-align: middle;"></a></h1>
                <nav>
                    <a href="#menu">Menu</a>
                </nav>
            </header>

            <!-- Menu -->
            <nav id="menu">
                <div class="inner">
                    <h2>Menu</h2>
                    <ul class="links">
                        <li><a href="index.html">Home</a></li>
                        <li><a href="about.html">About</a></li>
                        <li><a href="papers.html">Papers</a></li>
                        <li><a href="download.html">Download</a></li>
                        <li><a href="exchanges.html">Exchanges</a></li>
                        <li><a href="blogs.html">Blog</a></li>
                        <li><a href="community.html">Community</a></li>
                    </ul>
                    <a href="#" class="close">Close</a>
                </div>
            </nav>
        `;

        // Initialize menu functionality
        const $body = $('body');
        const $menu = $('#menu');
        const $menuClose = $menu.find('.close');
        const $menuToggle = $('a[href="#menu"]');

        // Menu.
        $menuToggle.on('click', function(event) {
            event.preventDefault();
            event.stopPropagation();
            $body.addClass('is-menu-visible');
        });

        $menu
            .appendTo($body)
            .on('click', function(event) {
                event.stopPropagation();
            })
            .on('click', '.close', function(event) {
                event.preventDefault();
                event.stopPropagation();
                $body.removeClass('is-menu-visible');
            });

        $body.on('click', function(event) {
            $body.removeClass('is-menu-visible');
        });
    }
});
