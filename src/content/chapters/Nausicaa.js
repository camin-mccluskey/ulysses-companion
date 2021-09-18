import Annotation from "../../components/Annotation";


const Nausicaa = ({openNote, currentNoteId, visitedNotes, addToVisited}) => {
  return (
    <div>
      <p></p>
      <center><font size="+2">[13]</font></center>
      <br/>
      The summer evening had begun to fold the world in its mysterious
      embrace. Far away in the west <Annotation annotationId="030072longestday" visited={visitedNotes.has("030072longestday")} annotationSelect={() => {openNote("030072longestday"); addToVisited("030072longestday")}} activeAnnotationId={currentNoteId}>the sun was setting</Annotation> and the last glow of
      all too fleeting day lingered lovingly on sea and strand, on the proud
      promontory of dear old Howth guarding as ever the waters of the bay, on
      the weedgrown rocks along <Annotation annotationId="030001sandymount" visited={visitedNotes.has("030001sandymount")} annotationSelect={() => {openNote("030001sandymount"); addToVisited("030001sandymount")}} activeAnnotationId={currentNoteId}>Sandymount shore</Annotation> and, last but not least, on
      the quiet church whence there streamed forth at times upon the stillness
      the voice of prayer to her who is in her pure radiance a beacon ever to
      the stormtossed heart of man, <Annotation annotationId="130002starofthesea" visited={visitedNotes.has("130002starofthesea")} annotationSelect={() => {openNote("130002starofthesea"); addToVisited("130002starofthesea")}} activeAnnotationId={currentNoteId}>Mary, star of the sea</Annotation>.
      <p></p>
      <p>
        The three girl friends were seated on the rocks, enjoying the evening
        scene and the air which was fresh but not too chilly. Many a time and
        oft were they wont to come there to that favourite nook to have a cosy
        chat beside the sparkling waves and discuss matters feminine, Cissy
        Caffrey <span data-edition="ed1932" data-page="312"> </span>and Edy Boardman with the baby in the pushcar and Tommy and
        Jacky Caffrey, two little curlyheaded boys, dressed in sailor suits with
        caps to match and the name H.M.S. Belleisle printed on both. For Tommy
        and Jacky Caffrey were twins, scarce four years old and very noisy and
        spoiled twins sometimes but for all that darling little fellows with
        bright merry faces and endearing ways about them. They were dabbling in
        the sand with their spades and buckets, building castles as children do,
        or playing with their big coloured ball, happy as the day was long. And
        Edy Boardman was rocking the chubby baby to and fro in the pushcar while
        that young gentleman fairly chuckled with delight. He was but eleven
        months and nine days old and, though still a tiny toddler, was just
        beginning to lisp his first babyish words. Cissy Caffrey bent over
        him to tease his fat little plucks and the dainty dimple in his chin.
      </p>
      <p>
        —{" "}Now, baby, Cissy Caffrey said. Say out big, big. I want a drink of
        water.
      </p>
      <span data-edition="ed1922" data-page="331"> </span>
      <p>
        And baby prattled after her:
      </p>
      <p>
        —{" "}A jink a jink a jawbo.
      </p>
      <p>
        Cissy Caffrey cuddled the wee chap for she was awfully fond of children,
        so patient with little sufferers and Tommy Caffrey could never be got to
        take his castor oil unless it was Cissy Caffrey that held his nose and
        promised him the scatty heel of the loaf or brown bread with golden
        syrup on. What a persuasive power that girl had! But to be sure baby was as good as gold, a perfect little dote in his new fancy
        bib. None of your spoilt beauties, Flora MacFlimsy sort, was Cissy
        Caffrey. A 
        <span data-edition="ed1961" data-page="346"> </span>truerhearted <span data-edition="ed1986" data-page="284"> </span>lass never drew the breath of life, always with
        a laugh in her gipsylike eyes and a frolicsome word on her cherryripe
        red lips, a girl lovable in the extreme. And Edy Boardman laughed too at
        the quaint language of little brother.
      </p>
      <p>
        But just then there was a slight altercation between Master Tommy and
        Master Jacky. Boys will be boys and our two twins were no exception
        to this golden rule. 
        <span data-edition="ed1939" data-page="251"> </span>
        The apple of discord was a certain castle of sand
        which Master Jacky had built and Master Tommy would have it right go
        wrong that it was to be architecturally improved by a frontdoor like <Annotation annotationId="070002sandymounttrams" visited={visitedNotes.has("070002sandymounttrams")} annotationSelect={() => {openNote("070002sandymounttrams"); addToVisited("070002sandymounttrams")}} activeAnnotationId={currentNoteId}>the
        Martello tower</Annotation> had. But if Master Tommy was headstrong Master Jacky was
        selfwilled too and, true to the maxim that every little Irishman's house
        is his castle, he fell upon his hated rival and to such purpose that the
        wouldbe assailant came to grief and (alas to relate!) the coveted castle
        too. Needless to say the cries of discomfited Master Tommy drew the
        attention of the girl friends.
      </p>
      <p>
        —{" "}Come here, Tommy, his sister called imperatively, at once! And <span data-edition="ed1932" data-page="313"> </span>you,
        Jacky, for shame to throw poor Tommy in the dirty sand. Wait till I
        catch you for that.
      </p>
      <p>
        His eyes misty with unshed tears Master Tommy came at her call for their
        big sister's word was law with the twins. And in a sad plight he was after his misadventure. His little man-o'-war top and unmentionables
        were full of sand but Cissy was a past mistress in the art of smoothing
        over life's tiny troubles and very quickly not one speck of sand was to
        be seen on his smart little suit. Still the blue eyes were glistening
        with hot tears that would well up so she kissed away the hurtness and
        shook her hand at Master Jacky the culprit and said if she was near him
        she wouldn't be far from him, her eyes dancing in admonition.
      </p>
      <p>
        —{" "}Nasty bold Jacky! she cried.
      </p>
      <p>
        She put an arm round the little mariner and coaxed winningly:
      </p>
      <p>
        —{" "}What's your name? Butter and cream?
      </p>
      <span data-edition="ed1922" data-page="332"> </span>
      <p>
        —{" "}Tell us who is your sweetheart, spoke Edy Boardman. Is Cissy your
        sweetheart?
      </p>
      <p>
        —{" "}Nao, tearful Tommy said.
      </p>
      <p>
        —{" "}Is Edy Boardman your sweetheart? Cissy queried.
      </p>
      <p>
        —{" "}Nao, Tommy said.
      </p>
      <p>
        —{" "}I know, Edy Boardman said none too amiably with an 
        <span data-edition="ed1961" data-page="347"> </span>arch glance from
        her shortsighted eyes. I know who is Tommy's sweetheart. Gerty is
        Tommy's sweetheart.
      </p>
      <p>
        —{" "}Nao, Tommy said on the verge of tears.
      </p>
      <p>
        Cissy's quick motherwit guessed what was amiss and she whispered to
        Edy Boardman to take him there behind the pushcar where the gentlemen
        couldn't see and to mind he didn't wet his new tan shoes.
      </p>
      <p>
        But who was Gerty?
      </p>
      <p>
        Gerty MacDowell who was seated near her companions, lost in thought,
        gazing far away into the distance was, in very truth, as fair a <span data-edition="ed1986" data-page="285"> </span>specimen
        of winsome Irish girlhood as one could wish to see. She was pronounced
        beautiful by all who knew her though, as folks often said, she was
        more a Giltrap than a MacDowell. Her figure was slight and graceful,
        inclining even to fragility but those iron jelloids she had been taking
        of late had done her a world of good much better than the Widow Welch's
        female pills and she was much better of those discharges she used to
        get and that tired feeling. The waxen pallor of her face was almost
        spiritual in its ivorylike purity though her rosebud mouth was a genuine
        Cupid's bow, Greekly perfect. Her hands were of finely veined alabaster
        with tapering fingers and as white as lemonjuice and queen of ointments
        could make them though it was not true that <span data-edition="ed1932" data-page="314"> </span>she used to wear kid gloves
        in bed or take a milk footbath either. Bertha Supple told that once to
        Edy Boardman, a deliberate lie, when she was black out at daggers drawn
        with Gerty (the girl chums had of course their little tiffs from 
        <span data-edition="ed1939" data-page="252"> </span>
        time to
        time like the rest of mortals) and she told her not to let on whatever
        she did that it was her that told her or she'd never speak to her
        again. No. Honour where honour is due. There was an innate refinement,
        a languid queenly <i>hauteur</i> about Gerty which was unmistakably evidenced
        in her delicate hands and higharched instep. Had kind fate but willed
        her to be born a gentlewoman of high degree in her own right and had
        she only received the benefit of a good education Gerty MacDowell might
        easily have held her own beside any lady in the land and have seen
        herself exquisitely gowned with jewels on her brow and patrician suitors
        at her feet vying with one another to pay their devoirs to 
        <span data-edition="ed1922" data-page="333"> </span>
        her. Mayhap it was this, the love that might have been, that lent to her
        softlyfeatured face at whiles a look, tense with suppressed meaning,
        that imparted a strange yearning tendency to the beautiful eyes, a charm
        few could resist. 
        <span data-edition="ed1961" data-page="348"> </span>Why have women such eyes of witchery? Gerty's were of
        the bluest Irish blue, set off by lustrous lashes and dark expressive
        brows. Time was when those brows were not so silkily seductive. It
        was Madame Vera Verity, directress of the Woman Beautiful page of the
        Princess Novelette, who had first advised her to try eyebrowleine which
        gave that haunting expression to the eyes, so becoming in leaders
        of fashion, and she had never regretted it. Then there was blushing
        scientifically cured and how to be tall increase your height and you
        have a beautiful face but your nose? That would suit Mrs Dignam because
        she had a button one. But Gerty's crowning glory was her wealth of
        wonderful hair. It was dark brown with a natural wave in it. She had cut
        it that very morning on account of the new moon and it nestled about
        her pretty head in a profusion of luxuriant clusters and pared her nails
        too, Thursday for wealth. And just now at Edy's words as a telltale
        flush, delicate as the faintest rosebloom, crept into her cheeks she
        looked so lovely in her sweet girlish shyness that of a surety God's
        fair land of Ireland did not hold her equal.
      </p>
      <p>
        For an instant she was silent with rather sad downcast eyes. She
        was about to retort but something checked the words on her tongue.
        Inclination prompted her to speak out: dignity told her to be silent.
        The pretty lips <span data-edition="ed1986" data-page="286"> </span>pouted awhile but then she glanced up and broke out into
        a joyous little laugh which had in it all the freshness of a young May
        morning. She knew right well, no-one better, what made squinty <span data-edition="ed1932" data-page="315"> </span>Edy
        say that because of him cooling in his attentions when it was simply a
        lovers' quarrel. As per usual somebody's nose was out of joint about the
        boy that had the bicycle always riding up
        and down in front of her window. Only now his father kept him in in the
        evenings studying hard to get an exhibition in the intermediate that was
        on and he was going to Trinity college to study for a doctor when
        he left <Annotation annotationId="050020highschool" visited={visitedNotes.has("050020highschool")} annotationSelect={() => {openNote("050020highschool"); addToVisited("050020highschool")}} activeAnnotationId={currentNoteId}>the high school</Annotation> like his brother W. E. Wylie who was racing
        in the bicycle races in Trinity college university. Little recked he
        perhaps for what she felt, that dull aching void in her heart sometimes,
        piercing to the core. Yet he was young and perchance he might learn
        to love her in time. They were protestants in his family and of course
        Gerty knew Who came first and after Him the Blessed Virgin and then
        Saint Joseph. But he was undeniably handsome with an exquisite nose and
        he was what he looked, every inch a gentleman, the shape of his head too
        at the back without his cap on 
        <span data-edition="ed1961" data-page="349"> </span>that she would know anywhere 
        <span data-edition="ed1922" data-page="334"> </span>
        something off the common and the way he turned the bicycle at the lamp with his
        hands off the bars and also the nice perfume of those good cigarettes
        and besides they were both of a size and that was why 
        <span data-edition="ed1939" data-page="253"> </span>
        Edy
        Boardman thought she was so frightfully clever because he didn't go and
        ride up and down in front of her bit of a garden.
      </p>
      <p>
        Gerty was dressed simply but with the instinctive taste of a votary of
        Dame Fashion for she felt that there was just a might that he might be
        out. A neat blouse of electric blue selftinted by dolly dyes (because it
        was expected in the <i>Lady's Pictorial</i> that electric blue would be worn)
        with a smart vee opening down to the division and kerchief pocket (in
        which she always kept a piece of cottonwool scented with her
        favourite perfume because the handkerchief spoiled the sit) and a navy
        threequarter skirt cut to the stride showed off her slim graceful figure
        to perfection. She wore a coquettish little love of a hat of wideleaved
        nigger straw contrast trimmed with an underbrim of eggblue chenille and
        at the side a butterfly bow to tone. All Tuesday week afternoon
        she was hunting to match that chenille but at last she found what she
        wanted at Clery's summer sales, the very it, slightly shopsoiled but you
        would never notice, seven fingers two and a penny. She did it up all by
        herself and what joy was hers when she tried it on then, smiling at the
        lovely reflection which the mirror gave back to her! And when she put
        it on the waterjug to keep the shape she knew that that would take the
        shine out of some people she knew. Her shoes were the newest thing in
        footwear (Edy Boardman prided herself that she was very <i>petite</i> but she
        never had a foot like Gerty MacDowell, a five, and never would ash,
        oak <span data-edition="ed1932" data-page="316"> </span>or elm) with patent toecaps and just one smart buckle at
        her higharched instep. Her wellturned ankle displayed its perfect
        proportions beneath her skirt and just the proper amount and no more of
        her shapely limbs encased in finespun hose with highspliced heels and
        wide <span data-edition="ed1986" data-page="287"> </span>garter tops. As for undies they were Gerty's chief care and who
        that knows the fluttering hopes and fears of sweet seventeen (though
        Gerty would never see seventeen again) can find it in his heart to
        blame her? She had four dinky sets with awfully pretty stitchery,
        three garments and nighties extra, and each set slotted with different
        coloured ribbons, rosepink, pale blue, mauve and peagreen, and she aired
        them herself and blued them when they came home from the wash and ironed
        them and she had a 
        <span data-edition="ed1961" data-page="350"> </span>brickbat to keep the iron on because she wouldn't
        trust those washerwomen as far as she'd see them scorching the things.
        She was wearing the blue for luck, hoping against hope, her own colour
        and the lucky colour too for a bride to have a bit of blue somewhere on 
        <span data-edition="ed1922" data-page="335"> </span>
        her because the green she wore that day week brought grief because his father
        brought him in to study for the intermediate exhibition and because
        she thought perhaps he might be out because when she was dressing that
        morning she nearly slipped up the old pair on her inside out and that
        was for luck and lovers' meetings if you put those things on inside
        out so long as it
        wasn't of a Friday.
      </p>
      <p>
        And yet and yet! That strained look on her face! A gnawing sorrow is
        there all the time. Her very soul is in her eyes and she would give
        worlds to be in the privacy of her own familiar chamber where,
        giving way to tears, she could have a good cry and relieve her pentup
        feelings. Though not too much because she knew how to cry nicely before
        the mirror. You are lovely, Gerty, it said. The paly light of evening
        falls upon a face infinitely sad and wistful. Gerty MacDowell yearns
        in vain. Yes, she had known from the first that her daydream of a
        marriage has been arranged and the weddingbells ringing for Mrs Reggy
        Wylie T. C. D. (because the one who married the elder brother would be
        Mrs Wylie) and in the fashionable intelligence 
        <span data-edition="ed1939" data-page="254"> </span>
        Mrs Gertrude Wylie was
        wearing a sumptuous confection of grey trimmed with expensive blue fox
        was not to be. He was too young to understand. He would not believe in
        love, a woman's birthright. The night of the party long ago in Stoers'
        (he was still in short trousers) when they were alone and he stole
        an arm round her waist she went white to the very lips. He called her
        little one in a strangely husky voice and snatched a half kiss (the
        first!) but it was only the end of her nose and then he hastened from
        the room with a remark about refreshments. Impetuous fellow! Strength <span data-edition="ed1932" data-page="317"> </span>of
        character had never been Reggy Wylie's strong point and he who would
        woo and win Gerty MacDowell must be a man among men. But waiting, always
        waiting to be asked and it was leap year too and would soon be over. No
        prince charming is her beau ideal to lay a rare and wondrous love at her
        feet but rather a manly man with a strong quiet face who had not found
        his ideal, perhaps his hair slightly flecked with grey, and who would
        understand, take her in his sheltering arms, strain her to him in all
        the strength of his deep passionate nature and 
        <span data-edition="ed1961" data-page="351"> </span>comfort her with a long
        long kiss. It would be like heaven. For such a one she yearns this balmy
        <span data-edition="ed1986" data-page="288"> </span>summer eve. With all the heart of her she longs to be his only, his
        affianced bride for riches for poor, in sickness in health, till death
        us two part, from this to this day forward.
      </p>
      <p>
        And while Edy Boardman was with little Tommy behind the pushcar she was
        just thinking would the day ever come when she could call herself 
        <span data-edition="ed1922" data-page="336"> </span>
        his little wife to be. Then they could talk about her till they went blue in
        the face, Bertha Supple too, and Edy, the spitfire, because she would
        be twentytwo in November. She would care for him with creature comforts
        too for Gerty was womanly wise and knew that a mere man liked that
        feeling of hominess. Her griddlecakes done to a goldenbrown hue and
        queen Ann's pudding of delightful creaminess had won golden opinions
        from all because she had a lucky hand also for lighting a fire, dredge
        in the fine selfraising flour and always stir in the same direction,
        then cream the milk and sugar and whisk well the white of eggs though
        she didn't like the eating part when there were any people that made her
        shy and often she wondered why you couldn't eat something poetical like
        violets or roses and they would have a beautifully appointed drawingroom
        with pictures and engravings and the photograph of grandpapa Giltrap's
        lovely dog Garryowen that almost talked it was so human and chintz
        covers for the chairs and that silver toastrack in Clery's summer
        jumble sales like they have in rich houses. He would be tall with
        broad shoulders (she had always admired tall men for a husband) with
        glistening white teeth under his carefully trimmed sweeping moustache
        and they would go on the continent for their honeymoon (three wonderful
        weeks!) and then, when they settled down in a nice snug and cosy little
        homely house, every morning they would both have brekky, simple but
        perfectly served, for their own two selves and before he went out to
        business he would give his dear little wifey a good hearty hug and gaze
        for a moment deep down into her eyes.
      </p>
      <p>
        Edy Boardman asked Tommy Caffrey was he done and he said yes so then she
        buttoned up his little knickerbockers for him and told him <span data-edition="ed1932" data-page="318"> </span>to run off
        and play with Jacky and to be good now and not to fight. But Tommy said
        he wanted the ball and Edy told him no that baby was playing with the
        ball and if he took it there'd be wigs on the green but Tommy said 
        <span data-edition="ed1961" data-page="352"> </span>it
        was his ball and he wanted his ball and he pranced on the ground, if
        you please. The temper of him! O, he was a man 
        <span data-edition="ed1939" data-page="255"> </span>
        already was little Tommy
        Caffrey since he was out of pinnies. Edy told him no, no and to be off
        now with him and she told Cissy Caffrey not to give in to him.
      </p>
      <p>
        —{" "}You're not my sister, naughty Tommy said. It's my ball.
      </p>
      <p>
        But Cissy Caffrey told baby Boardman to look up, look up high at her
        finger and she snatched the ball quickly and threw it along the sand and
        Tommy after it in full career, having won the day.
      </p>
      <p>
        —{" "}Anything for a quiet life, laughed Ciss.
      </p>
      <p>
        And she tickled tiny tot's two cheeks to make him forget and played here's 
        <span data-edition="ed1922" data-page="337"> </span>
        <Annotation annotationId="060033corporation" visited={visitedNotes.has("060033corporation")} annotationSelect={() => {openNote("060033corporation"); addToVisited("060033corporation")}} activeAnnotationId={currentNoteId}>the lord mayor, here's his two horses, here's his gingerbread
        carriage</Annotation> <span data-edition="ed1986" data-page="289"> </span>and here he walks in, chinchopper, chinchopper, chinchopper
        chin. But Edy got as cross as two sticks about him getting his own way
        like that from everyone always petting him.
      </p>
      <p>
        —{" "}I'd like to give him something, she said, so I would, where I won't
        say.
      </p>
      <p>
        —{" "}On the beeoteetom, laughed Cissy merrily.
      </p>
      <p>
        Gerty MacDowell bent down her head and crimsoned at the idea of Cissy
        saying an unladylike thing like that out loud she'd be ashamed of her
        life to say, flushing a deep rosy red, and Edy Boardman said she was
        sure the gentleman opposite heard what she said. But not a pin cared
        Ciss.
      </p>
      <p>
        —{" "}Let him! she said with a pert toss of her head and a piquant tilt of
        her nose. Give it to him too on the same place as quick as I'd look at
        him.
      </p>
      <p>
        Madcap Ciss with her golliwog curls. You had to laugh at her sometimes.
        For instance when she asked you would you have some more Chinese tea and
        jaspberry ram and when she drew the jugs too and the men's faces on her
        nails with red ink make you split your sides or when she wanted to go
        where you know she said she wanted to run and pay a visit to the Miss
        White. That was just like Cissycums. O, and will you ever forget the
        evening she dressed up in her father's suit and hat and the burned cork
        moustache and walked down Tritonville road, smoking a cigarette. There
        was none to come up to her for fun. But she was sincerity itself, one of
        the bravest and truest hearts heaven ever made, not one of your twofaced
        things, too sweet to be wholesome.
      </p>
      <span data-edition="ed1932" data-page="319"> </span>
      <p>
        And then there came out upon the air the sound of voices 
        <span data-edition="ed1961" data-page="353"> </span>and the pealing
        anthem of the organ. It was the men's temperance retreat conducted
        by the missioner, the reverend John Hughes S. J., rosary, sermon and
        benediction of the Most Blessed Sacrament. They were there gathered
        together without distinction of social class (and a most edifying
        spectacle it was to see) in that simple fane beside the waves, after the
        storms of this weary world, kneeling before the feet of the immaculate,
        reciting the litany of Our Lady of Loreto, beseeching her to intercede
        for them, the old familiar words, holy Mary, holy virgin of virgins. How
        sad to poor Gerty's ears! Had her father only avoided the clutches of
        the demon drink, by <Annotation annotationId="060010fathermathew" visited={visitedNotes.has("060010fathermathew")} annotationSelect={() => {openNote("060010fathermathew"); addToVisited("060010fathermathew")}} activeAnnotationId={currentNoteId}>taking the pledge</Annotation> or those powders the drink habit
        cured in Pearson's Weekly, she might now be rolling in her carriage,
        second to none. Over and over had she told herself that as she mused by
        the dying embers in a brown study without the lamp because she hated 
        <span data-edition="ed1922" data-page="338"> </span>
        two lights or oftentimes gazing out of the window dreamily by the hour at
        the rain falling on the rusty bucket, thinking. But that vile decoction
        which has ruined so many hearths and homes had cast its shadow over her
        childhood days. Nay, she had even witnessed in the home circle <Annotation annotationId="050049comehometoma" visited={visitedNotes.has("050049comehometoma")} annotationSelect={() => {openNote("050049comehometoma"); addToVisited("050049comehometoma")}} activeAnnotationId={currentNoteId}>deeds of
        violence caused by intemperance</Annotation> and had seen her own father, a prey to
        the fumes of intoxication, forget himself completely for if there was
        one thing of all things that Gerty knew 
        <span data-edition="ed1939" data-page="256"> </span>
        it was that the man who lifts
        his hand to a woman save in the way of kindness, deserves to be branded
        as the lowest of the low.
      </p>
      <span data-edition="ed1986" data-page="290"> </span>
      <p>
        And still the voices sang in supplication to the Virgin most powerful,
        Virgin most merciful. And Gerty, wrapt in thought, scarce saw or heard
        her companions or the twins at their boyish gambols or the gentleman
        <Annotation annotationId="070002sandymounttrams" visited={visitedNotes.has("070002sandymounttrams")} annotationSelect={() => {openNote("070002sandymounttrams"); addToVisited("070002sandymounttrams")}} activeAnnotationId={currentNoteId}>off Sandymount green</Annotation> that Cissy Caffrey called the man that was so like
        himself passing along the strand taking a short walk. You never saw him
        any way screwed but still and for all that she would not like him for a
        father because he was too old or something or on account of his face
        (it was a palpable case of Doctor Fell) or his carbuncly nose with the
        pimples on it and his sandy moustache a bit white under his nose. Poor
        father! With all his faults she loved him still when he sang <i>Tell me,
        Mary, how to woo thee</i> or <i>My love and cottage near Rochelle</i> and they
        had stewed <Annotation annotationId="030080cockles" visited={visitedNotes.has("030080cockles")} annotationSelect={() => {openNote("030080cockles"); addToVisited("030080cockles")}} activeAnnotationId={currentNoteId}>cockles</Annotation> and lettuce with Lazenby's salad dressing for
        supper and when he sang <i>The moon hath raised</i> with Mr Dignam that
        died suddenly and was buried, God have mercy on him, from a stroke. Her
        mother's birthday that was and Charley was home 
        <span data-edition="ed1961" data-page="354"> </span>on his holidays and Tom
        and Mr Dignam and Mrs and Patsy and Freddy Dignam and they were to have
        had a group taken. No-one would have thought the end was so <span data-edition="ed1932" data-page="320"> </span>near. Now he
        was laid to rest. And her mother said to him to let that be a warning to
        him for the rest of his days and he couldn't even go to the funeral on
        account of the gout and she had to go into town to bring him the
        letters and samples from his office about Catesby's cork lino, artistic,
        standard designs, fit for a palace, gives tiptop wear and always bright
        and cheery in the home.
      </p>
      <p>
        A sterling good daughter was Gerty just like a second mother in the
        house, a ministering angel too with a little heart worth its weight in
        gold. And when her mother had those raging splitting headaches who was
        it rubbed on the menthol cone on her forehead but Gerty though she didn't
        like her mother taking pinches of snuff and that was the only single
        thing they ever had words about, taking snuff. Everyone thought the
        world of her for her gentle ways. It was Gerty who turned off the gas at
        the main every night and it was Gerty 
        <span data-edition="ed1922" data-page="339"> </span>
        who tacked up on the wall of that
        place where she never forgot every fortnight the chlorate of lime Mr
        Tunney the grocer's christmas almanac, the picture of halcyon days
        where a young gentleman in the costume they used to wear then with a
        threecornered hat was offering a bunch of flowers to his ladylove with
        oldtime chivalry through her lattice window. You could see there was a
        story behind it. The colours were done something lovely. She was in
        a soft clinging white in a studied attitude and the gentleman was in
        chocolate and he looked a thorough aristocrat. She often looked at them
        dreamily when she went there for a certain purpose and felt her own
        arms that were white and soft just like hers with the sleeves back
        and thought about those times because she had found out in Walker's
        pronouncing dictionary that belonged to grandpapa Giltrap about the
        halcyon days what they meant.
      </p>
      <p>
        The twins were now playing in the most approved brotherly fashion,
        till at last Master Jacky who was really as bold as brass there was
        no getting behind that deliberately kicked the ball as hard as ever he
        could down <span data-edition="ed1986" data-page="291"> </span>towards the seaweedy rocks. Needless to say poor Tommy was
        not slow to voice his dismay but luckily the gentleman in black who was
        sitting there by himself came gallantly to the rescue and intercepted
        the ball. Our two champions claimed their plaything with lusty cries and
        to avoid trouble Cissy Caffrey called to the <span data-edition="ed1961" data-page="355"> </span>gentleman to throw it 
        <span data-edition="ed1939" data-page="257"> </span>
        to her please. The gentleman aimed the ball once or twice and then threw
        it up the strand towards Cissy Caffrey but it rolled down the slope and
        stopped right under Gerty's skirt near the little pool by the rock. The
        twins clamoured again for it and Cissy told her to kick it away and
        let them fight for it so Gerty drew back her foot but she wished their
        <span data-edition="ed1932" data-page="321"> </span>stupid ball hadn't come rolling down to her and she gave a kick but she
        missed and Edy and Cissy laughed.
      </p>
      <p>
        —{" "}If you fail try again, Edy Boardman said.
      </p>
      <p>
        Gerty smiled assent and bit her lip. A delicate pink crept into her
        pretty cheek but she was determined to let them see so she just lifted
        her skirt a little but just enough and took good aim and gave the ball a
        jolly good kick and it went ever so far and the two twins after it down
        towards the shingle. Pure jealousy of course it was nothing else to draw
        attention on account of the gentleman opposite looking. She felt the
        warm flush, a danger signal always with Gerty MacDowell, surging and
        flaming into her cheeks. Till then they had only exchanged glances of
        the most casual but now under the brim of her new hat she ventured a
        look at him and the face that met her gaze there in the twilight, wan
        and strangely drawn, seemed to her the saddest she had ever seen.
      </p>
      <span data-edition="ed1922" data-page="340"> </span>
      <p>
        Through the open window of the church the fragrant incense was wafted
        and with it the fragrant names of her who was conceived without stain of
        original sin, spiritual vessel, pray for us, honourable vessel, pray
        for us, vessel of singular devotion, pray for us, mystical rose. And
        careworn hearts were there and toilers for their daily bread and many
        who had erred and wandered, their eyes wet with contrition but for all
        that bright with hope for the reverend father Hughes had told
        them what the great saint Bernard said in his famous prayer of Mary, the
        most pious Virgin's intercessory power that it was not recorded in any
        age that those who implored her powerful protection were ever abandoned
        by her.
      </p>
      <p>
        The twins were now playing again right merrily for the troubles of
        childhood are but as fleeting summer showers. Cissy played with
        baby Boardman till he crowed with glee, clapping baby hands in air. Peep
        she cried behind the hood of the pushcar and Edy asked where was Cissy
        gone and then Cissy popped up her head and cried ah! and, my word,
        didn't the little chap enjoy that! And then she told him to say papa.
      </p>
      <p>
        —{" "}Say papa, baby. Say pa pa pa pa pa pa pa.
      </p>
      <span data-edition="ed1961" data-page="356"> </span>
      <p>
        And baby did his level best to say it for he was very intelligent for
        eleven months everyone said and big for his age and the picture of
        health, a perfect little bunch of love, and he would certainly turn out
        to be something great, they said.
      </p>
      <p>
        —{" "}Haja ja ja haja.
      </p>
      <span data-edition="ed1986" data-page="292"> </span>
      <p>
        Cissy wiped his little mouth with the dribbling bib and wanted him to
        sit up properly and say pa pa pa but when she undid the strap she cried
        out, holy saint Denis, that he was possing wet and to double the half
        <span data-edition="ed1932" data-page="322"> </span>blanket the other way under him. Of course his infant majesty was most
        obstreperous at such toilet formalities and he let everyone know it:
      </p>
      <p>
        —{" "}Habaa baaaahabaaa baaaa.
      </p>
      <p>
        And two great big lovely big tears coursing down his cheeks. It was all
        no use soothering him with no, nono, baby, no and telling him about the
        geegee and where was the puffpuff but Ciss, always readywitted, gave
        him in his mouth the teat of the suckingbottle and the young heathen was
        quickly appeased.
      </p>
      <span data-edition="ed1939" data-page="258"> </span>
      <p>
        Gerty wished to goodness they would take their squalling baby home out
        of that and not get on her nerves, no hour to be out, and the little
        brats of twins. She gazed out towards the distant sea. It was like the
        paintings that man used to do on the pavement with all the coloured
        chalks and such a pity too leaving them there to be all blotted out, the
        evening and the clouds coming 
        <span data-edition="ed1922" data-page="341"> </span>
        out and the Bailey light on Howth and to
        hear the music like that and the perfume of those incense they burned
        in the church like a kind of waft. And while she gazed her heart went
        pitapat. Yes, it was her he was looking at, and there was meaning in his
        look. His eyes burned into her as though they would search her through
        and through, read her very soul. Wonderful eyes they were, superbly
        expressive, but could you trust them? People were so queer. She could
        see at once by his dark eyes and his pale intellectual face that he
        was a foreigner, the image of <Annotation annotationId="130003martinharvey" visited={visitedNotes.has("130003martinharvey")} annotationSelect={() => {openNote("130003martinharvey"); addToVisited("130003martinharvey")}} activeAnnotationId={currentNoteId}>the photo she had of Martin Harvey, the
        matinee idol</Annotation>, only for <Annotation annotationId="040055moustachecup" visited={visitedNotes.has("040055moustachecup")} annotationSelect={() => {openNote("040055moustachecup"); addToVisited("040055moustachecup")}} activeAnnotationId={currentNoteId}>the moustache</Annotation> which she preferred because she
        wasn't stagestruck like Winny Rippingham that wanted they two to always
        dress the same on account of a play but she could not see whether he had
        an aquiline nose or a slightly <i>retroussé</i> from where he was sitting.
        He was in deep mourning, she could see that, and the story of a haunting
        sorrow was written on his face. She would have given worlds to know what
        it was. He was looking up so intently, so still, and he saw her kick the
        ball and perhaps he could see <span data-edition="ed1961" data-page="357"> </span>the bright steel buckles of her shoes if
        she swung them like that thoughtfully with the toes down. She was glad
        that something told her to put on the transparent stockings thinking
        Reggy Wylie might be out but that was far away. Here was that of which
        she had so often dreamed. It was he who mattered and there was joy on
        her face because she wanted him because she felt instinctively that he
        was like no-one else. The very heart of the girlwoman went out to him,
        her dreamhusband, because she knew on the instant it was him. If he had
        suffered, more sinned against than sinning, or even, even, if he had
        been himself a sinner, a wicked man, she cared not. Even if he was a
        protestant or methodist she could convert him easily if he truly loved
        <span data-edition="ed1932" data-page="323"> </span>her. There were wounds that wanted healing with heartbalm. She was a
        womanly woman not like other flighty girls unfeminine he had known,
        those cyclists showing off what they hadn't got and she just yearned to
        know all, to forgive all if <span data-edition="ed1986" data-page="293"> </span>she could make him fall in love with her,
        make him forget the memory of the past. Then mayhap he would embrace her
        gently, like a real man, crushing her soft body to him, and love her,
        his ownest girlie, for herself alone.
      </p>
      <p>
        Refuge of sinners. Comfortress of the afflicted. <i>Ora pro nobis</i>. Well
        has it been said that whosoever prays to her with faith and constancy
        can never be lost or cast away: and fitly is she too a haven of refuge
        for the afflicted because of the seven dolours which transpierced
        her own heart. Gerty could picture the whole scene in the church, the
        stained glass windows lighted up, the candles, the flowers and the blue
        banners of the blessed Virgin's sodality and <Annotation annotationId="040027conroy" visited={visitedNotes.has("040027conroy")} annotationSelect={() => {openNote("040027conroy"); addToVisited("040027conroy")}} activeAnnotationId={currentNoteId}>Father</Annotation> 
        <span data-edition="ed1922" data-page="342"> </span>
        <Annotation annotationId="040027conroy" visited={visitedNotes.has("040027conroy")} annotationSelect={() => {openNote("040027conroy"); addToVisited("040027conroy")}} activeAnnotationId={currentNoteId}>Conroy</Annotation> was helping
        Canon O'Hanlon at the altar, carrying things in and out with his eyes
        cast down. He looked almost a saint and his confessionbox was so quiet
        and clean and dark and his hands were just like white wax and if ever
        she became a Dominican nun in their white habit perhaps he might come to
        the convent for the novena of Saint Dominic. He told her that time when
        she told him about that in confession, crimsoning up to the roots of her
        hair for fear he could see, not to be troubled because that was only the
        voice of nature and we were all subject to nature's laws, 
        <span data-edition="ed1939" data-page="259"> </span>
        he said, in
        this life and that that was no sin because that came from the nature of
        woman instituted by God, he said, and that Our Blessed Lady herself said
        to the archangel Gabriel be it done unto me according to Thy Word. He
        <span data-edition="ed1961" data-page="358"> </span>was so kind and holy and often and often she thought and thought could
        she work a ruched teacosy with embroidered floral design for him as a
        present or a clock but they had a clock she noticed on the mantelpiece
        white and gold with a canarybird that came out of a little house to tell
        the time the day she went there about the flowers for the forty hours'
        adoration because it was hard to know what sort of a present to give or
        perhaps an album of illuminated views of Dublin or some place.
      </p>
      <p>
        The exasperating little brats of twins began to quarrel again and Jacky
        threw the ball out towards the sea and they both ran after it. Little
        monkeys common as ditchwater. Someone ought to take them and give them
        a good hiding for themselves to keep them in their places, the both of
        them. And Cissy and Edy shouted after them to come back because they
        were afraid  <Annotation annotationId="010125hightide" visited={visitedNotes.has("010125hightide")} annotationSelect={() => {openNote("010125hightide"); addToVisited("010125hightide")}} activeAnnotationId={currentNoteId}>the tide might come in on them and be drowned</Annotation>.
      </p>
      <p>
        —{" "}Jacky! Tommy!
      </p>
      <span data-edition="ed1932" data-page="324"> </span>
      <p>
        Not they! What a great notion they had! So Cissy said it was the very
        last time she'd ever bring them out. She jumped up and called them and
        she ran down the slope past him, tossing her hair behind her which had
        a good enough colour if there had been more of it but with all the
        thingamerry she was always rubbing into it she couldn't get it to grow
        long because it wasn't natural so she could just go and throw her hat at
        it. She ran with long gandery strides it was a wonder she didn't rip up
        her skirt at the side that was too tight on her because there was a lot
        of the tomboy about Cissy Caffrey and she was a forward piece whenever
        she thought she had a good opportunity to show and just because she was
        a good runner she ran like <span data-edition="ed1986" data-page="294"> </span>that so that he could see all the end of her
        petticoat running and her skinny shanks up as far as possible. It
        would have served her just right if she had tripped up over something
        accidentally on purpose with her high crooked French heels on her to
        make her look tall and 
        <span data-edition="ed1922" data-page="343"> </span>
        got a fine tumble. <i>Tableau!</i> That would have
        been a very charming expose for a gentleman like that to witness.
      </p>
      <p>
        Queen of angels, queen of patriarchs, queen of prophets, of all saints,
        they prayed, queen of the most holy rosary and then Father Conroy handed
        the thurible to Canon O'Hanlon and he put in the incense and censed the
        Blessed Sacrament and Cissy Caffrey caught the two twins and she was
        itching to give them a ringing good clip on the ear but she didn't
        because <span data-edition="ed1961" data-page="359"> </span>she thought he might be watching but she never made a bigger
        mistake in all her life because Gerty could see without looking that
        he never took his eyes off of her and then Canon O'Hanlon handed the
        thurible back to Father Conroy and knelt down looking up at the Blessed
        Sacrament and the choir began to sing <i>Tantum ergo</i> and she just
        swung her foot in and out in time as the music rose and fell to
        the <i>Tantumer gosa cramen tum</i>. Three and eleven she paid for those
        stockings in Sparrow's of George's street on the Tuesday, no the Monday
        before Easter and there wasn't a brack on them and that was what he
        was looking at, transparent, and not at her insignificant ones that had
        neither shape nor form (the cheek of her!) because he had eyes in his
        head to see the difference for himself.
      </p>
      <p>
        Cissy came up along the strand with the two twins and their ball with
        her hat anyhow on her to one side after her run and she did look a
        streel tugging the two 
        <span data-edition="ed1939" data-page="260"> </span>
        kids along with the flimsy blouse she bought only
        a fortnight before like a rag on her back and a bit of her petticoat
        hanging like a caricature. Gerty just took off her hat for a moment to
        settle her hair and a prettier, a daintier head of nutbrown tresses was
        never seen on a girl's shoulders, a radiant little vision, in sooth,
        almost maddening <span data-edition="ed1932" data-page="325"> </span>in its sweetness. You would have to travel many a long
        mile before you found a head of hair the like of that. She could almost
        see the swift answering flash of admiration in his eyes that set her
        tingling in every nerve. She put on her hat so that she could see from
        underneath the brim and swung her buckled shoe faster for her breath
        caught as she caught the expression in his eyes. He was eying her as a
        snake eyes its prey. Her woman's instinct told her that she had raised
        the devil in him and at the thought a burning scarlet swept from throat
        to brow till the lovely colour of her face became a glorious rose.
      </p>
      <p>
        Edy Boardman was noticing it too because she was squinting at Gerty,
        half smiling, with her specs like an old maid, pretending to nurse the
        baby. Irritable little gnat she was and always would be and that was why
        no-one could get on with her poking her nose into what was no concern of
        hers. And she said to Gerty:
      </p>
      <span data-edition="ed1922" data-page="344"> </span>
      <p>
        —{" "}A penny for your thoughts.
      </p>
      <span data-edition="ed1986" data-page="295"> </span>
      <p>
        —{" "}What? replied Gerty with a smile reinforced by the whitest of teeth. I
        was only wondering was it late.
      </p>
      <span data-edition="ed1961" data-page="360"> </span>
      <p>
        Because she wished to goodness they'd take the snottynosed twins and
        their babby home to the mischief out of that so that was why she just
        gave a gentle hint about its being late. And when Cissy came up Edy
        asked her the time and Miss Cissy, as glib as you like, said it was half
        past kissing time, time to kiss again. But Edy wanted to know because
        they were told to be in early.
      </p>
      <p>
        —{" "}Wait, said Cissy, I'll ask my uncle Peter over there what's the
        time by his conundrum.
      </p>
      <p>
        So over she went and when he saw her coming she could see him take his
        hand out of his pocket, getting nervous, and beginning to play with his
        watchchain, looking at the church. Passionate nature though he was
        Gerty could see that he had enormous control over himself. One moment he
        had been there, fascinated by a loveliness that made him gaze, and the
        next moment it was the quiet gravefaced gentleman, selfcontrol expressed
        in every line of his distinguishedlooking figure.
      </p>
      <p>
        Cissy said to excuse her would he mind telling her what was the
        right time and Gerty could see him taking out his watch, listening to it
        and looking up and clearing his throat and he said he was very sorry his
        watch was stopped but he thought it must be after eight because the
        sun was set. His voice had a cultured ring in it and though he spoke in
        measured accents there was a suspicion of a quiver in the mellow tones.
        Cissy said thanks and came back with her tongue out and said uncle said
        his waterworks were out of order.
      </p>
      <span data-edition="ed1932" data-page="326"> </span>
      <p>
        Then they sang the second verse of the <i>Tantum ergo</i> and Canon O'Hanlon
        got up again and censed the Blessed Sacrament and knelt down and he told
        Father Conroy that one of the candles was just going to set fire to the
        flowers and Father Conroy got up and settled it all right and she could
        see the gentleman winding his watch and listening to the works and she
        swung her leg more in and out in time. It was getting darker but he
        could see and he was looking all the time that he was winding the watch
        or whatever he was doing to it and then he put it back and put his hands
        back into his pockets. She felt a kind of a sensation rushing all over
        her 
        <span data-edition="ed1939" data-page="261"> </span>
        and she knew by the feel of her scalp and that irritation against
        her stays that that thing must be coming on because the last time too
        was when she clipped her hair on account of the moon. His dark eyes
        fixed themselves on her again drinking in her every contour, 
        <span data-edition="ed1922" data-page="345"> </span>
        literally worshipping at her shrine. If ever there <span data-edition="ed1961" data-page="361"> </span>was undisguised admiration in a
        man's passionate gaze it was there plain to be seen on that man's face.
        It is for you, Gertrude MacDowell, and you know it.
      </p>
      <p>
        Edy began to get ready to go and it was high time for her and Gerty
        noticed that that little hint she gave had the desired effect
        because it was a long way along the strand to where there was the place
        to push up the pushcar and Cissy took off the twins' caps and tidied
        their hair to make <span data-edition="ed1986" data-page="296"> </span>herself attractive of course and Canon O'Hanlon stood
        up with his cope poking up at his neck and Father Conroy handed him the
        card to read off and he read out <i>Panem de coelo praestitisti eis</i> and
        Edy and Cissy were talking about the time all the time and asking her
        but Gerty could pay them back in their own coin and she just answered
        with scathing politeness when Edy asked her was she heartbroken about
        her best boy throwing her over. Gerty winced sharply. A brief cold blaze
        shone from her eyes that spoke volumes of scorn immeasurable. It hurt. O
        yes, it cut deep because Edy had her own quiet way of saying things
        like that she knew would wound like the confounded little cat she was.
        Gerty's lips parted swiftly to frame the word but she fought back
        the sob that rose to her throat, so slim, so flawless, so beautifully
        moulded it seemed one an artist might have dreamed of. She had loved him
        better than he knew. Lighthearted deceiver and fickle like all his sex
        he would never understand what he had meant to her and for an instant
        there was in the blue eyes a quick stinging of tears. Their eyes were
        probing her mercilessly but with a brave effort she sparkled back in
        sympathy as she glanced at her new conquest for them to see.
      </p>
      <p>
        —{" "}O, responded Gerty, quick as lightning, laughing, and the proud head
        flashed up. I can throw my cap at who I like because it's leap year.
      </p>
      <span data-edition="ed1932" data-page="327"> </span>
      <p>
        Her words rang out crystalclear, more musical than the cooing of the
        ringdove, but they cut the silence icily. There was that in her young
        voice that told that she was not a one to be lightly trifled with. As
        for Mr Reggy with his swank and his bit of money she could just chuck
        him aside as if he was so much filth and never again would she cast as
        much as a second thought on him and tear his silly postcard into a dozen
        pieces. And if ever after he dared to presume she could give him one
        look of measured scorn that would make him shrivel up on the spot. Miss
        puny little Edy's countenance fell to no <span data-edition="ed1961" data-page="362"> </span>slight extent and Gerty could
        see by her looking as black as thunder that she was simply in a towering
        rage though she hid it, the little kinnatt, because that shaft had
        struck home for her petty jealousy and they both knew that she was
        something aloof, apart, in another sphere, that she was not of them 
        and there 
        <span data-edition="ed1922" data-page="346"> </span>
        was somebody else too that knew it and saw it
        so they could put that in their pipe and smoke it.
      </p>
      <p>
        Edy straightened up baby Boardman to get ready to go and Cissy tucked in
        the ball and the spades and buckets and it was high time too because the
        sandman was on his way for Master Boardman junior. And Cissy told him
        too that billy winks was coming and that baby was to go deedaw and baby
        looked just too ducky, laughing up out of his gleeful eyes, and Cissy
        poked him like that out of fun in his wee fat tummy and baby, without as
        much as by your leave, sent up his compliments to all and sundry on to
        his brandnew dribbling bib.
      </p>
      <span data-edition="ed1939" data-page="262"> </span>
      <p>
        —{" "}O my! Puddeny pie! protested Ciss. He has his bib destroyed.
      </p>
      <p>
        The slight <i>contretemps</i> claimed her attention but in two twos she set
        that little matter to rights.
      </p>
      <span data-edition="ed1986" data-page="297"> </span>
      <p>
        Gerty stifled a smothered exclamation and gave a nervous cough and Edy
        asked what and she was just going to tell her to catch it while it was
        flying but she was ever ladylike in her deportment so she simply passed
        it off with consummate tact by saying that that was the benediction
        because just then the bell rang out from the steeple over the quiet
        seashore because Canon O'Hanlon was up on the altar with the veil that
        Father Conroy put round his shoulders giving the benediction with the
        Blessed Sacrament in his hands.
      </p>
      <p>
        How moving the scene there in the gathering twilight, the last glimpse
        of Erin, the touching chime of those evening bells and at the same
        time <Annotation annotationId="130004littleman" visited={visitedNotes.has("130004littleman")} annotationSelect={() => {openNote("130004littleman"); addToVisited("130004littleman")}} activeAnnotationId={currentNoteId}>a bat flew forth</Annotation> from the ivied belfry through the dusk, hither,
        thither, with a tiny lost cry. And she could see far away the lights of
        the lighthouses so picturesque she would have loved to do with a box of
        paints because it was easier than to make a man and soon <span data-edition="ed1932" data-page="328"> </span>the lamplighter
        would be going his rounds past the presbyterian church grounds and along
        by shady Tritonville avenue where the couples walked and lighting the
        lamp near her window where Reggy Wylie used to turn his freewheel like
        she read in that book <i>The Lamplighter</i> by Miss Cummins, author of
        <i>Mabel Vaughan</i> and other tales. For Gerty had her dreams that no-one
        knew <span data-edition="ed1961" data-page="363"> </span>of. She loved to read poetry and when she got a keepsake from
        Bertha Supple of that lovely confession album with the coralpink cover
        to write her thoughts in she laid it in the drawer of her toilettable
        which, though it did not err on the side of luxury, was scrupulously
        neat and clean. It was there she kept her girlish treasure trove, the
        tortoiseshell combs, her child of Mary badge, the whiterose scent, the
        eyebrowleine, her alabaster pouncetbox and the ribbons to change
        when her things came home from the wash and there were some beautiful
        thoughts written in it <Annotation annotationId="020080mauve" visited={visitedNotes.has("020080mauve")} annotationSelect={() => {openNote("020080mauve"); addToVisited("020080mauve")}} activeAnnotationId={currentNoteId}>in violet ink</Annotation> that she bought in Hely's 
        <span data-edition="ed1922" data-page="347"> </span>
        of Dame Street for she felt that she too could write poetry if she could only
        express herself like that poem that appealed to her so deeply that
        she had copied out of the newspaper she found one evening round the
        potherbs. <i>Art thou real, my ideal?</i> it was called by Louis J. Walsh,
        Magherafelt, and after there was something about <i>twilight, wilt thou
        ever?</i> and ofttimes the beauty of poetry, so sad in its transient
        loveliness, had misted her eyes with silent tears that
        the years were slipping by for her, one by one, and but for that one
        shortcoming she knew she need fear no competition and that was an
        accident coming down Dalkey hill and she always tried to conceal it.
        But it must end, she felt. If she saw that magic lure in his eyes there
        would be no holding back for her. Love laughs at locksmiths. She
        would make the great sacrifice. Her every effort would be to share his
        thoughts. Dearer than the whole world would she be to him and gild his
        days with happiness. There was the allimportant question and she was
        dying to know was he a married man or a widower who had lost his wife
        or some tragedy like the nobleman with the foreign name from the land
        of song had to have her put into a madhouse, cruel only to be kind.
        But even if{" "}—{" "}what then? Would it make a very great difference? From
        everything in the least indelicate her <span data-edition="ed1986" data-page="298"> </span>finebred nature instinctively
        recoiled. She loathed that sort of person, the fallen women off the
        accommodation walk beside the Dodder that went with the soldiers and
        coarse men with no respect for a girl's honour, degrading the sex and
        being taken up to the police station. No, 
        <span data-edition="ed1939" data-page="263"> </span>
        no: not that. They would be
        just good friends like a big brother and sister without all that other
        in spite of the conventions of Society with a big ess. Perhaps it was
        an old flame he was in <span data-edition="ed1932" data-page="329"> </span>mourning for from the days beyond recall. She
        thought she understood. She would try to understand him because men were
        so different. The old <span data-edition="ed1961" data-page="364"> </span>love was waiting, waiting with little white
        hands stretched out, with blue appealing eyes. Heart of mine! She would
        follow, her dream of love, the dictates of her heart that told her he
        was her all in all, the only man in all the world for her for love was
        the master guide. Nothing else mattered. Come what might she would be
        wild, untrammelled, free.
      </p>
      <p>
        Canon O'Hanlon put the Blessed Sacrament back into the tabernacle and the choir sang <i>Laudate Dominum omnes gentes</i> and then
        he locked the tabernacle door because the benediction was over and
        Father Conroy handed him his hat to put on and crosscat Edy asked wasn't
        she coming but Jacky Caffrey called out:
      </p>
      <p>
        —{" "}O, look, Cissy!
      </p>
      <p>
        And they all looked was it sheet lightning but Tommy saw it too over the
        trees beside the church, blue and then green and purple.
      </p>
      <span data-edition="ed1922" data-page="348"> </span>
      <p>
        —{" "}It's fireworks, Cissy Caffrey said.
      </p>
      <p>
        And they all ran down the strand to see over the houses and the church,
        helterskelter, Edy with the pushcar with baby Boardman in it and Cissy
        holding Tommy and Jacky by the hand so they wouldn't fall running.
      </p>
      <p>
        —{" "}Come on, Gerty, Cissy called. It's the bazaar fireworks.
      </p>
      <p>
        But Gerty was adamant. She had no intention of being at their beck and
        call. If they could run like rossies she could sit so she said she could
        see from where she was. The eyes that were fastened upon her set her
        pulses tingling. She looked at him a moment, meeting his glance, and
        a light broke in upon her. Whitehot passion was in that face, passion
        silent as the grave, and it had made her his. At last they were left
        alone without the others to pry and pass remarks and she knew he could
        be trusted to the death, steadfast, a sterling man, a man of inflexible
        honour to his fingertips. His hands and face were working and a tremour
        went over her. She leaned back far to look up where the fireworks were
        and she caught her knee in her hands so as not to fall back looking up
        and there was no-one to see only him and her when she revealed all her
        graceful beautifully shaped legs like that, supply soft and delicately
        rounded, and she seemed to hear the panting of his heart, his hoarse
        breathing, because she knew about the passion of men like that,
        hotblooded, because Bertha Supple told her once in dead secret and made
        her swear she'd never about the gentleman lodger that was staying with
        them out of the Congested <span data-edition="ed1961" data-page="365"> </span>Districts Board that had pictures cut out of
        <span data-edition="ed1932" data-page="330"> </span>papers of those skirtdancers and highkickers and she said he used to do
        something not very nice that you could imagine sometimes in the <span data-edition="ed1986" data-page="299"> </span>bed. But
        this was altogether different from a thing like that because there was
        all the difference because she could almost feel him draw her face to
        his and the first quick hot touch of his handsome lips. Besides there
        was absolution so long as you didn't do the other thing before being
        married and there ought to be women priests that would understand
        without your telling out and Cissy Caffrey too sometimes had that dreamy
        kind of dreamy look in her eyes so that she too, my dear, and Winny
        Rippingham so mad about actors' photographs and besides it was on
        account of that other thing coming on the way it did.
      </p>
      <span data-edition="ed1939" data-page="264"> </span>
      <p>
        And Jacky Caffrey shouted to look, there was another and she leaned back
        and the garters were blue to match on account of the transparent and
        they all saw it and shouted to look, look, there it was and
        she leaned back ever so far to see the fireworks and something queer was
        flying about through the air, a soft thing, to and fro, dark. And she saw a
        long Roman candle going up over 
        <span data-edition="ed1922" data-page="349"> </span>
        the trees, up, up, and, in the tense
        hush, they were all breathless with excitement as it went higher and
        higher and she had to lean back more and more to look up after it, high,
        high, almost out of sight, and her face was suffused with a divine, an
        entrancing blush from straining back and he could see her other things
        too, nainsook knickers, the fabric that caresses the skin, better than
        those other pettiwidth, the green, four and eleven, on account of being
        white and she let him and she saw that he saw and then it went so high
        it went out of sight a moment and she was trembling in every limb from
        being bent so far back that he had a full view high up above her knee
        where no-one ever not even on the swing or wading and she wasn't ashamed
        and he wasn't either to look in that immodest way like that because he
        couldn't resist the sight of the wondrous revealment half offered like
        those skirtdancers behaving so immodest before gentlemen looking and he
        kept on looking, looking. She would fain have cried to him chokingly,
        held out her snowy slender arms to him to come, to feel his lips laid on
        her white brow, the cry of a young girl's love, a little strangled cry,
        wrung from her, that cry that has rung through the ages. And then a
        rocket sprang and bang shot blind blank and O! then the Roman candle
        burst and it was like a <span data-edition="ed1961" data-page="366"> </span>sigh of O! and everyone cried O! O! in raptures
        and it gushed out of it a stream of rain gold hair threads and they
        shed and ah! they were <Annotation annotationId="180010dewy" visited={visitedNotes.has("180010dewy")} annotationSelect={() => {openNote("180010dewy"); addToVisited("180010dewy")}} activeAnnotationId={currentNoteId}>all greeny dewy stars falling with golden</Annotation>, O so
        lovely! O, so soft, sweet, soft!
      </p>
      <p>
        Then all melted away dewily in the grey air: all was silent. Ah! She
        glanced at him as she bent forward quickly, a pathetic little glance of
        <span data-edition="ed1932" data-page="331"> </span>piteous protest, of shy reproach under which he coloured like a girl. He
        was leaning back against the rock behind. Leopold Bloom (for it is he)
        stands silent, with bowed head before those young guileless eyes. What a
        brute he had been! At it again? A fair unsullied soul had called to him
        and, wretch that he was, how had he answered? An utter cad he had been!
        He of all men! But there was an infinite store of mercy in those eyes,
        for him too a word of pardon even though he had erred and sinned and
        wandered. Should a girl tell? No, a thousand times no. That was their
        secret, only <span data-edition="ed1986" data-page="300"> </span>theirs, alone in the hiding twilight and there was none to
        know or tell save the little bat that flew so softly through the evening
        to and fro and little bats don't tell.
      </p>
      <p>
        Cissy Caffrey whistled, imitating the boys in the football field to show
        what a great person she was: and then she cried:
      </p>
      <p>
        —{" "}Gerty! Gerty! We're going. Come on. We can see from farther up.
      </p>
      <p>
        Gerty had an idea, one of love's little ruses. She slipped a hand into her 
        <span data-edition="ed1922" data-page="350"> </span>
        kerchief pocket and took out the wadding and waved in reply of
        course without letting him and then slipped it back. Wonder if he's too
        far to. She rose. Was it goodbye? No. She had to go but they would meet
        again, there, and she would dream of that till then, tomorrow, of her
        dream of yester eve. She drew herself up to her full height. Their souls
        met in a last lingering glance and the eyes that reached her heart, full
        of a strange shining, hung enraptured on her sweet flowerlike face. She
        half smiled at him wanly, a sweet forgiving smile, a smile that verged
        on tears, and then they parted.
      </p>
      <span data-edition="ed1939" data-page="265"> </span>
      <p>
        Slowly, without looking back she went down the uneven strand to Cissy,
        to Edy to Jacky and Tommy Caffrey, to little baby Boardman. It was
        darker now and there were stones and bits of wood on the strand and
        slippy seaweed. She walked with a certain quiet dignity characteristic
        of her but with care and very slowly because, because Gerty MacDowell
        was...
      </p>
      <p>
        Tight boots? No. She's lame! O!
      </p>
      <p>
        Mr Bloom watched her as she limped away. Poor girl! That's <span data-edition="ed1961" data-page="367"> </span>why she's
        left on the shelf and the others did a sprint. Thought something was
        wrong by the cut of her jib. Jilted beauty. A defect is ten times worse
        in a woman. But makes them polite. Glad I didn't know it when she was on
        show. Hot little devil all the same. I wouldn't mind. Curiosity like a
        nun or a negress or a girl with glasses. That squinty one is delicate.
        Near her monthlies, I expect, makes them feel ticklish. I have such
        a bad headache today. Where did I put the letter? Yes, all right. All
        kinds of crazy longings. Licking pennies. Girl in Tranquilla convent
        that nun <span data-edition="ed1932" data-page="332"> </span>told me liked to smell rock oil. Virgins go mad in the end I
        suppose. Sister? How many women in Dublin have it today? Martha, she.
        Something in the air. That's the moon. But then why don't all women
        menstruate at the same time with same moon, I mean? Depends on the
        time they were born I suppose. Or all start scratch then get out of
        step. Sometimes Molly and Milly together. Anyhow I got the best of that.
        Damned glad I didn't <Annotation annotationId="050010mosquebaths" visited={visitedNotes.has("050010mosquebaths")} annotationSelect={() => {openNote("050010mosquebaths"); addToVisited("050010mosquebaths")}} activeAnnotationId={currentNoteId}>do it in the bath this morning</Annotation> over her silly I
        will punish you letter. Made up for that tramdriver this morning. That
        gouger M'Coy stopping me to say nothing. And his wife engagement in the
        country valise, voice like a pickaxe. Thankful for small mercies.
        Cheap too. Yours for the asking. Because they want it themselves. Their
        natural craving. Shoals of them every evening poured out of offices.
        Reserve better. Don't want it they throw it at you. Catch em alive, O.
        Pity they can't see themselves. A dream of wellfilled hose. Where was
        that? Ah, yes. <Annotation annotationId="150002applyeye" visited={visitedNotes.has("150002applyeye")} annotationSelect={() => {openNote("150002applyeye"); addToVisited("150002applyeye")}} activeAnnotationId={currentNoteId}>Mutoscope pictures</Annotation> in <Annotation annotationId="040043capelstreet" visited={visitedNotes.has("040043capelstreet")} annotationSelect={() => {openNote("040043capelstreet"); addToVisited("040043capelstreet")}} activeAnnotationId={currentNoteId}>Capel street</Annotation>: for men only. Peeping
        Tom. Willy's hat and what the girls did with it. Do they snapshot those
        girls or is <span data-edition="ed1986" data-page="301"> </span>it all a 
        <span data-edition="ed1922" data-page="351"> </span>
        fake? <i>Lingerie</i> does it. Felt for the curves
        inside her <i>deshabillé.</i> Excites them also when they're. I'm all clean
        come and dirty me. And they like dressing one another for the sacrifice.
        Milly delighted with Molly's new blouse. At first. Put them all on to
        take them all off. Molly. <Annotation annotationId="020080mauve" visited={visitedNotes.has("020080mauve")} annotationSelect={() => {openNote("020080mauve"); addToVisited("020080mauve")}} activeAnnotationId={currentNoteId}>Why I bought her the violet garters.</Annotation> Us too:
        the tie he wore, his lovely socks and turnedup trousers. He wore a pair
        of gaiters the night that first we met. His lovely shirt was shining
        beneath his what? of jet. Say a woman loses a charm with every pin she
        takes out. Pinned together. O, Mairy lost the pin of her. Dressed up to
        the nines for somebody. Fashion part of their charm. Just changes when
        you're on the track of the secret. Except the east: <Annotation annotationId="050027marthamary" visited={visitedNotes.has("050027marthamary")} annotationSelect={() => {openNote("050027marthamary"); addToVisited("050027marthamary")}} activeAnnotationId={currentNoteId}>Mary, Martha</Annotation>: now as
        then. No reasonable offer refused. She wasn't in a hurry either. Always
        off to a fellow when they are. <span data-edition="ed1961" data-page="368"> </span>They never forget an appointment. Out on
        spec probably. They believe in chance because like themselves. And the
        others inclined to give her an odd dig. Girl friends at school, arms
        round each other's necks or with ten fingers locked, kissing and
        whispering secrets about nothing in the convent garden. Nuns with
        whitewashed faces, cool coifs and their rosaries going up and down,
        vindictive too for what they can't get. Barbed wire. Be sure now and
        write to me. And I'll write to you. Now won't you? Molly and Josie
        Powell. Till Mr Right comes along, then meet once in a blue moon.
        <i>Tableau!</i> O, look who it is for the love of God! How are you at all?
        What have you been doing with yourself? Kiss and delighted to, kiss, to 
        <span data-edition="ed1939" data-page="266"> </span>
        see you. Picking holes in each other's appearance. You're looking
        splendid. Sister souls showing their teeth at <span data-edition="ed1932" data-page="333"> </span>one another. How many
        have you left? Wouldn't lend each other a pinch of salt.
      </p>
      <p>
        Ah!
      </p>
      <p>
        Devils they are when that's coming on them. Dark devilish appearance.
        Molly often told me feel things a ton weight. Scratch the sole of my
        foot. O that way! O, that's exquisite! Feel it myself too. Good to rest
        once in a way. Wonder if it's bad to go with them then. Safe in one way.
        Turns milk, makes fiddlestrings snap. Something about withering plants I
        read in a garden. Besides they say if the flower withers she wears she's
        a flirt. All are. Daresay she felt 1. When you feel like that you often
        meet what you feel. Liked me or what? Dress they look at. Always know a
        fellow courting: collars and cuffs. Well cocks and lions do the same
        and stags. Same time might prefer a tie undone or something. Trousers?
        Suppose I when I was? No. Gently does it. Dislike rough and tumble. Kiss
        in the dark and never tell. Saw something in me. Wonder what. Sooner
        have me as I am than some poet 
        <span data-edition="ed1922" data-page="352"> </span>
        chap with bearsgrease plastery hair,
        lovelock over his dexter optic. To aid gentleman in literary. Ought to
        attend to my appearance my age. Didn't let her see me in profile. Still,
        you never know. Pretty girls and ugly men marrying. Beauty and the
        beast. Besides I can't be so if Molly. Took off her hat to show her
        hair. Wide brim. Bought to hide her face, meeting someone might know
        her, bend down or carry a bunch of flowers to smell. Hair strong in rut.
        <Annotation annotationId="010019money" visited={visitedNotes.has("010019money")} annotationSelect={() => {openNote("010019money"); addToVisited("010019money")}} activeAnnotationId={currentNoteId}>Ten bob</Annotation> I got for Molly's combings when we <span data-edition="ed1986" data-page="302"> </span>were on the rocks in Holles
        street. Why not? Suppose he gave her money. Why not? All a prejudice.
        She's worth ten, fifteen, more, a pound. What? I think so. All that for
        nothing. Bold hand: Mrs Marion. Did I forget to write <span data-edition="ed1961" data-page="369"> </span>address on
        that letter like the postcard I sent to Flynn? And the day I went to
        Drimmie's without a necktie. Wrangle with Molly it was put me off. No,
        I remember. Richie Goulding: he's another. Weighs on his mind. Funny
        my watch stopped at half past four. Dust. Shark liver oil they use to
        clean. Could do it myself. Save. Was that just when he, she?
      </p>
      <p>
        O, he did. Into her. She did. Done.
      </p>
      <p>
        Ah!
      </p>
      <p>
        Mr Bloom with careful hand recomposed his wet shirt. O Lord, that little
        limping devil. Begins to feel cold and clammy. Aftereffect not pleasant.
        Still you have to get rid of it someway. They don't care. Complimented
        perhaps. Go home to nicey bread and milky and say night prayers with the
        kiddies. Well, aren't they? See her as she is spoil all. Must have
        the stage setting, the rouge, costume, position, music. The name too.
        <i>Amours</i> of actresses. Nell Gwynn, Mrs Bracegirdle, <span data-edition="ed1932" data-page="334"> </span>Maud Branscombe.
        Curtain up. Moonlight silver effulgence. Maiden discovered with pensive
        bosom. Little sweetheart come and kiss me. Still, I feel. The strength
        it gives a man. That's the secret of it. Good job I let off there behind
        the wall coming out of Dignam's. Cider that was. Otherwise I couldn't
        have. Makes you want to sing after. <i>Lacaus esant taratara</i>. Suppose I
        spoke to her. What about? Bad plan however if you don't know how to end
        the conversation. Ask them a question they ask you another. Good idea if
        you're stuck. Gain time. But then you're in a cart. Wonderful of course
        if you say: good evening, and you see she's on for it: good evening. O
        but the dark evening in the Appian way I nearly spoke to Mrs Clinch O
        thinking she was. Whew! Girl in Meath street that night. All the dirty
        things I made her say. All wrong of course. My arks she called it. It's
        so hard to find one who. Aho! If you don't answer when they solicit must
        be horrible for 
        <span data-edition="ed1939" data-page="267"> </span>
        them till they harden. And kissed my hand when I gave
        her the extra two shillings. Parrots. Press the 
        <span data-edition="ed1922" data-page="353"> </span>
        button and the bird will
        squeak. Wish she hadn't called me sir. O, her mouth in the dark! And you
        a married man with a single girl! That's what they enjoy. Taking a man
        from another woman. Or even hear of it. Different with me. Glad to get
        away from other chap's wife. Eating off his cold plate. Chap in the
        Burton today spitting back gumchewed gristle. French letter still in
        my pocketbook. Cause of half the trouble. But might happen sometime,
        I don't think. Come in, all is prepared. I dreamt. What? Worst is
        beginning. How they change the venue when <span data-edition="ed1961" data-page="370"> </span>it's not what they like. Ask
        you do you like mushrooms because she once knew a gentleman who. Or ask
        you what someone was going to say when he changed his mind and stopped.
        Yet if I went the whole hog, say: I want to, something like that.
        Because I did. She too. Offend her. Then make it up. Pretend to want
        something awfully, then cry off for her sake. Flatters them. She must
        have been thinking of someone else all the time. What harm? Must since
        she <span data-edition="ed1986" data-page="303"> </span>came to the use of reason, he, he and he. First kiss does the trick.
        The propitious moment. Something inside them goes pop. Mushy like, tell
        by their eye, on the sly. First thoughts are best. Remember that till
        their dying day. Molly, <Annotation annotationId="170008precedingseries" visited={visitedNotes.has("170008precedingseries")} annotationSelect={() => {openNote("170008precedingseries"); addToVisited("170008precedingseries")}} activeAnnotationId={currentNoteId}>lieutenant Mulvey that kissed her</Annotation> under the
        Moorish wall beside the gardens. Fifteen she told me. But her breasts
        were developed. Fell asleep then. After Glencree dinner that was when we
        drove home <Annotation annotationId="010010mountains" visited={visitedNotes.has("010010mountains")} annotationSelect={() => {openNote("010010mountains"); addToVisited("010010mountains")}} activeAnnotationId={currentNoteId}>the featherbed mountain</Annotation>. Gnashing her teeth in sleep. <Annotation annotationId="060033corporation" visited={visitedNotes.has("060033corporation")} annotationSelect={() => {openNote("060033corporation"); addToVisited("060033corporation")}} activeAnnotationId={currentNoteId}>Lord mayor</Annotation>
        <Annotation annotationId="170008precedingseries" visited={visitedNotes.has("170008precedingseries")} annotationSelect={() => {openNote("170008precedingseries"); addToVisited("170008precedingseries")}} activeAnnotationId={currentNoteId}>had his eye on her too. Val Dillon.</Annotation> Apoplectic.
      </p>
      <p>
        There she is with them down there for the fireworks. My fireworks. Up
        like a rocket, down like a stick. And the children, twins they must
        <span data-edition="ed1932" data-page="335"> </span>be, waiting for something to happen. Want to be grownups. Dressing in
        mother's clothes. Time enough, understand all the ways of the world. And
        the dark one with the mop head and the nigger mouth. I knew she could
        whistle. Mouth made for that. Like Molly. Why that highclass whore in
        Jammet's wore her veil only to her nose. Would you mind, please, telling
        me the right time? I'll tell you the right time up a dark lane.
        Say prunes and prisms forty times every morning, cure for fat lips.
        Caressing the little boy too. Onlookers see most of the game. Of course
        they understand birds, animals, babies. In their line.
      </p>
      <p>
        Didn't look back when she was going down the strand. Wouldn't give that
        satisfaction. <Annotation annotationId="040069seasidegirls" visited={visitedNotes.has("040069seasidegirls")} annotationSelect={() => {openNote("040069seasidegirls"); addToVisited("040069seasidegirls")}} activeAnnotationId={currentNoteId}>Those girls, those girls, those lovely seaside girls.</Annotation> Fine
        eyes she had, clear. It's the white of the eye brings that out not so
        much the pupil. Did she know what I? Course. Like a cat sitting beyond
        a dog's jump. Women never meet one like that Wilkins in the high school
        drawing a picture of Venus with all his belongings on show. Call that
        innocence? Poor idiot! His wife 
        <span data-edition="ed1922" data-page="354"> </span>
        has her work cut out for her. Never see
        them sit on a bench marked <i>Wet Paint</i>. Eyes all over them. Look under
        the bed for what's not there. Longing to get the fright of their lives.
        Sharp as needles they are. When I said to Molly the man at the corner of
        Cuffe street <span data-edition="ed1961" data-page="371"> </span>was goodlooking, thought she might like, twigged at once he
        had a false arm. Had, too. Where do they get that? Typist going up Roger
        Greene's stairs two at a time to show her understandings. Handed down
        from father to, mother to daughter, I mean. Bred in the bone. Milly for
        example drying her handkerchief on the mirror to save the ironing. Best
        place for an ad to catch a woman's eye on a mirror. And when I sent
        her for Molly's Paisley shawl to Prescott's by the way that ad I must,
        carrying home the change in her stocking! Clever little minx. I 
        <span data-edition="ed1939" data-page="268"> </span>
        never told her. Neat way she carries parcels too. Attract men, small thing
        like that. Holding up her hand, shaking it, to let the blood flow back
        when it was red. Who did you learn that from? Nobody. Something the
        nurse taught me. O, don't they know! Three years old she was in front of
        Molly's dressingtable, just before we left <Annotation annotationId="040049pleasantoldtimes" visited={visitedNotes.has("040049pleasantoldtimes")} annotationSelect={() => {openNote("040049pleasantoldtimes"); addToVisited("040049pleasantoldtimes")}} activeAnnotationId={currentNoteId}>Lombard street west</Annotation>. Me have
        a nice face. <Annotation annotationId="010126mullingar" visited={visitedNotes.has("010126mullingar")} annotationSelect={() => {openNote("010126mullingar"); addToVisited("010126mullingar")}} activeAnnotationId={currentNoteId}>Mullingar. Who knows? Ways of the world. Young student.</Annotation>
        Straight on her pins anyway not like the other. Still she was game.
        Lord, I am wet. Devil you are. Swell of her calf. Transparent <span data-edition="ed1986" data-page="304"> </span>stockings,
        stretched to breaking point. Not like that frump today. A. E. Rumpled
        stockings. Or the one in Grafton street. White. Wow! <Annotation annotationId="040004beefheels" visited={visitedNotes.has("040004beefheels")} annotationSelect={() => {openNote("040004beefheels"); addToVisited("040004beefheels")}} activeAnnotationId={currentNoteId}>Beef to the heel</Annotation>.
      </p>
      <p>
        A monkey puzzle rocket burst, spluttering in darting crackles. Zrads and
        zrads, zrads, zrads. And Cissy and Tommy ran out to see and
        Edy <span data-edition="ed1932" data-page="336"> </span>after with the pushcar and then Gerty beyond the curve of the rocks.
        Will she? Watch! Watch! See! Looked round. She smelt an onion. Darling,
        I saw your. I saw all.
      </p>
      <p>
        Lord!
      </p>
      <p>
        Did me good all the same. Off colour after Kiernan's, Dignam's. For
        this relief much thanks. In <i>Hamlet,</i> that is. Lord! It was all things
        combined. Excitement. When she leaned back, felt an ache at the butt
        of my tongue. <Annotation annotationId="040069seasidegirls" visited={visitedNotes.has("040069seasidegirls")} annotationSelect={() => {openNote("040069seasidegirls"); addToVisited("040069seasidegirls")}} activeAnnotationId={currentNoteId}>Your head it simply swirls.</Annotation> He's right. Might have made a
        worse fool of myself however. Instead of talking about nothing. Then
        I will tell you all. Still it was a kind of language between us. It
        couldn't be? No, Gerty they called her. Might be false name however like
        my and <Annotation annotationId="040041dolphinsbarn" visited={visitedNotes.has("040041dolphinsbarn")} annotationSelect={() => {openNote("040041dolphinsbarn"); addToVisited("040041dolphinsbarn")}} activeAnnotationId={currentNoteId}>the address Dolphin's barn a blind</Annotation>.
      </p>
      <p>
        <i>Her maiden name was Jemima Brown <br/>
        And she lived with her mother in <Annotation annotationId="030015irishtown" visited={visitedNotes.has("030015irishtown")} annotationSelect={() => {openNote("030015irishtown"); addToVisited("030015irishtown")}} activeAnnotationId={currentNoteId}>Irishtown</Annotation>.</i>
      </p>
      <span data-edition="ed1922" data-page="355"> </span>
      <p>
        Place made me think of that I suppose. All tarred with the same brush.
        Wiping pens in their stockings. But the ball rolled <span data-edition="ed1961" data-page="372"> </span>down to her as if
        it understood. Every bullet has its billet. Course I never could throw
        anything straight at school. Crooked as a ram's horn. Sad however
        because it lasts only a few years till they settle down to potwalloping
        and papa's pants will soon fit Willy and fullers' earth for the baby
        when they hold him out to do ah ah. No soft job. Saves them. Keeps
        them out of harm's way. Nature. Washing child, washing corpse. Dignam.
        Children's hands always round them. Cocoanut skulls, monkeys, not even
        closed at first, sour milk in their swaddles and tainted curds. Oughtn't
        to have given that child an empty teat to suck. Fill it up with wind.
        Mrs Beaufoy, Purefoy. Must call to the hospital. Wonder is nurse Callan
        there still. She used to look over some nights when Molly was in the
        Coffee Palace. That young doctor O'Hare I noticed her brushing his coat.
        And Mrs Breen and Mrs Dignam once like that too, marriageable. Worst
        of all at night Mrs Duggan told me in the <Annotation annotationId="020066cityarms" visited={visitedNotes.has("020066cityarms")} annotationSelect={() => {openNote("020066cityarms"); addToVisited("020066cityarms")}} activeAnnotationId={currentNoteId}>City Arms</Annotation>. <Annotation annotationId="050049comehometoma" visited={visitedNotes.has("050049comehometoma")} annotationSelect={() => {openNote("050049comehometoma"); addToVisited("050049comehometoma")}} activeAnnotationId={currentNoteId}>Husband rolling in
        drunk</Annotation>, stink of pub off him like a polecat. Have that in your nose in
        the dark, whiff of stale boose. Then ask in the morning: was I drunk
        last night? Bad policy however to fault the husband. Chickens come home
        to roost. They stick by one another like glue. Maybe the women's fault
        also. That's where Molly can knock spots off them. It is the blood of the
        south. Moorish. Also the form, the figure. Hands felt for the opulent.
        Just compare for instance those others. Wife locked up at home, skeleton
        in the cupboard. Allow me to introduce my. Then they trot you out some
        kind of a nondescript, wouldn't know what to call her. Always see <span data-edition="ed1932" data-page="337"> </span>a
        <span data-edition="ed1986" data-page="305"> </span>fellow's weak point in 
        <span data-edition="ed1939" data-page="269"> </span>
        his wife. Still there's destiny in it, falling
        in love. Have their own secrets between them. Chaps that would go to the
        dogs if some woman didn't take them in hand. Then little chits of girls,
        height of a shilling in coppers, with little hubbies. <Annotation annotationId="040065matcham" visited={visitedNotes.has("040065matcham")} annotationSelect={() => {openNote("040065matcham"); addToVisited("040065matcham")}} activeAnnotationId={currentNoteId}>As God made them
        he matched them.</Annotation> Sometimes children turn out well enough. Twice nought
        makes one. Or old rich chap of seventy and blushing bride. Marry in May
        and repent in December. This wet is very unpleasant. Stuck. Well <Annotation annotationId="040083hewasajew" visited={visitedNotes.has("040083hewasajew")} annotationSelect={() => {openNote("040083hewasajew"); addToVisited("040083hewasajew")}} activeAnnotationId={currentNoteId}>the
        foreskin</Annotation> is not back. Better detach.
      </p>
      <p>
        Ow!
      </p>
      <p>
        Other hand a sixfooter with a wifey up to his watchpocket. Long and
        the short of it. Big he and little she. Very strange about my watch.
        Wristwatches are always going wrong. Wonder is there any magnetic
        influence between the person because that was about the time he. Yes, I
        suppose, at once. Cat's away, <span data-edition="ed1961" data-page="373"> </span>the mice will play. I remember looking
        in Pill lane. Also that now is magnetism. 
        <span data-edition="ed1922" data-page="356"> </span>
        Back of everything magnetism.
        Earth for instance pulling this and being pulled. That causes movement.
        And time, well that's the time the movement takes. Then if one thing
        stopped the whole ghesabo would stop bit by bit. Because it's all
        arranged. Magnetic needle tells you what's going on in the sun, the
        stars. Little piece of steel iron. When you hold out the fork. Come.
        Come. Tip. Woman and man that is. Fork and steel. Molly, he. Dress up
        and look and suggest and let you see and see more and defy you if you're
        a man to see that and, like a sneeze coming, legs, look, look and if you
        have any guts in you. Tip. Have to let fly.
      </p>
      <p>
        Wonder how is she feeling in that region. Shame all put on before third
        person. More put out about a hole in her stocking. Molly, her underjaw
        stuck out, head back, <Annotation annotationId="170008precedingseries" visited={visitedNotes.has("170008precedingseries")} annotationSelect={() => {openNote("170008precedingseries"); addToVisited("170008precedingseries")}} activeAnnotationId={currentNoteId}>about the farmer in the ridingboots and spurs at
        the horse show</Annotation>. And when the painters were in Lombard street west.
        Fine voice that fellow had. How Giuglini began. Smell that I did. Like
        flowers. It was too. Violets. Came from the turpentine probably in the
        paint. Make their own use of everything. Same time doing it scraped her
        slipper on the floor so they wouldn't hear. But lots of them can't kick
        the beam, I think. Keep that thing up for hours. Kind of a general all
        round over me and half down my back.
      </p>
      <p>
        Wait. Hm. Hm. Yes. That's her perfume. Why she waved her hand. I leave
        you this to think of me when I'm far away on the pillow. What is it?
        Heliotrope? No. Hyacinth? Hm. Roses, I think. She'd like scent of that
        kind. Sweet and cheap: soon sour. <Annotation annotationId="050035opoponax" visited={visitedNotes.has("050035opoponax")} annotationSelect={() => {openNote("050035opoponax"); addToVisited("050035opoponax")}} activeAnnotationId={currentNoteId}>Why Molly likes opoponax. Suits her,
        with a little jessamine mixed. Her high notes and her low notes.</Annotation> At the
        dance night she met him, dance of the hours. Heat <span data-edition="ed1932" data-page="338"> </span>brought it out. She
        was wearing her black and it had the perfume of the time before. Good
        conductor, is it? Or bad? Light too. Suppose there's some connection.
        For instance if you go into a cellar where it's dark. Mysterious thing
        too. Why did I smell it only now? Took its time in coming like herself,
        slow but sure. <span data-edition="ed1986" data-page="306"> </span>Suppose it's ever so many millions of tiny grains
        blown across. Yes, it is. Because those spice islands, Cinghalese this
        morning, smell them leagues off. Tell you what it is. It's like a fine
        fine veil or web they have all over the skin, fine like what do you
        call it gossamer, and they're always spinning it out of them, fine as
        anything, rainbow colours without knowing it. <span data-edition="ed1961" data-page="374"> </span>Clings to everything
        she takes off. Vamp of her stockings. Warm shoe. Stays. Drawers: little
        kick, taking them off. Byby till next time. Also the cat likes to sniff
        in her shift on the bed. Know her smell in a thousand. Bathwater too.
        Reminds me of strawberries and cream. Wonder where it is really. There
        or the armpits or 
        <span data-edition="ed1939" data-page="270"> </span>
        under the neck. Because 
        <span data-edition="ed1922" data-page="357"> </span>
        you get it out of all holes
        and corners. Hyacinth perfume made of oil of ether or something.
        Muskrat. Bag under their tails. One grain pour off odour for years. Dogs
        at each other behind. Good evening. Evening. How do you sniff? Hm. Hm.
        Very well, thank you. Animals go by that. Yes now, look at it that way.
        We're the same. Some women for instance warn you off when they have their
        period. Come near. Then get a hogo you could hang your hat on. Like
        what? Potted herrings gone stale or. Boof! Please keep off the grass.
      </p>
      <p>
        Perhaps they get a man smell off us. What though? Cigary gloves Long
        John had on his desk the other. Breath? What you eat and drink gives
        that. No. Mansmell, I mean. Must be connected with that because priests
        that are supposed to be are different. Women buzz round it like flies
        round treacle. Railed off the altar get on to it at any cost. The tree
        of forbidden priest. O, father, will you? Let me be the first to. That
        diffuses itself all through the body, permeates. Source of life. And
        it's extremely curious the smell. Celery sauce. Let me.
      </p>
      <p>
        Mr Bloom inserted his nose. Hm. Into the. Hm. Opening of his waistcoat.
        Almonds or. No. Lemons it is. Ah no, that's the soap.
      </p>
      <p>
        O by the by that lotion. I knew there was something on my mind. Never
        went back and the soap not paid. Dislike carrying bottles like that hag
        this morning. Hynes might have paid me that three shillings. I could
        mention Meagher's just to remind him. Still if he works that paragraph.
        Two and nine. Bad opinion of me he'll have. Call tomorrow. How much do
        I owe you? Three and nine? Two and nine, sir. Ah. Might stop him giving
        credit another time. Lose your customers that <span data-edition="ed1932" data-page="339"> </span>way. Pubs do. Fellows run
        up a bill on the slate and then slinking around the back streets into
        somewhere else.
      </p>
      <p>
        Here's this nobleman passed before. Blown in from the bay. Just went as
        far as turn back. Always at home at dinnertime. Looks mangled out: had a
        good tuck in. Enjoying nature now. Grace after meals. After supper walk
        a mile. Sure he has a small bank balance somewhere, government sit. Walk
        after <span data-edition="ed1961" data-page="375"> </span>him now make him awkward like those newsboys me today. Still you
        learn something. <Annotation annotationId="010052otherssee" visited={visitedNotes.has("010052otherssee")} annotationSelect={() => {openNote("010052otherssee"); addToVisited("010052otherssee")}} activeAnnotationId={currentNoteId}>See ourselves as others see us.</Annotation> So long as women don't
        mock what matter? That's the way to find out. Ask yourself who is he
        now. <i>The Mystery Man on the Beach</i>, <Annotation annotationId="040019titbits" visited={visitedNotes.has("040019titbits")} annotationSelect={() => {openNote("040019titbits"); addToVisited("040019titbits")}} activeAnnotationId={currentNoteId}>prize titbit story</Annotation> by Mr Leopold
        Bloom. <span data-edition="ed1986" data-page="307"> </span>Payment at the rate of one guinea per column. And that fellow
        today at the graveside in the brown macintosh. Corns on his kismet
        however. Healthy perhaps absorb all the. Whistle brings rain they say.
        Must be some somewhere. Salt in the 
        <span data-edition="ed1922" data-page="358"> </span>
        Ormond damp. The body feels the
        atmosphere. Old Betty's joints are on the rack. Mother Shipton's
        prophecy that is about ships around they fly in the twinkling. No. Signs
        of rain it is. The royal reader. And distant hills seem coming nigh.
      </p>
      <p>
        Howth. Bailey light. Two, four, six, eight, nine. See. Has to change or
        they might think it a house. Wreckers. Grace Darling. People afraid of
        the dark. Also glowworms, cyclists: lightingup time. Jewels diamonds
        flash better. Light is a kind of reassuring. Not going to hurt
        you. Better now of course than long ago. Country roads. Run you through
        the small guts for nothing. Still two types there are you bob against.
        Scowl or smile. Pardon! Not at all. Best time to spray plants too in
        the shade after the sun. Some light still. <Annotation annotationId="040013wonderisittrue" visited={visitedNotes.has("040013wonderisittrue")} annotationSelect={() => {openNote("040013wonderisittrue"); addToVisited("040013wonderisittrue")}} activeAnnotationId={currentNoteId}>Red rays are longest. Roygbiv
        Vance taught us: red, orange, yellow, green, blue, indigo, violet.</Annotation> A
        star I see. Venus? Can't tell yet. Two. When three it's night. Were
        those nightclouds there all the time? Looks like 
        <span data-edition="ed1939" data-page="271"> </span>
        <Annotation annotationId="130006phantomship" visited={visitedNotes.has("130006phantomship")} annotationSelect={() => {openNote("130006phantomship"); addToVisited("130006phantomship")}} activeAnnotationId={currentNoteId}>a phantom ship. No.
        Wait. Trees are they? An optical illusion. Mirage.</Annotation> Land of the setting
        sun this. <Annotation annotationId="040006homerulesun" visited={visitedNotes.has("040006homerulesun")} annotationSelect={() => {openNote("040006homerulesun"); addToVisited("040006homerulesun")}} activeAnnotationId={currentNoteId}>Homerule sun setting in the southeast.</Annotation> My native land,
        goodnight.
      </p>
      <p>
        Dew falling. Bad for you, dear, to sit on that stone. Brings on white
        fluxions. Never have little baby then less he was big strong fight his
        way up through. Might get piles myself. Sticks too like a summer cold,
        sore on the mouth. Cut with grass or paper worst. Friction of the
        position. Like to be that rock she sat on. O sweet little, you don't
        know how nice you looked. I begin to like them at that age. Green
        apples. Grab at all that offer. Suppose it's the only time we cross
        legs, seated. Also the library today: those girl graduates. Happy chairs
        under them. But it's the evening influence. They feel all that. <Annotation annotationId="050026henryflower" visited={visitedNotes.has("050026henryflower")} annotationSelect={() => {openNote("050026henryflower"); addToVisited("050026henryflower")}} activeAnnotationId={currentNoteId}>Open
        like flowers</Annotation>, know their <span data-edition="ed1932" data-page="340"> </span>hours, sunflowers, Jerusalem artichokes, in
        ballrooms, chandeliers, avenues under the lamps. Nightstock in Mat
        Dillon's garden where I kissed her shoulder. Wish I had a full length
        oilpainting of her then. June that was too I <span data-edition="ed1961" data-page="376"> </span>wooed. The year returns.
        History repeats itself. Ye crags and peaks I'm with you once again.
        Life, love, voyage round your own little world. And now? Sad about her
        lame of course but must be on your guard not to feel too much pity. They
        take advantage.
      </p>
      <p>
        All quiet on Howth now. The distant hills seem. Where we. The
        rhododendrons. I am a fool perhaps. He gets the plums, and I the
        plumstones. Where I come in. All that old hill has seen. Names change:
        that's all. Lovers: yum yum.
      </p>
      <p>
        Tired I feel now. Will I get up? O wait. Drained all the manhood out of
        me, little wretch. She kissed me. My youth. Never again. Only once it comes. 
        <span data-edition="ed1922" data-page="359"> </span>
        Or hers. Take the train there tomorrow. No. Returning not the
        same. Like kids your second visit to a house. The new I want. Nothing
        new under the sun. Care of P. O. Dolphin's Barn. Are you not happy in
        your? <span data-edition="ed1986" data-page="308"> </span>Naughty darling. <Annotation annotationId="040041dolphinsbarn" visited={visitedNotes.has("040041dolphinsbarn")} annotationSelect={() => {openNote("040041dolphinsbarn"); addToVisited("040041dolphinsbarn")}} activeAnnotationId={currentNoteId}>At Dolphin's barn charades in Luke Doyle's house.</Annotation>
        Mat Dillon and his bevy of daughters: Tiny, Atty, Floey, Maimy, Louy,
        Hetty. Molly too. Eightyseven that was. Year before we. And <Annotation annotationId="040018oldtweedy" visited={visitedNotes.has("040018oldtweedy")} annotationSelect={() => {openNote("040018oldtweedy"); addToVisited("040018oldtweedy")}} activeAnnotationId={currentNoteId}>the old
        major</Annotation>, partial to his drop of spirits. Curious she an only child, I an
        only child. So it returns. Think you're escaping and run into yourself.
        Longest way round is the shortest way home. And just when he and she.
        Circus horse walking in a ring. Rip van Winkle we played. Rip: tear in
        Henny Doyle's overcoat. Van: breadvan delivering. Winkle: <Annotation annotationId="030080cockles" visited={visitedNotes.has("030080cockles")} annotationSelect={() => {openNote("030080cockles"); addToVisited("030080cockles")}} activeAnnotationId={currentNoteId}>cockles and
        periwinkles</Annotation>. Then I did Rip van Winkle coming back. She leaned on the
        <Annotation annotationId="020027sideboard" visited={visitedNotes.has("020027sideboard")} annotationSelect={() => {openNote("020027sideboard"); addToVisited("020027sideboard")}} activeAnnotationId={currentNoteId}>sideboard</Annotation> watching. Moorish eyes. Twenty years asleep in Sleepy Hollow.
        All changed. Forgotten. The young are old. His gun rusty from the dew.
      </p>
      <p>
        <Annotation annotationId="040082highgradeha" visited={visitedNotes.has("040082highgradeha")} annotationSelect={() => {openNote("040082highgradeha"); addToVisited("040082highgradeha")}} activeAnnotationId={currentNoteId}>Ba.</Annotation> What is that flying about? Swallow? Bat probably. Thinks I'm a tree,
        so blind. Have birds no smell? <Annotation annotationId="030087pastlife" visited={visitedNotes.has("030087pastlife")} annotationSelect={() => {openNote("030087pastlife"); addToVisited("030087pastlife")}} activeAnnotationId={currentNoteId}>Metempsychosis.</Annotation> They believed you could
        be changed into a tree from grief. Weeping willow. <Annotation annotationId="130004littleman" visited={visitedNotes.has("130004littleman")} annotationSelect={() => {openNote("130004littleman"); addToVisited("130004littleman")}} activeAnnotationId={currentNoteId}>Ba.</Annotation> There he goes.
        Funny little beggar. Wonder where he lives. Belfry up there. Very
        likely. Hanging by his heels in the odour of sanctity. Bell scared him
        out, I suppose. Mass seems to be over. Could hear them all at it. Pray
        for us. And pray for us. And pray for us. Good idea the repetition. Same
        thing with ads. Buy from us. And buy from us. Yes, there's the light in
        the priest's house. Their frugal meal. Remember about the mistake in the
        valuation when I was in Thom's. Twentyeight it is. Two houses they have.
        <Annotation annotationId="040027conroy" visited={visitedNotes.has("040027conroy")} annotationSelect={() => {openNote("040027conroy"); addToVisited("040027conroy")}} activeAnnotationId={currentNoteId}>Gabriel Conroy's brother is curate.</Annotation> <Annotation annotationId="130004littleman" visited={visitedNotes.has("130004littleman")} annotationSelect={() => {openNote("130004littleman"); addToVisited("130004littleman")}} activeAnnotationId={currentNoteId}>Ba.</Annotation> Again. Wonder why they come out
        at night like mice. They're a mixed <span data-edition="ed1932" data-page="341"> </span>breed. Birds are like <span data-edition="ed1961" data-page="377"> </span>hopping mice.
        What frightens them, light or noise? Better sit still. All instinct
        like the bird in drouth got water out of the end of a jar by throwing
        in pebbles. Like a little man in a cloak he is with tiny hands. Weeny
        bones. Almost see them shimmering, kind of a bluey white. Colours depend
        on 
        <span data-edition="ed1939" data-page="272"> </span>
        the light you see. Stare the sun for example like the eagle then look
        at a shoe see a blotch blob yellowish. Wants to stamp his trademark on
        everything. Instance, that cat this morning on the staircase. Colour of
        brown turf. Say you never see them with three colours. Not true. That
        half tabbywhite tortoiseshell in the <Annotation annotationId="020066cityarms" visited={visitedNotes.has("020066cityarms")} annotationSelect={() => {openNote("020066cityarms"); addToVisited("020066cityarms")}} activeAnnotationId={currentNoteId}><i>City Arms</i></Annotation> with the letter em on
        her forehead. Body fifty different colours. Howth a while ago amethyst.
        Glass flashing. That's how that wise man what's his name with the
        burning glass. Then the heather goes on fire. It can't be tourists'
        matches. What? Perhaps the sticks dry rub together in the 
        <span data-edition="ed1922" data-page="360"> </span>
        wind and
        light. Or broken bottles <Annotation annotationId="120008gorse" visited={visitedNotes.has("120008gorse")} annotationSelect={() => {openNote("120008gorse"); addToVisited("120008gorse")}} activeAnnotationId={currentNoteId}>in the furze</Annotation> act as a burning glass in the sun.
        Archimedes. I have it! My memory's not so bad.
      </p>
      <p>
        <Annotation annotationId="130004littleman" visited={visitedNotes.has("130004littleman")} annotationSelect={() => {openNote("130004littleman"); addToVisited("130004littleman")}} activeAnnotationId={currentNoteId}>Ba.</Annotation> Who knows what they're always flying for. Insects? That bee last
        week got into the room playing with his shadow on the ceiling. Might
        be the one bit me, come back to see. Birds too never find out what
        they say. Like our small talk. And says she and says he. Nerve they have
        to fly over the ocean and back. Lots must be killed in storms, telegraph
        wires. Dreadful life sailors have too. Big brutes of oceangoing steamers
        floundering along in the dark, lowing out like seacows. <i>Faugh a
        Ballagh!</i> Out of that, bloody curse to you! Others in vessels, bit of
        a handkerchief <span data-edition="ed1986" data-page="309"> </span>sail, pitched about like snuff at a wake when the stormy
        winds do blow. Married too. Sometimes away for years at the ends of the
        earth somewhere. No ends really because it's round. Wife in every port
        they say. She has a good job if she minds it till Johnny comes marching
        home again. If ever he does. Smelling the tail end of ports. How can
        they like the sea? Yet they do. The anchor's weighed. Off he sails with
        a <Annotation annotationId="040036scapulars" visited={visitedNotes.has("040036scapulars")} annotationSelect={() => {openNote("040036scapulars"); addToVisited("040036scapulars")}} activeAnnotationId={currentNoteId}>scapular</Annotation> or a medal on him for luck. Well. <Annotation annotationId="040047potato" visited={visitedNotes.has("040047potato")} annotationSelect={() => {openNote("040047potato"); addToVisited("040047potato")}} activeAnnotationId={currentNoteId}>And the tephilim no what's
        this they call it poor papa's father had on his door to touch.</Annotation> <Annotation annotationId="060043passover" visited={visitedNotes.has("060043passover")} annotationSelect={() => {openNote("060043passover"); addToVisited("060043passover")}} activeAnnotationId={currentNoteId}>That
        brought us out of the land of Egypt and into the house of bondage.</Annotation>
        Something in all those superstitions because when you go out never know
        what dangers. Hanging on to a plank or astride of a beam for grim life,
        lifebelt round round him, gulping salt water, and that's the last <span data-edition="ed1961" data-page="378"> </span>of his nibs
        till the sharks catch hold of him. Do fish ever get seasick?
      </p>
      <p>
        Then you have a beautiful calm without a cloud, smooth sea, placid,
        crew and cargo in smithereens, Davy Jones' locker, moon looking down. Not my fault, old cockalorum.
      </p>
      <span data-edition="ed1932" data-page="342"> </span>
      <p>
        A long lost candle wandered up the sky from Mirus bazaar in search of
        funds for Mercer's hospital and broke, drooping, and shed a cluster
        of violet but one white stars. They floated, fell: they faded. The
        shepherd's hour: the hour of folding: hour of tryst. From house to
        house, giving his everwelcome double knock, went the nine o'clock
        postman, the glowworm's lamp at his belt gleaming here and there through
        the laurel hedges. And among the five young trees a hoisted lintstock
        lit the lamp at Leahy's terrace. By screens of lighted windows, by equal
        gardens a shrill voice went crying, wailing: <Annotation annotationId="020064telegraph" visited={visitedNotes.has("020064telegraph")} annotationSelect={() => {openNote("020064telegraph"); addToVisited("020064telegraph")}} activeAnnotationId={currentNoteId}><i>Evening Telegraph, stop
        press edition! Result of the Gold Cup race!</i></Annotation> and from the door of
        Dignam's house a boy ran out and called. Twittering the bat flew here,
        flew there. Far out over the sands the coming surf crept, grey. Howth
        settled for slumber, tired of <Annotation annotationId="030072longestday" visited={visitedNotes.has("030072longestday")} annotationSelect={() => {openNote("030072longestday"); addToVisited("030072longestday")}} activeAnnotationId={currentNoteId}>long days</Annotation>, of yumyum rhododendrons (he was
        old) and felt 
        <span data-edition="ed1922" data-page="361"> </span>
        gladly the night breeze lift, ruffle his fell of ferns.
        He lay but opened a red eye unsleeping, deep and slowly breathing,
        slumberous but awake. And far <Annotation annotationId="030013kishlightship" visited={visitedNotes.has("030013kishlightship")} annotationSelect={() => {openNote("030013kishlightship"); addToVisited("030013kishlightship")}} activeAnnotationId={currentNoteId}>on Kish bank the anchored lightship</Annotation>
        twinkled, winked at Mr Bloom.
      </p>
      <p>
        Life those chaps out there must have, stuck in the same spot. <Annotation annotationId="130001irishlights" visited={visitedNotes.has("130001irishlights")} annotationSelect={() => {openNote("130001irishlights"); addToVisited("130001irishlights")}} activeAnnotationId={currentNoteId}>Irish
        Lights board.</Annotation> Penance for their sins. Coastguards too. Rocket and
        breeches buoy and lifeboat. 
        <span data-edition="ed1939" data-page="273"> </span>
        <Annotation annotationId="030013kishlightship" visited={visitedNotes.has("030013kishlightship")} annotationSelect={() => {openNote("030013kishlightship"); addToVisited("030013kishlightship")}} activeAnnotationId={currentNoteId}>Day we went out for the pleasure cruise in
        the Erin's King</Annotation>, throwing them the sack of old papers. Bears in the zoo.
        Filthy trip. Drunkards out to shake up their livers. Puking overboard
        to feed the herrings. Nausea. And the women, fear of God in their faces.
        Milly, no sign of funk. Her blue scarf loose, laughing. Don't know what
        death is at that age. And then their stomachs clean. But being lost they
        fear. When we hid behind the tree at Crumlin. I didn't want to. Mamma!
        Mamma! Babes in the wood. Frightening them with masks too. Throwing them
        up in the air to catch them. I'll murder you. Is it only half fun? Or
        children playing battle. Whole earnest. How can people aim guns at each
        other. Sometimes they go off. Poor kids! Only troubles wildfire and
        nettlerash. Calomel purge I got her for that. After getting better
        asleep with Molly. Very same teeth she has. <span data-edition="ed1986" data-page="310"> </span>What do they love? Another
        themselves? But the morning she <span data-edition="ed1961" data-page="379"> </span>chased her with the umbrella. Perhaps so
        as not to hurt. I felt her pulse. Ticking. Little hand it was: now big.
        Dearest Papli. All that the hand says when you touch. Loved to count
        my waistcoat buttons. Her first stays I remember. Made me laugh to see.
        Little paps to begin with. Left one is more sensitive, I think. Mine
        too. Nearer the heart? Padding themselves out if fat is in fashion. Her
        growing pains at night, calling, wakening me. Frightened she was when
        her nature came on her first. Poor child! <span data-edition="ed1932" data-page="343"> </span>Strange moment for the mother
        too. Brings back her girlhood. Gibraltar. Looking from Buena Vista.
        O'Hara's tower. The seabirds screaming. Old Barbary ape that gobbled all
        his family. Sundown, gunfire for the men to cross the lines. Looking
        out over the sea she told me. Evening like this, but clear, no clouds.
        I always thought I'd marry a lord or a gentleman coming with a
        private yacht. <i>Buenas noches, señorita. El hombre ama la muchacha
        hermosa</i>. Why me? Because you were so foreign from the others.
      </p>
      <p>
        Better not stick here all night like a limpet. This weather makes you
        dull. Must be getting on for nine by the light. Go home. <Annotation annotationId="050032leah" visited={visitedNotes.has("050032leah")} annotationSelect={() => {openNote("050032leah"); addToVisited("050032leah")}} activeAnnotationId={currentNoteId}>Too late for
        <i>Leah,</i></Annotation> <i>Lily of Killarney.</i> No. Might be still up. Call to the hospital
        to see. Hope she's over. Long day I've had. Martha, the bath, funeral,
        house of keys, <Annotation annotationId="080005venus" visited={visitedNotes.has("080005venus")} annotationSelect={() => {openNote("080005venus"); addToVisited("080005venus")}} activeAnnotationId={currentNoteId}>museum with those goddesses</Annotation>, Dedalus' song. Then that
        bawler in Barney Kiernan's. Got my own back there. Drunken ranters. What
        I said about his God made him wince. 
        <span data-edition="ed1922" data-page="362"> </span>
        Mistake to hit back. Or? No.
        Ought to go home and laugh at themselves. Always want to be swilling in
        company. Afraid to be alone like a child of two. Suppose he hit me. Look
        at it other way round. Not so bad then. Perhaps not to hurt he meant.
        Three cheers for Israel. Three cheers for the sister-in-law he hawked
        about, three fangs in her mouth. Same style of beauty. Particularly nice
        old party for a cup of tea. The sister of the wife of the wild man of
        Borneo has just come to town. Imagine that in the early morning at close
        range. Everyone to his taste as Morris said when he kissed the cow. But
        Dignam's put the boots on it. Houses of mourning so depressing because
        you never know. Anyhow she wants the money. <Annotation annotationId="130007scottishwidows" visited={visitedNotes.has("130007scottishwidows")} annotationSelect={() => {openNote("130007scottishwidows"); addToVisited("130007scottishwidows")}} activeAnnotationId={currentNoteId}>Must call to those Scottish
        Widows as I promised. Strange name.</Annotation> Takes it for granted we're going to
        pop off first. That widow on Monday was it outside Cramer's that
        looked at me. Buried the poor husband but progressing favourably on
        the premium. Her widow's mite. Well? What do you expect her to do? Must
        wheedle her <span data-edition="ed1961" data-page="380"> </span>way along. Widower I hate to see. Looks so forlorn. Poor man
        O'Connor wife and five children poisoned by mussels here. <Annotation annotationId="030039sewage" visited={visitedNotes.has("030039sewage")} annotationSelect={() => {openNote("030039sewage"); addToVisited("030039sewage")}} activeAnnotationId={currentNoteId}>The sewage.</Annotation>
        Hopeless. Some good matronly woman in a porkpie hat to mother him. Take
        him in tow, platter face and a large apron. Ladies' grey flannelette
        bloomers, three shillings a pair, astonishing bargain. Plain and loved,
        <span data-edition="ed1939" data-page="274"> </span>
        loved for ever, they say. Ugly: no woman thinks she is. Love, lie and be
        handsome for tomorrow we die. See him sometimes walking about trying to
        find out who played the trick. <Annotation annotationId="080010upup" visited={visitedNotes.has("080010upup")} annotationSelect={() => {openNote("080010upup"); addToVisited("080010upup")}} activeAnnotationId={currentNoteId}>U. p: up.</Annotation> Fate that is. He, not me. Also
        a shop often noticed. Curse seems to dog it. Dreamt last night? Wait.
        Something confused. She had red slippers <span data-edition="ed1986" data-page="311"> </span>on. Turkish. Wore the breeches.
        Suppose she does. Would I like her in pyjamas? Damned hard to <span data-edition="ed1932" data-page="344"> </span>answer.
        <Annotation annotationId="070019nannetti" visited={visitedNotes.has("070019nannetti")} annotationSelect={() => {openNote("070019nannetti"); addToVisited("070019nannetti")}} activeAnnotationId={currentNoteId}>Nannetti</Annotation>'s gone. <Annotation annotationId="010036mailboat" visited={visitedNotes.has("010036mailboat")} annotationSelect={() => {openNote("010036mailboat"); addToVisited("010036mailboat")}} activeAnnotationId={currentNoteId}>Mailboat. Near Holyhead by now.</Annotation> Must nail that ad
        of Keyes's. Work Hynes and Crawford. Petticoats for Molly. She has
        something to put in them. What's that? Might be money.
      </p>
      <p>
        Mr Bloom stooped and turned over a piece of paper on the strand. He
        brought it near his eyes and peered. Letter? No. Can't read. Better go.
        Better. I'm tired to move. Page of an old copybook. <Annotation annotationId="030038pebbles" visited={visitedNotes.has("030038pebbles")} annotationSelect={() => {openNote("030038pebbles"); addToVisited("030038pebbles")}} activeAnnotationId={currentNoteId}>All those holes and
        pebbles. Who could count them?</Annotation> Never know what you find. Bottle with
        story of a treasure in it, thrown from a wreck. Parcels post. Children
        always want to throw things in the sea. Trust? Bread cast on the waters.
        What's this? Bit of stick.
      </p>
      <p>
        O! Exhausted that female has me. Not so young now. Will she come here
        tomorrow? Wait for her somewhere for ever. Must come back. Murderers do.
        Will I?
      </p>
      <span data-edition="ed1922" data-page="363"> </span>
      <p>
        Mr Bloom with his stick gently vexed the thick sand at his foot. Write a
        message for her. Might remain. What?
      </p>
      <p>
        I.
      </p>
      <p>
        Some flatfoot tramp on it in the morning. Useless. Washed away. Tide
        comes here. Saw a pool near her foot. Bend, see my face there, dark
        mirror, breathe on it, stirs. All these rocks with lines and scars and
        letters. O, those transparent! Besides they don't know. What is the
        meaning of that other world. I called you naughty boy because I do not
        like.
      </p>
      <p>
        AM. A.
      </p>
      <p>
        No room. Let it go.
      </p>
      <p>
        Mr Bloom effaced the letters with his slow boot. Hopeless thing sand.
        Nothing grows in it. All fades. No fear of big <span data-edition="ed1961" data-page="381"> </span>vessels coming up here.
        Except Guinness's barges. Round the Kish in eighty days. Done half by
        design.
      </p>
      <p>
        He flung his wooden pen away. The stick fell in silted sand, stuck. Now
        if you were trying to do that for a week on end you couldn't. Chance.
        We'll never meet again. But it was lovely. Goodbye, dear. Thanks. Made
        me feel so young.
      </p>
      <p>
        Short snooze now if I had. Must be near nine. Liverpool boat long gone.
        Not even the smoke. And she can do the other. Did too. And Belfast. I
        won't go. Race there, race back to Ennis. Let him. Just close my eyes
        a moment. Won't sleep, though. Half dream. It never comes the same. Bat
        again. No harm in him. Just a few.
      </p>
      <p>
        O sweety all your little girlwhite up I saw dirty bracegirdle made me do
        love sticky we two naughty Grace darling she him half past the bed <Annotation annotationId="030087pastlife" visited={visitedNotes.has("030087pastlife")} annotationSelect={() => {openNote("030087pastlife"); addToVisited("030087pastlife")}} activeAnnotationId={currentNoteId}>met
        him pike hoses</Annotation> frillies for Raoul to perfume your wife black hair heave
        under embon <i>señorita</i> young eyes Mulvey plump years dreams <span data-edition="ed1932" data-page="345"> </span>return 
        tail end <Annotation annotationId="040061agendath" visited={visitedNotes.has("040061agendath")} annotationSelect={() => {openNote("040061agendath"); addToVisited("040061agendath")}} activeAnnotationId={currentNoteId}>Agendath</Annotation> swoony lovey showed me her next year in drawers return next 
        in her next her next.
      </p>
      <span data-edition="ed1986" data-page="312"> </span>
      <p>
        A bat flew. Here. There. Here. Far in the grey a bell chimed. Mr Bloom
        with open mouth, his left boot sanded sideways, leaned, breathed. Just
        for a few
      </p>
      <p><Annotation annotationId="130005cuckoo" visited={visitedNotes.has("130005cuckoo")} annotationSelect={() => {openNote("130005cuckoo"); addToVisited("130005cuckoo")}} activeAnnotationId={currentNoteId}>
        <i>Cuckoo.<br/>
        Cuckoo.<br/>
        Cuckoo.</i></Annotation>
      </p>
      <span data-edition="ed1939" data-page="275"> </span>
      <p>
        The clock on the mantelpiece in the priest's house cooed where Canon
        O'Hanlon and Father Conroy and the reverend John Hughes S. J. were
        taking 
        <span data-edition="ed1922" data-page="364"> </span>
        tea and sodabread and butter and fried mutton chops with catsup
        and talking about
      </p>
      <p><i>Cuckoo.<br/>
        Cuckoo.<br/>
        Cuckoo.</i>
      </p>
      <p>
        Because it was a little canarybird bird that came out of its little house
        to tell the time that Gerty MacDowell noticed the time she was there
        because she was as quick as anything about a thing like that, was Gerty
        MacDowell, and she noticed at once that that foreign gentleman that was
        sitting on the rocks looking was
      </p>
      <p> <i>Cuckoo. <br/>
        Cuckoo. <br/>
        Cuckoo.</i>
      </p>
      <br/><br/><br/>
      <span data-edition="ed1922" data-page="365"> </span>
      <span data-edition="ed1939" data-page="276"> </span>
      <span data-edition="ed1961" data-page="382"> </span>
      <span data-edition="ed1986" data-page="313"> </span>		  	
    </div>
  );
}

export default Nausicaa;