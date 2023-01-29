export default function Header() {
    return (
        <header class="min-h-screen relative flex flex-col justify-center items-center text-white">
            <nav class="mx-auto container py-5 absolute top-0 left-0 right-0">
                <ul class="flex gap-6 text-3xl justify-end font-cursive">
                    <li>Accueil</li>
                    <li>Projets</li>
                    <li>À propos</li>
                    <li>Contact</li>
                </ul>
            </nav>
            <div class="container mx-auto">
                <h1 class="text-6xl font-cursive">
                    Salut
                    <b class="block font-sans text-9xl uppercase">Je suis</b>
                    Chargée des communications
                </h1>
            </div>
        </header>
    )
}