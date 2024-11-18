document.addEventListener('DOMContentLoaded', function() {
    const footerContainer = document.getElementById('footer-container');
    if (footerContainer) {
        footerContainer.innerHTML = `
            <!-- Footer -->
            <section id="footer">
                <div class="inner">
                    <h2 class="major">Join the Movement</h2>
                    <p>In a world demanding both privacy and programmability, we're expanding what's possible. Not by replacing what
                        works, but by building upon it.</p>
                    <div style="display: flex; justify-content: space-between; align-items: center;">
                        <p class="copyright" style="margin: 0;">&copy; 2024 Salvium Protocol. All rights reserved.</p>
                        <div class="social-icons" style="display: flex; gap: 1em; align-items: center;">
                            <a href="https://x.com/salvium_io" class="icon brands fa-x-twitter" style="font-size: 1.25em;"><span class="label">X (Twitter)</span></a>
                            <a href="https://github.com/salvium/salvium/" class="icon brands fa-github" style="font-size: 1.25em;"><span class="label">GitHub</span></a>
                            <a href="https://discord.com/invite/P3rrAjkyYs" class="icon brands fa-discord" style="font-size: 1.25em;"><span class="label">Discord</span></a>
                            <a href="https://t.me/salviumcommunity" class="icon brands fa-telegram" style="font-size: 1.25em;"><span class="label">Telegram</span></a>
                        </div>
                    </div>
                </div>
            </section>
        `;
    }
});
