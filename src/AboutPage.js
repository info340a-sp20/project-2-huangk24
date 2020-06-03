import React, { Component } from 'react';

export class AboutPage extends Component {
    render() {
      console.log(this.props);
      return (
        <>
          <section>
              <h1 id="Problem_Description">Problem Description</h1>
      
              <p>In my spare time, I like to race cars. It's a hobby that not very many people are into, 
                  but for those who are, it's a lifestyle. Thousands of dollars are spent on track days, 
                  race tires and safety equipment. After all, you gotta have good equipment to beat your 
                  friends lap times. But the problem with comparing lap times is that its done one-on-one; 
                  there is no central place where everyone can store their best lap times and compare with 
                  more than one friend at a time.
              </p>
                      
              <p>The information needed to create an online storage of lap times is simply to have all 
                  racetracks names uploaded to a database. Then any user (after creating an account) is 
                  able to upload their lap times for a specific racetrack. They can then see global lap 
                  times for all users on that track and also search for their specific friends' lap times.
              </p>
                      
              <p>I would link sources for further reading, but there are none since such a concept doesnt 
                  even exist. Something similar is <a href="https://fastestlaps.com/">this site</a>, which 
                  for a given car, shows the fastest outright laptimes at major racetracks and other metadata 
                  along with it. Here is an example with a
                  <a href="https://fastestlaps.com/models/porsche-911-gt3-rs-4-0"> Porsche GT3</a>. 
                  My site would be very close in concept, but instead of outright fastest times per CAR per 
                  track, My site would show fastest laptimes per INDIVIDUAL per car per track. That way, people 
                  can directly compare their cars' lap times with each other on the website. It would be very 
                  helpful for a lot of us racing in certain classes (HPDE, local, SCCA, etc) to see how we 
                  stack up against others for reference, tracking progress, and bragging rights.
              </p>
          </section>
          <section>
              <h1 id="App_Description">App Description</h1>
      
              <p>The people using this website will be amateur racers, racers in organized series and hopefully
                  professional racers to document their lap times progressions, as well as other metadata. The 
                  data that viewers will be looking at is mostly best lap times per track per car that a user 
                  drove. The racetracks I'll be using can be found 
                  <a href="https://en.wikipedia.org/wiki/List_of_auto_racing_tracks_in_the_United_States#Road_courses"> here</a>
                  . I'll likely end up web scraping the data off the wikipedia site.
                  The cars and lap times will be entered manually by the user.
              </p>
      
              <p>I expect the users to upload their lap times and compare their lap times with their friends' lap times.
                  They will be able to search up specific users and look at their profile, looking at their cars and lap 
                  times per car. They should then be able to directly compare their lap times to their friends lap times by
                  selecting a track that both have been to. This will directly solve my problem of not having a place to 
                  compare my lap times with my friends' times.
              </p>
      
          </section>
        </>
      );
    }
}
  