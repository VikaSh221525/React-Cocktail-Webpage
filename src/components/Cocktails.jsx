import { use } from "react"
import { cocktailLists, mockTailLists } from "../../constants"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"

const cocktails = () => {
    useGSAP(()=>{
        const parallaxTimeline = gsap.timeline({
            scrollTrigger:{
                trigger: '#cocktails',
                start: 'top 30%',
                end: 'bottom 80%',
                scrub: true,
            }
        })
        parallaxTimeline.from('#c-left-leaf', {
            x: -100, y: 100
        })
        .from('#c-right-leaf', {
            x:100, y:100
        })
    })
    return (
        <section id="cocktails" className="noisy">
            <img src="/images/cocktail-left-leaf.png" alt="left-leaf" id="c-left-leaf" />
            <img src="/images/cocktail-right-leaf.png" alt="right-leaf" id="c-right-leaf" />
            <div className="list">
                <div className="popular">
                    <h2>Most popular cocktails:</h2>
                    <ul>
                        {cocktailLists.map((drink)=>{
                            return <li key={drink.name}>
                                <div className="md:me-28">
                                    <h3>{drink.name}</h3>
                                    <p>{drink.country} |{drink.detail} </p>
                                </div>
                                <span>-{drink.price} </span>
                            </li>
                        })}
                    </ul>
                </div>
                <div className="loved">
                    <h2>Most Loved cocktails:</h2>
                    <ul>
                        {mockTailLists.map((drink)=>{
                            return <li key={drink.name}>
                                <div className="md:me-28">
                                    <h3>{drink.name}</h3>
                                    <p>{drink.country} |{drink.detail} </p>
                                </div>
                                <span>-{drink.price} </span>
                            </li>
                        })}
                    </ul>
                </div>
            </div>
        </section>
        
    )
}

export default cocktails