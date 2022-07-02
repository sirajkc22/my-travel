import React from 'react'
import back from "../../src/images/trek.jpg"
import evrest from "../../src/images/evrest.jpg"
import manaslu from "../../src/images/big.jpg"
import langtang from "../../src/images/langtang.jpg"
import annapurna from "../../src/images/big 1.jpg"
import mustang from "../../src/images/upper.jpg"
import map from "../../src/images/map.jpg"
import {Table} from "react-bootstrap";
import "./trek.css"
const Treks = () => {
  return (
    <div>
        <div className="heading">
        <h3>The Best Treks in Nepal - The Ultimate Guide to help you decide which trek is best for you!!</h3>
        </div>
        <div className="trek-img">
        <img src={back} alt='pic'/>
        <div className="main">
            <h6>Nepal is home to some of the most spectacular treks in the world. Ranging from classics like Everest Base Camp, Annapurna Circuit, and Langtang to up and coming treks such as the Manaslu Circuit Trek and the Nar Phu Valley Trek, Nepal's best treks are listed below. If you plan on going trekking in Nepal, 
                read on to decide which trek is best for you.</h6>
                <div className="overview">
                <h4> Overview</h4>
              <p>This list has been updated in May 2018 to reflect the most recent conditions, most notably by the return of the Langtang Trek, which has re-opened. Most treks listed here take 2-3 weeks to complete. All these treks offer spectacular scenery and a close-up view of local cultures of the Himalaya. The overview, below, will help you decide which trek is best for you.
                  Ready to go on the adventure of a lifetime? Get in touch with a trusted local operator in our network</p>
            </div> 
            </div>
            <div className="every">
          <div className="evrest">
            <h2>#1 Everest Three Passes Trek</h2>
            <img className='img' src={evrest} alt='pic'/>
            <p>View of Mt. Everest from Renjo La Pass (17,585 ft. / 5360 m)
           The Three Passes Trek takes you over three 5,000m+ passes and is the best way to truly experience the Everest Region for those who have the time to spend 3 weeks on the trail. The trek includes sections of the Everest Base Camp Trek, but offers even more spectacular views of the giants in the heart of the Himalaya as you cross the Renjo La, Cho La and Kongma La passes. The Three Passes trek can be combined with other variations of the Everest Base Camp Trek. 
         Getting to the trailhead: a 30-minute flight from Kathmandu to Lukla.</p>
         
          </div>
        <div className="manaslu">
        <h2>#2 Manaslu Circuit Trek</h2>
        <img className='img'src={manaslu} alt='pic'/>
        <p>Prayer flags blowing above the Manaslu Circuit
The Manaslu Circuit Trek has become more accessible since new lodges were built in 2010. The trek has all the great features you’d expect from a classic Himalayan trek—deep lush valleys at lower elevations, amazing views of 8,000m peaks, and a 5,000m+ pass crossing—all the while remaining largely unspoiled by visitors.
Despite its rising popularity and recent road construction, the Manaslu Circuit still feels very remote, and has fewer trekkers than the more established classic treks of Nepal.
Getting to the trailhead: an 8-hour drive from Kathmandu.</p>
        </div>
    <div className="langtang">
        <h2>#3 Langtang Trek</h2>
        <img className='img'src={langtang} alt='pic'/>
        <p>View of Langtang Valley
The Langtang trek is a trek with real heart. After having been devoid of travelers for a couple of years after the 2015 earthquake, the trails and guesthouses have been rebuilt, and trekkers are back.

The trek takes you through magnificent forests to the high alpine meadows and yak pastures around Kyangjin Gompa (a Buddhist monastery), with an optional day hike up to the top of Kyangjin Ri (peak).

Getting to the trailhead: a 7-hour drive from Kathmandu</p>
<div className="annapurna">
<h2>#4 Annapurna Base Camp Trek</h2>
<img className='img'src={annapurna} alt='pic'/>
<p>Dramatic mountains views en route to the amphitheatre of the Annapurnas
The Annapurna Base Camp Trek takes you deep into the Annapurna Massif to the foot of Annapurna South. The scenery is quite different from most other classic treks because the views are less expansive and more vertical: you find yourself looking almost straight up to see the mountains towering above you.

Getting to the trailhead: a 25-minute flight from Kathmandu to Pokhara, followed by a 2-hour drive; or an 8-hour drive from Kathmandu.</p>
</div>
<div className="upper-mustang">
<h2>#5 Upper Mustang Trek </h2>
<img className='img'src={mustang} alt='pic'/>
<p>The arid desert landscape of the Upper Mustang Valley
The arid valley of the Upper Mustang Trek features a distinct landscape compared to almost all other treks in Nepal. With its many shades of brown and crumbling sandstone cliffs, this region lies in the desert rain shadow of the Himalaya. Mustang used to be its own kingdom, and its strong Tibetan-influenced traditions make this a culturally very interesting trek.

Getting to the trailhead: you'll need to take two connecting flights: Kathmandu to Pokhara (25 minutes), and Pokhara to Jomsom (20 minutes).</p>
</div>
</div>
    </div>
    <div className="map">
        <h4>MAP</h4>
        <img src={map} alt='pic'/>
    </div>
    </div>

    </div>
  )
}

export default Treks;