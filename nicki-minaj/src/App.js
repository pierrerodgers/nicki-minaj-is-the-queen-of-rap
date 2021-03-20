import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button';
import nicki from './nicki-minaj.png';
import React, { useState } from 'react';
import BigBoobs from './bigboobs.mp3';
import useSound from 'use-sound';

function App() {
  return (
    <div>
      <Title/>
      <Lyric/>
    </div>
    
  )
}

function Title() {
  return(
    <h1 className="title">
      Nicki Minaj Lyric Generator
    </h1>
  )
}

function Lyric() {
  const [lyric, setLyric] = useState('')

  const updateLyric = () => {
    setLyric(generateLyric())
  }

  if (lyric != '') {
    
    return (
      <div className="App">
        <h1 className="lyric">{lyric}</h1>
        <NickiButton setLyric = {updateLyric}></NickiButton>
        
      </div>
      
    )
  }
  
  else return (
    <div className="App">
      <NickiButton setLyric = {updateLyric}></NickiButton>
    </div>
  );
}

function NickiButton(props) {
  const [shake, setShake] = useState(false);


  const animate = () => {
        console.log("ANIMATE")
        // Button begins to shake
        setShake(true);
        
        // Buttons tops to shake after 2 seconds
        setTimeout(() => setShake(false), 500);
        
    }


  const [play] = useSound(BigBoobs);
  
  return (

    
    <div onClick = {props.setLyric}>
      <img onClick = {() => {animate(); play();}} className = {shake ? `shake nicki-button` : 'nicki-button'} src={nicki} alt="nicki minaj"></img>
    </div>
  )
}

function generateLyric() {
  const index = Math.floor(Math.random()*lyrics_arr.length)

  return lyrics_arr[index]

}



const lyrics = `
We are going up in flames
One more night for us to burn brighter
We are going up in flames
One last time for us to go higher
We are going up in flames
One more night for us to burn brighter
We are going up in flames
One last time for us to go higher
Anyway, lil' nigga don't test the kid
Even Maury Povich couldn't test the kid
Even R. Kelly couldn't touch the kid
And even with all your bars you couldn't text the kid
I got a pool that I never even swam in
Airports that you bitches never land in
They be like, "What you doing Nicki?" Branding
Suck a cockpit prepare for landing
I'm branding, I ain't talking about Presley
I keep a sniper, I ain't talking about Wesley
Why these bitches so pressed B?
Open my trunk, all I gotta do is press B
I'ma violate your asses like Chris Stokes
I'm in Saint Tropez on a big boat
On my way to make a billi' like a big goat
Pull my dick out 'case you bitches get a slick throat
We are going up in flames
One more night for us to burn brighter
We are going up in flames
One last time for us to go higher
We are going up in flames
One more night for us to burn brighter
We are going up in flames
One last time for us to go higher
Want another round? Well, then get the ref
Got the clothing line popping and the wigs is next
When I fly, you know G5 is the jet
I'm the motherfucking Queen 'lizabeth
Meetings with the president of every network
That is what the fuck I call how to network
My net worth, that net works
Keep my shooters out in Brooklyn where the Nets work
Chilling with executives
Check the charts, all my winnings are consecutive
Trillion dollar deficit
But y'all don't hear me though
All you bitches deaf as shit
Bitches ain't got punchlines or flow
I have both and an empire also
Sell out shows out in Norway, Oslo
This is the Re-Up better cop it while the cost low
Flow's sick, I'll slap a patient
I'm checking these bitches like an application
'Cause these bitches trippin' no navigation
So it's off with your head decapitation
S-s-send 'em up in flames like a fireman
I do the hiring and I do the firing
That boss shit that you talk, I live it
And I'm calling a travel
If you don't stay on your pivot, bitches
We are going up in flames
One more night for us to burn brighter
We are going up in flames
One last time for us to go higher
We are going up in flames
One more night for us to burn brighter
We are going up in flames
One last time for us to go higher
Going up in flames
Going up in flames


They'll never thank me for opening doors
But they ain't even thank Jesus when he died on the cross
'Cause your spirit is ungrateful
Bitches is so hateful, I remain a staple
My career's been the pinkprint
When I retire, tell 'em think pink
Pink Friday is the imprint
And these bitches basic, instinct
Oh shit, my commercial's on
Did I really body bitches with commercial songs?
Did I really prophecy every thing I do?
But before I continue let me thank my crew
So that was Young Wayne, Mack Maine, Baby and Slim came
Tezz and EI told me it wouldn't be in vain
'Cause prior to me signing I could've went insane
And even now I think, "Do I really want this fame?"
Let me get up and go, 700 to go overseas for a show
Everybody get quiet when I'm starting the show
Man, I'm birthing these artists and I'm starting to show
I feel free, I feel freedom
Why they mad? You should see them
Burn an L cause it's crazy in here
Crazy in here, crazy in here
I feel free, I feel freedom
Why they mad? You should see them
Burn an L cause it's crazy in here
Crazy in here, crazy in here
Who I wanna work with? Nobody! 99% of them is nobody
Bitches acting like they killing shit, OK
When I check these bitches guns, no bodies
These niggas is fake fucks and opportunists
Niggas spend they last dime to say the copped the soonest
Why these niggas going broke to get your approval?
Pretty soon, they'll be back up on them Ramen Noodles
B-B-B-bible, Queen is the title
And if you are my rival, then that means you're suicidal
And if you in the club then it's a Young Money recital
I'm just that vital, I'm busy, never idle
I'm ya idol, I'm ya idol, I'm ya mothafuckin' idol
Pink Friday in Macy's, thongs and some pasties
(Yo, what other female rapper perfume in here? 'Cause I must've missed it)
12 milli to kick my feet up, get ready this is the Re-up
I feel free, I feel freedom
Why they mad? You should see them
Burn an L cause it's crazy in here
Crazy in here, crazy in here
Mirror, mirror, won't you realize? I just have to decide
What you hiding from? What you hiding from?
Hiding baby
Would you, would you, give your
Would you, would you, give your
Would you, would you, give your all for yours
I feel free, I feel freedom
Why they mad? You should see them
Burn an L cause it's crazy in here
Crazy in here, crazy in here

Just met a boy, just met a boy when
He could come inside of my play pen
'Cause he look like a superstar in the makin'
So I think that I'm going in for the takin'
Hear through the grapevine that he cakin'
We could shoot a movie, he could the tapin'
Boom boom pow, this thing be shakin'
I ain't even tryin' to find out who he datin'
'Cause I know that he got a wife at home
But I need just one night alone
If you keep playin' them g-g-games
I'ma runaway (Ay), I'ma runaway (Ay, ay)
I-I-I wanna give you one last option
I-I-I wanna give you one last chance
If-if you're looking for the main attraction
Just hold on tight and let me do my dance
If you want it, I'm gonna be va va voom voom
If you got it, you got it, you got that boom boom
If you want it, I'm gonna be va va voom voom
If you got it, you got it, you got that boom boom
Just met a boy, just met a boy when
He could become my little problem
'Cause he look like he modellin' clothes in Dublin
So I think that he gettin' that green, a goblin
Heard through the grapevine that he hang low
We could shoot a movie, could bang like Rambo
Boom boom pow, this thing so bingo
Wondering if he can understand my lingo
'Cause I know, he got a wife at home
But I need just one night alone
If he keep playin' them g-g-games
I'ma runaway (Ay), I'ma runaway (Ay, ay)
I-I-I wanna give you one last option
I-I-I wanna give you one last chance
If-if you're looking for the main attraction
Just hold on tight and let me do my dance
If you want it, I'm gonna be va va voom voom
If you got it, you got it, you got that boom boom
If you want it, I'm gonna be va va voom voom
If you got it, you got it, you got that boom boom
Boy I'm in this club slow-mo, don't mind if I do
And I can tell you're feelin' me from the jump, I wanna ride too
You got that hot shit, boy ya blessed, let me feel up on yo' chest
Flex it, you da man, you da man, one hundred grand
The same old game blow, yes, I play it very well
Come baby, lay it down, let me stay down
Let me show you how I run tings in my playground
Come and get this va va voom voom (woo woo)
I-I-I wanna give you one last option
I-I-I wanna give you one last chance
If-if you're looking for the main attraction
Just hold on tight and let me do my dance
If you want it, I'm gonna be va va voom voom
If you got it, you got it, you got that boom boom
If you want it, I'm gonna be va va voom voom
If you got it, you got it, you got that boom boom


Docta docta, need you bad
Call me babe
Docta Docta, where you at?
Give me something
I need your love
I need your love
I need your loving
You got that kind of medicine that keeps me comin'
My body needs a hero
Come and save me
Something tells me you know how to save me
I've been feeling real low
Oh, I need you to come and rescue me
Make me come alive
Come on and turn me on
Touch me, save my life
Come on and turn me on
I'm too young to die
Come on and turn me on
Turn me on
Turn me on
Turn me on
Turn me on
Make me come alive
Come on and turn me on
Touche me, save my life
Come on and turn me on
I'm too young to die
Come on and turn me on
Turn me on
Turn me on
Turn me on
Turn me on
Boy, I'm achin', make it right
My temperature is super high
If I scream, if I cry
It's only 'cause I feel alive
My body needs a hero
Come and save me
Something tells me you know how to save me
I've been feeling real low
Oh, I need you to come and rescue me
Make me come alive
Come on and turn me on
Touch me, save my life
Come on and turn me on
I'm too young to die
Come on and turn me on
Turn me on
Turn me on
Turn me on
Turn me on
Make me come alive
Come on and turn me on
Touche me, save my life
Come on and turn me on
I'm too young to die
Come on and turn me on
Turn me on
Turn me on
Turn me on
Turn me on
You've got my life in the palm of your hands (palm of your hands)
Come and save me now
I know you can, I know you can
Don't let me die young, I just want you to fire at my young
I just want you to be my docta, we can get it crackin' chiropractor, I, I, I, I
I know you can save me
And make me feel alive
Make me come alive
Come on and turn me on
Touch me, save my life
Come on and turn me on
I'm too young to die
Come on and turn me on
Turn me on
Turn me on
Turn me on
Turn me on


This one is for the boys with the booming system
Top down, AC with the cooler system
When he come up in the club, he be blazin' up
Got stacks on deck like he savin' up
And he ill, he real, he might gotta deal
He pop bottles and he got the right kind of build
He cold, he dope, he might sell Coke
He always in the air, but he never fly coach
He a motherfuckin' trip, trip, sailor of the ship, ship
When he make it drip, drip kiss him on the lip, lip
That's the kind of dude I was lookin' for
And yes you'll get slapped if you're lookin' hoe
I said, excuse me you're a hell of a guy
I mean my, my, my, my you're like pelican fly
I mean, you're so shy and I'm loving your tie
You're like slicker than the guy with the thing on his eye, oh
Yes I did, yes I did, somebody please tell him who the eff I is
I am Nicki Minaj, I mack them dudes up,
Back coupes up, and chuck the deuce up
Boy you got my heartbeat runnin' away
Beating like a drum and it's coming your way
Can't you hear that
Boom, badoom, boom, boom, badoom, boom, bass?
He got that super bass
Boom, badoom, boom, boom, badoom, boom, bass
Yeah that's that super bass
Boom, badoom, boom, boom, badoom, boom, bass
He got that super bass
Boom, badoom, boom, boom, badoom, boom, bass
Yeah that's that super bass
This one is for the boys in the Polo's
Entrepreneur niggas and the moguls
He could ball with the crew, he could solo
But I think I like him better when he dolo
And I think I like him better with the fitted cap on
He ain't even gotta try to put the mack on
He just gotta give me that look, when he give me that look
Then the panties comin' off, off, uh
Excuse me, you're a hell of a guy you know
I really got a thing for American guys
I mean, sigh, sickenin' eyes
I can tell that you're in touch with your feminine side
Yes I did, yes I did,
Somebody please tell him who the eff I is
I am Nicki Minaj, I mack them dudes up,
Back coupes up, and chuck the deuce up
Boy you got my heartbeat runnin' away
Beating like a drum and it's coming your way
Can't you hear that
Boom, badoom, boom, boom, badoom, boom, bass?
He got that super bass
Boom, badoom, boom, boom, badoom, boom, bass
Yeah that's that super bass
Boom, badoom, boom, boom, badoom, boom, bass
He got that super bass
Boom, badoom, boom, boom, badoom, boom, bass
Yeah that's that super bass
See I need you in my life for me to stay
No, no, no, no, no I know you'll stay
No, no, no, no, no don't go away
Boy you got my heartbeat runnin' away
Don't you hear that heartbeat comin' your way
Oh it be like
Boom, badoom, boom, boom, badoom, boom, bass
Can't you hear that boom
Boom, badoom, boom, boom, badoom, boom, bass?
Boy you got my heartbeat runnin' away
Beating like a drum and it's coming your way
Can't you hear that
Boom, badoom, boom, boom, badoom, boom, bass?
He got that super bass
Boom, badoom, boom, boom, badoom, boom, bass
Yeah that's that super bass
Boom, badoom, boom, boom, badoom, boom, bass
He got that super bass
Boom, badoom, boom, boom, badoom, boom, bass
Yeah that's that super bass


Uh, let's go to the beach-each
Let's go get a wave
They say what they gonna say
Have a drink, clink, found the Bud Light
Bad bitches like me is hard to come by
The Patrón-ón? Let's go get it on
The zone-one? Yes, I'm in the zone
Is it two, three? Leave a good tip
I'ma blow all of my money and don't give two shits, uh
I'm on the floor, floor
I love to dance
So give me more, more, 'til I can't stand
Get on the floor, floor
Like it's your last chance
If you want more, more
Then here I am
Starships were meant to fly
Hands up and touch the sky
Can't stop 'cause we're so high
Let's do this one more time, oh
Starships were meant to fly
Hands up and touch the sky
Let's do this one last time
Can't stop (we're higher than a motherfucker)
Jump in my hoopty, hoopty, hoop, I own that
And I ain't paying my rent this month, I owe that
But fuck who you want and fuck who you like
Dancehall life, there's no end in sight
Twinkle, twinkle, little star
Now everybody, let me hear you say ray, ray, ray
Go spend all your money 'cause today payday
And if you're a G, you a G, G, G
My name is Onika, you can call me Nicki (woo)
Get on the floor, floor
Like it's your last chance
If you want more, more
Then here I am
Starships were meant to fly
Hands up and touch the sky
Can't stop 'cause we're so high
Let's do this one more time
Starships were meant to fly
Hands up and touch the sky
Let's do this one last time
Can't stop (we're higher than a motherfucker)
Starships were meant to fly
Hands up and touch the sky
Can't stop 'cause we're so high
Let's do this one more time
Starships were meant to fly
Hands up and touch the sky
Let's do this one last time
Can't stop (we're higher than a motherfucker)

My anaconda don't
My anaconda don't
My anaconda don't want none
Unless you got buns, hun
Boy toy named Troy, used to live in Detroit
Big dope dealer money, he was gettin' some coins
Was in shootouts with the law, but he live in a palace
Bought me Alexander McQueen, he was keeping me stylish
Now that's real, real, real
Gun in my purse, bitch, I came dressed to kill
Who wanna go first? I had them pushin' daffodils
I'm high as hell, I only took a half a pill
I'm on some dumb shit
By the way, what he say?
He can tell I ain't missing no meals
Come through and fuck him in my automobile
Let him eat it with his grills he keep tellin' me to chill
He keep telling me it's real, that he love my sex appeal
He say he don't like em boney, he want something he can grab
So I pulled up in the Jag and I hit him with the jab like
Dun-d-d-dun-dun-d-d-dun-dun
My anaconda don't
My anaconda don't
My anaconda don't want none
Unless you got buns, hun
Oh my gosh, look at her butt
Oh my gosh, look at her butt
Oh my gosh, look at her butt (Look at her butt)
Look at, look at, look at, look, at her butt
This dude named Michael used to ride motorcycles
Dick bigger than a tower, I ain't talking about Eiffel's
Real country-ass nigga, let me play with his rifle
Pussy put his ass to sleep, now he calling me NyQuil
Now that bang, bang, bang
I let him hit it 'cause he slang cocaine
He toss my salad like his name Romaine
And when we done, I make him buy me Balmain
I'm on some dumb shit
By the way, what he say?
He can tell I ain't missing no meals
Come through and fuck him in my automobile
Let him eat it with his grills and he telling me to chill
He keep telling me it's real, that he love my sex appeal
He say he don't like em boney, he want something he can grab
So I pulled up in the Jag mayweather with the jab like
Dun-d-d-dun-dun-d-d-dun-dun
My anaconda don't
My anaconda don't
My anaconda don't want none
Unless you got buns, hun
Oh my gosh, look at her butt
Oh my gosh, look at her butt
Oh my gosh, look at her butt (Look at her butt)
Look at, look at, look at, look, at her butt
Little in the middle but she got much back
Little in the middle but she got much back
Little in the middle but she got much back
Oh my god, look at her butt
My anaconda don't
My anaconda don't
My anaconda don't want none
Unless you got buns, hun
Don't, my anaconda don't
Don't want none
Unless you got buns, hun
Oh my gosh, look at her butt
Oh my gosh, look at her butt
Oh my gosh, look at her butt (Look at her butt)
Look at, look at, look at, look, at her butt
Yeah, he love this fat ass aha!
Yeah! This one is for my
Bitches with a fat ass in the fucking club
I said, where my fat ass big bitches in the club?
Fuck those skinny bitches!
Fuck those skinny bitches in the club!
I wanna see all the big fat ass
Bitches in the muthafuckin' club
Fuck you if you skinny bitches, what? Kyuh
Aha! Kyuh
I got a big fat ass (Ass, ass, ass) Kyuh
Come on!
Hey, hey, hey!

She got a body like an hourglass
But I can give it to you all the time
She got a booty like a Cadillac
But I can send you into overdrive (Oh)
(You've been waiting for that)
(Stop, hold up, swing your bat)
See anybody could be bad to you
You need a good girl to blow your mind, yeah
Bang bang into the room (I know you want it)
Bang bang all over you (I'll let you have it)
Wait a minute, let me take you there (Ah)
Wait a minute 'til ya (Ah, hey!)
Bang bang there goes your heart (I know you want it)
Back, back seat of my car (I'll let you have it)
Wait a minute, let me take you there (Ah)
Wait a minute 'til ya (Ah, hey!)
She might'a let you hold her hand in school
But I'ma show you how to graduate
No, I don't need to hear you talk the talk
Just come and show me what your momma gave ya (Oh, yeah)
I heard you've got a very big (Shh)
Mouth but don't say a thing
See anybody could be good to you
You need a bad girl to blow your mind
Bang bang into the room (I know you want it)
Bang bang all over you (I'll let you have it)
Wait a minute, let me take you there (Ah)
Wait a minute 'til ya (Ah, hey!)
Bang bang there goes your heart (I know you want it)
Back, back seat of my car (I'll let you have it)
Wait a minute, let me take you there (Ah)
Wait a minute 'til ya (Ah, yeah) (You know what, girls?)
(Let me show you how to do it)
It's Myx Moscato
It's frizz in a bottle
It's Nicki full throttle
It's oh, oh
Swimming in the grotto
We winning in the lotto
We dipping in the pot of blue foam, so
Kitten so good
It's dripping on wood
Get a ride in the engine that could go
Batman robbin' it
Bang, bang, cockin' it
Queen Nicki dominant, prominent
It's me, Jessie, and Ari
If they test me they sorry
Ride his uh, like a Harley
Then pull off in his Ferrari
If he hangin' we bangin'
Phone rangin', he slangin'
It ain't karaoke night but get the mic 'cause I'm singin' (Uh)
B to the A, to the N, to the G, to the uh (Baby)
B to the A, to the N, to the G, to the, hey
See anybody could be good to you
You need a bad girl to blow your mind (Your mind)
Bang, bang into the room (I know you want it)
Bang bang all over you (I'll let you have it)
Wait a minute let me take you there (Ah)
Wait a minute 'til ya (Ah, hey!)
Bang bang there goes your heart (I know you want it)
Back, back seat of my car (I'll let you have it)
Wait a minute let me take you there (Ah)
Wait a minute 'til ya (Ah, hey!)
Bang, bang into the room (I know you want it)
Bang bang all over you (I'll let you have it)
Yo, I said
Bang, bang
Bang, bang, ba-bang, bang
Bang, bang, bang
Bang, bang, ba-bang, bang
Bang bang there goes your heart (I know you want it)
Back, back seat of my car (I'll let you have it)
Wait a minute let me take you there (Ah)
Wait a minute 'til ya (Ah, hey!)


Oh, oh, oh, come fill my glass up a little more
We 'bout to get up and burn this floor
You know we getting hotter and hotter
Sexy and hotter, let's shut it down (uh)
Yo, what I gotta do to show these girls that I own 'em?
Some call me Nicki, and some call me Roman
Skeeza, pleeza, I'm in Ibiza, whoa
Giuseppe Zanotti, my own sneaker
Sexy, sexy, that's all I do
If you need a bad bitch
Let me call a few
Pumps on and them little mini skirts is out
I see some good girls, I'mma turn 'em out
Okay, bottle, sip, bottle, guzzle
I'm a bad bitch, no muzzle, hey?
Bottle, sip, bottle, guzzle
I'm a bad bitch, no muzzle, let's go
Music makes me high
Oh, oh, oh, come fill my glass up a little more
We 'bout to get up and burn this floor
You know we getting hotter and hotter
Sexy and hotter, let's shut it down
Pound the alarm
Pound the alarm
I wanna do it for the night, night
So get me now and knock this over
I wanna do it like you like, like
Come get me, baby, we're not getting younger
I just want you tonight, night
Baby, we won't do it for life, life, whoa
Music makes me high
Oh, oh, oh, come fill my glass up a little more
We 'bout to get up and burn this floor
You know we getting hotter and hotter
Sexy and hotter, let's shut it down
Pound the alarm
Pound the alarm
Alarm, alarm, alarm, alarm
Oh, oh, oh, come fill my glass up a little more
We 'bout to get up and burn this floor
You know we getting hotter and hotter
Sexy and hotter, let's shut it down
Pound the alarm
Pound the alarm
Pound the alarm


Pills and potions
We're overdosin'
I'm angry but I still love you
Pills and potions
We're overdosin'
Can't stand it but I still love you
I still love, I still love, I still love, I still love, I still lo-o-ove
I still love, I still love, I still love, I still love, I still love
I still love, I still love, I still love, I still love, I still lo-o-ove
I still love, I still love, I still love, I still love, I still love
Ayo, they could never make me hate you
Even though what you was doin' wasn't tasteful
Even though you out here lookin' so ungrateful
I'ma keep it movin' be classy and graceful
I told 'em it's no friends in the game, you ain't learned that yet
All the bridges you came over, don't burn that yet
Niggas want respect, but niggas ain't earned that yet
Self-righteous and entitled but they swearin' on the Bible that they love you
When really they no different from all your rivals
But I still don't wish death on 'em
I just reflect on 'em
Pills and potions
We're overdosin'
I'm angry but I still love you
Pills and potions
We're overdosin'
Can't stand it but I still love you
I still love, I still love, I still love, I still love, I still lo-o-ove
I still love, I still love, I still love, I still love, I still love
I still love, I still love, I still love, I still love, I still lo-o-ove
I still love, I still love, I still love, I still love, I still love
Yo, people'll love you and support you when it's beneficial
I'ma forgive, I won't forget, but I'ma dead the issue
Soon as you out a niggas' lives is when they start to miss you
They see you doin' good, now it's kinda hard to diss you
Niggas be sick when they remember all the bad they wished you
Niggas be mad when they can't come and live lavish with you
But I sped off in the Benzy
I see the envy when I'm causin' a frenzy
So I pop pills for 'em
Cop cribs in the hills on 'em
Pills and potions
We're overdosin'
I'm angry but I still love you
Pills and potions
We're overdosin'
Can't stand it but I still love you
I still love, I still love, I still love, I still love, I still lo-o-ove
I still love, I still love, I still love, I still love, I still love
I still love, I still love, I still love, I still love, I still lo-o-ove
I still love, I still love, I still love, I still love, I still love
I get high off your memory
I get high off your memory
I get high off your memory
In due time we'll be fine
In due time
I still love, I still love, I still love, I still love, I still lo-o-ove
I still love, I still love, I still love, I still love, I still love
I still love, I still love, I still love, I still love, I still lo-o-ove
I still love, I still love, I still love, I still love, I still love

Take your medication, Roman
Take a short vacation, Roman
You'll be okay
You need to know your station, Roman
Some alterations on your clothes and your brain
Take a little break, little break from your silencing
There's so much you can take, you can take
I know how bad you need a Roman holiday
Roman holiday, a Roman holiday
You done, you tight? You suck at life?
You don't want a round three? You done suffered twice
Wo-wo-worship the queen and you might could pass
Keep it real, these bitches couldn't wipe my ass
Anyway, stylist, go get Bvlgari
I am the ultimate Svengali
You, you bitches can't even spell that
You, you hoes buggin', repel that
Let me tell you this, sister
I am, I am colder than a blister
'Cause my flow's so sick, and I'm a lunatic
And this can't be cured with no Elixir
'Cause y'all know who the fuck, what the fuck I do
I done put the pressure to every thug I knew
Quack, quack to a duck and a chicken too
Put the hyena in a freakin' zoo, phew!
Take your medication, Roman
Take a short vacation, Roman
You'll be okay
You need to know your station, Roman
Some alterations on your clothes and your brain
Take a little break, little break from your silencing
There's so much you can take, you can take
I know how bad you need a Roman holiday
Roman holiday, a Roman holiday
Witch, twitch, bitch
Motherfucking right, this is World War 6
This right here might make a bitch die
And this right here is gonna make a bitch cry
And if we being honest, I am such a great guy
But this what I do when a bitch breaks flock
I'ma put her in a dungeon under, under
No, them bitches ain't eating, they dying of hunger
Motherfucker, I'm me, who the fuck is this hoe?
And yes, maybe just a touch of tourettes
Get my wigs, Terrence, go and get my beret, yo!
Take your medication, Roman
Take a short vacation, Roman
You'll be okay
You need to know your station, Roman
Some alterations on your clothes and your brain
Take a little break, little break from your silencing
There's so much you can take, you can take
I know how bad you need a Roman holiday
Roman holiday, a Roman holiday
Come all ye faithful
Joyful and triumphant
I am Roman Zolanski
Come all ye faithful
Joyful and triumphant
I am Roman Zolanski
Come all ye faithful
Joyful and triumphant
I am Roman Zolanski
Talking 'bout me, you talking about me?
I dare a motherfucker to be talking about me
Them bitches must be smokin' a couple of OZ's
They want the outline, I give them a goatee
Goddamn, motherfucker, you talking about me?
I dare a motherfucker to be talking about me
Them bitches must be smokin' a couple of OZ's
A-buh-buh-buh, now give them a goatee, oh!
Take your medication, Roman
Take a short vacation, Roman
You'll be okay
You need to know your station, Roman
Some alterations on your clothes and your brain
Take a little break, little break from your silencing
There's so much you can take, you can take
I know how bad you need a Roman holiday
Roman holiday, a Roman holiday

Ayo, as the world turns, the blunt burns
(Who you gettin' at, Nicki?)
Watch them cunts learn
Fashion icon, Audrey Hepburn
I move keys, but you hoes get one turn
Yeah, you get one turn, and one urn
I straighten all these bitches out with one perm
Who ever gassed 'em ain't none of my concern
But, see, the Lord showed me dreams to confirm
They done went to witch doctors to bury the Barbie
But I double back, kill bitches, bury the body
And that go for anybody, you'll be thoroughly sorry
I could wage war or I come in peace like Gandhi
All my powers back now I'm scary to zombies
Bring the heat to her, sizzle 'em, ain't talking Kalonji
I done fasted and prayed, had to cleanse my body
Abstaining from sex, had to zen my body
I ain't giving, so don't ask, I don't lend my body
Gotta be king status to give a man my body
(He gotta be king status to get in ya body?)
Fuck, yeah, 'cause a queen is what I embody, uh
Ganja burn, ganja burn, ganja burn
Ganja burn, ganja burn, ganja burn
Everytime I get high, I just think about you
Everytime I get high, I just think about you
Everytime I get high, I just think about you
Everytime I get high, I just think about you
Ganja burn, ganja burn, ganja burn
Ganja burn, ganja burn, ganja burn
Yo, you can't wear Nicki wig and then be Nicki
That's like a fat nigga thinkin' he can be Biggie
One rough ride, now you DMX and Swissy
One hot video, you hyped? Now you just giddy
You made one dope beat, now you Kanye?
You got a nigga named Jay, now you 'Yoncé?
You got about three stacks, now you André?
You put a part in your fade, oh, you Nas, bae?
You gotta have real skill, gotta work for that
If it's really your passion would you give the world for that?
Unlike a lot of these hoes whether wack or lit
At least I can say I wrote every rap I spit
Put my blood, sweat and tears in perfecting my craft
Still every team's number one pick in the draft
You could bring anybody, weatherman, pick a day
I'm Kobe, KD, Kyrie! Pick a K
Ganja burn, ganja burn, ganja burn (Mmm)
Ganja burn, ganja burn, ganja burn
Everytime I get high, I just think about you
Everytime I get high, I just think about you
Everytime I get high, I just think about you
Everytime I get high, I just think about you
Ganja burn, ganja burn, ganja burn
Ganja burn, ganja burn, ganja burn
See ya, see you
See ya, see you
To my surprise I saw you in my eyes
The nights I cried, repented of the lies
To my, to my, na na na na na na, na
Na na na na na na, na
Na na na na na na, na
Hold on baby


Uh
R.I.P. to B.I.G
Classic shit
I'm looking for a nigga to give some babies
A hand full of Weezy's, a sprinkle of Dave East
Man, I ain't got no type, like Jxmmi and Swae Lee
But if he can't fuck three times a night, peace
I tried to fuck 50 for a powerful hour
All the nigga wanna do is talk power for hours
Beat the pussy up make sure it's a K-O
Step your banks up like you movin' that yayo
Somebody go and make sure Karrueche okay though
I heard she think I'm tryna give the coochie to Quavo
They always wanna beat it up, goon up the pussy
Man, maybe I should let him autotune up the pussy
All these Bow Wow challenge niggas lying and shit
Man, these Fetty Wap niggas stay eyeing my shit
Drake worth a hundred milli, always buying me shit
But I don't know if the pussy wet or if he crying and shit
Meek still be in my DMs, I be having to duck him
"I used to pray for times like this"
Face ass when I fuck him
Man, Uzi is my baby, he ain't takin' an L
But he took it literally when I said "go to hell"
Used to fuck with Young Thug, I ain't addressing this shit
Caught him in my dressing room stealing dresses and shit
I used to give this nigga with a lisp tests and shit
How you want the pussy?
Can't say your s's and shit
Dreams of fucking one of these little rappers
I'm just playing, but I'm saying
Dreams of fucking one of these little rappers
I'm just playing, but I'm saying
Dreams of fucking one of these little rappers
I'm just playing, but I'm saying
Dreams of fucking one of these little rappers
I'm just playing, but I'm saying
I remember when I used to have a crush on Special Ed
Shoutout Desiigner, 'cause he made it out of special ed
You wanna fuck me, you gotta give some special head
'Cause this pussy had these niggas on some special meds
Like Mike Tyson, he was biting my shit
Talking 'bout "yo, why you got these niggas fighting and shit"
On the real, I should make these niggas scrap for the pussy
Young M.A., Lady Luck, get the strap for this pussy, uh
And I would've had Odell Beckham banging the cake
'Til I saw him hopping out of cars dancing to Drake
I been a five-star bitch, man, word to Gotti
I'ma do that nigga Future dirty, word to Scotty
Had to cancel DJ Khaled, boy, we ain't speaking
Ain't no fat nigga telling me what he ain't eating
YG and The Game with the hammer yelling "gang, gang"
This isn't what I meant when I said a gang bang
Tekashi wanna menage, I said Tre-Way
Curved him and went the Kim and Kanye way
Em copped the Barbie Dreamhouse and you can play the part
I ain't tryna bust it open in the trailer park
Dreams of fucking one of these little rappers
I'm just playing, but I'm saying
Dreams of fucking one of these little rappers
I'm just playing, but I'm saying
Dreams of fucking one of these little rappers
I'm just playing, but I'm saying
Dreams of fucking one of these little rappers
I'm just playing, but I'm saying
Barbie dreams
Barbie dreams
I'm just playing, but I'm saying
Barbie dreams
You know I'm all about them dollars
I be supporting them scholars
I let him give me some brain
But he wanted me to ride it
So I said, "fuck it, I'm in"
He want a cut like a trim
And if he act like he know, I let him fuck it again
I got them bars, I'm indicted
I'm popping, I'm uninvited
I said just lick on the clitoris nigga, don't fucking bite it
I ride his, in a circle
I turn Stefan into Urkel
I go around and around and I'ma go down in slow motion
Then I pick it up, look at it
I said, "daddy, come get at it, " uh
Yellow brick road, he said I am a wiz at it
Yeah, they want it, want it
You know I flaunt it, flaunt it
I'm a trendsetter
Everything I do, they do
Yeah, put up 'em on it, on it
Dimelo papi, papi
Yo quiero sloppy, sloppy
I'll give it to you if you beat it up like Pacqui, Pacqui
I'ma kill 'em with them shoe
No ceiling is in the roof
And I'm BIG, give me the loot, twelve cylinders in the Coupe
I get dome with the chrome, now tell 'em when I'ma shoot
I just bang, bang, bang, real killers is in my group
Gorillas is in my unit, vacationin' where it's humid
And I shine, shine, shine
I got diamonds all in my Cubans
I'm in LA Times more then when niggas lootin'
And my flow spit crack, I think that niggas usin'
He done bodied everybody, in closing these bitches losin'
Using, using, up a bitch moving
No I ain't Studdard, no no, I ain't Ruben
Damn, a bitch snoozin'
Shoutout to my Jews, l'chaim Rick Rubin
Big fat titties yes, they be protruding
I be like, fuck 'em, fuck 'em, bring the lube in
I be like fuck 'em, fuck 'em, bring the lube in


South Africa is where I come from
Get me my banjo, get me my drum
Kidnap career & don't take ransom
Don't let me come out of my dungeon
You want me to leave then take it down
You see me come out of England at dawn
You say the pattern come from Kingston
Trinidad Trinidad, my island
I see you in here dancing
Your preview is quite romantic
I envy your perfect kind of life
Who knew you'd be so sexy?
I think you're quite fantastic
Screw your flaws
You're perfect in my eyes
And maybe I'm naive for loving you
You're a cheat and a liar
But tonight you're everything I desire
You beautiful sinner
I love your wicked heart
Beautiful sinner
It's such a work of art
I didn't know that bad could look so good
You are the type of bad that feels so good
Beautiful sinner
I bet you're heart of stone
Living in your world alone
I hope you let me in tonight
They want me to beware
You're dangerous, I don't care
I can't wait to have you in my arms
And maybe I'm naive for loving you
You're a cheat and a liar
But tonight you're everything I desire
You beautiful sinner
I love your wicked heart
Beautiful sinner
It's such a work of art
I didn't know that bad could look so good
You are the type of bad that feels so good
You're a beautiful sinner
Maybe your the master of disguise
And you are put it on and
Your really the saint that could walk
Are you here to save me from the crowd?
If you are then baby take me now
You beautiful sinner
I love your wicked heart
Beautiful sinner
It's such a work of art
I didn't know that bad could look so good
You are the type of bad that feels so good
You're a beautiful sinner

Ay yo
Look like I'm goin' for a swim
Dunked on 'em, now I'm swingin' off the rim
Bitch ain't comin' off the bench
While I'm comin' off the court full drenched
Here go some haterade, get your thirst quenched
Style'd on 'em in this Burberry trench
This birds copy every word, every inch
But gang gang got the hammer and the wrench
I pull up in that quarter milli off the lot
Oh now she tryna be friends like I forgot
Show off my diamonds like I'm signed by the Roc
Ain't pushin' out his babies 'til he bite a rock
Ay yo I been on, bitch you been con
Bentley tints on, Fendi prints on
I mean I been Storm, X-Men been formed
He keep on dialing Nicki, like the Prince song
I been on, bitch you been con
Bentley tints on, Fendi prints on
Ay yo I been North, Laura been Croft
Plates say 'Chung-Li' drop the Benz off
Oh I get it
They paintin' me out to be the bad guy
Well it's the last time you're gonna see a bad guy do the rap game like me
I went and copped the chopsticks
Put it in my bun just to pop shit
I'm always in the top shit
Box seats bitch, fuck the gossip
How many of them could've did it with finesse?
Now everybody like, "she really is the best"
You play checkers, couldn't beat me playin' chess
Now I'm about to turn around and beat my chest
Bitch it's King Kong, yes it's King Kong
Bitch it's King Kong, this is King Kong
Chinese ink on, Siamese links on
Call me 2 Chainz, name go ding dong
Bitch it's King Kong, yes I'm King Kong
This is King Kong? Yes, Miss King Kong
In my kingdom, with my Timbs on
(How many championships?) What? Six rings on
They need rappers like me
They need rappers like me
So they can get on their fuckin' keyboards and make me, the bad guy
Chun-Li
Ay yo I been on, bitch you been con
Bentley tints on, Fendi prints on
I mean I been Storm, X-Men been formed
He keep on dialing Nicki, like the Prince song
I been on, bitch you been con
Bentley tints on, Fendi prints on
Ay yo I been North, Laura been Croft
Plates say 'Chung-Li' drop the Benz off
I come alive, I, I'm always sky high
Designer thigh highs
It's my lifestyle
I come alive, I, I'm always sky high
Designer thigh highs
It's my lifestyle
I need a Mai Tai, so fuckin' sci-fi
Give me the password, to the fuckin' WiFi

Brra, ta, ta, tat
Brra, ta, ta, tat
They call me Megatron
Just did a telethon
He got Margiela's on, and I get my jealous on
I fuck him like I miss him
He-he just came out of prison
Bitches-bitches be talkin' shit, but they ain't got a pot to piss in
My-my name is Nicki M
I'm in a sticky Benz
That-that mean it's candy apple red, I'm Barbie, this is Ken
That is a Fendi fact
I'm with a hundred Macs
Oh, this is custom made, Donatella sent me that
Feel up, baby, feel on me
Pull up if you're feeling lonely
Feel up, baby, feel on me
Pull up if you're feeling lonely
Brra, ta, ta, tat
Shots, shots, shots, I'm drinkin'
It's better when I'm drinkin'
I tune up when I'm drinkin'
Rum, rum when I'm
Brra, ta, ta, tat
Shots, shots, shots, I'm drinkin'
It's better when I'm drinkin'
I tune up when I'm drinkin'
Rum, rum when I'm
Brra, ta, ta, tat
Brra, ta, ta, tat
Brra, ta, ta, tat
They call me (Megatron)
Shorty's a mega con
It ain't about the race either, it's a marathon
I put the squeeze on him
Throw up the B's on him
That ass clappin' on the D, Hercules on him (brrt)
My name is Baddie, Baddie
I keep it tight for zaddy
He keep it comin', comin', he ain't he even drop the addy
Trunk in the front-front
I need a blunt-blunt
I own my own Moscato, bitch, we gettin drunk-drunk
Feel up, baby, feel on me
Pull up if you're feeling lonely
Feel up, baby, feel on me
Pull up if you're feeling lonely
Brra, ta, ta, tat
Shots, shots, shots, I'm drinkin'
It's better when I'm drinkin'
I tune up when I'm drinkin'
Rum, rum when I'm
Brra, ta, ta, tat
Shots, shots, shots, I'm drinkin'
It's better when I'm drinkin'
I tune up when I'm drinkin'
Rum, rum when I'm
Brra, ta, ta, tat
Brra, ta, ta, tat
Brra, ta, ta, tat
Bite me, bite me
That excite me
He said it's my pussy (yup, it might be)
If you eatin' it
Do it precisely
'Cause I'm a millionaire, this pussy pricey
(Yup, it might be, yup, it might be)
He said it's my pussy (yup, it might be)
My-my pussy, my-my pussy (yup, it might be)
'Cause I'm a millionaire, this pussy pricey (pussy pricey)
Feel up, baby, feel on me
Pull up if you're feeling lonely
Feel up, baby, feel on me
Pull up if you're feeling lonely
Brra, ta, ta, tat
Shots, shots, shots, I'm drinkin'
It's better when I'm drinkin'
I tune up when I'm drinkin'
Rum, rum when I'm
Brra, ta, ta, tat
Shots, shots, shots, I'm
Brra, ta, ta, tat
Shots, shots, shots, I'm
Brra, ta, ta, tat
Shots, shots, shots, I'm drinkin'
Rum, rum when I'm (when I'm)

`
const lyrics_arr = lyrics.split("\n")

export default App;
