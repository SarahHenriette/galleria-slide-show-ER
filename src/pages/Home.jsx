import Article from "./../components/Article"
import imgStarryNight from "../assets/starry-night/hero-large.jpg"
import imgGirlWithPearlEarring from "../assets/girl-with-pearl-earring/hero-large.jpg"
import imgGuernica from "../assets/guernica/hero-large.jpg"
import imgPenitentMagdalene from "../assets/penitent-magdalene/hero-large.jpg"
import imgStormSeaGalilee from "../assets/the-storm-on-the-sea-of-galilee/hero-large.jpg"
import imgGreatWaveKanagawa from "../assets/the-great-wave-off-kanagawa/hero-large.jpg"
import imgVanGoghSelfPortrait from "../assets/van-gogh-self-portrait/hero-large.jpg"
import imgSleepingGypsy from "../assets/the-sleeping-gypsy/hero-large.jpg"
import imgLadyWithErmin from "../assets/lady-with-an-ermine/hero-large.jpg"
import imgBoyRedVest from "../assets/the-boy-in-the-red-vest/hero-large.jpg"
import imgNightCafe from "../assets/the-night-cafe/hero-large.jpg"
import imgArnolfiniPortrait from "../assets/arnolfini-portrait/hero-large.jpg"
import imgMonaLisa from "../assets/mona-lisa/hero-large.jpg"
import imgBasketOfApple from "../assets/the-basket-of-apples/hero-large.jpg"
import imgSwing from "../assets/the-swing/hero-large.jpg"

function Home () {
    return (
        <main className="home">
            <section className="articles articles_column1">
                <Article title="Starry Night" artist="Vincent Van Gogh" class="article article-starryNight" image={imgStarryNight}/>
                <Article title="The Storm on the Sea of Galilee" artist="Rembrandt" class="article article-stormSeaGalilee" image={imgStormSeaGalilee}/>
                <Article title="Lady with an Ermin" artist="Leonardo da Vinci" class="article article-ladyWithErmin" image={imgLadyWithErmin}/>
                <Article title="The Boy in the Red Vest" artist="Edward Hopper" class="article article-boyRedVest" image={imgBoyRedVest}/>

            </section>
            <section className="articles articles_column2">
                <Article title="Girl with a Pearl Earring" artist="Johannes Vermeer" class="article article-girlWithPearlEarring" image={imgGirlWithPearlEarring}/>
                <Article title="The Great Wave off Kanagawa" artist="Hokusai" class="article article-greatWaveKanagawa" image={imgGreatWaveKanagawa}/>
                <Article title="The Night Café" artist="Vincent van Gogh" class="article article-nightCafe" image={imgNightCafe}/>
                <Article title="Arnolfini Portrait" artist="Jan van Eyck" class="article article-arnolfiniPortrait" image={imgArnolfiniPortrait}/>
            </section>
            <section className="articles articles_column3">
                <Article title="Guernica" artist="Pablo Picasso" class="article article-guernica" image={imgGuernica}/>
                <Article title="Van Gogh self-portrait" artist="Vincent van Gogh" class="article article-vanGoghSelfPortrait" image={imgVanGoghSelfPortrait}/>
                <Article title="Mona Lisa" artist="Leonardo da Vinci" class="article article-monaLisa" image={imgMonaLisa}/>


            </section>
            <section className="articles articles_column4">
                <Article title="Penitent Magdalene" artist="Artemisia Gentileschi" class="article article-penitentMagdalene" image={imgPenitentMagdalene}/>
                <Article title="The Sleeping Gypsy" artist="Henri Rousseau" class="article article-sleepingGypsy" image={imgSleepingGypsy}/>
                <Article title="The Basket of Apples" artist="Paul Cézanne" class="article article-basketOfApple" image={imgBasketOfApple}/>
                <Article title="The Swing" artist="Jean-Honoré Fragonard" class="article article-Swing" image={imgSwing}/>
            </section>





        </main>

)
}

export default Home
