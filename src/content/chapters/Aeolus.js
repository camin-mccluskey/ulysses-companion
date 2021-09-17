import Annotation from "../../components/Annotation";


const Aeolus = ({openNote, currentNoteId, visitedNotes, addToVisited}) => {
  return (
    <div>
      <p className="text-center uppercase font-bold">
        <Annotation annotationId="070000aeolus" visited={visitedNotes.has("070000aeolus")} annotationSelect={() => {openNote("070000aeolus"); addToVisited("070000aeolus")}} activeAnnotationId={currentNoteId}><font size="+2">[7]</font></Annotation>
        <br/>
        <Annotation annotationId="070008intheheart" visited={visitedNotes.has("070008intheheart")} annotationSelect={() => {openNote("070008intheheart"); addToVisited("070008intheheart")}} activeAnnotationId={currentNoteId}>IN THE HEART</Annotation> OF THE <Annotation annotationId="070007hibernianmetropolis" visited={visitedNotes.has("070007hibernianmetropolis")} annotationSelect={() => {openNote("070007hibernianmetropolis"); addToVisited("070007hibernianmetropolis")}} activeAnnotationId={currentNoteId}>HIBERNIAN METROPOLIS</Annotation>
      </p>
      <p>
        Before <Annotation annotationId="070006nelsonspillar" visited={visitedNotes.has("070006nelsonspillar")} annotationSelect={() => {openNote("070006nelsonspillar"); addToVisited("070006nelsonspillar")}} activeAnnotationId={currentNoteId}>Nelson's pillar</Annotation> trams slowed, shunted, changed trolley, started
        for Blackrock, Kingstown and <Annotation annotationId="070004dalkeytram" visited={visitedNotes.has("070004dalkeytram")} annotationSelect={() => {openNote("070004dalkeytram"); addToVisited("070004dalkeytram")}} activeAnnotationId={currentNoteId}>Dalkey</Annotation>, Clonskea, Rathgar and <Annotation annotationId="070001terenure" visited={visitedNotes.has("070001terenure")} annotationSelect={() => {openNote("070001terenure"); addToVisited("070001terenure")}} activeAnnotationId={currentNoteId}>Terenure</Annotation>,
        Palmerston Park and upper Rathmines, <Annotation annotationId="070002sandymounttrams" visited={visitedNotes.has("070002sandymounttrams")} annotationSelect={() => {openNote("070002sandymounttrams"); addToVisited("070002sandymounttrams")}} activeAnnotationId={currentNoteId}>Sandymount Green</Annotation>, <Annotation annotationId="070009rathminestram" visited={visitedNotes.has("070009rathminestram")} annotationSelect={() => {openNote("070009rathminestram"); addToVisited("070009rathminestram")}} activeAnnotationId={currentNoteId}>Rathmines</Annotation>,
        <Annotation annotationId="030099ringsend" visited={visitedNotes.has("030099ringsend")} annotationSelect={() => {openNote("030099ringsend"); addToVisited("030099ringsend")}} activeAnnotationId={currentNoteId}>Ringsend</Annotation> and <Annotation annotationId="070002sandymounttrams" visited={visitedNotes.has("070002sandymounttrams")} annotationSelect={() => {openNote("070002sandymounttrams"); addToVisited("070002sandymounttrams")}} activeAnnotationId={currentNoteId}>Sandymount Tower</Annotation>, Harold's Cross. The hoarse <Annotation annotationId="070003tramwaycompany" visited={visitedNotes.has("070003tramwaycompany")} annotationSelect={() => {openNote("070003tramwaycompany"); addToVisited("070003tramwaycompany")}} activeAnnotationId={currentNoteId}>Dublin United
        Tramway Company</Annotation>'s timekeeper bawled them off:
      </p>
      <p>
        —{" "}Rathgar and Terenure!
      </p>
      <p>
        —{" "}<Annotation annotationId="070011comeon" visited={visitedNotes.has("070011comeon")} annotationSelect={() => {openNote("070011comeon"); addToVisited("070011comeon")}} activeAnnotationId={currentNoteId}>Come on, Sandymount Green!</Annotation>
      </p>
      <p>
        Right and left parallel clanging ringing a doubledecker and a singledeck
        moved from their railheads, swerved to the down line, glided parallel.
      </p>
      <p>
        —{" "}Start, Palmerston Park!
      </p>
      <p className="text-center uppercase font-bold">
        THE WEARER OF THE CROWN
      </p>
      <p>
        Under the porch of the general post office shoeblacks called and
        polished. Parked in North Prince's street His Majesty's vermilion
        mailcars, bearing on their sides the royal initials, E. R., received
        loudly flung sacks of letters, postcards, lettercards, parcels, insured
        and paid, for local, provincial, British and overseas delivery.
      </p>
      <p className="text-center uppercase font-bold">
        GENTLEMEN OF THE PRESS
      </p>
      <p>
        Grossbooted draymen rolled barrels dullthudding out of Prince's stores
        and bumped them up on the brewery float. On the brewery float bumped
        dullthudding barrels rolled by grossbooted draymen out of Prince's
        stores.
      </p>
      <p>
        —{" "}There it is, Red Murray said. Alexander Keyes.
      </p>
      <span data-edition="ed1922" data-page="112"></span>
      <p>
        —{" "}Just cut it out, will you? Mr Bloom said, and I'll take it round to
        <Annotation annotationId="020064telegraph" visited={visitedNotes.has("020064telegraph")} annotationSelect={() => {openNote("020064telegraph"); addToVisited("020064telegraph")}} activeAnnotationId={currentNoteId}>the <i>Telegraph</i> office</Annotation>.
      </p>
      <span data-edition="ed1932" data-page="104"></span>
      <p>
        The door of Ruttledge's office creaked again. <Annotation annotationId="070013davystephens" visited={visitedNotes.has("070013davystephens")} annotationSelect={() => {openNote("070013davystephens"); addToVisited("070013davystephens")}} activeAnnotationId={currentNoteId}>Davy Stephens</Annotation>, minute in a
        large capecoat, a small felt hat crowning his ringlets, passed out with
        a roll of papers under his cape, a king's courier.
      </p>
      <span data-edition="ed1961" data-page="116"></span>
      <span data-edition="ed1986" data-page="96"></span>
      <p>
        Red Murray's long shears sliced out the advertisement from the newspaper
        in four clean strokes. Scissors and paste.
      </p>
      <p>
        —{" "}I'll go through the printingworks, Mr Bloom said, taking the cut
        square.
      </p>
      <p>
        —{" "}Of course, if he wants a par, Red Murray said earnestly, a pen behind
        his ear, we can do him one.
      </p>
      <span data-edition="ed1939" data-page="88"> </span>
      <p>
        —{" "}Right, Mr Bloom said with a nod. I'll rub that in.
      </p>
      <p>
        We.
      </p>
      <p className="text-center uppercase font-bold">
        WILLIAM BRAYDEN, ESQUIRE, OF OAKLANDS,<br/>
        SANDYMOUNT
      </p>
      <p>
        Red Murray touched Mr Bloom's arm with the shears and whispered:
      </p>
      <p>
        —{" "}Brayden.
      </p>
      <p>
        Mr Bloom turned and saw the liveried porter raise his lettered cap as a
        stately figure entered between the newsboards of the <Annotation annotationId="160004newspapers" visited={visitedNotes.has("160004newspapers")} annotationSelect={() => {openNote("160004newspapers"); addToVisited("160004newspapers")}} activeAnnotationId={currentNoteId}><i>Weekly Freeman</i></Annotation><i>
        and National Press</i> and the <Annotation annotationId="050021freeman" visited={visitedNotes.has("050021freeman")} annotationSelect={() => {openNote("050021freeman"); addToVisited("050021freeman")}} activeAnnotationId={currentNoteId}><i>Freeman's Journal and National Press</i></Annotation>.
        Dullthudding Guinness's barrels. It passed statelily up the staircase,
        steered by an umbrella, a solemn beardframed face. The broadcloth back
        ascended each step: back. All his brains are in the nape of his neck,
        Simon Dedalus says. Welts of flesh behind on him. <Annotation annotationId="070012neckfatneck" visited={visitedNotes.has("070012neckfatneck")} annotationSelect={() => {openNote("070012neckfatneck"); addToVisited("070012neckfatneck")}} activeAnnotationId={currentNoteId}>Fat folds of neck,
        fat, neck, fat, neck.</Annotation>
      </p>
      <p>
        —{" "}Don't you think his face is like Our Saviour? Red Murray whispered.
      </p>
      <p>
        The door of Ruttledge's office whispered: ee: cree. They always build
        one door opposite another for the wind to. Way in. Way out.
      </p>
      <p>
        <Annotation annotationId="050027marthamary" visited={visitedNotes.has("050027marthamary")} annotationSelect={() => {openNote("050027marthamary"); addToVisited("050027marthamary")}} activeAnnotationId={currentNoteId}>Our Saviour: beardframed oval face: talking in the dusk. Mary, Martha.</Annotation>
        Steered by an umbrella sword to the footlights: Mario the tenor.
      </p>
      <p>
        —{" "}Or like Mario, Mr Bloom said.
      </p>
      <p>
        —{" "}Yes, Red Murray agreed. But Mario was said to be the picture of Our
        Saviour.
      </p>
      <p>
        Jesus Mario with rougy cheeks, doublet and spindle legs. Hand on his
        heart. In <i>Martha.</i>
      </p>
      <p>   <i>Co-ome thou lost one, <br/>
        Co-ome thou dear one</i>
      </p>
      <span data-edition="ed1922" data-page="113"></span>
      <span data-edition="ed1961" data-page="117"></span>
      <p className="text-center uppercase font-bold">
        THE CROZIER AND THE PEN
      </p>
      <p>
        —{" "}His grace phoned down twice this morning, Red Murray said gravely.
      </p>
      <span data-edition="ed1932" data-page="105"></span>
      <p>
        They watched the knees, legs, boots vanish. Neck.
      </p>
      <p>
        A telegram boy stepped in nimbly, threw an envelope on the counter and
        stepped off posthaste with a word:
      </p>
      <p>
        <i>—{" "}Freeman!</i>
      </p>
      <p>
        Mr Bloom said slowly:
      </p>
      <p>
        —{" "}Well, he is one of our saviours also.
      </p>
      <p>
        A meek smile accompanied him as he lifted the counterflap, as he passed
        in through the sidedoor and along the warm dark stairs and passage,<span data-edition="ed1986" data-page="97"></span>
        along the now reverberating boards. <Annotation annotationId="070014circulation" visited={visitedNotes.has("070014circulation")} annotationSelect={() => {openNote("070014circulation"); addToVisited("070014circulation")}} activeAnnotationId={currentNoteId}>But will he save the circulation?
        Thumping. Thumping.</Annotation>
      </p>
      <p>
        He pushed in the glass swingdoor and entered, stepping over strewn
        packing paper. Through a lane of clanking drums he made his way towards
        <Annotation annotationId="070019nannetti" visited={visitedNotes.has("070019nannetti")} annotationSelect={() => {openNote("070019nannetti"); addToVisited("070019nannetti")}} activeAnnotationId={currentNoteId}>Nannetti's</Annotation> reading closet.
      </p>
      <p className="text-center uppercase font-bold">
        WITH UNFEIGNED REGRET IT IS WE ANNOUNCE <br/>
        THE DISSOLUTION OF A MOST RESPECTED <br/>
        DUBLIN BURGESS
      </p>
      <p>
        Hynes here too: account of the funeral probably. Thumping. Thump. This
        morning the remains of the late Mr Patrick Dignam. Machines. Smash a man
        to 
        <span data-edition="ed1939" data-page="89"> </span>
        atoms if they got him caught. Rule the world today. His machineries
        are pegging away too. Like these, got out of hand: fermenting. Working
        away, tearing away. And that old grey rat tearing to get in.
      </p>
      <p className="text-center uppercase font-bold">
        HOW A GREAT DAILY <Annotation annotationId="070014circulation" visited={visitedNotes.has("070014circulation")} annotationSelect={() => {openNote("070014circulation"); addToVisited("070014circulation")}} activeAnnotationId={currentNoteId}>ORGAN</Annotation> IS TURNED OUT
      </p>
      <p>
        Mr Bloom halted behind the foreman's spare body, admiring a glossy
        crown.
      </p>
      <p>
        Strange he never saw his real country. Ireland my country. Member for
        College green. He boomed that workaday worker tack for all it was worth.
        It's the ads and side features sell a weekly, not the stale news in the
        official gazette. Queen Anne is dead. Published by authority in the year
        one thousand and.<span data-edition="ed1961" data-page="118"></span> Demesne situate in the townland of Rosenallis, barony
        of Tinnahinch. To all 
        <span data-edition="ed1922" data-page="114"></span>
        
        whom it may concern schedule pursuant to statute
        showing return of number of mules and jennets exported from Ballina.
        Nature notes. Cartoons. Phil Blake's weekly Pat and Bull story. Uncle
        Toby's page for tiny tots. Country bumpkin's queries. Dear Mr Editor,
        what is a good cure for flatulence? I'd like that part. Learn a lot
        teaching others. The personal note. M. A. P. Mainly all pictures.
        Shapely bathers on golden strand. World's biggest balloon. Double
        marriage of sisters celebrated. Two bridegrooms laughing heartily at
        each other. Cuprani too, printer. More Irish than the Irish.
      </p>
      <span data-edition="ed1932" data-page="106"></span>
      <p>
        The machines clanked in threefour time. Thump, thump, thump. Now if he
        got paralysed there and no-one knew how to stop them they'd clank on and
        on the same, print it over and over and up and back. Monkeydoodle the
        whole thing. Want a cool head.
      </p>
      <p>
        —{" "}Well, get it into the evening edition, <Annotation annotationId="060033corporation" visited={visitedNotes.has("060033corporation")} annotationSelect={() => {openNote("060033corporation"); addToVisited("060033corporation")}} activeAnnotationId={currentNoteId}>councillor</Annotation>, Hynes said.
      </p>
      <p>
        Soon be calling him my <Annotation annotationId="060033corporation" visited={visitedNotes.has("060033corporation")} annotationSelect={() => {openNote("060033corporation"); addToVisited("060033corporation")}} activeAnnotationId={currentNoteId}>lord mayor</Annotation>. Long John is backing him, they say.
      </p>
      <p>
        The foreman, without answering, scribbled press on a corner of the sheet
        and made a sign to a typesetter. He handed the sheet silently over the
        dirty glass screen.
      </p>
      <p>
        —{" "}Right: thanks, Hynes said moving off.
      </p>
      <span data-edition="ed1986" data-page="98"></span>
      <p>
        Mr Bloom stood in his way.
      </p>
      <p>
        —{" "}If you want to draw the cashier is just going to lunch, he said,
        pointing backward with his thumb.
      </p>
      <p>
        —{" "}Did you? Hynes asked.
      </p>
      <p>
        —{" "}Mm, Mr Bloom said. Look sharp and you'll catch him.
      </p>
      <p>
        —{" "}Thanks, old man, Hynes said. I'll tap him too.
      </p>
      <p>
        He hurried on eagerly towards the <i>Freeman's Journal</i>.
      </p>
      <p>
        Three bob I lent him in Meagher's. Three weeks. Third hint.
      </p>
      <p className="text-center uppercase font-bold">
        WE SEE THE CANVASSER AT WORK
      </p>
      <p>
        Mr Bloom laid his cutting on Mr Nannetti's desk.
      </p>
      <p>
        —{" "}Excuse me, councillor, he said. This ad, you see. Keyes, you remember?
      </p>
      <p>
        Mr Nannetti considered the cutting awhile and nodded.
      </p>
      <p>
        —{" "}He wants it in for July, Mr Bloom said.
      </p>
      <span data-edition="ed1961" data-page="119"></span>
      <p>He doesn't hear it. <Annotation annotationId="070019nannetti" visited={visitedNotes.has("070019nannetti")} annotationSelect={() => {openNote("070019nannetti"); addToVisited("070019nannetti")}} activeAnnotationId={currentNoteId}>Nannan</Annotation>. Iron nerves.</p>
      <p>The foreman moved his pencil towards it.</p>
      <p>
        —{" "}But wait, Mr Bloom said. He wants it changed. Keyes, you see. He wants
        two keys at the top.
      </p>
      <span data-edition="ed1922" data-page="115"></span>
      <p>
        Hell of a racket they make. Maybe he understands what I.
      </p>
      <span data-edition="ed1939" data-page="90"> </span>
      <p>
        The foreman turned round to hear patiently and, lifting an elbow, began
        to scratch slowly in the armpit of his alpaca jacket.
      </p>
      <p>
        —{" "}Like that, Mr Bloom said, crossing his forefingers at the top.
      </p>
      <p>
        Let him take that in first.
      </p>
      <p>
        Mr Bloom, glancing sideways up from the cross he had made, saw the
        foreman's sallow face, think he has a touch of jaundice, and beyond the
        obedient reels feeding in huge webs of paper. Clank it. Clank it. Miles
        of it unreeled. What becomes of it after? O, wrap up meat, parcels:
        various uses, thousand and one things.
      </p>
      <span data-edition="ed1932" data-page="107"></span>
      <p>
        Slipping his words deftly into the pauses of the clanking he drew
        swiftly on the scarred woodwork.
      </p>
      <p className="text-center uppercase font-bold">
        HOUSE OF KEY(E)S
      </p>
      <p>
        —{" "}Like that, see. Two crossed keys here. A circle. Then here the name.
        Alexander Keyes, tea, wine and spirit merchant. So on.
      </p>
      <p>
        Better not teach him his own business.
      </p>
      <p>
        —{" "}You know yourself, councillor, just what he wants. Then round the top
        in leaded: the house of keys. You see? Do you think that's a good idea?
      </p>
      <p>
        The foreman moved his scratching hand to his lower ribs and scratched
        there quietly.
      </p>
      <p>
        —{" "}The idea, Mr Bloom said, is the <Annotation annotationId="010146hugekey" visited={visitedNotes.has("010146hugekey")} annotationSelect={() => {openNote("010146hugekey"); addToVisited("010146hugekey")}} activeAnnotationId={currentNoteId}>house of keys. You know, councillor,
        the Manx parliament.</Annotation> Innuendo of <Annotation annotationId="020037oldtory" visited={visitedNotes.has("020037oldtory")} annotationSelect={() => {openNote("020037oldtory"); addToVisited("020037oldtory")}} activeAnnotationId={currentNoteId}>home rule</Annotation>. Tourists, you know, from the
        isle of Man. Catches the eye, you see. Can you do that?
      </p>
      <span data-edition="ed1986" data-page="99"></span>
      <p>
        I could ask him perhaps about how to pronounce that <i>voglio.</i> But then
        if he didn't know only make it awkward for him. Better not.
      </p>
      <p>
        —{" "}We can do that, the foreman said. Have you the design?
      </p>
      <p>
        —{" "}I can get it, Mr Bloom said. It was in a Kilkenny paper. He has a
        house there too. I'll just run out and ask him. Well,<span data-edition="ed1961" data-page="120"></span> you can do that
        and just <Annotation annotationId="040082highgradeha" visited={visitedNotes.has("040082highgradeha")} annotationSelect={() => {openNote("040082highgradeha"); addToVisited("040082highgradeha")}} activeAnnotationId={currentNoteId}>a little par</Annotation> calling attention. You know the usual. Highclass
        licensed premises. Longfelt want. So on.
      </p>
      <p>
        The foreman thought for an instant.
      </p>
      <p>
        —{" "}We can do that, he said. Let him give us a three months' renewal.
      </p>
      <p>
        A typesetter brought him a limp galleypage. He began to check it
        silently. Mr Bloom stood by, hearing the loud throbs of cranks, watching
        the silent typesetters at their cases.
      </p>
      <span data-edition="ed1922" data-page="116"></span>
      <p className="text-center uppercase font-bold">
        ORTHOGRAPHICAL
      </p>
      <p>
        Want to be sure of his spelling. Proof fever. <Annotation annotationId="060034martincunningham" visited={visitedNotes.has("060034martincunningham")} annotationSelect={() => {openNote("060034martincunningham"); addToVisited("060034martincunningham")}} activeAnnotationId={currentNoteId}>Martin Cunningham</Annotation> forgot
        to give us his spellingbee conundrum this morning. It is amusing to view
        the unpar one ar alleled embarra two ars is it? double ess ment of a
        harassed pedlar while gauging au the symmetry of a peeled pear
        under a cemetery wall. Silly, isn't it? Cemetery put in of course on
        account of the symmetry.
      </p>
      <p>
        I could have said when he clapped on his topper. Thank you. I ought
        to have said something about an old hat or something. No. I could have
        said. Looks as good as new now. See his phiz then.
      </p>
      <p>
        Sllt. The nethermost deck of the first machine jogged forward its
        flyboard with sllt the first batch of quirefolded papers. <Annotation annotationId="070014circulation" visited={visitedNotes.has("070014circulation")} annotationSelect={() => {openNote("070014circulation"); addToVisited("070014circulation")}} activeAnnotationId={currentNoteId}>Sllt. Almost</Annotation><span data-edition="ed1932" data-page="108"></span>
        <Annotation annotationId="070014circulation" visited={visitedNotes.has("070014circulation")} annotationSelect={() => {openNote("070014circulation"); addToVisited("070014circulation")}} activeAnnotationId={currentNoteId}>human the way it sllt to call attention. Doing its level best to speak.</Annotation>
        That door too sllt creaking, asking to be shut. Everything speaks in its
        own way. Sllt.
      </p>
      <span data-edition="ed1939" data-page="91"> </span>
      <p className="text-center uppercase font-bold">
        NOTED CHURCHMAN AN OCCASIONAL CONTRIBUTOR
      </p>
      <p>
        The foreman handed back the galleypage suddenly, saying:
      </p>
      <p>
        —{" "}Wait. Where's the archbishop's letter? It's to be repeated in the
        <i>Telegraph.</i> Where's what's his name?
      </p>
      <p>
        He looked about him round his loud unanswering machines.
      </p>
      <p>
        —{" "}Monks, sir? a voice asked from the castingbox.
      </p>
      <p>
        —{" "}Ay. Where's Monks?
      </p>
      <p>
        —{" "}Monks!
      </p>
      <p>
        Mr Bloom took up his cutting. Time to get out.
      </p>
      <p>
        —{" "}Then I'll get the design, Mr Nannetti, he said, and you'll give it a
        good place I know.
      </p>
      <span data-edition="ed1961" data-page="121"></span>
      <p>
        —{" "}Monks!
      </p>
      <p>
        —{" "}Yes, sir.
      </p>
      <span data-edition="ed1986" data-page="100"></span>
      <p>
        Three months' renewal. Want to get some wind off my chest first. Try it
        anyhow. Rub in August: good idea: horseshow month. Ballsbridge. Tourists
        over for the show.
      </p>
      <span data-edition="ed1922" data-page="117"></span>
      <p className="text-center uppercase font-bold">
        A DAYFATHER
      </p>
      <p>
        He walked on through the caseroom passing an old man, bowed, spectacled,
        aproned. Old Monks, the dayfather. Queer lot of stuff he must have put
        through his hands in his time: obituary notices, pubs' ads, speeches,
        divorce suits, <Annotation annotationId="030069founddrowned" visited={visitedNotes.has("030069founddrowned")} annotationSelect={() => {openNote("030069founddrowned"); addToVisited("030069founddrowned")}} activeAnnotationId={currentNoteId}>found drowned</Annotation>. Nearing the end of his tether now. Sober
        serious man with a bit in the savingsbank I'd say. Wife a good cook and
        washer. Daughter working the machine in the parlour. Plain Jane, no damn
        nonsense. 
      </p>
      <p className="text-center uppercase font-bold">
        <Annotation annotationId="060043passover" visited={visitedNotes.has("060043passover")} annotationSelect={() => {openNote("060043passover"); addToVisited("060043passover")}} activeAnnotationId={currentNoteId}>AND IT WAS THE FEAST OF THE PASSOVER</Annotation>
      </p>
      <p>
        He stayed in his walk to watch a typesetter neatly distributing type.
        Reads it backwards first. Quickly he does it. Must require some practice
        that. mangiD. kcirtaP. <Annotation annotationId="060043passover" visited={visitedNotes.has("060043passover")} annotationSelect={() => {openNote("060043passover"); addToVisited("060043passover")}} activeAnnotationId={currentNoteId}>Poor papa with his hagadah book, reading backwards
        with his finger to me. Pessach. Next year in Jerusalem. Dear, O dear!
        All that long business about that brought us out of the land of Egypt
        and into the house of bondage <i>Alleluia. Shema Israel Adonai Elohenu</i>.
        No, that's the other. Then the twelve brothers, Jacob's sons. And then
        the lamb and the cat and the dog and the stick and the water and the
        butcher. And then the angel of death kills the butcher and he</Annotation><span data-edition="ed1932" data-page="109"></span> <Annotation annotationId="060043passover" visited={visitedNotes.has("060043passover")} annotationSelect={() => {openNote("060043passover"); addToVisited("060043passover")}} activeAnnotationId={currentNoteId}>kills the
        ox and the dog kills the cat. Sounds a bit silly till you come to look
        into it well. Justice it means but it's everybody eating everyone else.</Annotation>
        That's what life is after all. How quickly he does that job. Practice
        makes perfect. Seems to see with his fingers.
      </p>
      <p>
        Mr Bloom passed on out of the clanking noises through the gallery on to
        the landing. Now am I going to tram it out all the way and then catch
        him out perhaps. Better phone him up first. Number? Same as
        Citron's house. Twentyeight. Twentyeight double four.
      </p>
      <span data-edition="ed1961" data-page="122"></span>
      <p className="text-center uppercase font-bold">
        ONLY ONCE MORE THAT SOAP
      </p>
      <p>
        He went down the house staircase. <Annotation annotationId="150016writingonthewall" visited={visitedNotes.has("150016writingonthewall")} annotationSelect={() => {openNote("150016writingonthewall"); addToVisited("150016writingonthewall")}} activeAnnotationId={currentNoteId}>Who the deuce scrawled all over these
        walls with matches? Looks as if they did it for a bet.</Annotation> Heavy greasy
        smell there always is in those works. Lukewarm glue in Thom's next door
        when I was there.
      </p>
      <span data-edition="ed1939" data-page="92"> </span>
      <p>
        He took out his handkerchief to dab his nose. Citronlemon? Ah, the soap
        I put there. Lose it out of that pocket. Putting back his handkerchief
        he took out the soap and stowed it away, buttoned, into the hip pocket
        of his trousers.
      </p>
      <span data-edition="ed1922" data-page="118"></span>
      <span data-edition="ed1986" data-page="101"></span>
      <p>
        What perfume does your wife use? I could go home still: tram: something
        I forgot. Just to see: before: dressing. No. Here. No.
      </p>
      <p>
        A sudden screech of laughter came from the <i>Evening Telegraph</i> office.
        Know who that is. What's up? Pop in a minute to phone. Ned Lambert it
        is.
      </p>
      <p>
        He entered softly.
      </p>
      <p className="text-center uppercase font-bold">
        ERIN, GREEN GEM OF THE SILVER SEA
      </p>
      <p>
        —{" "}The ghost walks, professor MacHugh murmured softly, biscuitfully to
        the dusty windowpane.
      </p>
      <p>
        Mr Dedalus, staring from the empty fireplace at Ned Lambert's quizzing
        face, asked of it sourly:
      </p>
      <p>
        —{" "}Agonising Christ, wouldn't it give you a heartburn on your arse?
      </p>
      <p>
        Ned Lambert, seated on the table, read on:
      </p>
      <p>
        —{" "}<i>Or again, note the meanderings of some purling rill as it babbles
        on its way, tho' quarrelling with the stony obstacles, to the tumbling
        waters of Neptune's blue domain, 'mid mossy banks, fanned by gentlest
        zephyrs, played on by the glorious sunlight or 'neath the shadows cast
        o'er its pensive bosom by the overarching leafage of the giants of
        the forest</i>. What about that, Simon? he asked over the fringe of his
        newspaper. How's that for high?
      </p>
      <p>
        —{" "}Changing his drink, Mr Dedalus said.
      </p>
      <p>
        Ned Lambert, laughing, struck the newspaper on his knees, repeating:
      </p>
      <span data-edition="ed1932" data-page="110"></span>
      <p>
        —{" "}<i>The pensive bosom and the overarsing leafage</i>. O boys! O boys!
      </p>
      <span data-edition="ed1961" data-page="123"></span>
      <p>
        —{" "}And Xenophon looked upon Marathon, Mr Dedalus said, looking again on
        the fireplace and to the window, and Marathon looked on the sea.
      </p>
      <p>
        —{" "}That will do, professor MacHugh cried from the window. I don't want to
        hear any more of the stuff.
      </p>
      <p>
        He ate off the crescent of water biscuit he had been nibbling and,
        hungered, made ready to nibble the biscuit in his other hand.
      </p>
      <p>
        High falutin stuff. Bladderbags. Ned Lambert is taking a day off I see.
        Rather upsets a man's day, a funeral does. He has influence they
        say. Old Chatterton, the vicechancellor, is his granduncle or his
        greatgranduncle. Close on ninety they say. Subleader for his death
        written this long time perhaps. Living to spite them. Might go first
        himself. Johnny, make room for your uncle. The right honourable Hedges
        Eyre Chatterton. Daresay he writes him an odd shaky cheque or two on
        gale days. Windfall when he kicks out. Alleluia.
      </p>
      <p>
        —{" "}Just another spasm, Ned Lambert said.
      </p>
      <span data-edition="ed1922" data-page="119"></span>
      <p>
        —{" "}What is it? Mr Bloom asked.
      </p>
      <p>
        —{" "}A recently discovered fragment of Cicero's, professor MacHugh answered
        with pomp of tone. <i>Our lovely land</i>. 
      </p>
      <span data-edition="ed1986" data-page="102"></span>
      <p className="text-center uppercase font-bold">
        SHORT BUT TO THE POINT
      </p>
      <p>
        —{" "}Whose land? Mr Bloom said simply.
      </p>
      <p>
        —{" "}Most pertinent question, the professor said between his chews. With an
        accent on the whose.
      </p>
      <p>
        —{" "}<Annotation annotationId="060037dandawson" visited={visitedNotes.has("060037dandawson")} annotationSelect={() => {openNote("060037dandawson"); addToVisited("060037dandawson")}} activeAnnotationId={currentNoteId}>Dan Dawson's land</Annotation> Mr Dedalus said.
      </p>
      <span data-edition="ed1939" data-page="93"> </span>
      <p>
        —{" "}Is it his speech last night? Mr Bloom asked.
      </p>
      <p>
        Ned Lambert nodded.
      </p>
      <p>
        —{" "}But listen to this, he said.
      </p>
      <p>
        The doorknob hit Mr Bloom in the small of the back as the door was
        pushed in.
      </p>
      <p>
        —{" "}Excuse me, J. J. O'Molloy said, entering.
      </p>
      <p>
        Mr Bloom moved nimbly aside.
      </p>
      <p>
        —{" "}I beg yours, he said.
      </p>
      <p>
        —{" "}Good day, Jack.
      </p>
      <p>
        —{" "}Come in. Come in.
      </p>
      <p>
        —{" "}Good day.
      </p>
      <p>
        —{" "}How are you, Dedalus?
      </p>
      <p>
        —{" "}Well. And yourself?
      </p>
      <p>
        J. J. O'Molloy shook his head.
      </p>
      <span data-edition="ed1932" data-page="111"></span>
      <span data-edition="ed1961" data-page="124"></span>
      <p className="text-center uppercase font-bold">
        SAD
      </p>
      <p>
        Cleverest fellow at the junior bar he used to be. Decline, poor chap.
        That hectic flush spells finis for a man. Touch and go with him. What's
        in the wind, I wonder. Money worry.
      </p>
      <p>
        —{" "}<i>Or again if we but climb the serried mountain peaks.</i>
      </p>
      <p>
        —{" "}You're looking extra.
      </p>
      <p>
        —{" "}Is the editor to be seen? J. J. O'Molloy asked, looking towards the
        inner door.
      </p>
      <p>
        —{" "}Very much so, professor MacHugh said. To be seen and heard. He's in
        his sanctum with Lenehan.
      </p>
      <span data-edition="ed1922" data-page="120"></span>
      <p>
        J. J. O'Molloy strolled to the sloping desk and began to turn back the
        <Annotation annotationId="020064telegraph" visited={visitedNotes.has("020064telegraph")} annotationSelect={() => {openNote("020064telegraph"); addToVisited("020064telegraph")}} activeAnnotationId={currentNoteId}>pink pages</Annotation> of the file.
      </p>
      <p>
        Practice dwindling. A mighthavebeen. Losing heart. Gambling. Debts of
        honour. Reaping the whirlwind. Used to get good retainers from D. and T.
        Fitzgerald. Their wigs to show their grey matter. Brains on their sleeve
        like the statue in Glasnevin. <Annotation annotationId="070017dailyexpress" visited={visitedNotes.has("070017dailyexpress")} annotationSelect={() => {openNote("070017dailyexpress"); addToVisited("070017dailyexpress")}} activeAnnotationId={currentNoteId}>Believe he does some literary work for the
        <i>Express</i></Annotation> with <Annotation annotationId="040027conroy" visited={visitedNotes.has("040027conroy")} annotationSelect={() => {openNote("040027conroy"); addToVisited("040027conroy")}} activeAnnotationId={currentNoteId}>Gabriel Conroy</Annotation>. Wellread fellow. <Annotation annotationId="120009irishindependent" visited={visitedNotes.has("120009irishindependent")} annotationSelect={() => {openNote("120009irishindependent"); addToVisited("120009irishindependent")}} activeAnnotationId={currentNoteId}>Myles Crawford began
        on the <i>Independent.</i> Funny the way those newspaper men veer about when
        they get wind of a new opening.</Annotation> Weathercocks. Hot and cold in the same
        breath. Wouldn't know which to believe. One story good till you hear
        the next. Go for one another baldheaded in the papers and then all blows
        over. Hail fellow well met the next moment.
      </p>
      <span data-edition="ed1986" data-page="103"></span>
      <p>
        —{" "}Ah, listen to this for God' sake, Ned Lambert pleaded. <i>Or again if we
        but climb the serried mountain peaks...</i>
      </p>
      <p>
        —{" "}Bombast! the professor broke in testily. Enough of the inflated
        windbag!
      </p>
      <p>
        —{" "}<i>Peaks</i>, Ned Lambert went on, <i>towering high on high, to bathe our
        souls, as it were...</i>
      </p>
      <p>
        —{" "}Bathe his lips, Mr Dedalus said. Blessed and eternal God! Yes? Is he
        taking anything for it?
      </p>
      <p>
        <i>—{" "}As 'twere, in the peerless panorama of Ireland's portfolio,
        unmatched, despite their wellpraised prototypes in other vaunted prize
        regions, for very beauty, of bosky grove and undulating plain and
        luscious pastureland of vernal green, steeped in the transcendent
        translucent glow of our mild mysterious Irish twilight...</i>
      </p>
      <span data-edition="ed1939" data-page="94"> </span>
      <span data-edition="ed1932" data-page="112"></span>
      <span data-edition="ed1961" data-page="125"></span>
      <p className="text-center uppercase font-bold">
        HIS NATIVE DORIC
      </p>
      <p>
        —{" "}The moon, professor MacHugh said. He forgot Hamlet.
      </p>
      <p>
        <i>—{" "}That mantles the vista far and wide and wait till the glowing orb of
        the moon shines forth to irradiate her silver effulgence...</i>
      </p>
      <p>
        —{" "}O! Mr Dedalus cried, giving vent to a hopeless groan. Shite and
        onions! That'll do, Ned. Life is too short.
      </p>
      <p>
        He took off his silk hat and, blowing out impatiently his bushy
        moustache, welshcombed his hair with raking fingers.
      </p>
      <p>
        Ned Lambert tossed the newspaper aside, chuckling with delight. An
        instant after a hoarse bark of laughter burst over professor MacHugh's
        unshaven blackspectacled face.
      </p>
      <p>
        —{" "}Doughy Daw! he cried.
      </p>
      <span data-edition="ed1922" data-page="121"></span>
      <p className="text-center uppercase font-bold">
        WHAT WETHERUP SAID
      </p>
      <p>
        All very fine to jeer at it now in cold print but it goes down like hot
        cake that stuff. He was in the bakery line too, wasn't he? Why they call
        him Doughy Daw. Feathered his nest well anyhow. Daughter engaged to that
        chap in the inland revenue office with the motor. Hooked that nicely.
        Entertainments. Open house. Big blowout. Wetherup always said that. Get
        a grip of them by the stomach.
      </p>
      <p>
        The inner door was opened violently and a scarlet beaked face, crested
        by a comb of feathery hair, thrust itself in. The bold blue eyes stared
        about them and the harsh voice asked:
      </p>
      <p>
        —{" "}What is it?
      </p>
      <p>
        —{" "}And here comes <Annotation annotationId="070018shamsquire" visited={visitedNotes.has("070018shamsquire")} annotationSelect={() => {openNote("070018shamsquire"); addToVisited("070018shamsquire")}} activeAnnotationId={currentNoteId}>the sham squire</Annotation> himself! professor MacHugh said
        grandly.
      </p>
      <p>
        —{" "}Getonouthat, you bloody old pedagogue! the editor said in recognition.
      </p>
      <p>
        —{" "}Come, Ned, Mr Dedalus said, putting on his hat. I must get a drink
        after that.
      </p>
      <span data-edition="ed1986" data-page="104"></span>
      <p>
        —{" "}Drink! the editor cried. No drinks served before mass.
      </p>
      <p>
        —{" "}Quite right too, Mr Dedalus said, going out. Come on, Ned.
      </p>
      <p>
        Ned Lambert sidled down from the table. The editor's blue eyes roved
        towards Mr Bloom's face, shadowed by a smile.
      </p>
      <p>
        —{" "}Will you join us, Myles? Ned Lambert asked.
      </p>
      <span data-edition="ed1961" data-page="126"></span>
      <p className="text-center uppercase font-bold">
        MEMORABLE BATTLES RECALLED
      </p>
      <p>
        —{" "}North Cork militia! the editor cried, striding to the mantelpiece. We
        won every time! North Cork and Spanish officers!
      </p>
      <span data-edition="ed1932" data-page="113"></span>
      <p>
        —{" "}Where was that, Myles? Ned Lambert asked with a reflective glance at
        his toecaps.
      </p>
      <p>
        —{" "}In Ohio! the editor shouted.
      </p>
      <p>
        —{" "}So it was, begad, Ned Lambert agreed.
      </p>
      <p>
        Passing out he whispered to J. J. O'Molloy:
      </p>
      <p>
        —{" "}Incipient jigs. Sad case.
      </p>
      <p>
        —{" "}Ohio! the editor crowed in high treble from his uplifted scarlet face.
        My Ohio!
      </p>
      <p>
        —{" "}A perfect cretic! the professor said. Long, short and long.
      </p>
      <span data-edition="ed1922" data-page="122"></span>
      <p className="text-center uppercase font-bold">
        O, HARP EOLIAN!
      </p>
      <p>
        He took a reel of dental floss from his waistcoat pocket and, breaking
        off a piece, twanged it smartly between two and two of his resonant
        unwashed teeth.
      </p>
      <p>
        —{" "}Bingbang, bangbang.
      </p>
      <span data-edition="ed1939" data-page="95"> </span>
      <p>
        Mr Bloom, seeing the coast clear, made for the inner door.
      </p>
      <p>
        —{" "}Just a moment, Mr Crawford, he said. I just want to phone about an ad.
      </p>
      <p>
        He went in.
      </p>
      <p>
        —{" "}What about that leader this evening? professor MacHugh asked, coming
        to the editor and laying a firm hand on his shoulder.
      </p>
      <p>
        —{" "}That'll be all right, Myles Crawford said more calmly. Never you fret.
        Hello, Jack. That's all right.
      </p>
      <p>
        —{" "}Good day, Myles, J. J. O'Molloy said, letting the pages he held slip
        limply back on the file. Is that Canada swindle case on today?
      </p>
      <p>
        The telephone whirred inside.
      </p>
      <p>
        —{" "}Twenty eight... No, twenty... Double four... Yes.
      </p>
      <span data-edition="ed1961" data-page="127"></span>
      <p className="text-center uppercase font-bold">
        SPOT THE WINNER
      </p>
      <p>
        Lenehan came out of the inner office with <Annotation annotationId="160004newspapers" visited={visitedNotes.has("160004newspapers")} annotationSelect={() => {openNote("160004newspapers"); addToVisited("160004newspapers")}} activeAnnotationId={currentNoteId}><i>Sport's</i> tissues</Annotation>.
      </p>
      <p>
        —{" "}Who wants a dead cert for the Gold cup? he asked. Sceptre with O.
        Madden up.
      </p>
      <span data-edition="ed1986" data-page="105"></span>
      <p>
        He tossed the tissues on to the table.
      </p>
      <p>
        Screams of newsboys barefoot in the hall rushed near and the door was
        flung open.
      </p>
      <p>
        —{" "}Hush, Lenehan said. I hear feetstoops.
      </p>
      <p>
        Professor MacHugh strode across the room and seized the cringing urchin
        by the collar as the others scampered out of the hall and down the
        steps. The tissues rustled up in the draught, floated softly in the air
        blue scrawls and under the table came to earth.
      </p>
      <span data-edition="ed1932" data-page="114"></span>
      <p>
        —{" "}It wasn't me, sir. It was the big fellow shoved me, sir.
      </p>
      <p>
        —{" "}Throw him out and shut the door, the editor said. There's a hurricane
        blowing.
      </p>
      <p>
        Lenehan began to paw the tissues up from the floor, grunting as he
        stooped twice.
      </p>
      <span data-edition="ed1922" data-page="123"></span>
      <p>
        —{" "}Waiting for the racing special, sir, the newsboy said. It was Pat
        Farrell shoved me, sir.
      </p>
      <p>
        He pointed to two faces peering in round the doorframe.
      </p>
      <p>
        —{" "}Him, sir.
      </p>
      <p>
        —{" "}Out of this with you, professor MacHugh said gruffly.
      </p>
      <p>
        He hustled the boy out and banged the door to.
      </p>
      <p>
        J. J. O'Molloy turned the files crackingly over, murmuring, seeking:
      </p>
      <p>
        —{" "}Continued on page six, column four.
      </p>
      <p>
        —{" "}Yes, <i>Evening Telegraph</i> here, Mr Bloom phoned from the inner office.
        Is the boss...? Yes, <i>Telegraph</i>... To where? Aha! Which auction rooms?... 
        Aha! I see... Right. I'll catch him.
      </p>
      <p className="text-center uppercase font-bold">
        A COLLISION ENSUES
      </p>
      <p>
        The bell whirred again as he rang off. He came in quickly and bumped
        against Lenehan who was struggling up with the second tissue.
      </p>
      <span data-edition="ed1961" data-page="128"></span>
      <p>
        —{" "}<i>Pardon, monsieur</i>, Lenehan said, clutching him for an instant and
        making a grimace.
      </p>
      <p>
        —{" "}My fault, Mr Bloom said, suffering his grip. Are you hurt? I'm in a
        hurry.
      </p>
      <p>
        —{" "}Knee, Lenehan said.
      </p>
      <p>
        He made a comic face and whined, rubbing his knee:
      </p>
      <p>
        —{" "}The accumulation of the <i>anno Domini</i>.
      </p>
      <span data-edition="ed1939" data-page="96"> </span>
      <p>
        —{" "}Sorry, Mr Bloom said.
      </p>
      <p>
        He went to the door and, holding it ajar, paused. J. J. O'Molloy slapped
        the heavy pages over. The noise of two shrill voices, a mouthorgan,
        echoed in the bare hallway from the newsboys squatted on the doorsteps:
      </p>
      <p>  <i>We are the boys of Wexford <br/>
        Who fought with heart and hand.</i>
      </p>
      <p className="text-center uppercase font-bold">
        EXIT BLOOM
      </p>
      <p>
        —{" "}I'm just running round to Bachelor's walk, Mr Bloom said, about this
        ad of Keyes's. Want to fix it up. They tell me he's round there in
        Dillon's.
      </p>
      <span data-edition="ed1932" data-page="115"></span>
      <span data-edition="ed1986" data-page="106"></span>
      <p>
        He looked indecisively for a moment at their faces. The editor who, 
        <span data-edition="ed1922" data-page="124"></span>
        
        leaning against the mantelshelf, had propped his head on his hand,
        suddenly stretched forth an arm amply.
      </p>
      <p>
        —{" "}Begone! he said. The world is before you.
      </p>
      <p>
        —{" "}Back in no time, Mr Bloom said, hurrying out.
      </p>
      <p>
        J. J. O'Molloy took the tissues from Lenehan's hand and read them,
        blowing them apart gently, without comment.
      </p>
      <p>
        —{" "}He'll get that advertisement, the professor said, staring through his
        blackrimmed spectacles over the crossblind. Look at the young scamps
        after him.
      </p>
      <p>
        —{" "}Show. Where? Lenehan cried, running to the window.
      </p>
      <p className="text-center uppercase font-bold">
        A STREET CORTÈGE 
      </p>
      <p>
        Both smiled over the crossblind at the file of capering newsboys in Mr
        Bloom's wake, the last zigzagging white on the breeze a mocking kite, a
        tail of white bowknots.
      </p>
      <p>
        —{" "}Look at the young guttersnipe behind him hue and cry, Lenehan said,
        and you'll kick. O, my rib risible! Taking off his flat spaugs and the
        walk. Small nines. Steal upon larks.
      </p>
      <span data-edition="ed1961" data-page="129"></span>
      <p>
        He began to mazurka in swift caricature across the floor on sliding
        feet past the fireplace to J. J. O'Molloy who placed the tissues in his
        receiving hands.
      </p>
      <p>
        —{" "}What's that? Myles Crawford said with a start. Where are the other two
        gone?
      </p>
      <p>
        —{" "}Who? the professor said, turning. They're gone round to the Oval for a
        drink. Paddy Hooper is there with Jack Hall. Came over last night.
      </p>
      <p>
        —{" "}Come on then, Myles Crawford said. Where's my hat?
      </p>
      <p>
        He walked jerkily into the office behind, parting the vent of his
        jacket, jingling his keys in his back pocket. They jingled then in the
        air and against the wood as he locked his desk drawer.
      </p>
      <p>
        —{" "}He's pretty well on, professor MacHugh said in a low voice.
      </p>
      <p>
        —{" "}Seems to be, J. J. O'Molloy said, taking out a cigarettecase in
        murmuring meditation, but it is not always as it seems. Who has the most
        <Annotation annotationId="150013matches" visited={visitedNotes.has("150013matches")} annotationSelect={() => {openNote("150013matches"); addToVisited("150013matches")}} activeAnnotationId={currentNoteId}>matches</Annotation>?
      </p>
      <p className="text-center uppercase font-bold">
        THE CALUMET OF PEACE
      </p>
      <p>
        He offered a cigarette to the professor and took one himself. Lenehan
        promptly struck a match for them and lit their cigarettes in turn. J. J.
        O'Molloy opened his case again and offered it.
      </p>
      <span data-edition="ed1922" data-page="125"></span>
      <p>
        —{" "}<i>Thanky vous</i>, Lenehan said, helping himself.
      </p>
      <span data-edition="ed1939" data-page="97"> </span>
      <p>
        The editor came from the inner office, a straw hat awry on his brow. <span data-edition="ed1932" data-page="116"></span>He
        declaimed in song, pointing sternly at professor MacHugh:
      </p>
      <span data-edition="ed1986" data-page="107"></span>
      <p>
        <i>'Twas rank and fame that tempted thee, <br/>
        'Twas empire charmed thy heart.</i>
      </p>
      <p>
        The professor grinned, locking his long lips.
      </p>
      <p>
        —{" "}Eh? You bloody old Roman empire? Myles Crawford said.
      </p>
      <p>
        He took a cigarette from the open case. Lenehan, lighting it for him
        with quick grace, said:
      </p>
      <p>
        —{" "}Silence for my brandnew riddle!
      </p>
      <p>
        —{" "}<i>Imperium romanum</i>, J. J. O'Molloy said gently. It sounds nobler than
        British or Brixton. The word reminds one somehow of fat in the fire.
      </p>
      <span data-edition="ed1961" data-page="130"></span>
      <p>
        Myles Crawford blew his first puff violently towards the ceiling.
      </p>
      <p>
        —{" "}That's it, he said. We are the fat. You and I are the fat in the fire.
        We haven't got the chance of a snowball in hell.
      </p>
      <p className="text-center uppercase font-bold">
        THE GRANDEUR THAT WAS ROME
      </p>
      <p>
        —{" "}Wait a moment, professor MacHugh said, raising two quiet claws. We
        mustn't be led away by words, by sounds of words. We think of Rome,
        imperial, imperious, imperative.
      </p>
      <p>
        He extended elocutionary arms from frayed stained shirtcuffs, pausing:
      </p>
      <p>
        —{" "}What was their civilisation? Vast, I allow: but vile. Cloacae: sewers.
        The Jews in the wilderness and on the mountaintop said: <i>It is meet
        to be here. Let us build an altar to Jehovah</i>. The Roman, like the
        Englishman who follows in his footsteps, brought to every new shore on
        which he set his foot (on our shore he never set it) only his <Annotation annotationId="070020cloacalobsession" visited={visitedNotes.has("070020cloacalobsession")} annotationSelect={() => {openNote("070020cloacalobsession"); addToVisited("070020cloacalobsession")}} activeAnnotationId={currentNoteId}>cloacal
        obsession</Annotation>. He gazed about him in his toga and he said: <i>It is meet to be
        here. Let us construct a watercloset.</i>
      </p>
      <p>
        —{" "}Which they accordingly did do, Lenehan said. Our old ancient
        ancestors, as we read in <Annotation annotationId="010106sacredpint" visited={visitedNotes.has("010106sacredpint")} annotationSelect={() => {openNote("010106sacredpint"); addToVisited("010106sacredpint")}} activeAnnotationId={currentNoteId}>the first chapter of Guinness's</Annotation>, were partial
        to the running stream.
      </p>
      <p>
        —{" "}They were nature's gentlemen, J. J. O'Molloy murmured. But we have
        also Roman law.
      </p>
      <p>
        —{" "}And Pontius Pilate is its prophet, professor MacHugh responded.
      </p>
      <span data-edition="ed1922" data-page="126"></span>
      <p>
        —{" "}Do you know that story about chief baron Palles? J. J. O'Molloy asked.
        It was at the royal university dinner. Everything was going swimmingly
        ...
      </p>
      <p>
        —{" "}First my riddle, Lenehan said. Are you ready?
      </p>
      <p>
        Mr O'Madden Burke, tall in copious grey of Donegal tweed, came in from
        the hallway. Stephen Dedalus, behind him, uncovered as he entered.
      </p>
      <p>
        —{" "}<i>Entrez, mes enfants!</i> Lenehan cried.
      </p>
      <span data-edition="ed1932" data-page="117"></span>
      <p>
        —{" "}I escort a suppliant, Mr O'Madden Burke said melodiously. Youth led by
        Experience visits Notoriety.
      </p>
      <p>
        —{" "}How do you do? the editor said, holding out a hand. Come in. Your governor is just gone.
      </p>
      <span data-edition="ed1961" data-page="131"></span>
      <span data-edition="ed1986" data-page="108"></span>
      <p className="text-center uppercase font-bold">
        ?{" "}{" "}?{" "}{" "}?
      </p>
      <p>
        Lenehan said to all:
      </p>
      <p>
        —{" "}Silence! What opera resembles a railwayline? Reflect, ponder,
        excogitate, reply.
      </p>
      <span data-edition="ed1939" data-page="98"> </span>
      <p>
        Stephen handed over the typed sheets, pointing to the title and
        signature.
      </p>
      <p>
        —{" "}Who? the editor asked.
      </p>
      <p>
        <Annotation annotationId="020064telegraph" visited={visitedNotes.has("020064telegraph")} annotationSelect={() => {openNote("020064telegraph"); addToVisited("020064telegraph")}} activeAnnotationId={currentNoteId}>Bit torn off.</Annotation>
      </p>
      <p>
        —{" "}Mr Garrett Deasy, Stephen said.
      </p>
      <p>
        —{" "}That old pelters, the editor said. Who tore it? Was he short taken?
      </p>
      <p>   <Annotation annotationId="030149vampire" visited={visitedNotes.has("030149vampire")} annotationSelect={() => {openNote("030149vampire"); addToVisited("030149vampire")}} activeAnnotationId={currentNoteId}><i>On swift sail flaming <br/>
        From storm and south  <br/>
        He comes, pale vampire,  <br/></i></Annotation><i>
        Mouth to my mouth.</i>  
      </p>
      <p>
        —{" "}Good day, Stephen, the professor said, coming to peer over their
        shoulders. <Annotation annotationId="020054footandmouth" visited={visitedNotes.has("020054footandmouth")} annotationSelect={() => {openNote("020054footandmouth"); addToVisited("020054footandmouth")}} activeAnnotationId={currentNoteId}>Foot and mouth?</Annotation> Are you turned...?
      </p>
      <p>
        <Annotation annotationId="020065bullockbefriending" visited={visitedNotes.has("020065bullockbefriending")} annotationSelect={() => {openNote("020065bullockbefriending"); addToVisited("020065bullockbefriending")}} activeAnnotationId={currentNoteId}>Bullockbefriending bard.</Annotation>
      </p>
      <p className="text-center uppercase font-bold">
        SHINDY IN WELLKNOWN RESTAURANT
      </p>
      <p>
        —{" "}Good day, sir, Stephen answered, blushing. The letter is not mine. Mr
        Garrett Deasy asked me to...
      </p>
      <p>
        —{" "}O, I know him, Myles Crawford said, and <Annotation annotationId="020017deasy" visited={visitedNotes.has("020017deasy")} annotationSelect={() => {openNote("020017deasy"); addToVisited("020017deasy")}} activeAnnotationId={currentNoteId}>knew his wife too</Annotation>. The
        bloodiest old tartar God ever made. By Jesus, she had the foot and mouth 
        <span data-edition="ed1922" data-page="127"></span>
        
        disease and no mistake! The night she threw the soup in the waiter's
        face in the Star and Garter. Oho!
      </p>
      <p>
        <Annotation annotationId="020070womansin" visited={visitedNotes.has("020070womansin")} annotationSelect={() => {openNote("020070womansin"); addToVisited("020070womansin")}} activeAnnotationId={currentNoteId}>A woman brought sin into the world. For Helen, the runaway wife of
        Menelaus, ten years the Greeks. O'Rourke, prince of Breffni.</Annotation>
      </p>
      <p>
        —{" "}Is he a widower? Stephen asked.
      </p>
      <p>
        —{" "}Ay, a grass one, Myles Crawford said, his eye running down the
        typescript. <Annotation annotationId="020055serumandvirus" visited={visitedNotes.has("020055serumandvirus")} annotationSelect={() => {openNote("020055serumandvirus"); addToVisited("020055serumandvirus")}} activeAnnotationId={currentNoteId}>Emperor's horses. Habsburg.</Annotation> An Irishman saved his life on
        the ramparts of Vienna. Don't you forget! Maximilian Karl O'Donnell,
        graf von Tirconnell in Ireland. Sent his heir over to make the king
        an Austrian fieldmarshal now. Going to be trouble there one day. <Annotation annotationId="030027wildgoose" visited={visitedNotes.has("030027wildgoose")} annotationSelect={() => {openNote("030027wildgoose"); addToVisited("030027wildgoose")}} activeAnnotationId={currentNoteId}>Wild
        geese.</Annotation> O yes, every time. Don't you forget that!
      </p>
      <span data-edition="ed1932" data-page="118"></span>
      <span data-edition="ed1961" data-page="132"></span>
      <p>
        —{" "}The moot point is did he forget it, J. J. O'Molloy said quietly,
        turning a horseshoe paperweight. Saving princes is a thank you job.
      </p>
      <p>
        Professor MacHugh turned on him.
      </p>
      <p>
        —{" "}And if not? he said.
      </p>
      <p>
        —{" "}I'll tell you how it was, Myles Crawford began. A Hungarian it was one
        day... 
      </p>
      <span data-edition="ed1986" data-page="109"></span>
      <p className="text-center uppercase font-bold">
        LOST CAUSES <br/>
        NOBLE MARQUESS MENTIONED
      </p>
      <p>
        —{" "}We were always loyal to lost causes, the professor said. Success for
        us is the death of the intellect and of the imagination. We were never
        loyal to the successful. We serve them. I teach the blatant Latin
        language. I speak the tongue of a race the acme of whose mentality is
        the maxim: time is money. Material domination. <i>Dominus!</i> Lord! Where is
        the spirituality? Lord Jesus? Lord Salisbury? A sofa in a westend club.
        But the Greek!
      </p>
      <p className="text-center uppercase font-bold">
        KYRIE ELEISON!
      </p>
      <p>
        A smile of light brightened his darkrimmed eyes, lengthened his long
        lips.
      </p>
      <p>
        —{" "}The Greek! he said again. <i>Kyrios!</i> Shining word! The vowels the
        Semite and the 
        <span data-edition="ed1939" data-page="99"> </span>
        Saxon know not. <i>Kyrie!</i> The radiance of the intellect.
        I ought to profess Greek, the language of the mind. <i>Kyrie eleison!</i> The
        closetmaker and the cloacamaker will never be lords of our spirit. We
        are liege subjects of the catholic chivalry of Europe that foundered at
        Trafalgar and of the empire 
        <span data-edition="ed1922" data-page="128"></span>
        
        of the spirit, not an <i>imperium,</i> that
        went under with the Athenian fleets at Ægospotami. Yes, yes. They went
        under. Pyrrhus, misled by an oracle, made a last attempt to retrieve the
        fortunes of Greece. Loyal to a lost cause.
      </p>
      <p>
        He strode away from them towards the window.
      </p>
      <p>
        —{" "}They went forth to battle, Mr O'Madden Burke said greyly, but they
        always fell.
      </p>
      <p>
        —{" "}Boohoo! Lenehan wept with a little noise. Owing to a<span data-edition="ed1961" data-page="133"></span> brick received in
        the latter half of the <i>matinée</i>. Poor, poor, poor Pyrrhus!
      </p>
      <p>
        He whispered then near Stephen's ear:
      </p>
      <p className="text-center uppercase font-bold">
        LENEHAN'S LIMERICK
      </p>
      <p> —{" "}<i>There's a ponderous pundit MacHugh <br/>
        Who wears goggles of ebony hue.  <br/>
        As he mostly sees double  <br/>
        To wear them why trouble?  <br/>
        I can't see the Joe Miller. Can you?</i>
      </p>
      <span data-edition="ed1932" data-page="119"></span>
      <p>
        In mourning for Sallust, Mulligan says. Whose mother is beastly dead.
      </p>
      <p>
        Myles Crawford crammed the sheets into a sidepocket.
      </p>
      <p>
        —{" "}That'll be all right, he said. I'll read the rest after. That'll be
        all right.
      </p>
      <p>
        Lenehan extended his hands in protest.
      </p>
      <p>
        —{" "}But my riddle! he said. What opera is like a railwayline?
      </p>
      <p>
        —{" "}Opera? Mr O'Madden Burke's sphinx face reriddled.
      </p>
      <p>
        Lenehan announced gladly:
      </p>
      <span data-edition="ed1986" data-page="110"></span>
      <p>
        —{" "}<i>The Rose of Castile</i>. See the wheeze? Rows of cast steel. Gee!
      </p>
      <p>
        He poked Mr O'Madden Burke mildly in the spleen. Mr O'Madden Burke fell
        back with grace on his umbrella, feigning a gasp.
      </p>
      <p>
        —{" "}Help! he sighed. I feel a strong weakness.
      </p>
      <p>
        Lenehan, rising to tiptoe, fanned his face rapidly with the rustling
        tissues.
      </p>
      <p>
        The professor, returning by way of the files, swept his hand across
        Stephen's and Mr O'Madden Burke's loose ties.
      </p>
      <p>
        —{" "}Paris, past and present, he said. You look like communards.
      </p>
      <p>
        —{" "}Like fellows who had blown up the Bastille, J. J. O'Molloy said in
        quiet mockery. Or was it you shot the lord lieutenant of Finland between
        you? You look as though you had done the deed. General Bobrikoff.
      </p>
      <p>
        —{" "}We were only thinking about it, Stephen said.
      </p>
      <span data-edition="ed1922" data-page="129"></span>
      <span data-edition="ed1961" data-page="134"></span>
      <p className="text-center uppercase font-bold">
        OMNIUM GATHERUM
      </p>
      <p>
        —{" "}All the talents, Myles Crawford said. Law, the classics...
      </p>
      <p>
        —{" "}The turf, Lenehan put in.
      </p>
      <p>
        —{" "}Literature, the press.
      </p>
      <p>
        —{" "}If Bloom were here, the professor said. The gentle art of
        advertisement.
      </p>
      <p>
        —{" "}And Madam Bloom, Mr O'Madden Burke added. The vocal muse. Dublin's
        prime favourite.
      </p>
      <span data-edition="ed1939" data-page="100"> </span>
      <p>
        Lenehan gave a loud cough.
      </p>
      <p>
        —{" "}Ahem! he said very softly. O, for a fresh of breath air! I caught a
        cold in the park. The gate was open.
      </p>
      <p className="text-center uppercase font-bold">
        «{" "}{" "}YOU CAN DO IT!{" "}{" "}»
      </p>
      <p>
        The editor <Annotation annotationId="010152linkedarm" visited={visitedNotes.has("010152linkedarm")} annotationSelect={() => {openNote("010152linkedarm"); addToVisited("010152linkedarm")}} activeAnnotationId={currentNoteId}>laid a nervous hand on Stephen's shoulder</Annotation>.
      </p>
      <p>
        —{" "}I want you to write something for me, he said. Something with a bite
        in it. You can do it. I see it in your face. <i>In the lexicon of youth</i>
        ...
      </p>
      <p>
        <Annotation annotationId="070010seeitin" visited={visitedNotes.has("070010seeitin")} annotationSelect={() => {openNote("070010seeitin"); addToVisited("070010seeitin")}} activeAnnotationId={currentNoteId}>See it in your face.</Annotation> See it in your eye. Lazy idle little schemer.
      </p>
      <span data-edition="ed1932" data-page="120"></span>
      <p>
        —{" "}Foot and mouth disease! the editor cried in scornful invective. Great
        nationalist meeting in Borris-in-Ossory. All balls! Bulldosing the
        public! Give them something with a bite in it. <Annotation annotationId="070021putusall" visited={visitedNotes.has("070021putusall")} annotationSelect={() => {openNote("070021putusall"); addToVisited("070021putusall")}} activeAnnotationId={currentNoteId}>Put us all into it, damn
        its soul.</Annotation> Father, Son and Holy Ghost and <Annotation annotationId="070022jakesmcarthy" visited={visitedNotes.has("070022jakesmcarthy")} annotationSelect={() => {openNote("070022jakesmcarthy"); addToVisited("070022jakesmcarthy")}} activeAnnotationId={currentNoteId}>Jakes M'Carthy</Annotation>.
      </p>
      <p>
        —{" "}We can all supply mental pabulum, Mr O'Madden Burke said.
      </p>
      <p>
        Stephen raised his eyes to the bold unheeding stare.
      </p>
      <p>
        —{" "}He wants you for the pressgang, J. J. O'Molloy said.
      </p>
      <p className="text-center uppercase font-bold">
        THE GREAT GALLAHER
      </p>
      <p>
        —{" "}You can do it, Myles Crawford repeated, clenching his hand in
        emphasis. Wait a minute. We'll paralyse Europe as Ignatius Gallaher
        used to say when<span data-edition="ed1986" data-page="111"></span> he was on the shaughraun, doing billiardmarking in the
        Clarence. Gallaher, that was a<span data-edition="ed1961" data-page="135"></span> pressman for you. That was a pen. You
        know how he made his mark? I'll tell you. That was the smartest piece of
        journalism ever known. That was in eightyone, sixth of May, time of
        the invincibles, murder in the Phoenix park, before you were born, I
        suppose. I'll show you.
      </p>
      <p>
        He pushed past them to the files.
      </p>
      <span data-edition="ed1922" data-page="130"></span>
      <p>
        —{" "}Look at here, he said turning. The <i>New York World</i> cabled for a
        special. Remember that time?
      </p>
      <p>
        Professor MacHugh nodded.
      </p>
      <p>
        —{" "}<i>New York World</i>, the editor said, excitedly pushing back his straw
        hat. Where it took place. Tim Kelly, or Kavanagh I mean. Joe Brady and
        the rest of them. Where Skin-the-goat drove the car. Whole route, see?
      </p>
      <p>
        —{" "}Skin-the-goat, Mr O'Madden Burke said. Fitzharris. He has that
        <Annotation annotationId="050012cabstands" visited={visitedNotes.has("050012cabstands")} annotationSelect={() => {openNote("050012cabstands"); addToVisited("050012cabstands")}} activeAnnotationId={currentNoteId}>cabman's shelter</Annotation>, they say, down there at <Annotation annotationId="070015buttbridge" visited={visitedNotes.has("070015buttbridge")} annotationSelect={() => {openNote("070015buttbridge"); addToVisited("070015buttbridge")}} activeAnnotationId={currentNoteId}>Butt bridge</Annotation>. <Annotation annotationId="050028hoppy" visited={visitedNotes.has("050028hoppy")} annotationSelect={() => {openNote("050028hoppy"); addToVisited("050028hoppy")}} activeAnnotationId={currentNoteId}>Holohan told me.
        You know Holohan?</Annotation>
      </p>
      <p>
        —{" "}Hop and carry one, is it? Myles Crawford said.
      </p>
      <p>
        —{" "}And poor Gumley is down there too, so he told me, minding stones for
        <Annotation annotationId="060033corporation" visited={visitedNotes.has("060033corporation")} annotationSelect={() => {openNote("060033corporation"); addToVisited("060033corporation")}} activeAnnotationId={currentNoteId}>the corporation</Annotation>. A night watchman.
      </p>
      <p>
        Stephen turned in surprise.
      </p>
      <p>
        —{" "}Gumley? he said. You don't say so? A friend of my father's, is he?
      </p>
      <p>
        —{" "}Never mind Gumley, Myles Crawford cried angrily. Let Gumley mind
        the stones, see they don't run away. Look at here. What did Ignatius
        Gallaher do? I'll tell you. Inspiration of genius. Cabled right away.
        Have you <i>Weekly Freeman</i> of 17 March? Right. Have you got that?
      </p>
      <p>
        He flung back pages of the files and stuck his finger on a point.
      </p>
      <p>
        —{" "}Take page four, advertisement for Bransome's coffee, let us say. Have
        you got that? Right.
      </p>
      <p>
        The telephone whirred.
      </p>
      <span data-edition="ed1939" data-page="101"> </span>
      <span data-edition="ed1932" data-page="121"></span>
      <p className="text-center uppercase font-bold">
        A DISTANT VOICE
      </p>
      <p>
        —{" "}I'll answer it, the professor said, going.
      </p>
      <p>
        —{" "}B is parkgate. Good.
      </p>
      <p>
        His finger leaped and struck point after point, vibrating.
      </p>
      <p>
        —{" "}T is viceregal lodge. C is where murder took place. K is Knockmaroon
        gate.
      </p>
      <p>
        The loose flesh of his neck shook like a cock's wattles. An<span data-edition="ed1961" data-page="136"></span> illstarched
        dicky jutted up and with a rude gesture he thrust it back into his
        waistcoat.
      </p>
      <p>
        —{" "}Hello? <i>Evening Telegraph</i> here... Hello?... Who's there?... Yes...
        Yes... Yes.
      </p>
      <p>
        —{" "}F to P is the route Skin-the-goat drove the car for an alibi,
        Inchicore, Roundtown, Windy Arbour, Palmerston Park, Ranelagh. F.A.B.P.
        Got that? X is Davy's publichouse in upper Leeson street.
      </p>
      <span data-edition="ed1922" data-page="131"></span>
      <span data-edition="ed1986" data-page="112"></span>
      <p>
        The professor came to the inner door.
      </p>
      <p>
        —{" "}Bloom is at the telephone, he said.
      </p>
      <p>
        —{" "}Tell him go to hell, the editor said promptly. X is Burke's
        publichouse, see? 
      </p>
      <p className="text-center uppercase font-bold">
        CLEVER, VERY
      </p>
      <p>
        —{" "}Clever, Lenehan said. Very.
      </p>
      <p>
        —{" "}Gave it to them on a hot plate, Myles Crawford said, the whole bloody
        history.
      </p>
      <p>
        <Annotation annotationId="020063niare" visited={visitedNotes.has("020063niare")} annotationSelect={() => {openNote("020063niare"); addToVisited("020063niare")}} activeAnnotationId={currentNoteId}>Niare from which you will never awake.</Annotation>
      </p>
      <p>
        —{" "}I saw it, the editor said proudly. I was present. Dick Adams, the
        besthearted bloody Corkman the Lord ever put the breath of life in, and
        myself.
      </p>
      <p>
        Lenehan bowed to a shape of air, announcing:
      </p>
      <p>
        —{" "}Madam, I'm Adam. And Able was I ere I saw Elba.
      </p>
      <p>
        —{" "}History! Myles Crawford cried. <Annotation annotationId="040006homerulesun" visited={visitedNotes.has("040006homerulesun")} annotationSelect={() => {openNote("040006homerulesun"); addToVisited("040006homerulesun")}} activeAnnotationId={currentNoteId}>The Old Woman of Prince's street</Annotation> was
        there first. There was weeping and gnashing of teeth over that. Out of
        an advertisement. Gregor Grey made the design for it. That gave him the
        leg up. Then Paddy Hooper worked Tay Pay who took him on to the <i>Star.</i>
        Now he's got in with Blumenfeld. That's press. That's talent. Pyatt! He
        was all their daddies!
      </p>
      <p>
        —{" "}The father of scare journalism, Lenehan confirmed, and the
        brother-in-law of Chris Callinan.
      </p>
      <p>
        —{" "}Hello?... Are you there?... Yes, he's here still. Come across
        yourself.
      </p>
      <span data-edition="ed1932" data-page="122"></span>
      <p>
        —{" "}Where do you find a pressman like that now, eh? the editor cried. He
        flung the pages down.
      </p>
      <p>
        —{" "}Clamn dever, Lenehan said to Mr O'Madden Burke.
      </p>
      <p>
        —{" "}Very smart, Mr O'Madden Burke said.
      </p>
      <p>
        Professor MacHugh came from the inner office.
      </p>
      <span data-edition="ed1961" data-page="137"></span>
      <p>
        —{" "}Talking about the invincibles, he said, did you see that some hawkers
        were up before the recorder...
      </p>
      <p>
        —{" "}O yes, J. J. O'Molloy said eagerly. Lady Dudley was walking home
        through the park to see all the trees that were blown down by that
        cyclone last year and thought she'd buy a view of Dublin. And it
        turned out to be a commemoration postcard of Joe Brady or Number One or
        Skin-the-goat. Right outside the viceregal lodge, imagine!
      </p>
      <p>
        —{" "}They're only in the hook and eye department, Myles Crawford said. Psha! Press and the bar! Where have you a man now at the bar like those
        fellows, like Whiteside, like Isaac Butt, like silvertongued O'Hagan.
        Eh? Ah, bloody nonsense. Only in the <Annotation annotationId="010019money" visited={visitedNotes.has("010019money")} annotationSelect={() => {openNote("010019money"); addToVisited("010019money")}} activeAnnotationId={currentNoteId}>halfpenny</Annotation> place.
      </p>
      <p></p>
      <span data-edition="ed1939" data-page="102"> </span>
      <p>
        His mouth continued to twitch unspeaking in nervous curls of disdain.
      </p>
      <p>
        Would anyone wish that mouth for her kiss? How do you know? Why did you
        write it then?
      </p>
      <span data-edition="ed1986" data-page="113"></span>
      <p className="text-center uppercase font-bold">
        RHYMES AND REASONS
      </p>
      <p>
        Mouth, south. Is the mouth south someway? Or the south a mouth? Must be
        some. South, pout, out, shout, drouth. Rhymes: two men dressed the same,
        looking the same, two by two.
      </p>
      <p style={{paddingLeft:"2cm", marginRight: "100px", textAlign:"justify"}}>     
        <i>.{" "}{" "}.{" "}{" "}.{" "}{" "}.{" "}{" "}.{" "}{" "}.{" "}{" "}.{" "}{" "}.{" "}{" "}.{" "}{" "}.{" "}{" "}.{" "}{" "}.{" "}{" "}.{" "}{" "}.{" "}{" "}{" "}.{" "}{" "}{" "}la{" "}{" "}tua{" "}{" "}pace<br/>
        .{" "}{" "}.{" "}{" "}.{" "}{" "}.{" "}{" "}.{" "}{" "}.{" "}{" "}.{" "}{" "}.{" "}{" "}.{" "}{" "}.{" "}{" "}.{" "}{" "}.{" "}{" "}{" "}che parlar ti piace <br/>
        .{" "}{" "}.{" "}{" "}.{" "}{" "}.mentreche il vento, come fa, si tace. </i>
      </p>
      <p>
        He saw them three by three, approaching girls, in green, in rose, in
        russet, entwining, <i>per l'aer perso</i>, in mauve, in purple, <i>quella
        pacifica oriafiamma</i>, in gold of oriflamme, <i>di rimirar fè più ardenti.</i>
        But I old men, penitent, leadenfooted, underdarkneath the night: mouth
        south: tomb womb.
      </p>
      <p>
        —{" "}Speak up for yourself, Mr O'Madden Burke said.
      </p>
      <p className="text-center uppercase font-bold">
        SUFFICIENT FOR THE DAY...
      </p>
      <p>
        J. J. O'Molloy, smiling palely, took up the gage.
      </p>
      <p>
        —{" "}My dear Myles, he said, flinging his cigarette aside, you put a false
        construction on my words. I hold no brief, as at<span data-edition="ed1961" data-page="138"></span> present advised, for
        the third profession qua profession but your Cork legs are running<span data-edition="ed1932" data-page="123"></span> away
        with you. Why not bring in Henry Grattan and Flood and Demosthenes and
        Edmund Burke? Ignatius Gallaher we all know and his Chapelizod boss,
        Harmsworth of <Annotation annotationId="010019money" visited={visitedNotes.has("010019money")} annotationSelect={() => {openNote("010019money"); addToVisited("010019money")}} activeAnnotationId={currentNoteId}>the farthing press</Annotation>, and his American cousin of the Bowery
        guttersheet not to mention <i>Paddy Kelly's Budget, Pue's Occurrences</i>
        and our watchful friend <i>The Skibereen Eagle</i>. Why bring in a master
        of forensic eloquence like Whiteside? Sufficient for the day is the
        newspaper thereof. 
      </p>
      <span data-edition="ed1922" data-page="133"></span>
      <p className="text-center uppercase font-bold">
        LINKS WITH BYGONE DAYS OF YORE
      </p>
      <p>
        —{" "}Grattan and Flood wrote for this very paper, the editor cried in his
        face. Irish volunteers. Where are you now? Established 1763. Dr Lucas.
        Who have you now like John Philpot Curran? Psha!
      </p>
      <p>
        —{" "}Well, J. J. O'Molloy said, Bushe K.C., for example.
      </p>
      <p>
        —{" "}Bushe? the editor said. Well, yes: Bushe, yes. He has a strain of it
        in his blood. Kendal Bushe or I mean Seymour Bushe.
      </p>
      <p>
        —{" "}He would have been on the bench long ago, the professor said, only for
        ... But no matter.
      </p>
      <p>
        J. J. O'Molloy turned to Stephen and said quietly and slowly:
      </p>
      <p>
        —{" "}One of the most polished periods I think I ever listened to in my life
        fell from the lips of Seymour Bushe. It was in that case of fratricide,
        the Childs murder case. Bushe defended him. 
      </p>
      <p style={{textIndent:"2.5cm"}}>
        <i>And in the porches of mine
        ear did pour.</i>
      </p>
      <span data-edition="ed1939" data-page="103"> </span>
      <span data-edition="ed1986" data-page="114"></span>
      <p>
        By the way how did he find that out? He died in his sleep. Or the other
        story, beast with two backs?
      </p>
      <p>
        —{" "}What was that? the professor asked.
      </p>
      <p className="text-center uppercase font-bold">
        ITALIA, MAGISTRA ARTIUM
      </p>
      <p>
        —{" "}He spoke on the law of evidence, J. J. O'Molloy said, of Roman justice
        as contrasted with the earlier Mosaic code, the <i>lex talionis</i>. And he
        cited the Moses of Michelangelo in the Vatican.
      </p>
      <p>
        —{" "}Ha.
      </p>
      <span data-edition="ed1961" data-page="139"></span>
      <p>
        —{" "}A few wellchosen words, Lenehan prefaced. Silence!
      </p>
      <p>
        Pause. J. J. O'Molloy took out his cigarettecase.
      </p>
      <p>
        False lull. Something quite ordinary.
      </p>
      <p>
        Messenger took out his matchbox thoughtfully and lit his cigar.
      </p>
      <p>
        <Annotation annotationId="070005trivial" visited={visitedNotes.has("070005trivial")} annotationSelect={() => {openNote("070005trivial"); addToVisited("070005trivial")}} activeAnnotationId={currentNoteId}>I have often thought since on looking back over that strange time that
        it was that small act, trivial in itself, that striking of that match,
        that determined the whole aftercourse of both our lives.</Annotation> 
      </p>
      <span data-edition="ed1932" data-page="124"></span>
      <p className="text-center uppercase font-bold">
        A POLISHED PERIOD
      </p>
      <p>
        J. J. O'Molloy resumed, moulding his words:
      </p>
      <p>
        —{" "}He said of it: <i>that stony effigy in frozen music, horned and
        terrible, of the human form divine, that eternal symbol of wisdom and
        of prophecy which, if aught </i>
        <span data-edition="ed1922" data-page="134"></span>
        
        <i> that the imagination or the hand of sculptor
        has wrought in marble of soultransfigured and of soultransfiguring
        deserves to live, deserves to live.</i>
      </p>
      <p>
        His slim hand with a wave graced echo and fall.
      </p>
      <p>
        —{" "}Fine! Myles Crawford said at once.
      </p>
      <p>
        —{" "}The divine afflatus, Mr O'Madden Burke said.
      </p>
      <p>
        —{" "}You like it? J. J. O'Molloy asked Stephen.
      </p>
      <p>
        Stephen, his blood wooed by grace of language and gesture, blushed. He
        took a cigarette from the case. J. J. O'Molloy offered his case to Myles
        Crawford. Lenehan lit their cigarettes as before and took his trophy,
        saying:
      </p>
      <p>
        —{" "}Muchibus thankibus.
      </p>
      <p className="text-center uppercase font-bold">
        A MAN OF HIGH MORALE
      </p>
      <p>
        —{" "}Professor Magennis was speaking to me about you, J. J. O'Molloy said
        to Stephen. What do you think really of that hermetic crowd, the opal
        hush poets: A. E. the mastermystic? That Blavatsky woman started it.
        She was a nice old bag of tricks. A. E. has been telling some yankee
        interviewer that you came to him in the small hours of the morning to
        ask him about planes of consciousness. Magennis thinks you must have
        been pulling A. E.'s leg. He is a man of the very highest morale,
        Magennis.
      </p>
      <span data-edition="ed1986" data-page="115"></span>
      <p>
        Speaking about me. What did he say? What did he say? What did he say
        about me? Don't ask.
      </p>
      <span data-edition="ed1961" data-page="140"></span>
      <p>
        —{" "}No, thanks, professor MacHugh said, waving the cigarettecase aside.
        Wait a moment. Let me say one thing. The finest display of oratory I
        ever heard was a speech made by John F. Taylor at the college historical
        society. Mr Justice Fitzgibbon, the present lord justice of appeal, had
        spoken and the paper under debate was an essay (new for those days),
        advocating the revival of the Irish tongue.
      </p>
      <span data-edition="ed1939" data-page="104"> </span>
      <p>
        He turned towards Myles Crawford and said:
      </p>
      <p>
        —{" "}You know Gerald Fitzgibbon. Then you can imagine the style of his
        discourse.
      </p>
      <p>
        —{" "}He is sitting with Tim Healy, J. J. O'Molloy said, rumour has it, on
        the Trinity college estates commission.
      </p>
      <p>
        —{" "}He is sitting with a sweet thing in a child's
        frock, Myles Crawford said. Go on. Well?
      </p>
      <span data-edition="ed1932" data-page="125"></span>
      <p>
        —{" "}It was the speech, mark you, the professor said, of a finished orator,
        full of courteous haughtiness and pouring in chastened diction I will not say 
        <span data-edition="ed1922" data-page="135"></span>
        
        the vials of his wrath but pouring the proud man's contumely
        upon the new movement. It was then a new movement. We were weak,
        therefore worthless.
      </p>
      <p>
        He closed his long thin lips an instant but, eager to be on, raised
        an outspanned hand to his spectacles and, with trembling thumb and
        ringfinger touching lightly the black rims, steadied them to a new
        focus.
      </p>
      <p className="text-center uppercase font-bold">
        IMPROMPTU
      </p>
      <p>
        In ferial tone he addressed J. J. O'Molloy:
      </p>
      <p>
        —{" "}Taylor had come there, you must know, from a sickbed. That he
        had prepared his speech I do not believe for there was not even one
        shorthandwriter in the hall. His dark lean face had a growth of shaggy
        beard round it. He wore a loose neckcloth and altogether he
        looked (though he was not) a dying man.
      </p>
      <p>
        His gaze turned at once but slowly from J. J. O'Molloy's towards
        Stephen's face and then bent at once to the ground, seeking. His
        unglazed linen collar appeared behind his bent head, soiled by his
        withering hair. Still seeking, he said:
      </p>
      <p>
        —{" "}When Fitzgibbon's speech had ended John F. Taylor rose to reply.
        Briefly, as well as I can bring them to mind, his words were these.
      </p>
      <span data-edition="ed1961" data-page="141"></span>
      <p>
        He raised his head firmly. His eyes bethought themselves once more.
        Witless shellfish swam in the gross lenses to and fro, seeking outlet.
      </p>
      <p>
        He began:
      </p>
      <p>
        <i>—{" "}Mr Chairman, ladies and gentlemen: Great was my admiration in
        listening to the remarks addressed to the youth of Ireland a moment
        since by my learned friend. It seemed to me that I had been transported
        into a country far</i><span data-edition="ed1986" data-page="116"></span> <i>away from this country, into an age remote from
        this age, that I stood in ancient Egypt and that I was listening to the
        speech of some highpriest of that land addressed to the youthful Moses.</i>
      </p>
      <p>
        His listeners held their cigarettes poised to hear, their smokes
        ascending in frail stalks that flowered with his speech. <i>And let our
        crooked smokes.</i> Noble words coming. Look out. Could you try your hand
        at it yourself?
      </p>
      <p>
        <i>—{" "}And it seemed to me that I heard the voice of that Egyptian
        highpriest raised in a tone of like haughtiness and like pride. I heard
        his words and their meaning was revealed to me.</i>
      </p>
      <span data-edition="ed1932" data-page="126"></span>
      <p className="text-center uppercase font-bold">
        FROM THE FATHERS
      </p>
      <p>
        It was revealed to me that those things are good which yet are corrupted
        which neither if they were supremely good nor unless they were good, 
        could be corrupted. Ah, curse you! That's saint Augustine.
      </p>
      <span data-edition="ed1922" data-page="136"></span>
      <p>
        <i>—{" "}Why will you jews not accept our culture, our religion and our
        language? You are a tribe of nomad herdsmen: we are a mighty people. You
        have no cities nor no wealth: our cities are hives of humanity and
        our galleys, trireme and quadrireme, 
        <span data-edition="ed1939" data-page="105"> </span>
        laden with all manner merchandise
        furrow the waters of the known globe. You have but emerged from
        primitive conditions: we have a literature, a priesthood, an agelong
        history and a polity.</i>
      </p>
      <p>
        Nile.
      </p>
      <p>
        Child, man, effigy.
      </p>
      <p>
        By the Nilebank the babemaries kneel, cradle of bulrushes: a man supple
        in combat: stonehorned, stonebearded, heart of stone.
      </p>
      <p>
        <i>—{" "}You pray to a local and obscure idol: our temples, majestic and
        mysterious, are the abodes of Isis and Osiris, of Horus and</i><span data-edition="ed1961" data-page="142"></span> <i>Ammon Ra.
        Yours serfdom, awe and humbleness: ours thunder and the seas. Israel
        is weak and few are her children: Egypt is an host and terrible are her
        arms. Vagrants and daylabourers are you called: the world trembles at
        our name.</i>
      </p>
      <p>
        A dumb belch of hunger cleft his speech. He lifted his voice above it
        boldly:
      </p>
      <p>
        <i>—{" "}But, ladies and gentlemen, had the youthful Moses listened to and
        accepted that view of life, had he bowed his head and bowed his will
        and bowed his spirit before that arrogant admonition he would never have
        brought the chosen people out of their house of bondage, nor followed
        the pillar of the cloud by day. He would never have spoken with the
        Eternal amid lightnings on Sinai's mountaintop nor ever have come down
        with the light of inspiration shining in his countenance and bearing in
        his arms the tables of the law, graven in the language of the outlaw.</i>
      </p>
      <p>
        He ceased and looked at them, enjoying silence.
      </p>
      <span data-edition="ed1986" data-page="117"></span>
      <p className="text-center uppercase font-bold">
        OMINOUS{" "}—{" "}FOR HIM!
      </p>
      <p>
        J. J. O'Molloy said not without regret:
      </p>
      <p>
        —{" "}And yet he died without having entered the land of promise.
      </p>
      <p style={{textAlign:"left"}}>
        —{" "}A sudden–at–the–moment–though–from–lingering–illness–often–previously–expectorated–demise, Lenehan said. And with a great future
        behind him.
      </p>
      <p>
        The troop of bare feet was heard rushing along the hallway and pattering
        up the staircase.
      </p>
      <span data-edition="ed1932" data-page="127"></span>
      <p>
        —{" "}That is oratory, the professor said uncontradicted. 
      </p>
      <p>
        Gone with the
        wind. <Annotation annotationId="020038oconnell" visited={visitedNotes.has("020038oconnell")} annotationSelect={() => {openNote("020038oconnell"); addToVisited("020038oconnell")}} activeAnnotationId={currentNoteId}>Hosts at Mullaghmast and Tara of the kings.</Annotation> 
        <span data-edition="ed1922" data-page="137"></span>
        Miles of ears of 
        porches. The tribune's words, howled and scattered to the four winds.
        A people sheltered within his voice. Dead noise. <Annotation annotationId="010079akasicrecords" visited={visitedNotes.has("010079akasicrecords")} annotationSelect={() => {openNote("010079akasicrecords"); addToVisited("010079akasicrecords")}} activeAnnotationId={currentNoteId}>Akasic records of all
        that ever anywhere wherever was.</Annotation> Love and laud him: me no more.
      </p>
      <p>
        I have money.
      </p>
      <p>
        —{" "}Gentlemen, Stephen said. As the next motion on the agenda paper may I
        suggest that the house do now adjourn?
      </p>
      <p>
        —{" "}You take my breath away. It is not perchance a French compliment?
        Mr O'Madden Burke asked. 'Tis the hour, methinks, when the winejug,
        metaphorically speaking, is most grateful in Ye ancient hostelry.
      </p>
      <span data-edition="ed1961" data-page="143"></span>
      <p>
        —{" "}That it be and hereby is resolutely resolved. All who are in favour
        say ay, Lenehan announced. The contrary no. I declare it carried. To
        which particular boosing shed?... My casting vote is: Mooney's!
      </p>
      <p>
        He led the way, admonishing:
      </p>
      <p>
        —{" "}We will sternly refuse to partake of strong waters, will we not? Yes,
        we will not. By no manner of means.
      </p>
      <p>
        Mr O'Madden Burke, following close, said with an ally's lunge of his
        umbrella:
      </p>
      <span data-edition="ed1939" data-page="106"> </span>
      <p>
        —{" "}Lay on, Macduff!
      </p>
      <p>
        —{" "}Chip of the old block! the editor cried, slapping Stephen on the
        shoulder. Let us go. Where are those blasted keys?
      </p>
      <p>
        He fumbled in his pocket pulling out the crushed typesheets.
      </p>
      <p>
        —{" "}Foot and mouth. I know. That'll be all right. That'll go in. Where are
        they? That's all right.
      </p>
      <p>
        He thrust the sheets back and went into the inner office. 
      </p>
      <p className="text-center uppercase font-bold">
        LET US HOPE
      </p>
      <p>
        J. J. O'Molloy, about to follow him in, said quietly to Stephen:
      </p>
      <p>
        —{" "}I hope you will live to see it published. Myles, one moment.
      </p>
      <p>
        He went into the inner office, closing the door behind him.
      </p>
      <p>
        —{" "}Come along, Stephen, the professor said. That is fine, isn't it? It
        has the prophetic vision. <i>Fuit Ilium!</i> The sack of windy Troy. Kingdoms
        of this world. The masters of the Mediterranean are fellaheen today.
      </p>
      <span data-edition="ed1986" data-page="118"></span>
      <p>
        The first newsboy came pattering down the stairs at their heels and
        rushed out into the street, yelling:
      </p>
      <p>
        —{" "}Racing special!
      </p>
      <span data-edition="ed1922" data-page="138"></span>
      <p>
        Dublin. I have much, much to learn.
      </p>
      <p>
        They turned to the left along Abbey street.
      </p>
      <span data-edition="ed1932" data-page="128"></span>
      <p>
        —{" "}I have a vision too, Stephen said.
      </p>
      <p>
        —{" "}Yes? the professor said, skipping to get into step. Crawford will
        follow.
      </p>
      <p>
        Another newsboy shot past them, yelling as he ran:
      </p>
      <p>
        —{" "}Racing special!
      </p>
      <span data-edition="ed1961" data-page="144"></span>
      <p className="text-center uppercase font-bold">
        DEAR DIRTY DUBLIN
      </p>
      <p>
        Dubliners.
      </p>
      <p>
        —{" "}Two Dublin vestals, Stephen said, elderly and pious, have lived fifty
        and fiftythree years in <Annotation annotationId="030059blackpitts" visited={visitedNotes.has("030059blackpitts")} annotationSelect={() => {openNote("030059blackpitts"); addToVisited("030059blackpitts")}} activeAnnotationId={currentNoteId}>Fumbally's lane</Annotation>.
      </p>
      <p>
        <Annotation annotationId="030059blackpitts" visited={visitedNotes.has("030059blackpitts")} annotationSelect={() => {openNote("030059blackpitts"); addToVisited("030059blackpitts")}} activeAnnotationId={currentNoteId}>—{" "}Where is that? the professor asked.</Annotation>
      </p>
      <p>
        <Annotation annotationId="030059blackpitts" visited={visitedNotes.has("030059blackpitts")} annotationSelect={() => {openNote("030059blackpitts"); addToVisited("030059blackpitts")}} activeAnnotationId={currentNoteId}>—{" "}Off Blackpitts</Annotation>.
      </p>
      <p>
        Damp night reeking of hungry dough. Against the wall. Face glistening
        tallow under her fustian shawl. Frantic hearts. <Annotation annotationId="010079akasicrecords" visited={visitedNotes.has("010079akasicrecords")} annotationSelect={() => {openNote("010079akasicrecords"); addToVisited("010079akasicrecords")}} activeAnnotationId={currentNoteId}>Akasic records.</Annotation> Quicker,
        darlint!
      </p>
      <p>
        On now. Dare it. Let there be life.
      </p>
      <p>
        —{" "}They want to see the views of Dublin from the top of Nelson's pillar.
        They save up three and tenpence in a red tin letterbox moneybox. They
        shake out the threepenny bits and a sixpence and coax out the pennies
        with <Annotation annotationId="010007kinch" visited={visitedNotes.has("010007kinch")} annotationSelect={() => {openNote("010007kinch"); addToVisited("010007kinch")}} activeAnnotationId={currentNoteId}> the blade of a knife</Annotation>. <Annotation annotationId="010019money" visited={visitedNotes.has("010019money")} annotationSelect={() => {openNote("010019money"); addToVisited("010019money")}} activeAnnotationId={currentNoteId}>Two and three in silver and one and seven
        in coppers.</Annotation> They put on their bonnets and best clothes and take their
        umbrellas for fear it may come on to rain.
      </p>
      <p>
        —{" "}Wise virgins, professor MacHugh said.
      </p>
      <p className="text-center uppercase font-bold">
        LIFE ON THE RAW
      </p>
      <p>
        —{" "}They buy one and fourpenceworth of brawn and four slices of panloaf at
        the north city diningrooms in Marlborough street from Miss Kate Collins,
        proprietress... They purchase four and twenty ripe plums from a girl
        at the foot of Nelson's pillar to take off the thirst of the brawn. They
        give two threepenny bits to the gentleman at the turnstile and begin
        to waddle slowly up the winding staircase, 
        <span data-edition="ed1939" data-page="107"> </span>
        grunting, encouraging each
        other, afraid of the dark, panting, one asking the other have you the
        brawn, praising God and the Blessed Virgin, threatening to come down,
        peeping at the airslits. Glory be to God. They had no idea it was that
        high.
      </p>
      <p>
        Their names are <Annotation annotationId="030054swunglourdily" visited={visitedNotes.has("030054swunglourdily")} annotationSelect={() => {openNote("030054swunglourdily"); addToVisited("030054swunglourdily")}} activeAnnotationId={currentNoteId}>Anne Kearns and Florence MacCabe</Annotation>. Anne Kearns has the
        lumbago for which she rubs on Lourdes water, given her by a lady who got a 
        <span data-edition="ed1922" data-page="139"></span>
        
        bottleful from a passionist father. Florence MacCabe takes a crubeen
        and a bottle of double X for supper every Saturday.
      </p>
      <span data-edition="ed1932" data-page="129"></span>
      <span data-edition="ed1961" data-page="145"></span>
      <span data-edition="ed1986" data-page="119"></span>
      <p>
        —{" "}Antithesis, the professor said nodding twice. Vestal virgins. I can
        see them. What's keeping our friend?
      </p>
      <p>
        He turned.
      </p>
      <p>
        A bevy of scampering newsboys rushed down the steps, scampering in all
        directions, yelling, their white papers fluttering. Hard after them
        Myles Crawford appeared on the steps, his hat aureoling his scarlet
        face, talking with J. J. O'Molloy.
      </p>
      <p>
        —{" "}Come along, the professor cried, waving his arm.
      </p>
      <p>
        He set off again to walk by Stephen's side. 
      </p>
      <p className="text-center uppercase font-bold">
        RETURN OF BLOOM
      </p>
      <p>
        —{" "}Yes, he said. I see them.
      </p>
      <p>
        Mr Bloom, breathless, caught in a whirl of wild newsboys near the
        offices of the <i>Irish Catholic and Dublin Penny Journal</i>, called:
      </p>
      <p>
        —{" "}Mr Crawford! A moment!
      </p>
      <p>
        —{" "}<i>Telegraph</i>! Racing special!
      </p>
      <p>
        —{" "}What is it? Myles Crawford said, falling back a pace.
      </p>
      <p>
        A newsboy cried in Mr Bloom's face:
      </p>
      <p>
        —{" "}Terrible tragedy in Rathmines! A child bit by a bellows!
      </p>
      <p className="text-center uppercase font-bold">
        INTERVIEW WITH THE EDITOR
      </p>
      <p>
        —{" "}Just this ad, Mr Bloom said, pushing through towards the steps,
        puffing, and taking the cutting from his pocket. I spoke with Mr Keyes
        just now. He'll give a renewal for two months, he says. After he'll
        see. But he wants a par to call attention in the <i>Telegraph</i> too,
        the Saturday pink. And he wants it if it's not too late I told
        councillor Nannetti from the <i>Kilkenny People</i>. I can have access to
        it in the national library. House of keys, don't you see? His name is
        Keyes. It's a play on the name. But he practically promised he'd give
        the renewal. But he wants <Annotation annotationId="070016littlepuff" visited={visitedNotes.has("070016littlepuff")} annotationSelect={() => {openNote("070016littlepuff"); addToVisited("070016littlepuff")}} activeAnnotationId={currentNoteId}>just a little puff</Annotation>. What will I tell him, Mr
        Crawford? 
      </p>
      <p className="text-center uppercase font-bold">
        <Annotation annotationId="040082highgradeha" visited={visitedNotes.has("040082highgradeha")} annotationSelect={() => {openNote("040082highgradeha"); addToVisited("040082highgradeha")}} activeAnnotationId={currentNoteId}>K.{" "}M.{" "}A.</Annotation>
      </p>
      <p>
        —{" "}Will you tell him he can kiss my arse? Myles Crawford said throwing
        out his arm for emphasis. Tell him that straight from the stable.
      </p>
      <span data-edition="ed1922" data-page="140"></span>
      <span data-edition="ed1961" data-page="146"></span>
      <p>
        A bit nervy. Look out for squalls. All off for a drink. Arm in arm.
        Lenehan's yachting cap on the cadge beyond. Usual blarney. Wonder is
        that young Dedalus the moving spirit. Has a good pair of boots on him
        today. Last time I saw him he had his heels on view. Been walking in
        muck somewhere. Careless chap. What was he doing in <Annotation annotationId="030015irishtown" visited={visitedNotes.has("030015irishtown")} annotationSelect={() => {openNote("030015irishtown"); addToVisited("030015irishtown")}} activeAnnotationId={currentNoteId}>Irishtown</Annotation>?
      </p>
      <span data-edition="ed1932" data-page="130"></span>
      <p>
        —{" "}Well, Mr Bloom said, his eyes returning, if I can get the design I
        suppose it's worth a short par. He'd give the ad, I think. I'll tell him
        ... 
      </p>
      <span data-edition="ed1939" data-page="108"> </span>
      <span data-edition="ed1986" data-page="120"></span>
      <p className="text-center uppercase font-bold">
        K.{" "}M.{" "}R.{" "}I.{" "}A.
      </p>
      <p>
        —{" "}He can kiss my royal Irish arse, Myles Crawford cried loudly over his
        shoulder. Any time he likes, tell him.
      </p>
      <p>
        While Mr Bloom stood weighing the point and about to smile he strode on
        jerkily.
      </p>
      <p className="text-center uppercase font-bold">
        RAISING THE WIND
      </p>
      <p>
        —{" "}<i>Nulla bona</i>, Jack, he said, raising his hand to his chin. I'm up to
        here. I've been through the hoop myself. I was looking for a fellow to
        back a bill for me no later than last week. Sorry, Jack. You must take
        the will for the deed. With a heart and a half if I could raise the wind
        anyhow.
      </p>
      <p>
        J. J. O'Molloy pulled a long face and walked on silently. They caught up
        on the others and walked abreast.
      </p>
      <p>
        —{" "}When they have eaten the brawn and the bread and wiped their twenty
        fingers in the paper the bread was wrapped in they go nearer to <Annotation annotationId="070023giddytolook" visited={visitedNotes.has("070023giddytolook")} annotationSelect={() => {openNote("070023giddytolook"); addToVisited("070023giddytolook")}} activeAnnotationId={currentNoteId}>the
        railings</Annotation>.
      </p>
      <p>
        —{" "}Something for you, the professor explained to Myles Crawford. Two old
        Dublin women on the top of Nelson's pillar.
      </p>
      <p className="text-center uppercase font-bold">
        SOME COLUMN!{" "}—{" "}THAT'S <br/> 
        WHAT WADDLER ONE SAID
      </p>
      <p>
        —{" "}That's new, Myles Crawford said. That's copy. Out for the waxies' 
        Dargle. Two old trickies, what?
      </p>
      <p>
        —{" "}But they are afraid the pillar will fall, Stephen went on. They see
        the roofs and argue about <Annotation annotationId="070024differentchurches" visited={visitedNotes.has("070024differentchurches")} annotationSelect={() => {openNote("070024differentchurches"); addToVisited("070024differentchurches")}} activeAnnotationId={currentNoteId}>where the different</Annotation><span data-edition="ed1961" data-page="147"></span> <Annotation annotationId="070024differentchurches" visited={visitedNotes.has("070024differentchurches")} annotationSelect={() => {openNote("070024differentchurches"); addToVisited("070024differentchurches")}} activeAnnotationId={currentNoteId}>churches are: Rathmines'
        blue dome, Adam and Eve's, saint Laurence O'Toole's</Annotation>. But <Annotation annotationId="070023giddytolook" visited={visitedNotes.has("070023giddytolook")} annotationSelect={() => {openNote("070023giddytolook"); addToVisited("070023giddytolook")}} activeAnnotationId={currentNoteId}>it makes them
        giddy to look</Annotation> so they pull up their skirts...
      </p>
      <span data-edition="ed1922" data-page="141"></span>
      <div>
        <p className="text-center uppercase font-bold">
          THOSE SLIGHTLY RAMBUNCTIOUS FEMALES
        </p>
        <p>
          —{" "}Easy all, Myles Crawford said. No poetic licence. We're in the
          archdiocese here.
        </p>
        <p>
          —{" "}And settle down on their striped petticoats, peering up at the statue
          of the onehandled adulterer.
        </p>
        <p>
          —{" "}Onehandled adulterer! the professor cried. I like that. I see the
          idea. I see what you mean.
        </p>
        <span data-edition="ed1932" data-page="131"></span>
        <p className="text-center uppercase font-bold">
          DAMES DONATE DUBLIN'S CITS <br/>
          SPEEDPILLS VELOCITOUS AEROLITHS, BELIEF
        </p>
        <p>
          —{" "}It gives them a crick in their necks, Stephen said, and they are too
          tired to look up or down or to speak. They put the bag of plums between
          them and<span data-edition="ed1986" data-page="121"></span> eat the plums out of it, one after another, wiping off with
          their handkerchiefs the plumjuice that dribbles out of their mouths and
          spitting the plumstones slowly out between the railings.
        </p>
        <p>
          He gave a sudden loud young laugh as a close. Lenehan and Mr O'Madden
          Burke, hearing, turned, beckoned and led on across towards Mooney's.
        </p>
        <p>
          —{" "}Finished? Myles Crawford said. So long as they do no worse.
        </p>
        <span data-edition="ed1939" data-page="109"> </span>
        <p className="text-center uppercase font-bold">
          SOPHIST WALLOPS HAUGHTY <br/>
          HELEN SQUARE ON PROBOSCIS. SPARTANS GNASH <br/>
          MOLARS. ITHACANS VOW PEN IS CHAMP.
        </p>
        <p>
          —{" "}You remind me of Antisthenes, the professor said, a disciple of
          Gorgias, the sophist. It is said of him that none could<span data-edition="ed1961" data-page="148"></span> tell if he were
          bitterer against others or against himself. He was the son of a noble
          and a bondwoman. And he wrote a book in which he took away the palm of
          beauty from Argive Helen and handed it to poor Penelope.
        </p>
        <p>
          Poor Penelope. Penelope Rich.
        </p>
        <p>
          They made ready to cross <Annotation annotationId="060012liberatorsform" visited={visitedNotes.has("060012liberatorsform")} annotationSelect={() => {openNote("060012liberatorsform"); addToVisited("060012liberatorsform")}} activeAnnotationId={currentNoteId}>O'Connell street</Annotation>.
        </p>
        <p className="text-center uppercase font-bold">
          HELLO THERE, CENTRAL!
        </p>
        <p>
          At various points along the eight lines tramcars with motionless
          trolleys stood in their tracks, bound for or from Rathmines,
          Rathfarnham, Kingstown, 
          <span data-edition="ed1922" data-page="142"></span>
          
          Blackrock and Dalkey, Sandymount Green, Ringsend
          and Sandymount Tower, <Annotation annotationId="050022donnybrook" visited={visitedNotes.has("050022donnybrook")} annotationSelect={() => {openNote("050022donnybrook"); addToVisited("050022donnybrook")}} activeAnnotationId={currentNoteId}>Donnybrook</Annotation>, Palmerston Park and Upper Rathmines,
          all still, becalmed in short circuit. Hackney cars, cabs, delivery
          waggons, mailvans, private broughams, aerated mineral water floats with
          rattling crates of bottles, rattled, rolled, horsedrawn, rapidly.
        </p>
        <p className="text-center uppercase font-bold">
          WHAT?{" "}—{" "}AND LIKEWISE{" "}—{" "}WHERE?
        </p>
        <p>
          —{" "}But what do you call it? Myles Crawford asked. Where did they get the
          plums?
        </p>
        <span data-edition="ed1932" data-page="132"></span>
        <p className="text-center uppercase font-bold">
          VIRGILIAN, SAYS PEDAGOGUE. SOPHOMORE <br/>
          PLUMPS FOR OLD MAN MOSES
        </p>
        <p>
          —{" "}Call it, wait, the professor said, opening his long lips wide to
          reflect. Call it, let me see. Call it: <i>deus nobis haec otia fecit.</i>
        </p>
        <p>
          —{" "}No, Stephen said. I call it <i>A Pisgah Sight of Palestine or the
          Parable of The Plums.</i>
        </p>
        <p>
          —{" "}I see, the professor said.
        </p>
        <span data-edition="ed1986" data-page="122"></span>
        <p>
          He laughed richly.
        </p>
        <p>
          —{" "}I see, he said again with new pleasure. Moses and the promised land.
          We gave him that idea, he added to J. J. O'Molloy.
        </p>
        <span data-edition="ed1961" data-page="149"></span>
        <p className="text-center uppercase font-bold">
          HORATIO IS CYNOSURE THIS FAIR JUNE DAY
        </p>
        <p>
          J. J. O'Molloy sent a weary sidelong glance towards the statue and held
          his peace.
        </p>
        <p>
          —{" "}I see, the professor said.
        </p>
        <p>
          He halted on <Annotation annotationId="060008sirjohngray" visited={visitedNotes.has("060008sirjohngray")} annotationSelect={() => {openNote("060008sirjohngray"); addToVisited("060008sirjohngray")}} activeAnnotationId={currentNoteId}>sir John Gray's pavement island</Annotation> and peered aloft at Nelson
          through the meshes of his wry smile.
        </p>
        <p className="text-center uppercase font-bold">
          DIMINISHED DIGITS PROVE TOO TITILLATING <br/>
          FOR FRISKY FRUMPS. ANNE WIMBLES, FLO <br/>
          WANGLES{" "}—{" "}YET CAN YOU BLAME THEM?
        </p>
        <p>
          —{" "}Onehandled adulterer, he said grimly. That tickles me, I must
          say.
        </p>
        <p>
          —{" "}Tickled the old ones too, Myles Crawford said, if the God Almighty's
          truth was known.
        </p>
        <br/><br/><br/>
        <span data-edition="ed1922" data-page="143"></span>
        <span data-edition="ed1932" data-page="133"></span>
        <span data-edition="ed1939" data-page="110"> </span>
        <span data-edition="ed1961" data-page="150"></span>
        <span data-edition="ed1986" data-page="123"></span>		  	
      </div>
    </div>
  );
}

export default Aeolus;
