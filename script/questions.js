const questions = [
  {
    question: "Why can't I sleep at night?",
    pick: 1
  },
  {
    question: "I got 99 problems but _ ain't one.",
    pick: 1
  },
  {
    question: "What's a girl's best friend?",
    pick: 1
  },
  {
    question: "What's that smell?",
    pick: 1
  },
  {
    question:
      'This is the way the world ends / This is the way the world ends / Not with a bang but with _.',
    pick: 1
  },
  {
    question: "What is Batman's guilty pleasure?",
    pick: 1
  },
  {
    question: 'TSA guidelines now prohibit _ on airplanes.',
    pick: 1
  },
  {
    question: 'What ended my last relationship?',
    pick: 1
  },
  {
    question:
      "MTV's new reality show features eight washed-up celebrities living with _.",
    pick: 1
  },
  {
    question: 'I drink to forget _.',
    pick: 1
  },
  {
    question:
      "I'm sorry, Professor, but I couldn't complete my homework because of _.",
    pick: 1
  },
  {
    question: 'Alternative medicine is now embracing the curative powers of _.',
    pick: 1
  },
  {
    question: "What's that sound?",
    pick: 1
  },
  {
    question: "What's the next Happy Meal&reg; toy?",
    pick: 1
  },
  {
    question:
      "It's a pity that kids these days are all getting involved with _.",
    pick: 1
  },
  {
    question:
      'In the new Disney Channel Original Movie, Hannah Montana struggles with _ for the first time.',
    pick: 1
  },
  {
    question: "_. That's how I want to die.",
    pick: 1
  },
  {
    question: 'What does Dick Cheney prefer?',
    pick: 1
  },
  {
    question: "What's the most emo?",
    pick: 1
  },
  {
    question: 'Instead of coal, Santa now gives the bad children _.',
    pick: 1
  },
  {
    question: 'Next from J.K. Rowling: Harry Potter and the Chamber of _.',
    pick: 1
  },
  {
    question: 'A romantic, candlelit dinner would be incomplete without _.',
    pick: 1
  },
  {
    question: 'White people like _.',
    pick: 1
  },
  {
    question: "_. Betcha can't have just one!",
    pick: 1
  },
  {
    question: 'War!<br><br>What is it good for?',
    pick: 1
  },
  {
    question: 'BILLY MAYS HERE FOR _.',
    pick: 1
  },
  {
    question: '_. High five, bro.',
    pick: 1
  },
  {
    question: 'During sex, I like to think about _.',
    pick: 1
  },
  {
    question: 'What did I bring back from Mexico?',
    pick: 1
  },
  {
    question: 'What are my parents hiding from me?',
    pick: 1
  },
  {
    question: 'What will always get you laid?',
    pick: 1
  },
  {
    question: 'What would grandma find disturbing, yet oddly charming?',
    pick: 1
  },
  {
    question: 'What did the U.S. airdrop to the children of Afghanistan?',
    pick: 1
  },
  {
    question: 'What helps Obama unwind?',
    pick: 1
  },
  {
    question: "What's there a ton of in heaven?",
    pick: 1
  },
  {
    question:
      'Major League Baseball has banned _ for giving players an unfair advantage.',
    pick: 1
  },
  {
    question:
      'When I am a billionaire, I shall erect a 50-foot statue to commemorate _.',
    pick: 1
  },
  {
    question: "What's the new fad diet?",
    pick: 1
  },
  {
    question:
      'When I am the President of the United States, I will create the Department of _.',
    pick: 1
  },
  {
    question: "_. It's a trap!",
    pick: 1
  },
  {
    question: 'How am I maintaining my relationship status?',
    pick: 1
  },
  {
    question:
      'What will I bring back in time to convince people that I am a powerful wizard?',
    pick: 1
  },
  {
    question:
      'While the United States raced the Soviet Union to the moon, the Mexican government funneled millions of pesos into research on _.',
    pick: 1
  },
  {
    question: 'Coming to Broadway this season, _: The Musical.',
    pick: 1
  },
  {
    question: "What's my secret power?",
    pick: 1
  },
  {
    question: 'What gives me uncontrollable gas?',
    pick: 1
  },
  {
    question: 'But before I kill you, Mr. Bond, I must show you _.',
    pick: 1
  },
  {
    question: 'What never fails to liven up the party?',
    pick: 1
  },
  {
    question: 'What am I giving up for Lent?',
    pick: 1
  },
  {
    question: 'What do old people smell like? ',
    pick: 1
  },
  {
    question: 'The class field trip was completely ruined by _.',
    pick: 1
  },
  {
    question: 'When Pharaoh remained unmoved, Moses called down a plague of _.',
    pick: 1
  },
  {
    question:
      'I do not know with which weapons World War III will be fought, but World War IV will be fought with _.',
    pick: 1
  },
  {
    question:
      "What's Teach for America using to inspire inner city students to succeed?",
    pick: 1
  },
  {
    question: "In Michael Jackson's final moments, he thought about _.",
    pick: 1
  },
  {
    question: 'Why do I hurt all over?',
    pick: 1
  },
  {
    question:
      'Studies show that lab rats navigate mazes 50% faster after being exposed to _.',
    pick: 1
  },
  {
    question: 'Why am I sticky?',
    pick: 1
  },
  {
    question: "What's my anti-drug?",
    pick: 1
  },
  {
    question: 'And the Academy Award for _ goes to _.',
    pick: 2
  },
  {
    question: 'For my next trick, I will pull _ out of _.',
    pick: 2
  },
  {
    question: '_: Good to the last drop.',
    pick: 1
  },
  {
    question: 'What did Vin Diesel eat for dinner?',
    pick: 1
  },
  {
    question: '_: kid-tested, mother-approved.',
    pick: 1
  },
  {
    question: 'What gets better with age?',
    pick: 1
  },
  {
    question: 'I never truly understood _ until I encountered _.',
    pick: 2
  },
  {
    question:
      "Rumor has it that Vladimir Putin's favorite delicacy is _ stuffed with _.",
    pick: 2
  },
  {
    question: 'Lifetime&reg; presents _, the story of _.',
    pick: 2
  },
  {
    question: 'Make a haiku.',
    pick: 3
  },
  {
    question:
      "In M. Night Shyamalan's new movie, Bruce Willis discovers that _ had really been _ all along.",
    pick: 2
  },
  {
    question: '_ is a slippery slope that leads to _.',
    pick: 2
  },
  {
    question: 'In a world ravaged by _, our only solace is _.',
    pick: 2
  },
  {
    question: "That's right, I killed _. How, you ask? _.",
    pick: 2
  },
  {
    question: 'When I was tripping on acid, _ turned into _.',
    pick: 2
  },
  {
    question: '_ + _ = _.',
    pick: 3
  },
  {
    question: "What's the next superhero/sidekick duo?",
    pick: 2
  },
  {
    question:
      "Dear Abby,<br><br>I'm having some trouble with _ and would like your advice.",
    pick: 1
  },
  {
    question:
      'After the earthquake, Sean Penn brought _ to the people of Haiti.',
    pick: 1
  },
  {
    question:
      'In L.A. County Jail, word is you can trade 200 cigarettes for _.',
    pick: 1
  },
  {
    question: "Maybe she's born with it. Maybe it's _.",
    pick: 1
  },
  {
    question:
      'Life for American Indians was forever changed when the White Man introduced them to _.',
    pick: 1
  },
  {
    question: 'Next on ESPN2, the World Series of _.',
    pick: 1
  },
  {
    question: 'Step 1: _. Step 2: _. Step 3: Profit.',
    pick: 2
  },
  {
    question:
      'Here is the church<br>Here is the steeple<br>Open the doors<br>And there is _.',
    pick: 1
  },
  {
    question: 'How did I lose my virginity?',
    pick: 1
  },
  {
    question:
      'During his childhood, Salvador Dal&iacute; produced hundreds of paintings of _.',
    pick: 1
  },
  {
    question:
      'In 1,000 years, when paper money is a distant memory, how will we pay for goods and services?',
    pick: 1
  },
  {
    question: "What don't you want to find in your Kung Pao chicken?",
    pick: 1
  },
  {
    question:
      'The Smithsonian Museum of Natural History has just opened an exhibit on _.',
    pick: 1
  },
  {
    question: 'Daddy, why is Mommy crying?',
    pick: 1
  },
  {
    question: 'What brought the orgy to a grinding halt?',
    pick: 1
  },
  {
    question: 'When I pooped, what came out of my butt?',
    pick: 1
  },
  {
    question:
      "In the distant future, historians will agree that _ marked the beginning of America's decline.",
    pick: 1
  },
  {
    question: "What's the gift that keeps on giving?",
    pick: 1
  },
  {
    question:
      'This season on Man vs. Wild, Bear Grylls must survive in the depths of the Amazon with only _ and his wits.',
    pick: 1
  },
  {
    question: "Michael Bay's new three-hour action epic pits _ against _.",
    pick: 2
  },
  {
    question:
      "And I would have gotten away with it, too, if it hadn't been for _!",
    pick: 1
  },
  {
    question: 'In a pinch, _ can be a suitable substitute for _.',
    pick: 2
  },
  {
    question: 'What has been making life difficult at the nudist colony?',
    pick: 1
  },
  {
    question: 'Science will never explain the origin of _.',
    pick: 1
  },
  {
    question:
      'In Rome, there are whisperings that the Vatican has a secret room devoted to _.',
    pick: 1
  },
  {
    question:
      "I learned the hard way that you can't cheer up a grieving friend with _.",
    pick: 1
  },
  {
    question: 'When all else fails, I can always masturbate to _.',
    pick: 1
  },
  {
    question: 'An international tribunal has found _ guilty of _.',
    pick: 2
  },
  {
    question:
      'In its new tourism campaign, Detroit proudly proclaims that it has finally eliminated _.',
    pick: 1
  },
  {
    question:
      'In his new self-produced album, Kanye West raps over the sounds of _.',
    pick: 1
  },
  {
    question:
      'The socialist governments of Scandinavia have declared that access to _ is a basic human right.',
    pick: 1
  },
  {
    question: 'He who controls _ controls the world.',
    pick: 1
  },
  {
    question:
      'Dear Sir or Madam, We regret to inform you that the Office of _ has denied your request for _.',
    pick: 2
  },
  {
    question:
      'The CIA now interrogates enemy agents by repeatedly subjecting them to _.',
    pick: 1
  },
  {
    question: '_ would be woefully incomplete without _.',
    pick: 2
  },
  {
    question: 'During his midlife crisis, my dad got really into _.',
    pick: 1
  },
  {
    question:
      'Before I run for president, I must destroy all evidence of my involvement with _.',
    pick: 1
  },
  {
    question:
      'In his newest and most difficult stunt, David Blaine must escape from _.',
    pick: 1
  },
  {
    question:
      'This is your captain speaking. Fasten your seatbelts and prepare for _.',
    pick: 1
  },
  {
    question:
      'My mom freaked out when she looked at my browser history and found _.com/_.',
    pick: 2
  },
  {
    question:
      'The Five Stages of Grief: denial, anger, bargaining, _, acceptance.',
    pick: 1
  },
  {
    question:
      "Members of New York's social elite are paying thousands of dollars just to experience _.",
    pick: 1
  },
  {
    question: 'I went from _ to _, all thanks to _.',
    pick: 3
  },
  {
    question: 'Little Miss Muffet Sat on a tuffet, Eating her curds and _.',
    pick: 1
  },
  {
    question: "If God didn't want us to enjoy _, he wouldn't have given us _.",
    pick: 2
  },
  {
    question: "My country, 'tis of thee, sweet land of _.",
    pick: 1
  },
  {
    question:
      'I spent my whole life working toward _, only to have it ruined by _.',
    pick: 2
  },
  {
    question: 'Next time on Dr. Phil: How to talk to your child about _.',
    pick: 1
  },
  {
    question: 'Only two things in life are certain: death and _.',
    pick: 1
  },
  {
    question:
      "Everyone down on the ground! We don't want to hurt anyone. We're just here for _.",
    pick: 1
  },
  {
    question:
      'The healing process began when I joined a support group for victims of _.',
    pick: 1
  },
  {
    question: 'The votes are in, and the new high school mascot is _.',
    pick: 1
  },
  {
    question:
      'Charades was ruined for me forever when my mom had to act out _.',
    pick: 1
  },
  {
    question: 'Before _, all we had was _.',
    pick: 2
  },
  {
    question: "Tonight on 20/20: What you don't know about _ could kill you.",
    pick: 1
  },
  {
    question:
      "You haven't truly lived until you've experienced _ and _ at the same time.",
    pick: 2
  },
  {
    question: "Hey baby, come back to my place and I'll show you _.",
    pick: 1
  },
  {
    question: 'My gym teacher got fired for adding _ to the obstacle course.',
    pick: 1
  },
  {
    question: 'Finally! A service that delivers _ right to your door.',
    pick: 1
  },
  {
    question:
      'To prepare for his upcoming role, Daniel Day-Lewis immersed himself in the world of _.',
    pick: 1
  },
  {
    question: 'My life is ruled by a vicious cycle of _ and _.',
    pick: 2
  },
  {
    question: 'During high school, I never really fit in until I found _ club.',
    pick: 1
  },
  {
    question: "Money can't buy me love, but it can buy me _.",
    pick: 1
  },
  {
    question:
      "Listen, son. If you want to get involved with _, I won't stop you. Just steer clear of _.",
    pick: 2
  },
  {
    question:
      'A successful job interview begins with a firm handshake and ends with _.',
    pick: 1
  },
  {
    question:
      'Call the law offices of Goldstein &amp; Goldstein, because no one should have to tolerate _ in the workplace.',
    pick: 1
  },
  {
    question: "Lovin' you is easy 'cause you're _.",
    pick: 1
  },
  {
    question:
      'The blind date was going horribly until we discovered our shared interest in _.',
    pick: 1
  },
  {
    question: 'What left this stain on my couch?',
    pick: 1
  },
  {
    question: 'Turns out that _-Man was neither the hero we needed nor wanted.',
    pick: 1
  },
  {
    question:
      "After months of practice with _, I think I'm finally ready for _.",
    pick: 2
  },
  {
    question:
      'In the seventh circle of Hell, sinners must endure _ for all eternity.',
    pick: 1
  },
  {
    question:
      'As part of his daily regimen, Anderson Cooper sets aside 15 minutes for _.',
    pick: 1
  },
  {
    question: 'When you get right down to it, _ is just _.',
    pick: 2
  },
  {
    question: 'Having problems with _? Try _!',
    pick: 2
  },
  {
    question: 'And what did <i>you</i> bring for show and tell?',
    pick: 1
  },
  {
    question: "I'm not like the rest of you. I'm too rich and busy for _.",
    pick: 1
  },
  {
    question: 'With enough time and pressure, _ will turn into _.',
    pick: 2
  },
  {
    question: '_: Hours of fun. Easy to use. Perfect for _!',
    pick: 2
  },
  {
    question: '_. Awesome in theory, kind of a mess in practice.',
    pick: 1
  },
  {
    question:
      "As part of his contract, Prince won't perform without _ in his dressing room.",
    pick: 1
  },
  {
    question: 'Man, this is bullshit. Fuck _.',
    pick: 1
  },
  {
    question:
      'Dear Leader Kim Jong-un,<br>our village praises your infinite wisdom with a humble offering of _.',
    pick: 1
  },
  {
    question: '_ may pass, but _ will last forever.',
    pick: 2
  },
  {
    question: "She's up all night for good fun.<br>I'm up all night for _.",
    pick: 1
  },
  {
    question:
      'Alright, bros. Our frat house is condemned, and all the hot slampieces are over at Gamma Phi. The time has come to commence Operation _.',
    pick: 1
  },
  {
    question:
      'The Japanese have developed a smaller, more efficient version of _.',
    pick: 1
  },
  {
    question:
      'In return for my soul, the Devil promised me _, but all I got was _.',
    pick: 2
  },
  {
    question:
      "You guys, I saw this crazy movie last night. It opens on _, and then there's some stuff about _, and then it ends with _.",
    pick: 3
  },
  {
    question: '_ will never be the same after _.',
    pick: 2
  },
  {
    question:
      "Wes Anderson's new film tells the story of a precocious child coming to terms with _.",
    pick: 1
  },

  {
    question: "What's fun until it gets weird?",
    pick: 1
  },
  {
    question:
      'We never did find _, but along the way we sure learned a lot about _.',
    pick: 2
  },
  {
    question:
      "You've seen the bearded lady!<br>You've seen the ring of fire!<br>Now, ladies and gentlemen, feast your eyes upon _!",
    pick: 1
  },
  {
    question: 'How am I compensating for my tiny penis?',
    pick: 1
  },
  {
    question: "I'm sorry, sir, but we don't allow _ at the country club.",
    pick: 1
  },
  {
    question:
      "2 AM in the city that never sleeps. The door swings open and <i>she</i> walks in, legs up to here. Something in her eyes tells me she's looking for _.",
    pick: 1
  },
  {
    question: 'As king, how will I keep the peasants in line?',
    pick: 1
  },
  {
    question: 'Do <i>not</i> fuck with me! I am literally _ right now.',
    pick: 1
  },
  {
    question: 'I am become _, destroyer of _!',
    pick: 2
  },
  {
    question:
      'It lurks in the night. It hungers for flesh. This summer, no one is safe from _.',
    pick: 1
  },
  {
    question: "If you can't handle _, you'd better stay away from _.",
    pick: 2
  },
  {
    question: "This is the prime of my life. I'm young, hot, and full of _.",
    pick: 1
  },
  {
    question:
      "I'm pretty sure I'm high right now, because I'm absolutely mesmerized by _.",
    pick: 1
  },
  {
    question: 'Every step towards _ gets me a little closer to _.',
    pick: 2
  },
  {
    question:
      "Forget everything you know about _, because now we've supercharged it with _!",
    pick: 2
  },
  {
    question:
      "Honey, I have a new role-play I want to try tonight! You can be _, and I'll be _.",
    pick: 2
  },
  {
    question:
      'Do the Dew; with our most extreme flavor yet! Get ready for Mountain Dew _!',
    pick: 1
  },
  {
    question:
      'Armani suit: $1,000. Dinner for two at that swanky restaurant: $300. The look on her face when you surprise her with _: priceless.',
    pick: 1
  },
  {
    question:
      'In his new action comedy, Jackie Chan must fend off ninjas while also dealing with _.',
    pick: 1
  },
  {
    question:
      "Well what do you have to say for yourself, Casey? This is the third time you've been sent to the principal's office for _.",
    pick: 1
  },
  {
    question:
      'Here at the Academy for Gifted Children, we allow students to explore _ at their own pace.',
    pick: 1
  },
  {
    question:
      'Heed my voice, mortals! I am the god of _, and I will not tolerate _!',
    pick: 2
  },
  {
    question: "I don't mean to brag, but they call me the Michael Jordan of _.",
    pick: 1
  },
  {
    question: 'Why am I broke?',
    pick: 1
  },
  {
    question: "Help me doctor, I've got _ in my butt!",
    pick: 1
  },
  {
    question:
      "Hi MTV! My name is Kendra, I live in Malibu, I'm into _, and I love to have a good time.",
    pick: 1
  },
  {
    question: 'Patient presents with _. Likely a result of _.',
    pick: 2
  },
  {
    question:
      "Life's pretty tough in the fast lane. That's why I never leave the house without _.",
    pick: 1
  },
  {
    question: "What's making things awkward in the sauna?",
    pick: 1
  },
  {
    question:
      "Get ready for the movie of the summer! One cop plays by the book. The other's only interested in one thing: _.",
    pick: 1
  },
  {
    question: 'Having the worst day EVER. #_',
    pick: 1
  },
  {
    question:
      'In his farewell address, George Washington famously warned Americans about the dangers of _.',
    pick: 1
  },
  {
    question: 'What killed my boner?',
    pick: 1
  },
  {
    question: "Yo' mama so fat she _!",
    pick: 1
  },
  {
    question: "Well if _ is good enough for _, it's good enough for me.",
    pick: 2
  },
  {
    question: 'WHOOO! God damn I love _!',
    pick: 1
  },
  {
    question: 'Now in bookstores: The Audacity of _, by Barack Obama.',
    pick: 1
  },
  {
    question: "And today's soup is Cream of _.",
    pick: 1
  },
  {
    pick: 1,
    question:
      'I work my ass off all day for this family, and this is what I come home to? _!?'
  },
  {
    pick: 1,
    question:
      'I have a strict policy. First date, dinner. Second date, kiss. Third date, _.'
  },
  {
    pick: 1,
    question: 'When I was a kid, we used to play Cowboys and _.'
  },
  {
    pick: 1,
    question:
      "This is America. If you don't work hard, you don't succeed. I don't care if you're black, white, purple, or _."
  },
  {
    pick: 1,
    question: "You Won't Believe These 15 Hilarious _ Bloopers!"
  },
  {
    pick: 1,
    question:
      'James is a lonely boy. But when he discovers a secret door in his attic, he meets a magical new friend: _.'
  },
  {
    pick: 1,
    question:
      "Don't worry kid. It gets better. I've been living with _ for 20 years."
  },
  {
    pick: 1,
    question:
      'My grandfather worked his way up from nothing. When he came to this country, all he had was the shoes on his feet and _.'
  },
  {
    pick: 1,
    question: 'Behind every powerful man is _.'
  },
  {
    pick: 1,
    question:
      'You are not alone. Millions of Americans struggle with _ every day.'
  },
  {
    pick: 1,
    question:
      'Come to Dubai, where you can relax in our world famous spas, experience the nightlife, or simply enjoy _ by the poolside.'
  },
  {
    pick: 1,
    question: 'This is madness.No, THIS IS _!'
  },
  {
    pick: 1,
    question:
      "Listen Gary, I like you. But if you want that corner office, you're going to have to show me _."
  },
  {
    pick: 1,
    question:
      'I went to the desert and ate of the peyote cactus. Turns out my spirit animal is _.'
  },
  {
    pick: 1,
    question: 'And would you like those buffalo wings mild, hot, or _?'
  },
  {
    pick: 1,
    question:
      'The six things I could never do without: oxygen, Facebook, chocolate, Netflix, friends, and _ LOL!'
  },
  {
    pick: 1,
    question: "Why won't you make love to me anymore? Is it _?"
  },
  {
    pick: 1,
    question:
      'Puberty is a time of change. You might notice hair growing in new places. You might develop an interest in _. This is normal.'
  },
  {
    pick: 1,
    question:
      "I'm sorry, Mrs. Chen, but there was nothing we could do. At 4:15 this morning, your son succumbed to _."
  },
  {
    pick: 1,
    question:
      "I'm Miss Tennessee, and if I could make the world better by changing one thing, I would get rid of _."
  },
  {
    pick: 1,
    question:
      "Tonight we will have sex. And afterwards, If you'd like, a little bit of _."
  },
  {
    pick: 1,
    question:
      "Everybody join hands and close your eyes. Do you sense that? That's the presence of _ in this room."
  },
  {
    pick: 1,
    question:
      'To become a true Yanomamo warrior, you must prove that you can withstand _ without crying out.'
  },
  {
    pick: 1,
    question:
      "Y'all ready to get this thing started? I'm Nick Cannon, and this is America's Got _."
  },
  {
    pick: 1,
    question:
      'If you had to describe the Card Czar, using only one of the cards in your hand, which one would it be?'
  },
  {
    question: 'Real men watch _.',
    pick: 1
  },
  {
    question: "So wait, _ was actually _? Wow, I didn't see that one coming!",
    pick: 2
  },
  {
    question: "Whenever I'm splashed with cold water, I turn into _.",
    pick: 1
  },
  {
    question:
      'No matter how you look at it, ultimately _ is responsible for _.',
    pick: 2
  },
  {
    question: '_. That is my fetish.',
    pick: 1
  },
  {
    question: '_ is camping my lane.',
    pick: 1
  },
  {
    question: 'Vegeta, what does the scouter say?',
    pick: 1
  },
  {
    question: 'Who the hell do you think I am?!',
    pick: 1
  },
  {
    question:
      'On the next episode of Dragon Ball Z, Goku has a fierce battle with _.',
    pick: 1
  },
  {
    question: 'Who let the dogs out?',
    pick: 1
  },
  {
    question: 'In his next movie, Will Smith saves the world from _.',
    pick: 1
  },
  {
    question: '_ and _ are the new hot couple.',
    pick: 2
  },
  {
    question: 'When North Korea gets _, it will be the end of the world.',
    pick: 1
  },
  {
    question: 'Plan a three course meal.',
    pick: 3
  },
  {
    question: 'Tastes like _.',
    pick: 1
  },
  {
    question: 'Hey guys, check out my _ montage!',
    pick: 1
  },
  {
    question: 'What will Xyzzy take over the world with?',
    pick: 1
  },
  {
    question: 'Dustin Browder demands more _ in StarCraft&reg;.',
    pick: 1
  },
  {
    question: 'Welcome to my secret lair on _.',
    pick: 1
  },
  {
    question: 'Truly and without question, _ is the manliest of all men.',
    pick: 1
  },
  {
    question: 'WANTED: $50,000,000,000 reward for the apprehension of_.',
    pick: 1
  },
  {
    question: 'People die when they are _.',
    pick: 1
  },
  {
    question: "Okay, I'll admit it. I would totally go gay for _.",
    pick: 1
  },
  {
    question: '_.tumblr.com',
    pick: 1
  },
  {
    question: '_. Goddammit, Japan.',
    pick: 1
  },
  {
    question: 'All your _ are belong to us',
    pick: 1
  },
  {
    question: 'Digimon! Digivolve to: _-mon!',
    pick: 1
  },
  {
    question: 'What will YouTube add in its next unneeded update?',
    pick: 1
  },
  {
    question:
      'I have never in my life laughed harder than the first time I watched _.',
    pick: 1
  },
  {
    question: "Who's an asshole?",
    pick: 1
  },
  {
    question: 'Ladies and gentlemen, I give you _... COVERED IN BEES!!!',
    pick: 1
  },
  {
    question: 'Sorry Mario, but _ is in another castle.',
    pick: 1
  },
  {
    question: "There are guilty pleasures. And then there's _.",
    pick: 1
  },
  {
    question: '_ for president!',
    pick: 1
  },
  {
    question: '_ is a lie.',
    pick: 1
  },
  {
    question: "Have fun, don't be _.",
    pick: 1
  },
  {
    question: "Don't get mad, get _.",
    pick: 1
  },
  {
    question:
      "When it comes to Japanese cuisine, there's simply nothing better than _.",
    pick: 1
  },
  {
    question: 'After I saw _, I needed _.',
    pick: 2
  },
  {
    question: "I'm an expert on _.",
    pick: 1
  },
  {
    question:
      'Just announced: The brand new anime adaptation of _, starring _ as the voice of _.',
    pick: 3
  },
  {
    question: '_ is the only thing that matters.',
    pick: 1
  },
  {
    question: 'Cunnilungus and psychiatry brought us to _.',
    pick: 1
  },
  {
    question: "We'll always have _.",
    pick: 1
  },
  {
    question: "OH MY GOD THIS IS THE GREATEST _ I'VE EVER SEEN IN MY LIFE!",
    pick: 1
  },
  {
    question: 'What mildy annoyed you today?',
    pick: 1
  },
  {
    question: 'The seldomly mentioned 4th little pig built his house out of _.',
    pick: 1
  },
  {
    question: "Let's all rock out to the sounds of _.",
    pick: 1
  },
  {
    question: 'No one wants to see your _.',
    pick: 1
  },
  {
    question: 'Why Grandma, said Little Red Riding Hood, What big _ you have!',
    pick: 1
  },
  {
    question: '_ uses _. It is SUPER EFFECTIVE!',
    pick: 2
  },
  {
    question:
      "It's difficult to explain to friends and family why I know so much about _.",
    pick: 1
  },
  {
    question: "Who knew I'd be able to make a living off of _?",
    pick: 1
  },
  {
    question: 'Take _, it will last longer.',
    pick: 1
  },
  {
    question:
      'I finally realized I hit rock bottom when I started digging through dumpsters for _.',
    pick: 1
  },
  {
    question: 'Long story short, I ended up with _ in my ass.',
    pick: 1
  },
  {
    question: "At first I couldn't understand _, but now it's my biggest kink.",
    pick: 1
  },
  {
    question: '_ is my worst habit.',
    pick: 1
  },
  {
    question: 'What do I keep hidden in the crawlspace?',
    pick: 1
  },
  {
    question: "It's the end of _ as we know it.",
    pick: 1
  },
  {
    question: 'I watch movies just to see if I can find a Big Lipped _ Moment.',
    pick: 1
  },
  {
    question: 'Go-Go-Gadget, _!',
    pick: 1
  },
  {
    question: "Everything's better with _.",
    pick: 1
  },
  {
    question:
      'And it is said his ghost still wanders these halls, forever searching for his lost _.',
    pick: 1
  },
  {
    question: 'What have you accomplished today?',
    pick: 1
  },
  {
    question: 'What would you taste like?',
    pick: 1
  },
  {
    question: 'The best part of waking up is _ in your cup.',
    pick: 1
  },
  {
    question: 'Why are you frothing with rage?',
    pick: 1
  },
  {
    question: 'What made you happy today?',
    pick: 1
  },
  {
    question: 'Why are there six _ when there are only four _?',
    pick: 2
  },
  {
    question: 'My _ is too big!',
    pick: 1
  },
  {
    question: 'Best drink ever: One part _, three parts _, and a splash of _.',
    pick: 3
  },
  {
    question: '_ makes me uncomfortable.',
    pick: 1
  },
  {
    question:
      'The primitive villagers were both shocked and amazed when I showed them _.',
    pick: 1
  },
  {
    question: 'Stop, drop, and _.',
    pick: 1
  },
  {
    question: '_ is the root of all evil.',
    pick: 1
  },
  {
    question: 'Think before you _.',
    pick: 1
  },
  {
    question: 'The road to success is paved with _.',
    pick: 1
  },
  {
    question: 'And on his farm he had _, E-I-E-I-O!',
    pick: 1
  },
  {
    question: 'A wild _ appeared! It used _!',
    pick: 2
  },
  {
    question: 'What is your mating call?',
    pick: 1
  },
  {
    question: 'The Himalayas are filled with many perils, such as _.',
    pick: 1
  },
  {
    question: "There's _ in my soup.",
    pick: 1
  },
  {
    question:
      'What is the worst thing anyone could say in front of the police?',
    pick: 1
  },
  {
    question:
      'The sad truth is, that at the edge of the universe, there is nothing but _.',
    pick: 1
  },
  {
    question: "What is the saddest thing you've ever seen?",
    pick: 1
  },
  {
    question: 'If life gives you _, make _.',
    pick: 2
  },
  {
    question: 'What is your favorite book?',
    pick: 1
  },
  {
    question: 'Who needs a bidet when you have _?',
    pick: 1
  },
  {
    question: 'Kill it with _!',
    pick: 1
  },
  {
    question: "The Xbox One's DRM policy isn't half as bad as _.",
    pick: 1
  },
  {
    question: "TotalBiscuit's top hat is actually _. ",
    pick: 1
  },
  {
    question: 'Best game of 2013? _, of course.',
    pick: 1
  },
  {
    question: "I'M-A FIRIN' MAH _!",
    pick: 1
  },
  {
    question: 'How do you get your dog to stop humping your leg?',
    pick: 1
  },
  {
    question: '_ sounds like a great alternative rock band.',
    pick: 1
  },
  {
    question: '_. Everything else is uncivilized.',
    pick: 1
  },
  {
    question: 'Of my entire collection, my most prized possession is _.',
    pick: 1
  },
  {
    question: '_! You know, for kids.',
    pick: 1
  },
  {
    question: 'Mom, I swear! Despite its name, _ is NOT a porno!',
    pick: 1
  },
  {
    question:
      'The government of Japan recently passed a law that effectively forbids all forms of _.',
    pick: 1
  },
  {
    question: "I can't believe I spent most of my paycheck on _.",
    pick: 1
  },
  {
    question: '_ is the greatest Canadian.',
    pick: 1
  },
  {
    question: 'I write slash fanfiction pairing _ with _.',
    pick: 2
  },
  {
    question: "_? It's a DLC item.",
    pick: 1
  },
  {
    question: "Oh god, I can't believe we ate _ at PAX.",
    pick: 1
  },
  {
    question: 'Only in Korea can you see _.',
    pick: 1
  },
  {
    question: 'Alcoholic games of Clue&reg; lead to _.',
    pick: 1
  },
  {
    question: '_ is the name of my _ cover band.',
    pick: 2
  },
  {
    question: 'The Holy Trinity: _, _, and _!',
    pick: 3
  },
  {
    question: 'Praise _!',
    pick: 1
  },
  {
    question: "What doesn't work that way?",
    pick: 1
  },
  {
    question: 'What can you always find in between the couch cushions?',
    pick: 1
  },
  {
    question: 'What the fuck is wrong with you?',
    pick: 1
  },
  {
    question: 'What is the next great Kickstarter project?',
    pick: 1
  },
  {
    question: 'What is the meaning of life?',
    pick: 1
  },
  {
    question: 'My life for _!',
    pick: 1
  },
  {
    question: 'When I was a kid, all we had in Lunchables were three _ and _.',
    pick: 2
  },
  {
    question:
      'On its last dying breath, _ sent out a cry for help. A bunch of _ heard the cry.',
    pick: 2
  },
  {
    question:
      'With Democrats and Republicans in a dead heat, the election was snatched by _ party.',
    pick: 1
  },
  {
    question:
      'Who would have guessed that the alien invasion would be easily thwarted by _.',
    pick: 1
  },
  {
    question: 'If you could fuck anyone in the world, who would you choose?',
    pick: 1
  },

  {
    question: '_. YOU SHOULD BE WATCHING.',
    pick: 1
  },
  {
    question: '_ vs. _. BEST. FIGHT. EVER.',
    pick: 2
  },
  {
    question: 'Fresh from Japan: The new smash hit single by _ titled _.',
    pick: 2
  },
  {
    question: 'Congratulations, _.',
    pick: 1
  },

  {
    question: 'One thing you almost never see in anime is _.',
    pick: 1
  },
  {
    question: 'By far the best panel at any anime convention is the one for _.',
    pick: 1
  },
  {
    question: "S-Shut up!! I-It's not like I'm _ or anything.",
    pick: 1
  },
  {
    question: 'The English dub of _ sucks worse than _.',
    pick: 2
  },
  {
    question: '_. BELIEVE IT!',
    pick: 1
  },
  {
    question: 'Make a contract with me, and become _!',
    pick: 1
  },
  {
    question: 'You guys are so wrong. Obviously, _ is best waifu.',
    pick: 1
  },
  {
    question:
      'In the latest chapter of Toriko, our hero hunts down, kills, and eats a creature made entirely of _.',
    pick: 1
  },
  {
    question:
      'On the next episode of Dragon Ball Z, _ is forced to do the fusion dance with _.',
    pick: 2
  },
  {
    question: 'You are already _.',
    pick: 1
  },
  {
    question:
      'THIS _ HAS BEEN PASSED DOWN THE ARMSTRONG FAMILY LINE FOR GENERATIONS!!!',
    pick: 1
  },
  {
    question: 'My favorite episode of _ is the one with _.',
    pick: 2
  },
  {
    question: 'Make a yaoi shipping.',
    pick: 2
  },
  {
    question:
      'This doujinshi I just bought has _ and _ getting it on, hardcore.',
    pick: 2
  },
  {
    question: 'Make a love triangle.',
    pick: 3
  },
  {
    question:
      'Dr. Black Jack, please hurry! The patient is suffering from a terminal case of _!',
    pick: 1
  },
  {
    question:
      "When Henry Goto is alone and thinks that no one's looking, he secretly enjoys _.",
    pick: 1
  },
  {
    question: 'He might just save the universe, if he only had some _!',
    pick: 1
  },
  {
    question:
      'This _ of mine glows with an awesome power! Its _ tells me to defeat you!',
    pick: 2
  },
  {
    question:
      'On the mean streets of Tokyo, everyone knows that _ is the leader of the _ Gang.',
    pick: 2
  },
  {
    question:
      'When I found all 7 Dragon Balls, Shenron granted me my wish for _.',
    pick: 1
  },
  {
    question: 'The best part of my _ costume is _.',
    pick: 2
  },
  {
    question:
      'My _ is the _ that will pierce the heavens!! <i>*same white card used for both blanks*</i>',
    pick: 1
  },
  {
    question:
      'After years of searching, the crew of the Thousand Sunny finally found out that the One Piece is actually _.',
    pick: 1
  },
  {
    question:
      'The World Line was changed when I sent a D-mail to myself about _.',
    pick: 1
  },
  {
    question: 'So, what have you learned from all of this?',
    pick: 1
  },
  {
    question:
      'Someday when I have kids, I want to share with them the joys of _.',
    pick: 1
  },
  {
    question:
      'No matter how many times I see it, _ always brings a tear to my eye.',
    pick: 1
  },
  {
    question: "This year, I'm totally gonna cosplay as _.",
    pick: 1
  },
  {
    question:
      "Cooking is so fun! Cooking is so fun! Now it's time to take a break and see what we have done! _. YAY! IT'S READY!!",
    pick: 1
  },
  {
    question: '_. So kawaii!! &lt;3 &lt;3',
    pick: 1
  },
  {
    question: 'Animation studio _ is perhaps best known for _.',
    pick: 2
  },
  {
    question: 'This is our final battle. Mark my words, I will defeat you, _!',
    pick: 1
  },
  {
    question: 'After a long, arduous battle, _ finally met their end by _.',
    pick: 2
  },
  {
    question: "The best English dub I've ever heard is the one for _.",
    pick: 1
  },
  {
    question: "You used _. It's super effective!",
    pick: 1
  },
  {
    question: '_. HE DEDD.',
    pick: 1
  },
  {
    question:
      "I know of opinions and all that, but I just don't understand how anyone could actually enjoy _.",
    pick: 1
  },
  {
    question: "You see, I'm simply _.",
    pick: 1
  },
  {
    question: "She'll thaw out if you try _.",
    pick: 1
  },
  {
    question:
      "This year, I totally lucked out and found _ in the dealer's room.",
    pick: 1
  },
  {
    question: 'How did I avoid your attack? Simple. By _.',
    pick: 1
  },
  {
    question:
      'In the future of 199X, the barrier between our world and the demon world is broken, and thousands of monsters invade our realm to feed upon _.',
    pick: 1
  },
  {
    question: 'From the creators of Tiger &amp; Bunny: _ &amp; _!!',
    pick: 2
  },
  {
    question: 'In truth, the EVA units are actually powered by the souls of _.',
    pick: 1
  },
  {
    question:
      "Dreaming! Don't give it up _! Dreaming! Don't give it up _! Dreaming! Don't give it up _!",
    pick: 3
  },
  {
    question: 'Yo-Ho-Ho! He took a bite of _.',
    pick: 1
  },
  {
    question: 'The inspiration behind the latest hit show is _.',
    pick: 1
  },
  {
    question:
      'While writing Dragon Ball, Akira Toriyama would occasionally take a break from working to enjoy _.',
    pick: 1
  },
  {
    question: 'The show was great, until _ showed up.',
    pick: 1
  },
  {
    question: 'I want to be the very best, like no one ever was!  ____',
    pick: 1
  },
  {
    question: "Who are you callin' _ so short he can't see over his own _?!?!",
    pick: 2
  },
  {
    question: 'If you ask me, there need to be more shows about _.',
    pick: 1
  },
  {
    question: '_. That is the kind of man I was.',
    pick: 1
  },
  {
    question:
      "I'm sorry! I'm sorry! I didn't mean to accidentally walk in on you while you were _!",
    pick: 1
  },
  {
    question:
      'In the latest episode of Case Closed, Conan deduces that it was _ who killed _ because of _.',
    pick: 3
  },
  {
    question: "Karaoke night! I'm totally gonna sing my favorite song, _.",
    pick: 1
  },
  {
    question: 'Take this! My love, my anger, and all of my _!',
    pick: 1
  },
  {
    question: '_. Only on Toonami',
    pick: 1
  },
  {
    question: 'Behold the name of my Zanpakuto, _!',
    pick: 1
  },
  {
    question: 'Now! Face my ultimate attack!',
    pick: 1
  },
  {
    question: 'Sasuke has _ implants.',
    pick: 1
  },
  {
    question: 'To save the world, you must collect all 7 _.',
    pick: 1
  },
  {
    question: 'I am in despair! _ has left me in despair!',
    pick: 1
  },
  {
    question:
      "Mamoru Oshii's latest film is a slow-paced, two hour-long cerebral piece about the horrors of _.",
    pick: 1
  },
  {
    question: 'The rarest Pokemon in my collection is _.',
    pick: 1
  },
  {
    question: "Watch it! Or I'll take your _.",
    pick: 1
  },
  {
    question:
      'Every now and then, I like to participate in the time-honored Japanese tradition of _.',
    pick: 1
  },
  {
    question: 'Chicks. Dig. _. <i>Nice.</i>',
    pick: 1
  },
  {
    question: 'Using my power of Geass, I command you to do... THIS!',
    pick: 1
  },
  {
    question: "Don't worry, he's okay! He survived thanks to _.",
    pick: 1
  },

  {
    question: 'In the name of the moon, I will punish _!',
    pick: 1
  },
  {
    question:
      'The court finds the defendant, _, guilty of _, and sentences them to a lifetime of _.',
    pick: 3
  },
  {
    question:
      "I've always wanted to become a voice actor, so I could play the role of _.",
    pick: 1
  },
  {
    question: "It's no secret. Deep down, everybody wants to fuck _.",
    pick: 1
  },
  {
    question: 'Behold! My trap card, _!',
    pick: 1
  },
  {
    question:
      'As part of a recent promotion, Japanese KFCs are now dressing their Colonel Sanders statues up as _.',
    pick: 1
  },
  {
    question:
      'Fighting _ by moonlight! Winning _ by daylight! Never running from a real fight! She is the one named _!',
    pick: 3
  },
  {
    question: "Don't stand behind him, if you value your _.",
    pick: 1
  },
  {
    question:
      'It has been said... That there are entire forests of _, made from the sweetest _.',
    pick: 2
  },
  {
    question: "IT'S _ TIME!",
    pick: 1
  },
  {
    question: 'My love for you is like _. BERSERKER!',
    pick: 1
  },
  {
    question: 'They are the prey, and we are the _.',
    pick: 1
  },
  {
    question: "No matter how I look at it, it's your fault I'm not _!",
    pick: 1
  },
  {
    question: 'After eating a Devil Fruit, I now have the power of _.',
    pick: 1
  },
  {
    question: "That's not a squid! It's _!",
    pick: 1
  },
  {
    question:
      'Anime has taught me that classic literature can always be improved by adding _.',
    pick: 1
  },
  {
    question: 'Attention, duelists: My hair is _.',
    pick: 1
  }
].filter(q => q.pick === 1);

module.exports = questions;
