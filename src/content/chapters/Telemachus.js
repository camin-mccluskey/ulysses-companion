import Annotation from "../../components/Annotation";

const Telemachus = ({openNote, currentNoteId}) => {
  return (
    <div>
    <p></p>
    <center>
      {/* <button 
        className="bg-gray-200 bg-center bg-cover hover:bg-green-300" 
        onClick={() => openNote("010000telemachus")}
      >
        <font size="+2">[1]</font>
      </button> */}
      <Annotation 
        annotationId="010000telemachus"
        annotationSelect={() => openNote("010000telemachus")}
        activeAnnotationId={currentNoteId}
      >
        <font size="+2">[1]</font>
      </Annotation>  
    </center>
    <br/>
    Stately, plump <button className="bg-gray-200 bg-center bg-cover hover:bg-green-300" onClick={() => openNote("010001buckmulligan")}>Buck Mulligan</button> <button className="bg-gray-200 bg-center bg-cover hover:bg-green-300" onClick={() => openNote("010002stairhead")}>came from the stairhead</button>, bearing a bowl of
    lather on which <button className="bg-gray-200 bg-center bg-cover hover:bg-green-300" onClick={() => openNote("010003mirrorrazor")}>a mirror and a razor lay crossed</button>. A <button className="bg-gray-200 bg-center bg-cover hover:bg-green-300" onClick={() => openNote("010004yellowdressinggown")}>yellow dressinggown</button>,
    <button className="bg-gray-200 bg-center bg-cover hover:bg-green-300" onClick={() => openNote("010005ungirdled")}>ungirdled</button>, was sustained gently behind him by the mild morning air. He
    held the bowl aloft and intoned:
    <p></p>
    <p>
      —{" "}<button className="bg-gray-200 bg-center bg-cover hover:bg-green-300" onClick={() => openNote("010006introibo")}><i>Introibo ad altare Dei</i></button>.
    </p>
    <p>
      Halted, he peered down the dark winding stairs and called up coarsely:
    </p>
    <p>
      —{" "}Come up, <button className="bg-gray-200 bg-center bg-cover hover:bg-green-300" onClick={() => openNote("010007kinch")}>Kinch</button>! Come up, you fearful <button className="bg-gray-200 bg-center bg-cover hover:bg-green-300" onClick={() => openNote("010008jesuit")}>jesuit</button>.
    </p>
    <p>
      Solemnly he came forward and <button className="bg-gray-200 bg-center bg-cover hover:bg-green-300" onClick={() => openNote("010002stairhead")}>mounted the round gunrest</button>. He faced about
      and blessed gravely thrice the <button className="bg-gray-200 bg-center bg-cover hover:bg-green-300" onClick={() => openNote("010009tower")}>tower</button>, the surrounding country and the <button className="bg-gray-200 bg-center bg-cover hover:bg-green-300" onClick={() => openNote("010010mountains")}>awaking mountains</button>. Then, catching sight of <button className="bg-gray-200 bg-center bg-cover hover:bg-green-300" onClick={() => openNote("010011stephendedalus")}>Stephen Dedalus</button>, he bent
      towards him and made rapid crosses in the air, gurgling in his throat
      and shaking his head. Stephen Dedalus, displeased and sleepy, leaned
      his arms on the top of the staircase and looked coldly at the shaking
      gurgling face that blessed him, equine in its length, and at the light
      <button className="bg-gray-200 bg-center bg-cover hover:bg-green-300" onClick={() => openNote("010005ungirdled")}>untonsured</button> hair, grained and hued like pale oak.
    </p>
    <p>
      Buck Mulligan peeped an instant under the mirror and then covered the
      bowl smartly.
    </p>
    <p>
      —{" "}<button className="bg-gray-200 bg-center bg-cover hover:bg-green-300" onClick={() => openNote("010013barracks")}>Back to barracks</button>! he said sternly.
    </p>
    <p>
      He added in a preacher's tone:
    </p>
    <p>
      —{" "}<button className="bg-gray-200 bg-center bg-cover hover:bg-green-300" onClick={() => openNote("010014genuinechristine")}>For this, O dearly beloved, is the genuine Christine: body and soul
      and blood and ouns.</button> Slow music, please. Shut your eyes, gents. One
      moment. <button className="bg-gray-200 bg-center bg-cover hover:bg-green-300" onClick={() => openNote("010015whitecorpuscles")}>A little trouble about those white corpuscles</button>. Silence, all.
    </p>
    <p>
      He peered sideways up and gave a long low whistle of call, then paused
      awhile in rapt attention, his even white teeth glistening here and there
      with gold points. <button className="bg-gray-200 bg-center bg-cover hover:bg-green-300" onClick={() => openNote("010017chrysostomos")}>Chrysostomos</button>. <button className="bg-gray-200 bg-center bg-cover hover:bg-green-300" onClick={() => openNote("010016shrillwhistles")}>Two strong shrill whistles answered</button>
      through the calm.
    </p>
    <p>
      —{" "}Thanks, old chap, he cried briskly. That will do nicely. <button className="bg-gray-200 bg-center bg-cover hover:bg-green-300" onClick={() => openNote("010015whitecorpuscles")}>Switch off the current</button>, will you?
    </p>
    <span data-edition="ed1922" data-page="3"></span>
    <p>
      He skipped off the gunrest and looked gravely at his watcher, gathering
      about his legs the loose folds of his gown. <button className="bg-gray-200 bg-center bg-cover hover:bg-green-300" onClick={() => openNote("010153plumpface")}>The plump</button><span data-edition="ed1932" data-page="3"> </span><button className="bg-gray-200 bg-center bg-cover hover:bg-green-300" onClick={() => openNote("010153plumpface")}>shadowed face and
      sullen oval jowl recalled a prelate, patron of arts in the middle ages.</button>
      A pleasant smile broke quietly over his lips. 
    </p>
    <p>
      —{" "}<button className="bg-gray-200 bg-center bg-cover hover:bg-green-300" onClick={() => openNote("010154mockery")}>The mockery of it!</button> he said gaily. <button className="bg-gray-200 bg-center bg-cover hover:bg-green-300" onClick={() => openNote("010020ancientgreek")}>Your absurd name, an ancient Greek!</button>
    </p>
    <span data-edition="ed1986" data-page="3"> </span>
    <p>
      He pointed his finger in friendly jest and went over to the <button className="bg-gray-200 bg-center bg-cover hover:bg-green-300" onClick={() => openNote("010002stairhead")}>parapet</button>,
      laughing to himself. Stephen Dedalus stepped up, followed him wearily
      halfway and sat down on the edge of the gunrest, watching him still as he propped his mirror on the <span data-edition="ed1961" data-page="3"> </span>parapet, dipped the brush in the bowl and
      lathered cheeks and neck. 
    </p>
    <p>
      Buck Mulligan's gay voice went on.
    </p>
    <span data-edition="ed1939" data-page="5"> </span>
    <p>
      —{" "}My name is absurd too: <button className="bg-gray-200 bg-center bg-cover hover:bg-green-300" onClick={() => openNote("010021malachi")}>Malachi Mulligan, two dactyls</button>. But it has a
      <button className="bg-gray-200 bg-center bg-cover hover:bg-green-300" onClick={() => openNote("010022hellenise")}>Hellenic</button> ring, hasn't it? Tripping and sunny like the buck himself.
      We must go to Athens. Will you come if I can get the aunt to fork out
      twenty <button className="bg-gray-200 bg-center bg-cover hover:bg-green-300" onClick={() => openNote("010019money")}>quid</button>?
    </p>
    <p>
      He laid the brush aside and, laughing with delight, cried:
    </p>
    <p>
      —{" "}Will he come? The jejune jesuit!
    </p>
    <p>
      Ceasing, he began to shave with care.
    </p>
    <p>
      —{" "}Tell me, Mulligan, Stephen said quietly.
    </p>
    <p>
      —{" "}Yes, my love?
    </p>
    <p>
      —{" "}How long is <button className="bg-gray-200 bg-center bg-cover hover:bg-green-300" onClick={() => openNote("010023haines")}>Haines</button> going to stay in this tower?
    </p>
    <p>
      Buck Mulligan showed a shaven cheek over his right shoulder.
    </p>
    <p>
      —{" "}God, isn't he dreadful? he said frankly. A ponderous <button className="bg-gray-200 bg-center bg-cover hover:bg-green-300" onClick={() => openNote("010024stranger")}>Saxon</button>. He thinks
      you're not a gentleman. God, these bloody English! Bursting with money
      and indigestion.  Because he comes from Oxford. You know, Dedalus, you
      have the real Oxford manner. He can't make you out. O, my name for you
      is the best: <button className="bg-gray-200 bg-center bg-cover hover:bg-green-300" onClick={() => openNote("010007kinch")}>Kinch, the knife-blade.</button>
    </p>
    <p>
      He shaved warily over his chin.
    </p>
    <p>
      —{" "}<button className="bg-gray-200 bg-center bg-cover hover:bg-green-300" onClick={() => openNote("010025blackpanther")}>He was raving all night about a black panther, Stephen said. Where is
      his guncase?</button>
    </p>
    <p>
      —{" "}A woful <button className="bg-gray-200 bg-center bg-cover hover:bg-green-300" onClick={() => openNote("010051paresis")}>lunatic</button>! Mulligan said. Were you in a funk?
    </p>
    <p>
      —{" "}I was, Stephen said with energy and growing fear. Out here in the dark
      with a man I don't know raving and moaning to himself about shooting a
      black panther. You <button className="bg-gray-200 bg-center bg-cover hover:bg-green-300" onClick={() => openNote("010026lifeguard")}>saved men from drowning.</button> I'm not <button className="bg-gray-200 bg-center bg-cover hover:bg-green-300" onClick={() => openNote("010027hero")}>a hero,</button> however. If
      he stays on here <button className="bg-gray-200 bg-center bg-cover hover:bg-green-300" onClick={() => openNote("010028iamoff")}>I am off.</button>
    </p>
    <p>
      Buck Mulligan frowned at the lather on his razorblade. He hopped down
      from his perch and began to search his trouser pockets hastily.
    </p>
    <span data-edition="ed1922" data-page="4"> </span>
    <p>
      —{" "}<button className="bg-gray-200 bg-center bg-cover hover:bg-green-300" onClick={() => openNote("010128bowsy")}>Scutter</button>! he cried thickly.
    </p>
    <p>
      He came over to the gunrest and, thrusting a hand into Stephen's upper
      pocket, said:
    </p>
    <p>
      —{" "}Lend us a loan of your <button className="bg-gray-200 bg-center bg-cover hover:bg-green-300" onClick={() => openNote("010030noserag")}>noserag</button> to wipe my razor.
    </p>
    <span data-edition="ed1932" data-page="4"> </span>
    <p>
      Stephen suffered him to pull out and hold up on show by its corner a
      dirty crumpled handkerchief. Buck Mulligan wiped the razorblade neatly.
      Then, gazing over the handkerchief, he said:
    </p>
    <span data-edition="ed1961" data-page="4"> </span>
    <p>
      —{" "}The bard's noserag! A new art colour for <button className="bg-gray-200 bg-center bg-cover hover:bg-green-300" onClick={() => openNote("010031snotgreen")}>our Irish poets</button>: snotgreen.
      You can almost taste it, can't you?
    </p>
    <p>
      He mounted to the parapet again and gazed out over <button className="bg-gray-200 bg-center bg-cover hover:bg-green-300" onClick={() => openNote("010123dublinbay")}>Dublin bay</button>, his fair
      oakpale hair stirring slightly.
    </p>
    <p>
      —{" "}God! he said quietly. Isn't the sea <button className="bg-gray-200 bg-center bg-cover hover:bg-green-300" onClick={() => openNote("010032sweetmother")}>what Algy calls it: a great
      sweet mother</button>? The snotgreen sea. The scrotumtightening sea. <button className="bg-gray-200 bg-center bg-cover hover:bg-green-300" onClick={() => openNote("010033epioinopaponton")}><i>Epi oinopa
      ponton</i>.</button> Ah, Dedalus, the Greeks! I must teach you. You must <button className="bg-gray-200 bg-center bg-cover hover:bg-green-300" onClick={() => openNote("010034theoriginal")}>read them
      in the</button><span data-edition="ed1986" data-page="4"> </span> <button className="bg-gray-200 bg-center bg-cover hover:bg-green-300" onClick={() => openNote("010034theoriginal")}>original.</button> <button className="bg-gray-200 bg-center bg-cover hover:bg-green-300" onClick={() => openNote("010035thalatta")}><i>Thalatta! Thalatta</i>!</button> She is our great sweet mother.
      Come and look.
    </p>
    <p>
      Stephen stood up and went over to the parapet. Leaning on it he looked
      down on the water and on the <button className="bg-gray-200 bg-center bg-cover hover:bg-green-300" onClick={() => openNote("010036mailboat")}>mailboat</button> clearing the <button className="bg-gray-200 bg-center bg-cover hover:bg-green-300" onClick={() => openNote("010037harbourmouth")}>harbourmouth of
      Kingstown</button>.
    </p>
    <p>
      —{" "}<button className="bg-gray-200 bg-center bg-cover hover:bg-green-300" onClick={() => openNote("010039mightymother")}>Our mighty mother</button>! Buck Mulligan said.
    </p>
    <p>
      He turned abruptly <button className="bg-gray-200 bg-center bg-cover hover:bg-green-300" onClick={() => openNote("010038greateyes")}>his great searching eyes</button> from the sea to Stephen's
      face.
    </p>
    <p>
      —{" "}The aunt thinks <button className="bg-gray-200 bg-center bg-cover hover:bg-green-300" onClick={() => openNote("010042prayforme")}>you killed your mother</button>, he said. That's why she won't
      let me have anything to do with you.
    </p>
    <p>
      —{" "}<button className="bg-gray-200 bg-center bg-cover hover:bg-green-300" onClick={() => openNote("010041killergod")}>Someone killed her</button>, Stephen said gloomily.
    </p>
    <p>
      —{" "}You could have knelt down, damn it, Kinch, when your dying mother
      asked you, Buck Mulligan said. I'm <button className="bg-gray-200 bg-center bg-cover hover:bg-green-300" onClick={() => openNote("010040hyperborean")}>hyperborean</button> as much as you. But to
      think of your 
      <span data-edition="ed1939" data-page="6"> </span>
      mother <button className="bg-gray-200 bg-center bg-cover hover:bg-green-300" onClick={() => openNote("010042prayforme")}>begging you with her last breath to kneel down and
      pray for her. And you refused.</button> There is something sinister in you...
    </p>
    <p>
      He broke off and lathered again lightly his farther cheek. A tolerant
      smile curled his lips.
    </p>
    <p>
      —{" "}But a lovely <button className="bg-gray-200 bg-center bg-cover hover:bg-green-300" onClick={() => openNote("010043mummer")}>mummer</button>! he murmured to himself. Kinch, the loveliest
      mummer of them all!
    </p>
    <p>
      He shaved evenly and with care, in silence, seriously.
    </p>
    <p>
      Stephen, an elbow rested on the jagged granite, leaned his palm against
      his brow and gazed at the fraying edge of his shiny black coat-sleeve.
      Pain, that was not yet the <button className="bg-gray-200 bg-center bg-cover hover:bg-green-300" onClick={() => openNote("010044painfretted")}>pain of love</button>, fretted his heart. <button className="bg-gray-200 bg-center bg-cover hover:bg-green-300" onClick={() => openNote("010045waxandrosewood")}>Silently, in
      a dream she had come to him after her death</button>, her wasted body within its
      loose brown graveclothes giving off an odour of wax and rosewood, her
      breath, that had bent upon him, mute, reproachful, a faint odour of
      wetted ashes. Across the 
      <span data-edition="ed1922" data-page="5"> </span>
      threadbare cuffedge he saw the sea hailed as a
      great sweet mother by the wellfed voice beside him. The <button className="bg-gray-200 bg-center bg-cover hover:bg-green-300" onClick={() => openNote("010123dublinbay")}>ring of bay
      and skyline</button> held a dull green mass of liquid. A bowl of white<span data-edition="ed1932" data-page="5"> </span> china had
      stood beside her deathbed holding the green sluggish bile which she had
      torn up from her rotting liver by fits of loud groaning vomiting.
    </p>
    <span data-edition="ed1961" data-page="5"> </span>
    <p>
      Buck Mulligan wiped again his razorblade.
    </p>
    <p>
      —{" "}Ah, poor <button className="bg-gray-200 bg-center bg-cover hover:bg-green-300" onClick={() => openNote("010047dogsbody")}>dogsbody</button>! he said in a kind voice. I must give you a shirt
      and a few noserags. How are the secondhand <button className="bg-gray-200 bg-center bg-cover hover:bg-green-300" onClick={() => openNote("010128bowsy")}>breeks</button>?
    </p>
    <p>
      —{" "}They fit well enough, Stephen answered.
    </p>
    <p>
      Buck Mulligan attacked the hollow beneath his underlip.
    </p>
    <p>
      —{" "}The mockery of it, he said contentedly. Secondleg they should be. God
      knows what poxy <button className="bg-gray-200 bg-center bg-cover hover:bg-green-300" onClick={() => openNote("010128bowsy")}>bowsy</button> left them off. I have a lovely pair with a hair
      stripe, grey. You'll look spiffing in them. I'm not joking, Kinch. You
      look damn well when you're dressed.
    </p>
    <p>
      —{" "}Thanks, Stephen said. <button className="bg-gray-200 bg-center bg-cover hover:bg-green-300" onClick={() => openNote("010048greypants")}>I can't wear them if they are grey.</button>
    </p>
    <p>
      —{" "}He can't wear them, Buck Mulligan told his face in the mirror.
      Etiquette is etiquette. He kills his mother but he can't wear grey
      trousers.
    </p>
    <p>
      He folded his razor neatly and with stroking palps of fingers felt the
      smooth skin.
    </p>
    <span data-edition="ed1986" data-page="5"> </span>
    <p>
      Stephen turned his gaze from the sea and to the plump face with its
      smokeblue mobile eyes.
    </p>
    <p>
      —{" "}That fellow I was with in <button className="bg-gray-200 bg-center bg-cover hover:bg-green-300" onClick={() => openNote("010049shiptavern")}>the Ship</button> last night, said Buck Mulligan,
      says you have g.p.i. He's <button className="bg-gray-200 bg-center bg-cover hover:bg-green-300" onClick={() => openNote("010050dottyville")}>up in Dottyville with Conolly Norman</button>. <button className="bg-gray-200 bg-center bg-cover hover:bg-green-300" onClick={() => openNote("010051paresis")}>General
      paralysis of the insane!</button>
    </p>
    <p>
      He swept the mirror a half circle in the air <button className="bg-gray-200 bg-center bg-cover hover:bg-green-300" onClick={() => openNote("010021malachi")}>to flash the tidings abroad</button>
      in sunlight now radiant on the sea. His curling shaven lips laughed and
      the edges of his white glittering teeth. Laughter seized all his strong
      wellknit trunk.
    </p>
    <p>
      —{" "}Look at yourself, he said, you dreadful bard!
    </p>
    <p>
      Stephen bent forward and peered at the mirror held out to him, cleft by
      a crooked crack, hair on end. <button className="bg-gray-200 bg-center bg-cover hover:bg-green-300" onClick={() => openNote("010052otherssee")}>As he and others see me.</button> Who chose this
      face for me? This dogsbody to rid of vermin. It asks me too.
    </p>
    <p>
      —{" "}I pinched it out of the skivvy's room, Buck Mulligan said. It does her
      all right. The aunt always keeps plainlooking servants for Malachi. <button className="bg-gray-200 bg-center bg-cover hover:bg-green-300" onClick={() => openNote("040077ourfather")}>Lead
      him not into temptation.</button> And her name is <button className="bg-gray-200 bg-center bg-cover hover:bg-green-300" onClick={() => openNote("010054ursula")}>Ursula.</button>
    </p>
    <p>
      Laughing again, he brought the mirror away from Stephen's peering eyes.
    </p>
    <p>
      —{" "}<button className="bg-gray-200 bg-center bg-cover hover:bg-green-300" onClick={() => openNote("010055calibanmirror")}>The rage of Caliban at not seeing his face in a mirror</button>, he said. If
      Wilde were only alive to see you!
    </p>
    <span data-edition="ed1922" data-page="6"> </span>
    <p>
      Drawing back and pointing, Stephen said with bitterness:
    </p>
    <span data-edition="ed1939" data-page="7"> </span>
    <p>
      —{" "}It is <button className="bg-gray-200 bg-center bg-cover hover:bg-green-300" onClick={() => openNote("010056crackedlookingglass")}>a symbol of Irish art. The cracked lookingglass of a servant.</button>
    </p>
    <span data-edition="ed1961" data-page="6"> </span>
    <span data-edition="ed1932" data-page="6"> </span>
    <p>
      Buck Mulligan suddenly <button className="bg-gray-200 bg-center bg-cover hover:bg-green-300" onClick={() => openNote("010152linkedarm")}>linked his arm</button> in Stephen's and walked with him
      round the tower, his razor and mirror clacking in the pocket where he
      had thrust them.
    </p>
    <p>
      —{" "}It's not fair to tease you like that, Kinch, is it? he said kindly.
      God knows you have more spirit than any of them.
    </p>
    <p>
      Parried again. <button className="bg-gray-200 bg-center bg-cover hover:bg-green-300" onClick={() => openNote("010003mirrorrazor")}>He fears the lancet of my art as I fear that of his.</button> The
      cold steelpen.
    </p>
    <p>
      —{" "}Cracked lookingglass of a servant! Tell that to the <button className="bg-gray-200 bg-center bg-cover hover:bg-green-300" onClick={() => openNote("010023haines")}>oxy chap</button>
      downstairs and touch him for a <button className="bg-gray-200 bg-center bg-cover hover:bg-green-300" onClick={() => openNote("010019money")}>guinea</button>. He's stinking with money and
      thinks you're not a gentleman. His old fellow made his tin by <button className="bg-gray-200 bg-center bg-cover hover:bg-green-300" onClick={() => openNote("010058bloodyswindle")}>selling
      jalap to Zulus or some bloody swindle</button> or other. God, Kinch, if you and I
      could only work together we might do something for the island. <button className="bg-gray-200 bg-center bg-cover hover:bg-green-300" onClick={() => openNote("010022hellenise")}>Hellenise it.</button>
    </p>
    <p>
      <button className="bg-gray-200 bg-center bg-cover hover:bg-green-300" onClick={() => openNote("010060cranlysarm")}>Cranly's arm.</button> His arm.
    </p>
    <p>
      —{" "}And to think of your having to beg from these swine. I'm the only one
      that knows what you are. Why don't you trust me more? What have you
      up your nose against me? Is it Haines? If he makes any noise here I'll
      bring down Seymour and we'll give him <button className="bg-gray-200 bg-center bg-cover hover:bg-green-300" onClick={() => openNote("010063ragging")}>a ragging worse than they gave
      Clive Kempthorpe.</button>
    </p>
    <p>
      Young shouts of moneyed voices in Clive Kempthorpe's rooms. <button className="bg-gray-200 bg-center bg-cover hover:bg-green-300" onClick={() => openNote("010024stranger")}>Palefaces</button>:
      they hold their ribs with laughter, one clasping another. O, I shall
      expire! <button className="bg-gray-200 bg-center bg-cover hover:bg-green-300" onClick={() => openNote("010061breaknews")}>Break the news to her gently</button>, Aubrey! I shall die! With slit
      ribbons of his shirt whipping the air he hops and hobbles round the
      table, with trousers down at heels, chased by Ades of <button className="bg-gray-200 bg-center bg-cover hover:bg-green-300" onClick={() => openNote("010063ragging")}>Magdalen</button> with the
      tailor's<span data-edition="ed1986" data-page="6"> </span> shears. <button className="bg-gray-200 bg-center bg-cover hover:bg-green-300" onClick={() => openNote("010063ragging")}>A scared calf's face gilded with marmalade. I don't
      want to be debagged!</button> Don't you play the giddy ox with me!
    </p>
    <p>
      Shouts from the open window startling evening in the quadrangle. A deaf
      gardener, aproned, masked with <button className="bg-gray-200 bg-center bg-cover hover:bg-green-300" onClick={() => openNote("010022hellenise")}>Matthew Arnold</button>'s face, pushes his mower
      on the sombre lawn watching narrowly the dancing motes of grasshalms.
    </p>
    <p>
      <button className="bg-gray-200 bg-center bg-cover hover:bg-green-300" onClick={() => openNote("010065omphalos")}>To ourselves... new paganism... omphalos.</button>
    </p>
    <p>
      —{" "}Let him stay, Stephen said. There's nothing wrong with him except at
      night.
    </p>
    <p>
      —{" "}Then what is it? Buck Mulligan asked impatiently. Cough it up. I'm
      quite frank with you. What have you against me now?
    </p>
    <p>
      They halted, looking towards the blunt cape of <button className="bg-gray-200 bg-center bg-cover hover:bg-green-300" onClick={() => openNote("010066brayhead")}>Bray Head</button> that lay on the
      water like the snout of a sleeping whale. Stephen <button className="bg-gray-200 bg-center bg-cover hover:bg-green-300" onClick={() => openNote("010152linkedarm")}>freed his arm</button> quietly.
    </p>
    <span data-edition="ed1961" data-page="7"> </span>
    <span data-edition="ed1922" data-page="7"> </span>
    <p>
      —{" "}Do you wish me to tell you? he asked.
    </p>
    <p>
      —{" "}Yes, what is it? Buck Mulligan answered. I don't remember anything.
    </p>
    <p>
      He looked in Stephen's face as he spoke. A light wind passed his <span data-edition="ed1932" data-page="7"></span>brow,
      fanning softly his fair uncombed hair and stirring silver points of
      anxiety in his eyes.
    </p>
    <p>
      Stephen, depressed by his own voice, said:
    </p>
    <p>
      —{" "}Do you remember the first day I went to your house after my mother's
      death?
    </p>
    <p>
      Buck Mulligan frowned quickly and said:
    </p>
    <p>
      —{" "}What? Where? I can't remember anything. <button className="bg-gray-200 bg-center bg-cover hover:bg-green-300" onClick={() => openNote("010067hartley")}>I remember only ideas and
      sensations.</button> Why? What happened in the name of God?
    </p>
    <p>
      —{" "}You were making tea, Stephen said, and I went across the landing to
      get more hot water. Your mother and some visitor came out of the
      drawingroom. She asked you who was in your room.
    </p>
    <p>
      —{" "}Yes? Buck Mulligan said. What did I say? I forget.
    </p>
    <p>
      —{" "}You said, Stephen answered, <button className="bg-gray-200 bg-center bg-cover hover:bg-green-300" onClick={() => openNote("010059pulsesbeating")}><i>O, it's only Dedalus whose mother is
      beastly dead.</i></button>
    </p>
    <p>
      A <button className="bg-gray-200 bg-center bg-cover hover:bg-green-300" onClick={() => openNote("010059pulsesbeating")}>flush</button> which made him seem younger and more engaging rose to Buck
      Mulligan's cheek.
    </p>
    <span data-edition="ed1939" data-page="8"> </span>
    <p>
      —{" "}Did I say that? he asked. Well? What harm is that?
    </p>
    <p>
      He shook his constraint from him nervously.
    </p>
    <p>
      —{" "}And what is death, he asked, your mother's or yours or my own? You
      saw only your mother die. I see them pop off every day in <button className="bg-gray-200 bg-center bg-cover hover:bg-green-300" onClick={() => openNote("010068themater")}>the Mater and
      Richmond</button> and cut up into tripes in the dissectingroom. It's a beastly
      thing and nothing else. It simply doesn't matter. You wouldn't kneel
      down to pray for your mother on her deathbed when she asked you. Why?
      Because you have the cursed <button className="bg-gray-200 bg-center bg-cover hover:bg-green-300" onClick={() => openNote("010008jesuit")}>jesuit</button> strain in you, only it's injected the
      wrong way. To me it's all a mockery and beastly. Her cerebral lobes
      are not functioning. She calls the doctor <button className="bg-gray-200 bg-center bg-cover hover:bg-green-300" onClick={() => openNote("010069teazle")}>sir Peter Teazle</button> and picks
      buttercups off the quilt. Humour her till it's over. You crossed her
      last wish in death and yet you sulk with me because I don't whinge like
      some <button className="bg-gray-200 bg-center bg-cover hover:bg-green-300" onClick={() => openNote("010070mutes")}>hired mute</button><span data-edition="ed1986" data-page="7"> </span><button className="bg-gray-200 bg-center bg-cover hover:bg-green-300" onClick={() => openNote("010070mutes")}>from Lalouette's</button>. Absurd! I suppose I did say it. I
      didn't mean to offend the memory of your mother.
    </p>
    <p>
      He had spoken himself into boldness. Stephen, shielding the <button className="bg-gray-200 bg-center bg-cover hover:bg-green-300" onClick={() => openNote("010059pulsesbeating")}>gaping
      wounds</button> which the words had left in his heart, said very coldly:
    </p>
    <p>
      —{" "}I am not thinking of the offence to my mother.
    </p>
    <span data-edition="ed1961" data-page="8"> </span>
    <p>
      —{" "}Of what then? Buck Mulligan asked.
    </p>
    <span data-edition="ed1922" data-page="8"> </span>
    <p>
      —{" "}Of the offence to me, Stephen answered.
    </p>
    <p>
      Buck Mulligan swung round on his heel.
    </p>
    <p>
      —{" "}O, an impossible person! he exclaimed.
    </p>
    <p>
      He walked off quickly round the parapet. Stephen stood at <button className="bg-gray-200 bg-center bg-cover hover:bg-green-300" onClick={() => openNote("010009tower")}>his post</button>,
      gazing over the calm sea towards the headland. Sea and headland now grew
      dim. <span data-edition="ed1932" data-page="8"> </span><button className="bg-gray-200 bg-center bg-cover hover:bg-green-300" onClick={() => openNote("010059pulsesbeating")}>Pulses were beating in his eyes, veiling their sight, and he felt
      the fever of his cheeks.</button>
    </p>
    <p>
      A voice within the tower called loudly:
    </p>
    <p>
      —{" "}Are you up there, Mulligan?
    </p>
    <p>
      —{" "}I'm coming, Buck Mulligan answered.
    </p>
    <p>
      He turned towards Stephen and said:
    </p>
    <p>
      —{" "}Look at the sea. What does it care about offences? Chuck <button className="bg-gray-200 bg-center bg-cover hover:bg-green-300" onClick={() => openNote("010008jesuit")}>Loyola</button>,
      Kinch, and come on down. The <button className="bg-gray-200 bg-center bg-cover hover:bg-green-300" onClick={() => openNote("010024stranger")}>Sassenach</button> wants his morning rashers.
    </p>
    <p>
      His head halted again for a moment at the top of the staircase, level
      with the roof:
    </p>
    <p>
      —{" "}Don't mope over it all day, he said. I'm inconsequent. Give up the
      <button className="bg-gray-200 bg-center bg-cover hover:bg-green-300" onClick={() => openNote("010071moodybrooding")}>moody brooding</button>.
    </p>
    <p>
      His head vanished but the drone of his descending voice boomed out of
      the <button className="bg-gray-200 bg-center bg-cover hover:bg-green-300" onClick={() => openNote("010002stairhead")}>stairhead</button>:
    </p>
    <i></i>
    <p><i><button className="bg-gray-200 bg-center bg-cover hover:bg-green-300" onClick={() => openNote("010072bittermystery")}>And no more turn aside and brood <br/>
      Upon love's bitter mystery<br/>
      For Fergus rules the brazen cars.</button></i>
    </p>
    <p>
      <button className="bg-gray-200 bg-center bg-cover hover:bg-green-300" onClick={() => openNote("010072bittermystery")}>Woodshadows</button> floated silently by through the morning peace from the
      stairhead seaward where he gazed. Inshore and farther out the mirror of
      water whitened, spurned by lightshod hurrying feet. <button className="bg-gray-200 bg-center bg-cover hover:bg-green-300" onClick={() => openNote("010072bittermystery")}>White breast of
      the dim sea.</button> The <button className="bg-gray-200 bg-center bg-cover hover:bg-green-300" onClick={() => openNote("010073twiningstresses")}>twining stresses,</button> two by two. A hand plucking the
      harpstrings merging their twining chords. Wavewhite wedded words
      shimmering on the dim tide.
    </p>
    <p>
      <button className="bg-gray-200 bg-center bg-cover hover:bg-green-300" onClick={() => openNote("010074cloudcover")}>A cloud began to cover the sun slowly,</button> shadowing the bay in
      deeper green. It lay behind him, <button className="bg-gray-200 bg-center bg-cover hover:bg-green-300" onClick={() => openNote("010159bitterwaters")}>a bowl of bitter waters. </button><button className="bg-gray-200 bg-center bg-cover hover:bg-green-300" onClick={() => openNote("010072bittermystery")}>Fergus' song</button>:
      I sang it alone in the house, holding down the long dark chords. Her
      door was open: she wanted to hear my music. <button className="bg-gray-200 bg-center bg-cover hover:bg-green-300" onClick={() => openNote("010042prayforme")}>Silent with awe and pity
      I went to her bedside.</button> She was crying in her wretched bed. For those
      words, Stephen: love's bitter mystery.
    </p>
    <span data-edition="ed1939" data-page="9"> </span>
    <p>
      Where now?
    </p>
    <span data-edition="ed1922" data-page="9"> </span>
    <p> 
      Her secrets: old <button className="bg-gray-200 bg-center bg-cover hover:bg-green-300" onClick={() => openNote("010075featherfans")}>feather fans</button>, tasselled <button className="bg-gray-200 bg-center bg-cover hover:bg-green-300" onClick={() => openNote("010076dancecards")}>dancecards</button>, powdered with musk,
      a gaud of amber beads in her locked drawer. A <span data-edition="ed1961" data-page="9"> </span>birdcage hung in the sunny
      window of her house when she was a girl. She heard <button className="bg-gray-200 bg-center bg-cover hover:bg-green-300" onClick={() => openNote("010077pantomime")}>old Royce sing</button><span data-edition="ed1986" data-page="8"> </span><button className="bg-gray-200 bg-center bg-cover hover:bg-green-300" onClick={() => openNote("010077pantomime")}>{" "}in the
      pantomime of Turko the terrible</button> and laughed with others when he sang:
    </p>
    <p><i><button className="bg-gray-200 bg-center bg-cover hover:bg-green-300" onClick={() => openNote("010078invisibility")}>I am the boy <br/>
      That can enjoy <br/>
      Invisibility.</button></i>
    </p>
    <span data-edition="ed1932" data-page="9"> </span>
    <p>
      Phantasmal mirth, folded away: muskperfumed.
    </p>
    <p>
      <i>And no more turn aside and brood.</i>
    </p>
    <p>
      Folded away in the <button className="bg-gray-200 bg-center bg-cover hover:bg-green-300" onClick={() => openNote("010079akasicrecords")}>memory of nature</button> with her toys. Memories beset his
      brooding brain. Her glass of water from the kitchen tap when she had
      approached the sacrament. A cored apple, filled with brown sugar,
      roasting for her at the hob on a dark autumn evening. Her shapely
      fingernails reddened by the <button className="bg-gray-200 bg-center bg-cover hover:bg-green-300" onClick={() => openNote("010080squashedlice")}>blood of squashed lice</button> from the children's
      shirts.
    </p>
    <p>
      <button className="bg-gray-200 bg-center bg-cover hover:bg-green-300" onClick={() => openNote("010045waxandrosewood")}>In a dream, silently, she had come to him</button>, her wasted body within its
      loose graveclothes giving off an odour of wax and rosewood, her breath,
      bent over him with mute secret words, a faint odour of wetted ashes.
    </p>
    <p>
      Her glazing eyes, staring out of death, to shake and bend my soul. <button className="bg-gray-200 bg-center bg-cover hover:bg-green-300" onClick={() => openNote("010081staringoutofdeath")}>On me
      alone.</button> The ghostcandle to light her agony. Ghostly light on the tortured
      face. Her hoarse loud breath rattling in horror, while all prayed on
      their knees. Her eyes on me to strike me down. <button className="bg-gray-200 bg-center bg-cover hover:bg-green-300" onClick={() => openNote("010082liliatarutilantium")}><i>Liliata rutilantium te
      confessorum turma circumdet: iubilantium te virginum chorus excipiat.</i></button>
    </p>
    <p>
      <button className="bg-gray-200 bg-center bg-cover hover:bg-green-300" onClick={() => openNote("010062ghoul")}>Ghoul! Chewer of corpses!</button>
    </p>
    <p>
      <button className="bg-gray-200 bg-center bg-cover hover:bg-green-300" onClick={() => openNote("010083nomother")}>No, mother.</button> Let me be and let me live.
    </p>
    <p>
      —{" "}Kinch ahoy!
    </p>
    <p>
      Buck Mulligan's voice sang from within the tower. It came nearer up the
      staircase, calling again. Stephen, still trembling at his soul's cry,
      heard <button className="bg-gray-200 bg-center bg-cover hover:bg-green-300" onClick={() => openNote("010074cloudcover")}>warm running sunlight</button> and in the air behind him friendly words.
    </p>
    <p>
      —{" "}Dedalus, come down, like a good <button className="bg-gray-200 bg-center bg-cover hover:bg-green-300" onClick={() => openNote("010128bowsy")}>mosey</button>. Breakfast is ready. Haines is
      apologising for waking us last night. It's all right.
    </p>
    <p>
      —{" "}I'm coming, Stephen said, turning.
    </p>
    <p>
      —{" "}Do, for Jesus' sake, Buck Mulligan said. For my sake and for all our
      sakes.
    </p>
    <span data-edition="ed1922" data-page="10"> </span>
    <p>
      His head disappeared and reappeared.
    </p>
    <p>
      —{" "}I told him your symbol of Irish art. He says it's very clever. Touch
      him for a quid, will you? A <button className="bg-gray-200 bg-center bg-cover hover:bg-green-300" onClick={() => openNote("010019money")}>guinea</button>, I mean.
    </p>
    <span data-edition="ed1961" data-page="10"> </span>
    <p>
      —{" "}I get paid this morning, Stephen said.
    </p>
    <p>
      —{" "}The school kip? Buck Mulligan said. How much? Four quid? Lend us one.
    </p>
    <p>
      —{" "}If you want it, Stephen said.
    </p>
    <p>
      —{" "}Four shining <button className="bg-gray-200 bg-center bg-cover hover:bg-green-300" onClick={() => openNote("010019money")}>sovereigns</button>, Buck Mulligan cried with delight. We'll
      have a glorious drunk to astonish the druidy <button className="bg-gray-200 bg-center bg-cover hover:bg-green-300" onClick={() => openNote("010018druids")}>druids</button>. Four omnipotent
      sovereigns.
    </p>
    <p>
      He flung up his hands and tramped down the stone stairs, singing out of
      tune with a Cockney accent:
    </p>
    <span data-edition="ed1939" data-page="10"> </span>
    <span data-edition="ed1932" data-page="10"> </span>
    <span data-edition="ed1986" data-page="9"> </span>
    <p><button className="bg-gray-200 bg-center bg-cover hover:bg-green-300" onClick={() => openNote("010029coronation")}><i>O, won't we have a merry time, <br/>
      Drinking whisky, beer and wine! <br/>
      On coronation, <br/>
      Coronation day! <br/>
      O, won't we have a merry time <br/>
      On coronation day! <br/></i></button>
    </p>
    <p>
      <button className="bg-gray-200 bg-center bg-cover hover:bg-green-300" onClick={() => openNote("010074cloudcover")}>Warm sunshine merrying over the sea</button>. The nickel shavingbowl shone,
      forgotten, on the parapet. Why should I bring it down? Or leave it there
      all day, forgotten friendship?
    </p>
    <p>
      He went over to it, held it in his hands awhile, feeling its coolness,
      smelling the clammy slaver of the lather in which the brush was stuck. So I carried the boat of incense then at <button className="bg-gray-200 bg-center bg-cover hover:bg-green-300" onClick={() => openNote("010157clongowes")}>Clongowes</button>. I am another now and
      yet the same. A servant too. <button className="bg-gray-200 bg-center bg-cover hover:bg-green-300" onClick={() => openNote("010084server")}>A server of a servant.</button>
    </p>
    <p>
      <button className="bg-gray-200 bg-center bg-cover hover:bg-green-300" onClick={() => openNote("010085towerlivingroom")}>In the gloomy domed livingroom of the tower Buck Mulligan's gowned form
      moved briskly about the hearth to and fro, hiding and revealing its
      yellow glow. Two shafts of soft daylight fell across the flagged floor
      from the high barbacans</button>: and at the meeting of their rays a cloud of
      coalsmoke and fumes of fried grease floated, turning.
    </p>
    <p>
      —{" "}We'll be choked, Buck Mulligan said. Haines, open that door, will you?
    </p>
    <p>
      Stephen laid the shavingbowl on the locker. A tall figure <button className="bg-gray-200 bg-center bg-cover hover:bg-green-300" onClick={() => openNote("010085towerlivingroom")}>rose from the
      hammock where it had been sitting, went to the doorway and pulled open
      the inner doors.</button>
    </p>
    <p>
      —{" "}Have you <button className="bg-gray-200 bg-center bg-cover hover:bg-green-300" onClick={() => openNote("010146hugekey")}>the key</button>? a voice asked.
    </p>
    <p>
      —{" "}Dedalus has it, Buck Mulligan said. <button className="bg-gray-200 bg-center bg-cover hover:bg-green-300" onClick={() => openNote("010128bowsy")}>Janey Mack</button>, I'm choked!
    </p>
    <span data-edition="ed1922" data-page="11"> </span>
    <p>
      He howled, without looking up from the fire:
    </p>
    <p>
      —{" "}Kinch!
    </p>
    <p>
      —{" "}It's in the lock, Stephen said, coming forward.
    </p>
    <p>
      The key scraped round harshly twice and, when the heavy door had been
      set ajar, welcome light and bright air entered.<span data-edition="ed1961" data-page="11"> </span>Haines stood at the
      doorway, looking out. Stephen haled his upended valise to the table and
      sat down to wait. Buck Mulligan tossed the fry on to the dish beside
      him. Then he carried the dish and a large teapot over to the table, set
      them down heavily and sighed with relief.
    </p>
    <p>
      —{" "}I'm melting, he said, <button className="bg-gray-200 bg-center bg-cover hover:bg-green-300" onClick={() => openNote("010053candledildo")}>as the candle remarked when... </button>But, hush! Not a
      word more on that subject! Kinch, wake up! Bread, butter, honey. Haines,
      come in. The grub is ready. Bless us, O Lord, and these thy gifts.
      Where's the sugar? O, <button className="bg-gray-200 bg-center bg-cover hover:bg-green-300" onClick={() => openNote("010128bowsy")}>jay</button>, there's no milk.
    </p>
    <p>
      Stephen fetched the loaf and the pot of honey and the buttercooler <span data-edition="ed1932" data-page="11">{" "}</span>from
      the locker. Buck Mulligan sat down in a sudden pet.
    </p>
    <p>
      —{" "}What sort of a kip is this? he said. I told her to come after eight.
    </p>
    <p>
      —{" "}We can drink it black, Stephen said. There's a lemon in the
      locker.
    </p>
    <p>
      —{" "}O, damn you and your Paris fads! Buck Mulligan said. I want Sandycove
      milk.
    </p>
    <span data-edition="ed1986" data-page="10"> </span>
    <p>
      Haines came in from the doorway and said quietly:
    </p>
    <p>
      —{" "}That woman is coming up with the milk.
    </p>
    <p>
      —{" "}The blessings of God on you! Buck Mulligan cried, jumping up from his
      chair. Sit down. Pour out the tea there. The sugar is in the bag. Here,
      I can't go fumbling at the damned eggs.  He hacked through the fry on the dish 
      and slapped it out on three plates, saying:
    </p>
    <p>
      —{" "}<button className="bg-gray-200 bg-center bg-cover hover:bg-green-300" onClick={() => openNote("010057crossed")}><i>In nomine Patris et Filii et Spiritus Sancti.</i></button>
    </p>
    <span data-edition="ed1939" data-page="11"> </span>
    <p>
      Haines sat down to pour out the tea.
    </p>
    <p>
      —{" "}I'm giving you two lumps each, he said. But, I say, Mulligan, you do
      make strong tea, don't you?
    </p>
    <p>
      Buck Mulligan, hewing thick slices from the loaf, said in an old woman's
      wheedling voice:
    </p>
    <p>
      —{" "}When I makes tea I makes tea, as <button className="bg-gray-200 bg-center bg-cover hover:bg-green-300" onClick={() => openNote("010134mothergrogan")}>old mother Grogan</button> said. And when I
      makes water I makes water.
    </p>
    <p>
      —{" "}By Jove, it is tea, Haines said.
    </p>
    <p>
      Buck Mulligan went on hewing and wheedling:
    </p>
    <p>
      —{" "}<i>So I do, Mrs Cahill,</i> says she. <i>Begob, ma'am,</i> says Mrs Cahill, <i>God
      send you don't make them in the one pot.</i>
    </p>
    <span data-edition="ed1922" data-page="12"> </span>
    <p>
      He lunged towards his messmates in turn a thick slice of bread, <button className="bg-gray-200 bg-center bg-cover hover:bg-green-300" onClick={() => openNote("010009tower")}>impaled
      on his knife.</button>
    </p>
    <p>
      —{" "}<button className="bg-gray-200 bg-center bg-cover hover:bg-green-300" onClick={() => openNote("010064dundrum")}>That's folk, he said very earnestly, for your book, Haines. Five
      lines of text and ten pages of notes about the folk and</button><span data-edition="ed1961" data-page="12"> </span><button className="bg-gray-200 bg-center bg-cover hover:bg-green-300" onClick={() => openNote("010064dundrum")}> the fishgods of
      Dundrum. Printed by the weird sisters in the year of the big wind.</button>
    </p>
    <p>
      He turned to Stephen and asked in a fine puzzled voice, lifting his
      brows:
    </p>
    <p>
      —{" "}Can you recall, brother, is mother Grogan's tea and water pot spoken
      of <button className="bg-gray-200 bg-center bg-cover hover:bg-green-300" onClick={() => openNote("010064dundrum")}>in the Mabinogion or is it in the Upanishads?</button> 
    </p>
    <p>
      —{" "}I doubt it, said Stephen gravely.
    </p>
    <p>
      —{" "}Do you now? Buck Mulligan said in the same tone. Your reasons, pray?
    </p>
    <p>
      —{" "}I fancy, Stephen said as he ate, it did not exist in or out of the
      Mabinogion. Mother Grogan was, one imagines, a kinswoman of <button className="bg-gray-200 bg-center bg-cover hover:bg-green-300" onClick={() => openNote("010086maryann")}>Mary Ann.</button>
    </p>
    <p>
      Buck Mulligan's face smiled with delight.
    </p>
    <p>
      —{" "}Charming! he said in a finical sweet voice, showing his white teeth<span data-edition="ed1932" data-page="12"> </span>
      and blinking his eyes pleasantly. Do you think she was? Quite charming!
    </p>
    <p>
      Then, suddenly overclouding all his features, he growled in a hoarsened
      rasping voice as he hewed again vigorously at the loaf:
    </p>
    <p><i>—{" "}{" "}<button className="bg-gray-200 bg-center bg-cover hover:bg-green-300" onClick={() => openNote("010086maryann")}>For old Mary Ann <br/>
      She doesn't care a damn. <br/>
      But, hising up her petticoats... <br/></button></i>
    </p>
    <p>
      He crammed his mouth with fry and munched and droned.
    </p>
    <p>
      The doorway was darkened by an entering form.
    </p>
    <p>
      —{" "}The milk, sir!
    </p>
    <p>
      —{" "}Come in, ma'am, Mulligan said. Kinch, get the jug.
    </p>
    <span data-edition="ed1986" data-page="11"> </span>
    <p>
      An old woman came forward and stood by Stephen's elbow.
    </p>
    <p>
      —{" "}That's a lovely morning, sir, she said. Glory be to God.
    </p>
    <p>
      —{" "}To whom? Mulligan said, glancing at her. Ah, to be sure!
    </p>
    <p>
      Stephen reached back and took the milkjug from the locker.
    </p>
    <p>
      —{" "}The islanders, Mulligan said to Haines casually, speak frequently of
      the <button className="bg-gray-200 bg-center bg-cover hover:bg-green-300" onClick={() => openNote("010087prepuces")}>collector of prepuces.</button>
    </p>
    <p>
      —{" "}How much, sir? asked the old woman.
    </p>
    <p>
      —{" "}A quart, Stephen said.
    </p>
    <p>
      He watched her pour into the measure and thence into the jug rich white
      <span data-edition="ed1922" data-page="13"> </span>
      milk, <button className="bg-gray-200 bg-center bg-cover hover:bg-green-300" onClick={() => openNote("040058shegoatsudder")}>not hers. Old shrunken paps.</button> She poured again a measureful and
      a <button className="bg-gray-200 bg-center bg-cover hover:bg-green-300" onClick={() => openNote("010108tilly")}>tilly</button>. Old and 
      <span data-edition="ed1939" data-page="12"> </span>
      secret she had entered from a morning world, <button className="bg-gray-200 bg-center bg-cover hover:bg-green-300" onClick={() => openNote("010089maybemessenger")}>maybe
      a messenger.</button> She praised the goodness of the milk, pouring it out.
      Crouching by a patient cow at daybreak in the lush field, a witch on her
      toadstool, her <span data-edition="ed1961" data-page="13"> </span>wrinkled fingers quick at the squirting dugs. They lowed
      about her whom they knew, dewsilky cattle. <button className="bg-gray-200 bg-center bg-cover hover:bg-green-300" onClick={() => openNote("010090shanvanvocht")}>Silk of the kine and poor old
      woman</button>, names given her in old times. A wandering crone, <button className="bg-gray-200 bg-center bg-cover hover:bg-green-300" onClick={() => openNote("010089maybemessenger")}>lowly form of
      an immortal</button> serving her conqueror and her gay betrayer, their common
      cuckquean, a messenger from the secret morning. To serve or to upbraid,
      whether he could not tell: but scorned to beg her favour.
    </p>
    <p>
      —{" "}It is indeed, ma'am, Buck Mulligan said, pouring milk into their cups.
    </p>
    <p>
      —{" "}Taste it, sir, she said.
    </p>
    <p>
      He drank at her bidding.
    </p>
    <p>
      —{" "}If we could only live on good food like that, he said to her somewhat
      loudly, we wouldn't have the country full of rotten teeth and rotten
      guts. <button className="bg-gray-200 bg-center bg-cover hover:bg-green-300" onClick={() => openNote("060036bogs")}>Living in a bogswamp</button>, eating cheap food and the streets paved with
      dust, horsedung and consumptives' spits.
    </p>
    <p>
      —{" "}Are you a medical student, sir? the old woman asked.
    </p>
    <span data-edition="ed1932" data-page="13"> </span>
    <p>
      —{" "}I am, ma'am, Buck Mulligan answered.
    </p>
    <p>
      Stephen listened in scornful silence. She bows her old head to a voice
      that speaks to her loudly, her bonesetter, her medicineman: me she
      slights. To the voice that will <button className="bg-gray-200 bg-center bg-cover hover:bg-green-300" onClick={() => openNote("010155shriveandoil")}>shrive and oil for the grave</button> all there
      is of her but her <button className="bg-gray-200 bg-center bg-cover hover:bg-green-300" onClick={() => openNote("010148uncleanloins")}>woman's unclean loins</button>, of man's flesh made not in
      God's likeness, the serpent's prey. And to the loud voice that now bids
      her be silent with wondering unsteady eyes.
    </p>
    <p>
      —{" "}Do you understand what he says? Stephen asked her.
    </p>
    <p>
      —{" "}Is it French you are talking, sir? the old woman said to Haines.
    </p>
    <p>
      Haines spoke to her again a longer speech, confidently.
    </p>
    <p>
      <button className="bg-gray-200 bg-center bg-cover hover:bg-green-300" onClick={() => openNote("010091speakirish")}>—{" "}Irish, Buck Mulligan said. Is there Gaelic on you?</button>
    </p>
    <p>
      <button className="bg-gray-200 bg-center bg-cover hover:bg-green-300" onClick={() => openNote("010091speakirish")}>—{" "}I thought it was Irish, she said, by the sound of it. Are you from the
      west, sir?</button>
    </p>
    <p>
      —{" "}I am an Englishman, Haines answered.
    </p>
    <p>
      —{" "}He's English, Buck Mulligan said, and he thinks we ought to speak
      Irish in Ireland.
    </p>
    <span data-edition="ed1986" data-page="12"> </span>
    <p>
      —{" "}Sure we ought to, the old woman said, and I'm ashamed I don't speak
      the language myself. I'm told it's a grand language by them that knows.
    </p>
    <p>
      —{" "}Grand is no name for it, said Buck Mulligan. Wonderful entirely. Fill
      us out some more tea, Kinch. Would you like a cup, ma'am?
    </p>
    <span data-edition="ed1922" data-page="14"> </span>
    <span data-edition="ed1961" data-page="14"> </span>
    <p>
      —{" "}No, thank you, sir, the old woman said, slipping the ring of the
      milkcan on her forearm and about to go.
    </p>
    <p>
      Haines said to her:
    </p>
    <p>
      —{" "}Have you your bill? We had better pay her, Mulligan, hadn't we?
    </p>
    <p>
      Stephen filled again the three cups.
    </p>
    <p>
      —{" "}Bill, sir? she said, halting. Well, <button className="bg-gray-200 bg-center bg-cover hover:bg-green-300" onClick={() => openNote("010019money")}>it's seven mornings a pint at
      twopence is seven twos is a shilling and twopence over and these three
      mornings a quart at fourpence is three quarts is a shilling and one and two is two and two</button>, sir.
    </p>
    <p>
      Buck Mulligan sighed and, having filled his mouth with a crust thickly
      buttered on both sides, stretched forth his legs and began to search his
      trouser pockets.
    </p>
    <p>
      —{" "}Pay up and look pleasant, Haines said to him, smiling.
    </p>
    <p>
      Stephen filled a third cup, a spoonful of tea colouring faintly the
      thick rich milk. Buck Mulligan brought up a <button className="bg-gray-200 bg-center bg-cover hover:bg-green-300" onClick={() => openNote("010019money")}>florin</button>, twisted it round in
      his fingers and cried:
    </p>
    <p>
      —{" "}A miracle!
    </p>
    <span data-edition="ed1939" data-page="13"> </span>
    <p>
      He passed it along the table towards the old woman, saying:
    </p>
    <p>
      —{" "}<button className="bg-gray-200 bg-center bg-cover hover:bg-green-300" onClick={() => openNote("010092oblation")}>Ask nothing more of me, sweet. All I can give you I give.</button>
    </p>
    <p>
      Stephen laid the coin in her uneager hand.
    </p>
    <span data-edition="ed1932" data-page="14"> </span>
    <p>
      —{" "}We'll owe twopence, he said.
    </p>
    <p>
      —{" "}<button className="bg-gray-200 bg-center bg-cover hover:bg-green-300" onClick={() => openNote("010143timeenough")}>Time enough</button>, sir, she said, taking the coin. Time enough. Good
      morning, sir.
    </p>
    <p>
      She curtseyed and went out, followed by Buck Mulligan's tender chant:
    </p>
    <p><i>—{" "}{" "}<button className="bg-gray-200 bg-center bg-cover hover:bg-green-300" onClick={() => openNote("010092oblation")}>Heart of my heart, were it more, <br/>
      More would be laid at your feet.</button></i>
    </p>
    <p>
      He turned to Stephen and said:
    </p>
    <p>
      —{" "}Seriously, Dedalus. I'm stony. Hurry out to your school kip and bring
      us back some money. Today the bards must drink and junket. <button className="bg-gray-200 bg-center bg-cover hover:bg-green-300" onClick={() => openNote("010093doduty")}>Ireland
      expects that every man this day will do his duty.</button>
    </p>
    <p>
      —{" "}That reminds me, Haines said, rising, that I have to visit your <button className="bg-gray-200 bg-center bg-cover hover:bg-green-300" onClick={() => openNote("010144nationallibrary")}>national library</button> today.
    </p>
    <p>
      —{" "}Our swim first, Buck Mulligan said.
    </p>
    <p>
      He turned to Stephen and asked blandly:
    </p>
    <p>
      —{" "}Is this the day for your monthly wash, Kinch?
    </p>
    <p>
      Then he said to Haines:
    </p>
    <p>—{" "}The unclean bard makes a point of 
      <button className="bg-gray-200 bg-center bg-cover hover:bg-green-300" onClick={() => openNote("010133monthlywash")}>washing once a month</button>.
    </p>
    <span data-edition="ed1922" data-page="15"> </span>
    <span data-edition="ed1961" data-page="15"> </span>
    <p>
      —{" "}<button className="bg-gray-200 bg-center bg-cover hover:bg-green-300" onClick={() => openNote("010116gulfstream")}>All Ireland is washed by the gulfstream</button>, Stephen said as he let honey
      trickle over a slice of the loaf.
    </p>
    <span data-edition="ed1986" data-page="13"> </span>
    <p>
      Haines from the corner where he was knotting easily a scarf about the
      loose collar of his tennis shirt spoke:
    </p>
    <p>
      —{" "}<button className="bg-gray-200 bg-center bg-cover hover:bg-green-300" onClick={() => openNote("020006chapbook")}>I intend to make a collection of your sayings</button> if you will let me.
    </p>
    <p>
      Speaking to me. <button className="bg-gray-200 bg-center bg-cover hover:bg-green-300" onClick={() => openNote("010094agenbite")}>They wash and tub and scrub. Agenbite of inwit.
      Conscience. Yet here's a spot.</button>
    </p>
    <p>
      —{" "}That one about the cracked lookingglass of a servant being the symbol
      of Irish art is deuced good.
    </p>
    <p>
      Buck Mulligan kicked Stephen's foot under the table and said with warmth
      of tone:
    </p>
    <p>
      —{" "}Wait till you <button className="bg-gray-200 bg-center bg-cover hover:bg-green-300" onClick={() => openNote("010139hearhim")}>hear him on Hamlet</button>, Haines.
    </p>
    <p>
      —{" "}Well, I mean it, Haines said, still speaking to Stephen. I was just
      thinking of it when that poor old creature came in.
    </p>
    <p>
      —{" "}Would I make money by it? Stephen asked.
    </p>
    <p>
      Haines laughed and, as he took his soft grey hat from the <button className="bg-gray-200 bg-center bg-cover hover:bg-green-300" onClick={() => openNote("010085towerlivingroom")}>holdfast of
      the hammock</button>, said:
    </p>
    <p>
      —{" "}I don't know, I'm sure.
    </p>
    <p>
      He strolled out to the doorway. Buck Mulligan bent across to Stephen and
      said with coarse vigour:
    </p>
    <p>
      —{" "}You put <button className="bg-gray-200 bg-center bg-cover hover:bg-green-300" onClick={() => openNote("010020ancientgreek")}>your hoof</button> in it now. What did you say that for?
    </p>
    <span data-edition="ed1932" data-page="15"> </span>
    <p>
      —{" "}Well? Stephen said. The problem is to get money. From whom? From the
      milkwoman or from him. It's a toss up, I think.
    </p>
    <p>
      —{" "}I blow him out about you, Buck Mulligan said, and then you come along
      with your lousy leer and your gloomy jesuit jibes.
    </p>
    <p>
      —{" "}I see little hope, Stephen said, from her or from him.
    </p>
    <span data-edition="ed1939" data-page="14"> </span>
    <p>
      Buck Mulligan sighed tragically and laid his hand on Stephen's arm.
    </p>
    <p>
      —{" "}From me, Kinch, he said.
    </p>
    <p>
      In a suddenly changed tone he added:
    </p>
    <p>
      —{" "}To tell you the God's truth I think you're right. Damn all else they
      are good for. <button className="bg-gray-200 bg-center bg-cover hover:bg-green-300" onClick={() => openNote("010137usurper")}>Why don't you play them as I do?</button> To hell with them all.
      Let us get out of the kip.
    </p>
    <p>
      He stood up, gravely ungirdled and disrobed himself of his gown, saying
      resignedly:
    </p>
    <p>
      —{" "}Mulligan is <button className="bg-gray-200 bg-center bg-cover hover:bg-green-300" onClick={() => openNote("010095stripped")}>stripped of his garments.</button>
    </p>
    <p>
      He emptied his pockets on to the table.
    </p>
    <p>
      —{" "}There's your snotrag, he said.
    </p>
    <span data-edition="ed1922" data-page="16"> </span>
    <p>
      And putting on his stiff collar and rebellious tie he spoke<span data-edition="ed1961" data-page="16"> </span>to them,
      chiding them, and to his dangling watchchain. His hands plunged and
      rummaged in his trunk while he called for a clean handkerchief. God,
      we'll simply have to dress the character. I want puce gloves and
      green boots. <button className="bg-gray-200 bg-center bg-cover hover:bg-green-300" onClick={() => openNote("010096contradictmyself")}>Contradiction. Do I contradict myself? Very well then</button>, I
      contradict myself. <button className="bg-gray-200 bg-center bg-cover hover:bg-green-300" onClick={() => openNote("010021malachi")}>Mercurial Malachi</button>. A limp black missile flew out of
      his talking hands.
    </p>
    <p>
      —{" "}And there's your <button className="bg-gray-200 bg-center bg-cover hover:bg-green-300" onClick={() => openNote("010097latinquarterhat")}>Latin quarter hat</button>, he said.
    </p>
    <p>
      <button className="bg-gray-200 bg-center bg-cover hover:bg-green-300" onClick={() => openNote("030147takeitup")}>Stephen picked it up and put it on.</button> Haines called to them from the
      doorway:
    </p>
    <p>
      —{" "}Are you coming, you fellows?
    </p>
    <span data-edition="ed1986" data-page="14"> </span>
    <p>
      —{" "}I'm ready, Buck Mulligan answered, going towards the door. Come out,
      Kinch. <button className="bg-gray-200 bg-center bg-cover hover:bg-green-300" onClick={() => openNote("010138eatenall")}>You have eaten all we left, I suppose.</button> Resigned he passed out
      with grave words and gait, saying, wellnigh with sorrow:
    </p>
    <p>
      —{" "}<button className="bg-gray-200 bg-center bg-cover hover:bg-green-300" onClick={() => openNote("010098metbutterly")}>And going forth he met Butterly.</button>
    </p>
    <p>
      Stephen, taking his <button className="bg-gray-200 bg-center bg-cover hover:bg-green-300" onClick={() => openNote("010099ashplant")}>ashplant</button> from its leaningplace, followed them out
      and, as they went <button className="bg-gray-200 bg-center bg-cover hover:bg-green-300" onClick={() => openNote("010085towerlivingroom")}>down the ladder</button>, pulled to the slow iron door and
      locked it. He put <button className="bg-gray-200 bg-center bg-cover hover:bg-green-300" onClick={() => openNote("010146hugekey")}>the huge key</button> in his inner pocket.
    </p>
    <p>
      At the foot of the ladder Buck Mulligan asked:
    </p>
    <p>
      —{" "}Did you bring the key?
    </p>
    <p>
      —{" "}I have it, Stephen said, preceding them.
    </p>
    <p>
      He walked on. Behind him he heard Buck Mulligan club with his heavy
      bathtowel the leader shoots of ferns or grasses.
    </p>
    <p>
      —{" "}Down, sir! How dare you, sir!
    </p>
    <span data-edition="ed1932" data-page="16"> </span>
    <p>
      Haines asked:
    </p>
    <p>
      —{" "}Do you pay rent for this tower?
    </p>
    <p>
      —{" "}Twelve quid, Buck Mulligan said.
    </p>
    <p>
      —{" "}To the secretary of state for war, Stephen added over his shoulder.
    </p>
    <p>
      They halted while Haines surveyed the tower and said at last:
    </p>
    <p>
      —{" "}Rather bleak in wintertime, I should say. <button className="bg-gray-200 bg-center bg-cover hover:bg-green-300" onClick={() => openNote("010100martellos")}>Martello you call it?</button>
    </p>
    <p>
      —{" "}<button className="bg-gray-200 bg-center bg-cover hover:bg-green-300" onClick={() => openNote("010100martellos")}>Billy Pitt had them built</button>, Buck Mulligan said, when the <button className="bg-gray-200 bg-center bg-cover hover:bg-green-300" onClick={() => openNote("010101frenchonsea")}>French were on
      the sea</button>. But ours is the <button className="bg-gray-200 bg-center bg-cover hover:bg-green-300" onClick={() => openNote("010100martellos")}><i>omphalos</i>.</button>
    </p>
    <p>
      —{" "}What is <button className="bg-gray-200 bg-center bg-cover hover:bg-green-300" onClick={() => openNote("010139hearhim")}>your idea of Hamlet</button>? Haines asked Stephen.
    </p>
    <p>
      —{" "}No, no, Buck Mulligan shouted in pain. I'm not equal to <button className="bg-gray-200 bg-center bg-cover hover:bg-green-300" onClick={() => openNote("010102aquinas")}>Thomas Aquinas
      and the fiftyfive reasons</button> he has made to prop it up. Wait till I
      have a few pints in me first.
    </p>
    <span data-edition="ed1961" data-page="17"> </span>
    <p>
      He turned to Stephen, saying, as he pulled down neatly the peaks of his
      <button className="bg-gray-200 bg-center bg-cover hover:bg-green-300" onClick={() => openNote("010103waistcoat")}>primrose waistcoat</button>:
    </p>
    <span data-edition="ed1922" data-page="17"> </span>
    <p>
      —{" "}You couldn't manage it under three pints, Kinch, could you?
    </p>
    <span data-edition="ed1939" data-page="15"> </span>
    <p>
      —{" "}It has waited so long, Stephen said listlessly, it can wait longer.
    </p>
    <p>
      —{" "}You pique my curiosity, Haines said amiably. Is it some paradox?
    </p>
    <p>
      —{" "}Pooh! Buck Mulligan said. We have grown out of <button className="bg-gray-200 bg-center bg-cover hover:bg-green-300" onClick={() => openNote("010145wildeparadoxes")}>Wilde and paradoxes</button>.
      It's quite simple. He proves by algebra that Hamlet's grandson is
      Shakespeare's grandfather and that he himself is the ghost of his own
      father.
    </p>
    <p>
      —{" "}What? Haines said, beginning to point at Stephen. He himself?
    </p>
    <p>
      Buck Mulligan slung his towel <button className="bg-gray-200 bg-center bg-cover hover:bg-green-300" onClick={() => openNote("010104stole")}>stolewise</button> round his neck and, bending in
      loose laughter, said to Stephen's ear:
    </p>
    <p>
      —{" "}O, shade of Kinch the elder! <button className="bg-gray-200 bg-center bg-cover hover:bg-green-300" onClick={() => openNote("010105japhet")}>Japhet in search of a father!</button>
    </p>
    <p>
      —{" "}We're always tired in the morning, Stephen said to Haines. And it is
      rather long to tell.
    </p>
    <p>
      Buck Mulligan, walking forward again, raised his hands.
    </p>
    <p>
      —{" "}<button className="bg-gray-200 bg-center bg-cover hover:bg-green-300" onClick={() => openNote("010106sacredpint")}>The sacred pint alone can unbind the tongue of Dedalus</button>, he said.
    </p>
    <p>
      —{" "}I mean to say, Haines explained to Stephen as they followed, this
      tower and these cliffs here remind me somehow of <button className="bg-gray-200 bg-center bg-cover hover:bg-green-300" onClick={() => openNote("010009tower")}>Elsinore. <i>That beetles
      o'er his base into the sea</i></button>, isn't it?
    </p>
    <span data-edition="ed1986" data-page="15"> </span>
    <p>
      Buck Mulligan turned suddenly for an instant towards Stephen but did
      not speak. In the bright silent instant Stephen saw his own image in
      <button className="bg-gray-200 bg-center bg-cover hover:bg-green-300" onClick={() => openNote("010048greypants")}>cheap dusty mourning between their gay attires</button>.
    </p>
    <p>
      —{" "}It's a wonderful tale, Haines said, bringing them to halt again.
    </p>
    <p>
      Eyes, pale as the sea the wind had freshened, paler, firm and prudent.
      The <button className="bg-gray-200 bg-center bg-cover hover:bg-green-300" onClick={() => openNote("010107seasruler")}>seas' ruler</button>, he gazed southward over the bay, empty save for the
      smokeplume of the <button className="bg-gray-200 bg-center bg-cover hover:bg-green-300" onClick={() => openNote("010036mailboat")}>mailboat</button> vague on the bright skyline and a sail
      tacking by <button className="bg-gray-200 bg-center bg-cover hover:bg-green-300" onClick={() => openNote("010135bullockharbour")}>the Muglins</button>.
    </p>
    <span data-edition="ed1932" data-page="17"> </span>
    <p>
      —{" "}I read a theological interpretation of it somewhere, he said bemused.
      <button className="bg-gray-200 bg-center bg-cover hover:bg-green-300" onClick={() => openNote("010119trinity")}>The Father and the Son idea.</button> The Son striving to be atoned with the
      Father.
    </p>
    <p>
      Buck Mulligan at once put on a blithe broadly smiling face. He looked
      at them, his wellshaped mouth open happily, his eyes, from which he had
      suddenly withdrawn all shrewd sense, blinking with mad gaiety. He moved
      a doll's head to and fro, <span data-edition="ed1961" data-page="18"> </span>the brims of his <button className="bg-gray-200 bg-center bg-cover hover:bg-green-300" onClick={() => openNote("010109panamahat")}>Panama hat</button> quivering, and
      began to chant in a quiet happy foolish voice:
    </p>
    <p><i>—{" "}{" "}I'm the queerest young fellow that ever you heard. <br/>
      <button className="bg-gray-200 bg-center bg-cover hover:bg-green-300" onClick={() => openNote("010150fatherbird")}>My mother's a jew, my father's a bird</button>. <br/>
      With Joseph the joiner I cannot agree. <br/>
      So here's to disciples and Calvary.</i>
    </p>
    <span data-edition="ed1922" data-page="18"> </span>
    <p>
      He held up a forefinger of warning.
    </p>
    <p><i>—{" "}{" "}
      <button className="bg-gray-200 bg-center bg-cover hover:bg-green-300" onClick={() => openNote("010151drinkwater")}>If anyone thinks that I amn't divine<br/>He'll get no free drinks when I'm making the wine <br/>
      But have to drink water and wish it were plain <br/>
      That I make when the wine becomes water again.</button></i>
    </p>
    <p>
      He tugged swiftly at Stephen's ashplant in farewell and, running forward
      to a brow of the cliff, fluttered his hands at his sides like fins or
      wings of one about to rise in the air, and chanted:
    </p>
    <span data-edition="ed1939" data-page="16"> </span>
    <p><i>—{" "}{" "}Goodbye, now, goodbye! Write down all I said <br/>
      And tell Tom, Dick and Harry I rose from the dead. <br/>
      What's bred in the bone cannot fail me to fly <br/>
      And <button className="bg-gray-200 bg-center bg-cover hover:bg-green-300" onClick={() => openNote("010149olivet")}>Olivet's breezy</button>... Goodbye, now, goodbye!</i>
    </p>
    <p>
      He capered before them <button className="bg-gray-200 bg-center bg-cover hover:bg-green-300" onClick={() => openNote("010111fortyfoot")}>down towards the fortyfoot hole</button>, fluttering his
      winglike hands, leaping nimbly, <button className="bg-gray-200 bg-center bg-cover hover:bg-green-300" onClick={() => openNote("010021malachi")}>Mercury's hat</button> quivering in the fresh
      wind that bore back to them his brief birdlike cries.
    </p>
    <p>
      Haines, who had been laughing guardedly, walked on beside Stephen and
      said:
    </p>
    <p>
      —{" "}We oughtn't to laugh, I suppose. He's rather blasphemous. I'm not a
      believer myself, that is to say. Still his gaiety takes the harm out of
      it somehow, doesn't it? What did he call it? Joseph the Joiner?
    </p>
    <p>
      —{" "}<button className="bg-gray-200 bg-center bg-cover hover:bg-green-300" onClick={() => openNote("010110jokingjesus")}>The ballad of joking Jesus</button>, Stephen answered.
    </p>
    <p>
      —{" "}O, Haines said, you have heard it before?
    </p>
    <p>
      —{" "}Three times a day, after meals, Stephen said drily.
    </p>
    <p>
      —{" "}You're not a believer, are you? Haines asked. I mean, a believer in<span data-edition="ed1932" data-page="18"> </span>
      the narrow sense of the word. Creation from nothing and miracles and a
      personal God.
    </p>
    <p>
      —{" "}There's only one sense of the word, it seems to me, Stephen said.
    </p>
    <span data-edition="ed1986" data-page="16"> </span>
    <p>
      Haines stopped to take out <button className="bg-gray-200 bg-center bg-cover hover:bg-green-300" onClick={() => openNote("010142greenstone")}>a smooth silver case in which</button><span data-edition="ed1961" data-page="19"> </span><button className="bg-gray-200 bg-center bg-cover hover:bg-green-300" onClick={() => openNote("010142greenstone")}> twinkled a
      green stone</button>. He sprang it open with his thumb and offered it.
    </p>
    <p>
      —{" "}Thank you, Stephen said, taking a cigarette.
    </p>
    <p>
      Haines helped himself and snapped the case to. He put it back in his
      sidepocket and took from his waistcoatpocket a nickel tinderbox, sprang it 
      <span data-edition="ed1922" data-page="19"> </span>
      open too, and, having lit his cigarette, held the flaming spunk
      towards Stephen in the shell of his hands.
    </p>
    <p>
      —{" "}Yes, of course, he said, as they went on again. Either you believe
      or you don't, isn't it? Personally I couldn't stomach that idea of a
      personal God. You don't stand for that, I suppose?
    </p>
    <p>
      —{" "}You behold in me, Stephen said with grim displeasure, a horrible
      example of free thought.
    </p>
    <p>
      He walked on, waiting to be spoken to, trailing his ashplant by his
      side. <button className="bg-gray-200 bg-center bg-cover hover:bg-green-300" onClick={() => openNote("010099ashplant")}>Its ferrule followed lightly on the path, squealing at his heels.
      My familiar,</button> after me, calling, Steeeeeeeeeeeephen! A wavering line
      along the path. They will walk on it tonight, coming here in the dark.
      He wants that key. It is mine. <button className="bg-gray-200 bg-center bg-cover hover:bg-green-300" onClick={() => openNote("010001buckmulligan")}>I paid the rent.</button> <button className="bg-gray-200 bg-center bg-cover hover:bg-green-300" onClick={() => openNote("010112saltbread")}>Now I eat his salt
      bread.</button> Give him the key too. All. He will ask for it. That was in his
      eyes.
    </p>
    <p>
      —{" "}After all, Haines began...
    </p>
    <p>
      Stephen turned and saw that the cold gaze which had measured him was not
      all unkind.
    </p>
    <p>
      —{" "}After all, I should think you are able to free yourself. <button className="bg-gray-200 bg-center bg-cover hover:bg-green-300" onClick={() => openNote("010113ownmaster")}>You are your
      own master</button>, it seems to me.
    </p>
    <p>
      —{" "}<button className="bg-gray-200 bg-center bg-cover hover:bg-green-300" onClick={() => openNote("010114stateandchurch")}>I am the servant of two masters, Stephen said, an English and an
      Italian.</button>
    </p>
    <p>
      —{" "}Italian? Haines said.
    </p>
    <p>
      <button className="bg-gray-200 bg-center bg-cover hover:bg-green-300" onClick={() => openNote("010156crazyqueen")}>A crazy queen, old and jealous. Kneel down before me.</button>
    </p>
    <p>
      —{" "}And a third, Stephen said, there is who wants me for odd jobs.
    </p>
    <p>
      —{" "}Italian? Haines said again. What do you mean?
    </p>
    <p>
      —{" "}The imperial British state, Stephen answered, his colour rising, and
      the holy Roman catholic and apostolic church.
    </p>
    <span data-edition="ed1939" data-page="17"> </span>
    <p>
      Haines detached from his underlip some fibres of tobacco before he
      spoke.
    </p>
    <p>
      —{" "}I can quite understand that, he said calmly. An Irishman must think
      like that, I daresay. We feel in England that we have treated you rather
      unfairly. <button className="bg-gray-200 bg-center bg-cover hover:bg-green-300" onClick={() => openNote("010141blamehistory")}>It seems history is to blame.</button>
    </p>
    <p>
      The proud potent titles clanged over Stephen's memory the triumph<span data-edition="ed1932" data-page="19"> </span>
      of their brazen bells: <button className="bg-gray-200 bg-center bg-cover hover:bg-green-300" onClick={() => openNote("010115creed")}><i>et unam sanctam catholicam</i></button><span data-edition="ed1961" data-page="20"> </span><button className="bg-gray-200 bg-center bg-cover hover:bg-green-300" onClick={() => openNote("010115creed")}><i> et apostolicam
      ecclesiam</i></button>: the slow growth and change of rite and dogma like his own
      rare thoughts, a chemistry of stars. <button className="bg-gray-200 bg-center bg-cover hover:bg-green-300" onClick={() => openNote("010117symbolapostles")}>Symbol of the apostles</button> in the<button className="bg-gray-200 bg-center bg-cover hover:bg-green-300" onClick={() => openNote("010118masspopemarcellus")}>
      mass for pope Marcellus</button>, the voices blended, singing alone loud in
      affirmation: and behind their chant <button className="bg-gray-200 bg-center bg-cover hover:bg-green-300" onClick={() => openNote("010088archangelmichael")}>the vigilant angel of the church
      militant</button><button className="bg-gray-200 bg-center bg-cover hover:bg-green-300"> disarmed and menaced her heresiarchs. A horde of heresies
      fleeing with mitres awry: Photius and the brood of mockers
      <span data-edition="ed1922" data-page="20"> </span>
      of whom Mulligan was one, and Arius, warring his life long upon </button><button className="bg-gray-200 bg-center bg-cover hover:bg-green-300" onClick={() => openNote("010119trinity")}>the
      consubstantiality of the Son with the Father</button>, and Valentine, spurning
      Christ's terrene body, and the subtle African heresiarch Sabellius<span data-edition="ed1986" data-page="17"> </span> who
      held that the Father was Himself His own Son. Words Mulligan had spoken
      a moment since in mockery to the <button className="bg-gray-200 bg-center bg-cover hover:bg-green-300" onClick={() => openNote("010024stranger")}>stranger</button>. Idle mockery. The void
      awaits surely all them that <button className="bg-gray-200 bg-center bg-cover hover:bg-green-300" onClick={() => openNote("010120weavewind")}>weave the wind</button>: a menace, a disarming and a
      worsting from those embattled angels of the church, <button className="bg-gray-200 bg-center bg-cover hover:bg-green-300" onClick={() => openNote("010088archangelmichael")}>Michael's host,</button>
      who defend her ever in the hour of conflict with their lances and their
      shields.
    </p>
    <p>
      <button className="bg-gray-200 bg-center bg-cover hover:bg-green-300" onClick={() => openNote("010121applause")}>Hear, hear! Prolonged applause. <i>Zut! Nom de Dieu!</i></button>
    </p>
    <p>
      —{" "}Of course I'm a Britisher, Haines' voice said, and I feel as one. I
      don't want to see my country fall into the hands of <button className="bg-gray-200 bg-center bg-cover hover:bg-green-300" onClick={() => openNote("010122germanjews")}>German jews</button> either.
      That's our national problem, I'm afraid, just now.
    </p>
    <p>
      Two men stood at the verge of the cliff, watching: businessman, boatman.
    </p>
    <p>
      —{" "}She's making for <button className="bg-gray-200 bg-center bg-cover hover:bg-green-300" onClick={() => openNote("010135bullockharbour")}>Bullock harbour</button>.
    </p>
    <p>
      The boatman nodded towards the north of the bay with some disdain.
    </p>
    <p>
      —{" "}There's <button className="bg-gray-200 bg-center bg-cover hover:bg-green-300" onClick={() => openNote("010124fivefathoms")}>five fathoms</button> out there, he said. It'll be swept up that way
      when <button className="bg-gray-200 bg-center bg-cover hover:bg-green-300" onClick={() => openNote("010125hightide")}>the tide comes in about one</button>. It's nine days today.
    </p>
    <p>
      The man that was drowned. A sail veering about the blank bay waiting
      for a swollen bundle to bob up, roll over to the sun a puffy face,
      saltwhite. Here I am.
    </p>
    <p>
      They followed the winding path down to the <button className="bg-gray-200 bg-center bg-cover hover:bg-green-300" onClick={() => openNote("010111fortyfoot")}>creek</button>. Buck Mulligan stood on
      a stone, in shirtsleeves, his unclipped tie rippling over his shoulder.
      A young man clinging to a spur of rock near him, <button className="bg-gray-200 bg-center bg-cover hover:bg-green-300" onClick={() => openNote("010147sealshead")}>moved slowly frogwise
      his green legs in the deep jelly of the water</button>.
    </p>
    <p>
      —{" "}Is the brother with you, Malachi?
    </p>
    <p>
      —{" "}Down in <button className="bg-gray-200 bg-center bg-cover hover:bg-green-300" onClick={() => openNote("010126mullingar")}>Westmeath.</button> With the Bannons.
    </p>
    <p>
      —{" "}Still there? I got a card from Bannon. Says he found a sweet young
      thing down there. <button className="bg-gray-200 bg-center bg-cover hover:bg-green-300" onClick={() => openNote("010127photogirl")}>Photo girl</button> he calls her.
    </p>
    <span data-edition="ed1961" data-page="21"> </span>
    <p>
      —{" "}Snapshot, eh? Brief exposure.
    </p>
    <p>
      Buck Mulligan sat down to unlace his boots. An elderly man shot up near
      the spur of rock a blowing red face. He scrambled up by the stones,
      water glistening on his pate and on its <button className="bg-gray-200 bg-center bg-cover hover:bg-green-300" onClick={() => openNote("010136nimbus")}>garland of grey hair</button>,<span data-edition="ed1932" data-page="20"> </span>water
      rilling over his chest and paunch and spilling jets out of his black
      sagging loincloth.
    </p>
    <p>
      Buck Mulligan made way for him to scramble past and, glancing at Haines
      and Stephen, <button className="bg-gray-200 bg-center bg-cover hover:bg-green-300" onClick={() => openNote("010057crossed")}>crossed himself piously</button> with his thumbnail at brow and lips
      and breastbone.
    </p>
    <span data-edition="ed1922" data-page="21"> </span>
    <p>
      —{" "}Seymour's back in town, the young man said, grasping again his spur of
      rock. Chucked medicine and <button className="bg-gray-200 bg-center bg-cover hover:bg-green-300" onClick={() => openNote("010058bloodyswindle")}>going in for the army.</button> 
    </p>
    <span data-edition="ed1939" data-page="18"> </span>
    <p>
      —{" "}Ah, go to God! Buck Mulligan said.
    </p>
    <p>
      —{" "}Going over next week to stew. You know that red Carlisle girl, Lily?
    </p>
    <p>
      —{" "}Yes.
    </p>
    <p>
      —{" "}Spooning with him last night <button className="bg-gray-200 bg-center bg-cover hover:bg-green-300" onClick={() => openNote("010037harbourmouth")}>on the pier</button>. The father is rotto with
      money.
    </p>
    <p>
      —{" "}Is she <button className="bg-gray-200 bg-center bg-cover hover:bg-green-300" onClick={() => openNote("010058bloodyswindle")}>up the pole?</button>
    </p>
    <p>
      —{" "}Better ask Seymour that.
    </p>
    <p>
      —{" "}Seymour a bleeding officer! Buck Mulligan said.
    </p>
    <span data-edition="ed1986" data-page="18"> </span>
    <p>
      He nodded to himself as he drew off his trousers and stood up, saying
      tritely:
    </p>
    <p>
      —{" "}Redheaded women buck like goats.
    </p>
    <p>
      He broke off in alarm, feeling his side under his flapping shirt.
    </p>
    <p>
      —{" "}<button className="bg-gray-200 bg-center bg-cover hover:bg-green-300" onClick={() => openNote("010129ubermensch")}>My twelfth rib is gone, he cried. I'm the <i>Uebermensch.</i></button> <button className="bg-gray-200 bg-center bg-cover hover:bg-green-300" onClick={() => openNote("010130toothless")}>Toothless
      Kinch</button> and I, the supermen.
    </p>
    <p>
      He struggled out of his shirt and flung it behind him to where his
      clothes lay.
    </p>
    <p>
      —{" "}Are you going in here, Malachi?
    </p>
    <p>
      —{" "}Yes. Make room in the bed.
    </p>
    <p>
      The young man shoved himself backward through the water and reached
      <button className="bg-gray-200 bg-center bg-cover hover:bg-green-300" onClick={() => openNote("010111fortyfoot")}>the middle of the creek</button> in two long clean strokes. Haines sat down on a
      stone, smoking.
    </p>
    <p>
      —{" "}Are you not coming in? Buck Mulligan asked.
    </p>
    <p>
      —{" "}Later on, Haines said. Not on my breakfast.
    </p>
    <p>
      Stephen turned away.
    </p>
    <p>
      —{" "}I'm going, Mulligan, he said.
    </p>
    <p>
      —{" "}Give us that key, Kinch, Buck Mulligan said, to keep my chemise flat.
    </p>
    <span data-edition="ed1961" data-page="22"> </span>
    <p>
      Stephen handed him the key. Buck Mulligan laid it across his heaped
      clothes.
    </p>
    <p>
      —{" "}And <button className="bg-gray-200 bg-center bg-cover hover:bg-green-300" onClick={() => openNote("010019money")}>twopence</button>, he said, for a pint. Throw it there.
    </p>
    <p>
      Stephen threw two pennies on the soft heap. Dressing, undressing. Buck
      Mulligan erect, with joined hands before him, said solemnly:
    </p>
    <span data-edition="ed1932" data-page="21"> </span>
    <p>
      —{" "}<button className="bg-gray-200 bg-center bg-cover hover:bg-green-300" onClick={() => openNote("010129ubermensch")}>He who stealeth from the poor lendeth to the Lord. Thus spake
      Zarathustra.</button>
    </p>
    <span data-edition="ed1922" data-page="22"> </span>
    <p>
      His plump body plunged.
    </p>
    <p>
      —{" "}We'll see you again, Haines said, turning as Stephen walked up the
      path and smiling at <button className="bg-gray-200 bg-center bg-cover hover:bg-green-300" onClick={() => openNote("010132wildirish")}>wild Irish</button>.
    </p>
    <p>
      Horn of a bull, hoof of a horse, <button className="bg-gray-200 bg-center bg-cover hover:bg-green-300" onClick={() => openNote("010024stranger")}>smile of a Saxon.</button>
    </p>
    <p>
      —{" "}<button className="bg-gray-200 bg-center bg-cover hover:bg-green-300" onClick={() => openNote("010049shiptavern")}>The Ship, Buck Mulligan cried. Half twelve.</button>
    </p>
    <p>
      —{" "}Good, Stephen said.
    </p>
    <p>
      He walked along the upwardcurving path.
    </p>
    <p><button className="bg-gray-200 bg-center bg-cover hover:bg-green-300" onClick={() => openNote("010012quarterto")}><i>Liliata rutilantium. <br/>
      Turma circumdet. <br/>
      Iubilantium te virginum.</i></button>
    </p>
    <p>
      The priest's grey <button className="bg-gray-200 bg-center bg-cover hover:bg-green-300" onClick={() => openNote("010136nimbus")}>nimbus in a niche</button> where he dressed discreetly. I will
      not sleep here tonight. Home also I cannot go.
    </p>
    <p>
      A voice, sweettoned and sustained, called to him from the sea. Turning
      the curve he waved his hand. It called again. <button className="bg-gray-200 bg-center bg-cover hover:bg-green-300" onClick={() => openNote("010147sealshead")}>A sleek brown head, a
      seal's</button>, far out on the water, round.
    </p>
    <p>
      <button className="bg-gray-200 bg-center bg-cover hover:bg-green-300" onClick={() => openNote("010137usurper")}>Usurper.</button>
    </p>
    <br/><br/><br/>
    <span data-edition="ed1961" data-page="23"> </span>
    <span data-edition="ed1986" data-page="19"> </span>
    <span data-edition="ed1922" data-page="23"> </span>
    <span data-edition="ed1939" data-page="19"> </span>
  </div>
  );
}

export default Telemachus;
