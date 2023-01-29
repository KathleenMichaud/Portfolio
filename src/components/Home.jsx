import React from 'react';
import Layout from './layout/Layout';

const Home = () => {
    return (
        <Layout>
            <div class="bg-white">
                <section id="about" class="container font-cursive mx-auto grid grid-cols-3 gap-8 py-12">
                    <div class="relative text-center">
                        <figure class="bg-white shadow-xl drop-shadow-md p-8 -rotate-12 w-2/3">
                            <figcaption class="text-xl">Professionnelle</figcaption>
                        </figure>
                        <figure class="bg-white shadow-xl drop-shadow-md p-8 -rotate-3 w-2/3 absolute top-0 bottom-0 right-0">
                            <figcaption class="text-xl">Professionnelle</figcaption>
                        </figure>
                    </div>
                    <div class="col-span-2">
                        <h2 class="text-6xl ">Kathleen Michaud</h2>
                        <p class="p-6 bg-white shadow-lg font-sans rounded-2xl">J'adore faire <em class="text-orange-400 not-italic">surchauffer</em> mon cerveau. <em class="text-orange-400 not-italic">Innover</em> sur les meilleurs procédés pour faire circuler un message. Découvrir le mot parfait pour <em class="text-orange-400 not-italic">imager</em> une pensée. Je suis passionnée par la possibilité de dire les choses <em class="text-orange-400 not-italic">autrement</em>.</p>
                    </div>
                    <div class="col-span-full pt-10">
                        <h3 class="text-4xl">Mes compétences</h3>
                        <ul class="grid grid-cols-1 text-2xl gap-x-8 md:grid-cols-3">
                            <li>Design graphique et web</li>
                            <li>Photographie</li>
                            <li>Communication</li> 
                            <li>Rédaction</li>
                            <li>Gestion des médias sociaux</li>
                            <li>Gestion de projet</li>
                        </ul>
                    </div>
                </section>
            </div>
            <section id="projects" class="container mx-auto py-12">
                <p class="font-cursive text-2xl">De la tête au papier, du papier aux médias.</p>
                <h2 class="text-5xl uppercase font-bold text-white">Mes projets</h2>
                <ul class="grid grid-cols-3 gap-8 text-center py-10">
                    <li class="bg-white p-6"><h3 class="font-cursive text-4xl">Designs</h3></li>
                    <li class="bg-white p-6"><h3 class="font-cursive text-4xl">Photos</h3></li>
                    <li class="bg-white p-6"><h3 class="font-cursive text-4xl">Illustrations</h3></li>
                </ul>
            </section>
            <section id="contact" class="container mx-auto py-12">
                <h2 class="text-5xl uppercase font-bold text-white">Me contacter</h2>
                <p class="font-cursive text-2xl">La meilleure façon de savoir s'il y a un fit, c'est de se parler!</p>
                <form>
                    <label>
                        Nom
                        <input type="text" name="name" id="input-name" />
                    </label>
                    <label>
                        Courriel
                        <input type="email" name="email" id="input-email" />
                    </label>
                    <label>
                        Message
                        <textarea name="message" id="input-message" />
                    </label>
                    <button type="submit">Envoyer</button>
                </form>
            </section>
        </Layout>
    )
}

export default Home;