const form = document.querySelector("#searchForm");
const usernameInput = document.querySelector("#username");
const result = document.querySelector("#result");
const loading = document.querySelector("#loading");

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const username = usernameInput.value.trim();

    if (!username) return;

    result.innerHTML = "";
    loading.style.display = "block";

    try {
        const response = await fetch(
            `https://api.github.com/users/${username}`
        );

        if (response.status === 404) {
            result.innerHTML =
                "<p class='error'>User tidak ditemukan!</p>";
            return;
        }

        const user = await response.json();

        result.innerHTML = `
            <div class="card">
                <img src="${user.avatar_url}" alt="${user.login}">
                <h2>${user.name || user.login}</h2>
                <p>${user.bio || "Tidak ada bio"}</p>
                <p>Repository Publik: ${user.public_repos}</p>
                <a href="${user.html_url}" target="_blank">
                    Lihat Profil GitHub
                </a>
            </div>
        `;
    } catch (error) {
        result.innerHTML =
            `<p class="error">Terjadi kesalahan: ${error.message}</p>`;
    } finally {
        loading.style.display = "none";
    }
});