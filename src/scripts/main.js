document.addEventListener('DOMContentLoaded', () => {
    // Mot de passe défini
    const correctPassword = "DynastyRPP";

    // Éléments HTML pour la gestion du mot de passe
    const passwordScreen = document.getElementById('password-screen');
    const mainContent = document.getElementById('main-content');
    const passwordInput = document.getElementById('password-input');
    const passwordSubmit = document.getElementById('password-submit');
    const errorMessage = document.getElementById('error-message');

    // Sections pour basculement
    const homeSection = document.getElementById('home-section');
    const documentationSection = document.getElementById('documentation-section');
    const contactSection = document.getElementById('contact');
    const addBotSection = document.getElementById('add-bot'); // Nouvelle section
    const documentationContent = document.getElementById('documentation-content');
    const categoryButtons = document.querySelectorAll('.category-button');

    // Fonction pour valider le mot de passe
    passwordSubmit.addEventListener('click', () => {
        const enteredPassword = passwordInput.value;
        if (enteredPassword === correctPassword) {
            passwordScreen.style.display = 'none';
            mainContent.style.display = 'block';
        } else {
            errorMessage.style.display = 'block';
        }
    });

    // Fonction pour afficher une section et masquer les autres
    function showSection(sectionToShow) {
        // Masquer toutes les sections
        homeSection.style.display = 'none';
        documentationSection.style.display = 'none';
        contactSection.style.display = 'none';
        addBotSection.style.display = 'none'; // Masquer la nouvelle section

        // Afficher la section demandée
        sectionToShow.style.display = 'block';
    }

    // Gestion des clics sur "Accueil"
    document.getElementById('show-home').addEventListener('click', (e) => {
        e.preventDefault(); // Empêche le comportement par défaut du lien
        showSection(homeSection);
    });

    // Gestion des clics sur "Documentation"
    document.getElementById('show-documentation').addEventListener('click', (e) => {
        e.preventDefault(); // Empêche le comportement par défaut du lien
        showSection(documentationSection);
    });

    // Gestion des clics sur "Contact"
    document.getElementById('show-contact').addEventListener('click', (e) => {
        e.preventDefault(); // Empêche le comportement par défaut du lien
        showSection(contactSection);
    });

    // Gestion des clics sur "Ajouter mon bot"
    document.getElementById('show-add-bot').addEventListener('click', (e) => {
        e.preventDefault(); // Empêche le comportement par défaut du lien
        showSection(addBotSection);
    });

    // Initialisation : afficher uniquement la section Accueil
    showSection(homeSection);

    // Gestion des catégories de la documentation
    const categories = {
        verification: `
            <h3>🛠 Comment effectuer une vérification ?</h3>
            <p>Avant de lancer la vérification, il est indispensable de :</p>
            <ul>
                <li>Récupérer l’UUID du joueur concerné.</li>
                <li>Consulter les logs anti-cheat ainsi que les screen-logs afin de repérer d’éventuelles anomalies.</li>
            </ul>
        `,
        screenSharing: `
            <h3>📺 Démarrage du partage d’écran</h3>
            <ol>
                <li>Demandez au joueur de partager son écran.</li>
                <li>Observez attentivement son comportement et inspectez son bureau.</li>
                <li>Vérifiez qu’il n’y a pas de fichiers ou d’applications suspectes.</li>
                <li>Assurez-vous qu’il n’y a pas de fenêtres cachées ou de programmes en arrière-plan.</li>
                <li>Demandez-lui de minimiser toutes les fenêtres et de ne garder que le jeu visible.</li>
            </ol>
        `,
        resetDate: `
            <h3>💻 Vérification de la date de réinitialisation du PC</h3>
            <ol>
                <li>Demandez-lui d’ouvrir PowerShell.</li>
                <li>Faites-lui entrer la commande suivante :</li>
            </ol>
            <pre>powershell: (Get-CimInstance -ClassName Win32_OperatingSystem).InstallDate | Get-Date</pre>
            <p>Cette commande permet de connaître la date de la dernière réinitialisation du système.</p>
            <p>Comparez cette date avec la date de la vérification.</p>
        `,
        desktopInspection: `
            <h3>🗂 Inspection du bureau</h3>
            <ul>
                <li>Analysez les types de fichiers et dossiers présents sur son bureau.</li>
                <li>Vérifiez également le contenu de la corbeille, si elle n’est pas vide.</li>
                <li>Recherchez des fichiers ou dossiers suspects.</li>
                <li>Exemples de fichiers suspects : <code>loader.exe</code>, <code>keyser.exe</code>, <code>grape.exe</code>.</li>
            </ul>
        `,
        fileAnalysis: `
            <h3>📁 Analyse des fichiers téléchargés</h3>
            <p>Inspectez ses fichiers de téléchargement à la recherche d'éléments suspects.</p>
            <ul>
                <li>Exemples de fichiers suspects : <code>loader.exe</code>, <code>keyser.exe</code>, <code>grape.exe</code>.</li>
            </ul>
        `
    };

    // Ajout des événements pour les boutons de catégorie
    categoryButtons.forEach(button => {
        button.addEventListener('click', () => {
            const category = button.getAttribute('data-category');
            documentationContent.innerHTML = categories[category] || '<p>Contenu non disponible.</p>';
        });
    });
});