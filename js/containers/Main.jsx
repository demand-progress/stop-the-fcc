import React from 'react';
import Form from './Form.jsx';

function Main() {
    return (
    <div id="app">
        <div className="unit">
            <div className="hero" id="bftn-action-form">
                <div>
                    <div id="signThePetition">
                        <Form />
                    </div>
                </div>
                <div className="unit">
                    <p style={{color: 'white', textAlign: 'center'}}>
                        <h4>Here's the language that will be sent to Congress:</h4>
                    </p>
                    <p style={{color: 'white', textAlign: 'center'}}>
                        <i>
                            "The FCC's vote to destroy net neutrality protections cannot stand. Please co-sponsor, sign the discharge petition for, and vote for the Congressional Review Act resolution to overturn the FCC's repeal of net neutrality."
                            <br/><br/>
                            “The FCC's decision willfully ignored the outcry of tens of millions of people, and it abdicated the FCC's responsibility to protect the internet from ISP blocking and discrimination. Please overturn it to restore net neutrality and ensure that the internet continues to enable speech, commerce, and democracy."
                        </i>
                    </p>
                    <hr/>
                    <h4 style={{color: 'white'}}>
                        <br/>
                        The Senate is about to vote on whether to save net neutrality or let it die.
                    </h4>
                    <p> 
                        The US Senate is headed for a vote this Wednesday, May 16th, on a Congressional Review Act (CRA) resolution to block the FCC’s repeal of net neutrality. 
                        <br/><br/>
                        In December, Trump FCC Chairman Ajit Pai&mdash;a
                        former top lawyer for Verizon&mdash;pushed through a measure to end net neutrality and let big cable companies control which websites and apps you use, where you get your news, how you listen to music and watch videos — everything you do on the internet. 
                        <br/><br/>
                        But the Senate will vote on Wednesday on a resolution to block the FCC's repeal of net neutrality and keep the web free and open.
                        <br/><br/> 
                        With all 49 Senators in the Democratic Caucus and Republican Susan Collins supporting the resolution, we already have 50 votes, and we need just a simple majority to win. One more vote and we are guaranteed victory.
                        <br/><br/> 
                        As polls show 86% of Americans, including an overwhelming majority of Republican voters, oppose the FCC's order, and with more and more Republican lawmakers expressing skepticism about the FCC's vote, we have a strong shot of getting this through the Senate.
                        <br/><br/> 
                        If we flood Congress with petitions and calls, we can save net neutrality.
                        <br/><br/> 
                        <a className="back-to-form-link" href="#signThePetition">Sign the petition and call on Congress to pass the CRA resolution to stop the repeal of net neutrality.</a>
                        <br/><br/> 
                        And remember what we’re fighting for: Without net neutrality, the internet will look more like cable TV, where the content we see is controlled by corporations like Comcast and Verizon. We can’t afford to see the open internet—a revolutionary medium where the exchange of ideas, democratic participation and the ability to organize, especially among marginalized communities, has flourished—fall to the control of corporate gatekeepers.
                    </p>
                </div>
            </div>
        </div>
    </div>);
}

export default Main;