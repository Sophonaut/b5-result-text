module.exports = {
  domain: 'E',
  title: 'Extraversion',
  shortDescription: 'Extraversion "concerns differences in preference for social interaction and energetic activity.',
  description: `People scoring high in extroversion prefer being with people, are full of energy, and
often experience positive emotions. They tend to be enthusiastic,
action-oriented individuals who are likely to pursue opportunities for excitement. In groups they like to talk,
assert themselves, and draw attention to themselves.
<br /><br />
People scoring low in extraversion tend to be quiet, low-key, deliberate, and
disengaged from the social world. Their lack of social involvement
should not be interpreted as shyness or depression; the
introvert simply needs less stimulation than an extravert and prefers
to be alone. 
<br /><br />
The independence and reserve of the introvert is sometimes mistaken 
as unfriendliness or arrogance. In reality, an
introvert who scores high on the agreeableness dimension will not
seek others out but will be quite pleasant when approached.

<br /><br />

The first three facets (warmth gregariousness, and assertiveness) tend to present
themselves as interpersonal facets, while the final three facets (activity, excitement seeking, and positive emotions)
are more associated with temperament.
<br /><br />
"All of these dispositions are synergistic, working together to form a personality syndrome. 
Activity leads to excitement and excitement to happiness; the happy person finds others easier 
to get along with, and congeniality easily turn to leadership (book pg 49)"`,
  results: [
    {
      score: 'low', // do not translate this line
      text: `You scored [X%] in Extraversion which is low. Specifically, out of 100 people you are
      less extraverted than [1-X%], indicating you tend to be more reserved, quiet, passive, and introverted
       than [1-X%] of people. You tend to prefer solitude and solitary activities, and when you are social you 
       tend to share that time with a few close friends.
<br /><br />
Superpower:  
Blindspot:  `
    },
    {
      score: 'neutral', // do not translate this line
      text: `Your score on Extraversion is average, indicating you are
neither a subdued loner nor a jovial chatterbox. You enjoy time with
others but also time alone.
<br /><br />
Superpower:  
Blindspot:  `
    },
    {
      score: 'high', // do not translate this line
      text: `You scored [X%] in Extraversion which is high. Specifically, out of 100 people you are
      more extraverted than [1-X%], indicating you tend to be more affectionate, talkative, active, 
      fun-loving, and passionate than [1-X%] of people. You prefer to be around people as opposed to 
      having solitude.
<br /><br />
Superpower:  
Blindspot:  `
    }
  ],
  facets: [
    {
      facet: 1,
      title: 'Warmth',
      text: `Warmth is also known as "attachment," and refers to 
      a style of interacting that is friendly and intimate. 
      Warm people genuinely like others and openly demonstrate positive feelings toward them. 
      They tend to make friends quickly and it is easy for them to form close, intimate
relationships. 
<br /><br />
Low scorers in Warmth are not necessarily cold
and hostile, but they do not reach out to others and are perceived
as distant and reserved. They are more likely to have weaker attachments to others 
and be more formal and impersonal`
    },
    {
      facet: 2,
      title: 'Gregariousness',
      text: `Gregarious people find the company of
others pleasantly stimulating and rewarding. They enjoy the
excitement of crowds. Low scorers tend to feel overwhelmed by, and
therefore actively avoid, large crowds. They do not necessarily
dislike being with people sometimes, but their need for privacy and
time to themselves is much greater than for individuals who score
high on this scale.`
    },
    {
      facet: 3,
      title: 'Assertiveness',
      text: `High scorers Assertiveness like to speak
 out, take charge, and direct the activities of others. They tend to
 be natural leaders, making up their own minds, and readily expressing their 
 feelings and desires. Low scorers tend not to talk much and let
 others control the activities of groups.`
    },
    {
      facet: 4,
      title: 'Activity',
      text: `Active individuals lead fast-paced, busy
 lives. They move about quickly, energetically, and vigorously, and
 they are involved in many activities. People who score low on this
 scale follow a slower and more leisurely, relaxed pace.`
    },
    {
      facet: 5,
      title: 'Excitement-Seeking',
      text: `High scorers on this scale are easily
bored without high levels of stimulation. They love bright lights
and hustle and bustle. They are likely to take risks and seek
thrills. Low scorers are more easily overwhelmed by noise and commotion and are
adverse to thrill-seeking.`
    },
    {
      facet: 6,
      title: 'Positive Emotions',
      text: `This scale measures positive mood and
feelings, not negative emotions (which are a part of the
Neuroticism trait). People who score high on this scale typically
experience a range of positive feelings, including happiness,
enthusiasm, optimism, and joy. Low scorers are not as prone to such
energetic, high spirits.`
    }
  ]
}
